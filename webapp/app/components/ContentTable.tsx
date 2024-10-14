import ItemCard from "./ItemCard"
import { ComicType } from '../types'
import React, { useEffect, useState } from 'react'

interface Props {
  link: ComicType[]
}

const ContentTable: React.FC<Props> = ({link}) => {

  const [data, setData] = useState<ComicType[]>([]);
  useEffect(() => {
    console.log(link)
    setData(link);
  }, [link])

  const value = data.length ? (

    // <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    //   <div className="border p-4">
    //     <ItemCard {...{ imgSrc: data[0].cover_url }} />
    //   </div>
    // </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {link.map((comic, index) => (
        <div key={index} className="border p-4">
          <ItemCard {...{ imgSrc: comic.cover_url }} />
        </div>
      ))}
    </div>
  ) : (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div className="border p-4">
        <a>Nothing</a>
      </div>
    </div>
  )

  return value

}

export default ContentTable