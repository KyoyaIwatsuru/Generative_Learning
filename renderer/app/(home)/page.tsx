'use client'

import Link from 'next/link'
import { works } from '@/lib/data';

export default function Page () {
  const connect = fetch('http://localhost:8765/tobii_pro/connect')
    .then((response) => response.json())
    .then((data) => {
      if (data.response !== 'succeeded') {
        throw new Error('Not connected to logger station!');
      }
    })

  return (
    <main className="h-body">
      <div className="h-full w-1/2 grid grid-rows-5 grid-flow-col px-[10%] py-[1%] items-center">
        {works.map((work) => (
          <p key={work.work_id}>
            <Link href={`/${work.work_id}/text/${work.work[0].id}`}>
              <button type="button" onClick={() => fetch('http://localhost:8765/recording/start')} className="inline-flex items-center justify-center p-5 text-lg font-medium text-gray-600 rounded-lg bg-gray-200 hover:text-gray-900 hover:bg-gray-300">
                <span className="w-full">{work.title}</span>
                <svg className="w-5 h-5 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
              </button>
            </Link>
          </p>
        ))}
      </div>
    </main>
  )
}
