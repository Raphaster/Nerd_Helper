'use client'

import ContentTable from "./components/ContentTable"
import ItemCard from "./components/ItemCard"
import React, { useState, useEffect } from 'react';
import { fetchMultiple } from './api';
import { ComicType } from './types'

export default function Home() {

  const comicList = ['9788583683728', '9788573517538', '9788542625042', '9788573515770', '9788583680659', '9788573518184', '9788583680253', '9788583681151', '9788583680635']
  const [data, setData] = useState<ComicType[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const fetchdata = await fetchMultiple(comicList);
      setData(fetchdata);
      console.log(fetchdata)
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
          Main Screen
        </p>
      </div>


      <div className="h-screen place-items-center">
        <ContentTable link={data}/>
      </div>
    </main>
  );
}
