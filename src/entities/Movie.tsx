export interface Movie {
  id?: string
  provider: string
  title: string
  url?: string
  slug: string
  description?: string
  image?: string
  poster?: string
  runtime?: string
  genres?: string[]
  year?: string
  directors?: string[]
  classification?: string
  date?: string
}
