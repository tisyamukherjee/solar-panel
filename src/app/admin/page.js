import { auth } from "@/lib/auth";
import prisma from "@/lib/prismaClient";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import AdminCharts from "./AdminCharts";

export const metadata = { title: "Admin Panel | Maize Rays" };

export default async function AdminPage() {
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session?.user?.id) redirect("/");

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    select: { role: true },
  });

  if (user?.role !== "ADMIN") redirect("/");

  // Lesson access counts (includes unauthenticated visitors)
  const rawAccess = await prisma.resourceAccess.groupBy({
    by: ["resourceId"],
    where: { resourceType: "lesson" },
    _count: { resourceId: true },
    orderBy: { resourceId: "asc" },
  });

  const accessData = rawAccess.map((r) => ({
    lesson: r.resourceId,
    visits: r._count.resourceId,
  }));

  // Completion rates per lesson
  const completionGroups = await prisma.lessonProgress.groupBy({
    by: ["lessonId", "completed"],
    _count: { id: true },
    orderBy: { lessonId: "asc" },
  });

  const lessonMap = {};
  for (const row of completionGroups) {
    if (!lessonMap[row.lessonId]) lessonMap[row.lessonId] = { completed: 0, total: 0 };
    lessonMap[row.lessonId].total += row._count.id;
    if (row.completed) lessonMap[row.lessonId].completed += row._count.id;
  }

  const completionData = Object.entries(lessonMap).map(([lesson, { completed, total }]) => ({
    lesson,
    completionRate: total > 0 ? Math.round((completed / total) * 100) : 0,
    completed,
    total,
  }));

  // Summary stats
  const totalUsers = await prisma.user.count();
  const totalAccesses = await prisma.resourceAccess.count({ where: { resourceType: "lesson" } });
  const totalCompletions = await prisma.lessonProgress.count({ where: { completed: true } });

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold text-[#00274C] font-montserrat mb-2">Admin Panel</h1>
        <p className="text-gray-500 mb-10">Educational module engagement overview</p>

        {/* Summary cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12">
          <StatCard label="Total Users" value={totalUsers} />
          <StatCard label="Lesson Visits" value={totalAccesses} />
          <StatCard label="Lesson Completions" value={totalCompletions} />
        </div>

        <AdminCharts accessData={accessData} completionData={completionData} />
      </div>
    </main>
  );
}

function StatCard({ label, value }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
      <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">{label}</p>
      <p className="text-4xl font-bold text-[#00274C] mt-1">{value.toLocaleString()}</p>
    </div>
  );
}
