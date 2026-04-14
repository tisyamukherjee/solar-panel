"use client";

import { useEffect, useRef } from "react";
import * as Plot from "@observablehq/plot";

export default function AdminCharts({ accessData, completionData }) {
  return (
    <div className="space-y-10">
      <ChartCard
        title="Lesson Visits"
        description="Total number of times each lesson was accessed (includes unauthenticated visitors)"
      >
        <AccessChart data={accessData} />
      </ChartCard>

      <ChartCard
        title="Average Completion Rate per Lesson"
        description="Percentage of users who marked each lesson as complete out of those who visited"
      >
        <CompletionChart data={completionData} />
      </ChartCard>
    </div>
  );
}

function ChartCard({ title, description, children }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
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

    const chart = Plot.plot({
      marginLeft: 140,
      marginBottom: 50,
      width: ref.current.clientWidth || 700,
      height: 280,
      x: {
        label: "Number of visits →",
        grid: true,
      },
      y: {
        label: null,
        tickFormat: (d) => formatLesson(d),
      },
      marks: [
        Plot.barX(data, {
          x: "visits",
          y: "lesson",
          fill: "#00274C",
          sort: { y: "-x" },
          rx: 4,
        }),
        Plot.text(data, {
          x: "visits",
          y: "lesson",
          text: (d) => d.visits,
          dx: 8,
          fill: "#374151",
          fontSize: 13,
          textAnchor: "start",
        }),
        Plot.ruleX([0]),
      ],
    });

    ref.current.append(chart);
    return () => chart.remove();
  }, [data]);

  if (!data.length) {
    return <EmptyState message="No lesson visit data yet." />;
  }

  return <div ref={ref} className="w-full overflow-x-auto" />;
}

function CompletionChart({ data }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current || !data.length) return;

    const chart = Plot.plot({
      marginLeft: 140,
      marginBottom: 50,
      width: ref.current.clientWidth || 700,
      height: 280,
      x: {
        label: "Completion rate (%) →",
        domain: [0, 100],
        grid: true,
      },
      y: {
        label: null,
        tickFormat: (d) => formatLesson(d),
      },
      marks: [
        Plot.barX(data, {
          x: "completionRate",
          y: "lesson",
          fill: (d) => (d.completionRate >= 50 ? "#1a7a4a" : "#FFCB05"),
          sort: { y: "-x" },
          rx: 4,
        }),
        Plot.text(data, {
          x: "completionRate",
          y: "lesson",
          text: (d) => `${d.completionRate}%  (${d.completed}/${d.total})`,
          dx: 8,
          fill: "#374151",
          fontSize: 12,
          textAnchor: "start",
        }),
        Plot.ruleX([0]),
      ],
    });

    ref.current.append(chart);
    return () => chart.remove();
  }, [data]);

  if (!data.length) {
    return <EmptyState message="No lesson completion data yet." />;
  }

  return <div ref={ref} className="w-full overflow-x-auto" />;
}

function EmptyState({ message }) {
  return (
    <div className="flex items-center justify-center h-40 text-gray-400 text-sm">
      {message}
    </div>
  );
}

// "environmental_1" → "Env. 1", etc.
function formatLesson(id) {
  if (!id) return id;
  return id
    .replace("environmental_", "Environmental ")
    .replace(/_/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}
