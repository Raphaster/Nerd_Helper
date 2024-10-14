import { ComicType } from './types'

export const fetchSingle = async (isbn:string) => {
  const response = await fetch(`https://brasilapi.com.br/api/isbn/v1/${isbn}?providers=mercado-editorial`)
  const data = await response.json()
  return data
};

export const fetchMultiple = async (isbnList:string[]): Promise<ComicType[]> => {
  const fetchPromises = isbnList.map(async (isbn) => {
    const response = await fetch(`https://brasilapi.com.br/api/isbn/v1/${isbn}?providers=mercado-editorial`)
    const data = await response.json()
    return data
  })
  const comicList = await Promise.all(fetchPromises)
  return comicList
};