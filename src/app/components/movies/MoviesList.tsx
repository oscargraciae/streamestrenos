import Image from 'next/image'
import { STREAM_POVIDERS } from "@/config/constants"
import { moviesGroupByProvider } from '@/utils/movies-utils'
import { MovieItem } from './MovieItem'
import { Movie } from '@/entities/Movie'

export interface Props {
	movies: Movie[]
}

export const MoviesList = ({ movies }: Props) => {
  const data = moviesGroupByProvider(movies)
  const moviesByProvider = Object.entries(data)

  return (
    <div className="">
  { moviesByProvider.map((item: any) => {
    const [provider, movies] = item
    const streamProvider = STREAM_POVIDERS.find((item: any) => item.key === provider.toLowerCase().replaceAll(' ', ''))
    
    return (
      <div key={item.id} className="mb-6">
        <div className="flex flex-row justify-between items-center">
          <div className="py-8 flex flex-row items-center space-x-3 text-xl">
            <Image src={`/providers/${streamProvider?.icon}`} width="28" height="28" className="rounded-md" alt={streamProvider?.name ?? ''} />
            <span>{provider}</span>
          </div>
        </div>

        <div id={streamProvider?.key} className="space-x-2 lg:space-x-4 overflow-x-auto whitespace-nowrap w-full scroll-smooth flex flex-row">
          { movies.map((movie: any) => <MovieItem key={movie.id} movie={movie} /> ).slice(0, 16) }
          
          { movies.length > 16 && 
            <a href={`/provider/${streamProvider?.key}`}>
              <div className="flex flex-col items-center justify-center bg-black rounded-md w-[120px] md:w-[170px] md:h-[241px] group">
                <span className="text-xl font-bold">+{movies.length - 16}</span>
                <span className="text-sm">Ver más</span>
              </div> 
            </a> }
        </div>
      </div>
    )
  })}
</div>
  )
}