"use client";

import Sidebar from './Sidebar';

export default function EducationLayout({ children }) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 ml-10 p-6 overflow-y-auto">{children}</div>
    </div>
  );
}
