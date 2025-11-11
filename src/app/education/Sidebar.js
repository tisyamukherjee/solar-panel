"use client";

import { useState } from 'react';
import Link from 'next/link';

const sidebarData = [
  {
    title: 'Environmental Sustainability',
    submodules: [
      { name: '1.1 - The Rise of Solar Panel', href: '/education/environmental/environmental_1' },
      { name: '1.2 - What is Sustainability?', href: '/education/environmental/environmental_2' },
      { name: '1.3 - What Makes Solar Energy Sustainable?', href: '/education/environmental/environmental_3' },
      { name: '1.4 - Greenhouse Gas Emissions', href: '/education/environmental/environmental_4' },
      { name: '1.5 - The Supply Chain', href: '/lesson1/basics' },
      { name: '1.6 - Supply Chain Continued', href: '/lesson1/basics' },
      { name: '1.7 - Disposal, Recycling, and Reuse of Solar Panels', href: '/lesson1/basics' },
      { name: '1.8 - Climate Resilience', href: '/lesson1/basics' },
    ],
  },
  {
    title: 'Science',
    submodules: [
      { name: 'Concepts', href: '/lesson2/concepts' },
      { name: 'Examples', href: '/lesson2/examples' },
    ],
  },
  {
    title: 'Economics',
    submodules: [
      { name: 'Advanced', href: '/lesson3/advanced' },
      { name: 'Quiz', href: '/lesson3/quiz' },
    ],
  },
];

export default function Sidebar() {
  const [openLesson, setOpenLesson] = useState(null);

  const toggleLesson = (index) => {
    setOpenLesson(openLesson === index ? null : index);
  };

  return (
    <div className="w-60 text-black p-6 top-0 left-0 overflow-y-auto font-montserrat">
      {/* <h1 className="text-2xl font-bold mb-8">Education Modules</h1> */}

      {/* prequiz */}
      <div>
        <Link href="/education/prequiz">
          <button className='text-left font-semibold py-1 hover:text-yellow-400 flex justify-between items-center cursor-pointer'>
            Pre-Quiz
          </button>
        </Link>
      </div>
      {sidebarData.map((lesson, index) => (
        <div className="py-5" key={index}>
          <button
            onClick={() => toggleLesson(index)}
            className="w-full text-left font-semibold hover:text-yellow-400 flex justify-between items-center cursor-pointer"
          >
            {lesson.title}
            <span>{openLesson === index ? '▼' : '▶'}</span>
          </button>

          {openLesson === index && (
            <div className="ml-4 mt-2 space-y-1">
              {lesson.submodules.map((sub, subIndex) => (
                <Link key={subIndex} href={sub.href} className="block py-1 text-sm hover:text-yellow-300">
                  {sub.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
      {/* post quiz */}
      <div>
        <Link href="/education/postquiz">
          <button className='text-left font-semibold py-1 hover:text-yellow-400 flex justify-between items-center cursor-pointer'>
            Post-Quiz
          </button>
        </Link>
      </div>
    </div>
  );
}
