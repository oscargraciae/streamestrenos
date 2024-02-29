'use client'
import { STATIC_API_URL } from "@/config/constants"
import { Movie } from "@/entities/Movie"
import Image from "next/image"

export const MoviePosterImage = ({ movie }: { movie: Movie }) => (
  <Image
    src={`${STATIC_API_URL}posters/${movie.image}`}
    width="170"
    height="241"
    className="w-full h-full object-cover rounded-md"
    alt={movie.title}
    loading="lazy"
    onError={(e) => {
      const parentNode = e?.currentTarget?.parentNode?.parentNode?.parentNode as HTMLElement
      parentNode?.remove()
    }}
    decoding="async" />
)