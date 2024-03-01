export const dynamic = 'force-dynamic'

import Image from "next/image"

import { STATIC_API_URL } from "@/config/constants"
import { MovieItem } from "../components/movies/MovieItem"
import { Movie } from "@/entities/Movie"

async function getMovie(slug: string) {
  const res = await fetch(`http://localhost:8787/api/movies/${slug}`)
  const movies = await res.json()
  return movies
}

export default async function Movie({ params }: { params: { slug: string } }) {
  const data = await getMovie(params.slug)
  const { title, year, description, runtime, genres, provider, providerStreamURL, image, poster, similarMovies } = data?.movie
  
  return (
    <main className="flex flex-row justify-center flex-1 ">
		<section className=" container flex flex-col">

      <div id='header-movie' className="relative">
        <div className="h-[320px] relative">
          <Image
            src={`${STATIC_API_URL}movies/${image}`}
            width="170"
            height="241"
            className="w-full h-full object-cover rounded-t-lg"
            alt={title}
            loading="lazy" />
        </div>
        
        <div className="w-[170px] md:w-[280px] mx-[25%] md:mx-8 border-4 border-black absolute top-32 rounded-lg glass">
          <Image
            src={`${STATIC_API_URL}posters/${poster}`}
            width="170"
            height="241"
            className="w-full h-full object-cover rounded-md"
            alt={title}
            loading="lazy" />
        </div>

        <div className="m-0 md:ml-[380px] px-8 py-6 space-y-8 md:pt-8 pt-16">
          <h1 className="text-4xl font-bold">{title} <span className="text-xl">{year}</span></h1>
          {/* <a href={providerStreamURL} target="_blank" className="bg-orange-600 hover:bg-orange-500 px-6 py-4 rounded-md flex-row items-center justify-center sm:hidden flex hover:scale-110 shadow-lg">
            <div className="text-xl pr-2"><Play /></div>
            <span>Ver en {provider}</span>
          </a> */}
          <div className="flex flex-row flex-wrap">
            
            <div className="text-xs md:text-sm px-4 py-2 rounded-full bg-gray-500 flex flex-row justify-between items-center mb-4 mr-3">
              <span className="">{runtime}</span>
            </div>
            {genres?.map((item: any, index: number) => {
              if (item) {
                return (
                  <div key={index} className="flex">
                    <span className="md:text-sm text-xs px-4 mr-3 py-2 rounded-full bg-gray-500  mb-4">{item}</span>
                  </div>
                )
              }
            })}
            
          </div>
          <section>
            <div className="text-lg py-4 text-gray-200">Sinopsis</div>
            <p className="text-gray-300 leading-relaxed">{description}</p>
          </section>

          <div className="hidden md:block">
            <div className="text-lg py-4 text-gray-200">Otros títulos de {provider}</div>
            <div className="h-[200px] w-full grid grid-cols-2 md:grid-cols-5">
              { similarMovies?.map((movie: Movie) => <MovieItem key={movie.id} movie={movie} /> ) }
            </div>
          </div>
          
        </div>
      </div>

    </section>
  </main>
  )
}