---
import { moviesGroupByProvider } from '../../../utils/movies-utils';
import { STATIC_API_URL, STREAM_POVIDERS } from '../../config/constants';
import LeftArrow from '../icons/LeftArrow.astro';
import RigthArrow from '../icons/RigthArrow.astro';
import MovieItem from './MovieItem.astro';

export interface Props {
	movies: any
}

const { movies } = Astro.props
const data = moviesGroupByProvider(movies)
const moviesByProvider = Object.entries(data)
---

<div class="">
  { moviesByProvider.map((item: any) => {
    const [provider, movies] = item
    const streamProvider = STREAM_POVIDERS.find((item: any) => item.key === provider.toLowerCase().replaceAll(' ', ''))
    
    return (
      <div class="mb-6">
        <div class="flex flex-row justify-between items-center">
          <div class="py-8 flex flex-row items-center space-x-3 text-xl">
            <img src={`/providers/${streamProvider?.icon}`} width="28" height="28" class="rounded-md" alt={streamProvider?.name} />
            <span>{provider}</span>
          </div>

          <div class="flex items-center space-x-4">
            <div onclick={`document.getElementById('${streamProvider?.key}').scrollLeft -= 600;`} class="text-3xl hover:text-orange-500 cursor-pointer">
              <LeftArrow />
            </div>
            <div onclick={`document.getElementById('${streamProvider?.key}').scrollLeft += 600;`} class="text-3xl hover:text-orange-500 cursor-pointer">
              <RigthArrow />
            </div>
          </div>
        </div>

        <div id={streamProvider?.key} class="space-x-2 lg:space-x-4 overflow-x-auto whitespace-nowrap w-full scroll-smooth flex flex-row">
          { movies.map((movie: any) => <MovieItem movie={movie} /> ).slice(0, 16) }
          
          { movies.length > 16 && 
            <a href={`/provider/${streamProvider?.key}`}>
              <div class="flex flex-col items-center justify-center bg-black rounded-md w-[120px] md:w-[170px] md:h-[241px] group">
                <span class="text-xl font-bold">+{movies.length - 16}</span>
                <span class="text-sm">Ver más</span>
              </div> 
            </a> }
        </div>
      </div>
    )
  })}
</div>