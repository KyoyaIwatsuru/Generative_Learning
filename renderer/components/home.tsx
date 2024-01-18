'use client'

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation'
import { links } from '@/lib/main_data'
import { HomeButton } from '@/components/button'

export default function Header () {
  let link = usePathname()
  let href = '';
  if (link.slice(2, 3) === '/') {
    href = link.slice(2, -2)
  } else {
    href = link.slice(3, -2)
  }

  let startTime;
  const [time, timeChange] = useState('00:00:00');

  const countUp = () => {
    const d = new Date(Date.now() - startTime);
    const h = String(d.getHours() - 9).padStart(2,'0');
    const m = String(d.getMinutes()).padStart(2,'0');
    const s = String(d.getSeconds()).padStart(2,'0');

    timeChange(`${h}:${m}:${s}`);

    const timeoutId = setTimeout(() => {
      countUp();
    }, 1000);
  };

  useEffect(() => {
    startTime = Date.now();
    countUp();
  }, []);

  return (
    <header className="h-header flex flex-col">
      <nav className="my-auto mx-[2%] flex">
        <HomeButton />
        {href === links[1].href
          ? (
            <></>
          )
          : (
            <div className='my-auto ml-auto mr-[5%] flex text-lg items-center gap-1'>
              <svg className="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinejoin="round" strokeWidth="2" d="M10 6v4l3.276 3.276M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
              </svg>
              {time}
            </div>
          )
        }
      </nav>
      <hr className="border-gray-200" />
    </header>
  )
}
