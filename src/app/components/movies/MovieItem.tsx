import Image from 'next/image'
import { STATIC_API_URL, STREAM_POVIDERS } from "@/config/constants"
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
  console.log(movie)

  function getProvider(provider: string) {
    const res = STREAM_POVIDERS.find((item) => item.name === provider)
    console.log('provider', res)
    return res?.icon
  }

  return (
    <a href={`/${movie.slug}`}>
      <div id='movie-item' className="w-28 inline-block md:w-[190px] group">
        <div className="relative hover:scale-105 transition-all duration-300">
          <div>
            <Image
              src={`/providers/${getProvider(movie.provider)}`}
              alt={movie.provider}
              width="24"
              height="24"
              className="rounded-md
              hover:scale-125
              transition ease-in-out duration-300 absolute top-2 right-2 z-10  p-1 glass"
            />
          </div>
          <picture className="">
            <source srcSet={`${STATIC_API_URL}/posters/${movie.image}`} media="(min-width: 768px)" />
          </picture>
          <picture>
            <source srcSet={`${STATIC_API_URL}/posters/${movie.image}`} media="(max-width: 768px)" />
          </picture>

          <MoviePosterImage movie={movie} />

        </div>

        <div id='footer-movie' className='text-sm font-medium pr-3 text-wrap py-2'>
          {movie.title}
        </div>
      </div>
    </a>
  )
}