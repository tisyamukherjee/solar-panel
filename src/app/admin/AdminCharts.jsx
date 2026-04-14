"use client";

import { useEffect, useRef } from "react";
import * as Plot from "@observablehq/plot";

const BAR_WIDTH = 60; // px per bar, drives the scrollable canvas width

export default function AdminCharts({ accessData, completionData }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <ChartCard
        title="Lesson Visits"
        description="Total times each lesson was accessed, including unauthenticated visitors"
      >
        <AccessChart data={accessData} />
      </ChartCard>

      <ChartCard
        title="Completion Rate per Lesson"
        description="Percentage of users who marked each lesson complete out of those who visited"
      >
        <CompletionChart data={completionData} />
      </ChartCard>
    </div>
  );
}

function ChartCard({ title, description, children }) {
  return (
    <div className="rounded-xl">
      <h2 className="text-xl font-semibold text-[#00274C] mb-1">{title}</h2>
      <p className="text-sm text-gray-500 mb-6">{description}</p>
      {children}
    </div>
  );
}

function AccessChart({ data }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current || !data.length) return;

    const chartWidth = Math.max(data.length * BAR_WIDTH + 80, 400);

    const chart = Plot.plot({
      width: chartWidth,
      height: 300,
      marginBottom: 60,
      marginLeft: 50,
      x: {
        label: null,
        tickFormat: (d) => formatLesson(d),
        tickRotate: -30,
      },
      y: {
        label: "Visits",
        grid: true,
      },
      marks: [
        Plot.barY(data, {
          x: "lesson",
          y: "visits",
          fill: "#00274C",
          rx: 4,
          sort: { x: "x" },
        }),
        Plot.text(data, {
          x: "lesson",
          y: "visits",
          text: (d) => d.visits,
          dy: -14,
          fill: "#374151",
          fontSize: 15,
        }),
        Plot.ruleY([0]),
      ],
    });

    ref.current.append(chart);
    return () => chart.remove();
  }, [data]);

  if (!data.length) return <EmptyState message="No lesson visit data yet." />;

  return <div className="overflow-x-auto"><div ref={ref} /></div>;
}

function CompletionChart({ data }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current || !data.length) return;

    const chartWidth = Math.max(data.length * BAR_WIDTH + 80, 400);

    const chart = Plot.plot({
      width: chartWidth,
      height: 300,
      marginBottom: 60,
      marginLeft: 50,
      x: {
        label: null,
        tickFormat: (d) => formatLesson(d),
        tickRotate: -30,
      },
      y: {
        label: "Completion %",
        domain: [0, 100],
        grid: true,
      },
      marks: [
        Plot.barY(data, {
          x: "lesson",
          y: "completionRate",
          fill: (d) => (d.completionRate >= 50 ? "#1a7a4a" : "#FFCB05"),
          rx: 4,
          sort: { x: "x" },
        }),
        Plot.text(data, {
          x: "lesson",
          y: "completionRate",
          text: (d) => `${d.completionRate}%`,
          dy: -14,
          fill: "#374151",
          fontSize: 15,
        }),
        Plot.ruleY([0]),
      ],
    });

    ref.current.append(chart);
    return () => chart.remove();
  }, [data]);

  if (!data.length) return <EmptyState message="No lesson completion data yet." />;

  return <div className="overflow-x-auto"><div ref={ref} /></div>;
}

function EmptyState({ message }) {
  return (
    <div className="flex items-center justify-center h-40 text-gray-400 text-sm">
      {message}
    </div>
  );
}

function formatLesson(id) {
  if (!id) return id;
  return id
    .replace("environmental_", "Env. ")
    .replace(/_/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}
