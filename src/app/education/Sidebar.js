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
      { name: '1.5 - The Supply Chain', href: '/education/environmental/environmental_5' },
      { name: '1.6 - Supply Chain Continued', href: '/education/environmental/environmental_6' },
      { name: '1.7 - Disposal, Recycling, and Reuse of Solar Panels', href: '/education/environmental/environmental_7' },
      { name: '1.8 - Climate Resilience', href: '/education/environmental/environmental_8' },
    ],
  },
  {
    title: 'Science',
    submodules: [
      { name: '2.1 - Energy the Earth Receives from the Sun', href: '/education/science/science_1' },
      { name: '2.2 - Capturing Solar Energy', href: '/education/science/science_2' },
      { name: '2.3 - Efficiency Compared to other Fuels', href: '/education/science/science_3' },
      { name: '2.4 - Types of Solar Power Systems', href: '/education/science/science_4' },
      { name: '2.5 - Types of Solar Power Systems Continued', href: '/education/science/science_5' },
      { name: '2.6 - Cool Future Prospects of Solar', href: '/education/science/science_6' },
      { name: '2.7 - Myth Debunking', href: '/education/science/science_7' },
    ],
  },
  {
    title: 'Economics',
    submodules: [
      { name: '3.1 - The Rise of Solar Power', href: '/education/economics/economics_1' },
      { name: '3.2 - Falling Costs of Solar Generation', href: '/education/economics/economics_2' },
      { name: '3.3 - Falling Costs of Renewables', href: '/education/economics/economics_3' },
      { name: '3.4 - Rising Costs of Traditional Energy', href: '/education/economics/economics_4' },
      { name: '3.5 - Government Incentivisation', href: '/education/economics/economics_5' },
      { name: '3.6 - Solar Implementation', href: '/education/economics/economics_6' },
      { name: '3.7 - Current Barriers', href: '/education/economics/economics_7' },
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
