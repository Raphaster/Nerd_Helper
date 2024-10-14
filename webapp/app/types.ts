export type dimensionType = {
  width: number,
  height: number,
  unit: string
}

export type priceType = {
  currency: string,
  amount: number
}

export type ComicType = {
  authors?: string[],
  cover_url: string,
  dimensions?: dimensionType,
  format?: string,
  isbn?: string,
  location?: string,
  page_count?: number,
  provider?: string,
  publisher?: string,
  retail_price?: priceType,
  subjects?: string[],
  subtitle?: string,
  synopsis?: string,
  title?: string,
  year?: number,
};