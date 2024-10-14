'use client'

import CoverImage from "../components/CoverImage"
import React, { useState, useEffect } from 'react';
import { fetchSingle } from '../api';
import { ComicType } from '../types'
import Link from 'next/link'

export default function Home() {

  const [data, setData] = useState<ComicType>({cover_url: 'None'});

  useEffect(() => {
    const loadData = async () => {
      var data = await fetchSingle('9788583683728');
      setData(data);
    };
  
    loadData();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl grid grid-cols-5 items-center justify-between font-mono text-sm">
        <p className="left-0 top-0 flex justify-center col-span-1 border-b border-gray-300 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:from-inherit static w-auto  rounded-xl border p-4">
          Sair
        </p>
        <p className="left-0 top-0 flex justify-center col-span-4 border-b border-gray-300 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:from-inherit static w-auto  rounded-xl border p-4">
          {data?.title}
        </p>
      </div>


      <div className="h-screen grid grid-cols-2 place-items-center">
        <CoverImage {...data} />

        <div className="mb-32 text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:text-left border-b-[10px] border-l-[10px] border-r-[10px] border-t-[10px]">
          <Link
            href="/example"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            rel="noopener noreferrer"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              Docs{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              Página de exemplo e referência.
            </p>
          </Link>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              Learn{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

        </div>
      </div>
    </main>
  );
}
