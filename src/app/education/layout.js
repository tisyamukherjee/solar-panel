"use client";

import Sidebar from './Sidebar';
import ProgressSync from '@/components/ProgressSync';
import { ProgressProvider } from '@/context/ProgressContext';

export default function EducationLayout({ children }) {
  return (
    <ProgressProvider>
      <div className="flex">
        <ProgressSync />
        <Sidebar />
        <div className="flex-1 ml-10 p-6">{children}</div>
      </div>
    </ProgressProvider>
  );
}
