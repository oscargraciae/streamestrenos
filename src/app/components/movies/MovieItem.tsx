import Image from 'next/image'
import { STATIC_API_URL } from "@/config/constants"
import { MoviePosterImage } from './MoviePosterImage'

interface Props {
  movie: any
}

function formatDate(date: any) {
  return new Date(date).toLocaleDateString("es-MX", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })
}

export const MovieItem = ({ movie }: Props) => {
  return (
    <a href={`/${movie.slug}`}>
      <div id='movie-item' className="w-[120px] inline-block md:w-[170px] md:h-[241px] group">
        <div className="relative">
          <span className="group-hover:block absolute right-2 top-2 text-xs hidden backdrop-blur-xs bg-orange-500 px-2 py-1 rounded-full">{(movie.date !== 'Hoy' && movie.date !== 'Ayer') ? formatDate(movie?.date) : movie.date}</span>
          <picture className="">
            <source srcSet={`${STATIC_API_URL}/posters/${movie.image}`} media="(min-width: 768px)" />
          </picture>
          <picture>
            <source srcSet={`${STATIC_API_URL}/posters/${movie.image}`} media="(max-width: 768px)" />
          </picture>

          <MoviePosterImage movie={movie} />

          <div className="absolute bottom-0 bg-black/30 w-full hidden hover:block group-hover:block backdrop-blur-sm">
            <div className="text-white whitespace-pre-wrap text-sm py-4 px-2">{movie.title}</div>
          MoviePosterImage</div>
        </div>
      </div>
    </a>
  )
}