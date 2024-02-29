export const dynamic = 'force-dynamic'

import { StreamProviders } from "./components/StreamProviders"
import { MoviesList } from "./components/movies/MoviesList"

async function getMovies() {
  const res = await fetch('http://localhost:8787/api/movies')
  const movies = await res.json()
  return movies
}

export default async function Home() {
  const data = await getMovies()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <main className="flex col justify-center py-8">
        <div className="container flex flex-col">
          <div className="text-center space-y-8 w-full md:w-3/4 self-center mb-12 px-3 md:px-0">
            <h1 className="text-xl md:text-4xl text-balance">Descubre los últimos lanzamientos de tus plataformas de streaming favoritas en <span className="border-b-4 border-b-orange-500">un solo lugar</span></h1>
            {/* <h2 className="text-sm md:text-lg hidden md:block">¿Estás cansado de buscar en varias plataformas de streaming para ver qué hay de nuevo? Con nuestra aplicación, puedes ver los últimos lanzamientos de Netflix, Amazon Prime Video, Disney+ y más.</h2> */}
          </div>
          
          <div className="self-center px-3">
            <StreamProviders />
          </div>

          <div className="py-4 px-3 md:px-0">
            <MoviesList movies={data?.movies} />
          </div>
        </div>
      </main>
    </main>
  )
}
