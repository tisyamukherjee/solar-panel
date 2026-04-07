"use server";

import { auth } from "@/lib/auth";
import prisma from "@/lib/prismaClient";
import { headers } from "next/headers";

async function getSession() {
  return auth.api.getSession({ headers: await headers() });
}

export async function logResourceAccess(resourceType: string, resourceId: string) {
  const session = await getSession();
  if (!session?.user?.id) return;

  await prisma.resourceAccess.create({
    data: {
      userId: session.user.id,
      resourceType,
      resourceId,
    },
  });
}

export async function markLessonComplete(lessonId: string) {
  const session = await getSession();
  if (!session?.user?.id) return;

  await prisma.lessonProgress.upsert({
    where: { userId_lessonId: { userId: session.user.id, lessonId } },
    create: {
      userId: session.user.id,
      lessonId,
      visited: true,
      completed: true,
      completedAt: new Date(),
    },
    update: {
      completed: true,
      completedAt: new Date(),
    },
  });
}

export async function getLessonStatus(lessonId: string): Promise<boolean> {
  const session = await getSession();
  if (!session?.user?.id) return false;

  const progress = await prisma.lessonProgress.findUnique({
    where: { userId_lessonId: { userId: session.user.id, lessonId } },
  });
  return progress?.completed ?? false;
}

export async function getUserProgress() {
  const session = await getSession();
  if (!session?.user?.id) return [];

  return prisma.lessonProgress.findMany({
    where: { userId: session.user.id },
  });
}

export async function syncLocalProgress(lessonIds: string[]) {
  const session = await getSession();
  if (!session?.user?.id || lessonIds.length === 0) return;

  await Promise.all(
    lessonIds.map((lessonId) =>
      prisma.lessonProgress.upsert({
        where: { userId_lessonId: { userId: session.user.id, lessonId } },
        create: {
          userId: session.user.id,
          lessonId,
          visited: true,
          completed: true,
          completedAt: new Date(),
        },
        update: {
          completed: true,
          completedAt: new Date(),
        },
      })
    )
  );
}
