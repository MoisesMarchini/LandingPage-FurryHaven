export interface CardModel {
  title: string,
  subtitle?: string,
  imgPath?: string,
  description?: string,
  linkUrl?: string,
}

export interface CardOptions {
  imgSize?: string,
  squared?: boolean,
  padding?: string,
  maxColumns?: number
}
