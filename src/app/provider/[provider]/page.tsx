import { MoviesList } from "@/app/components/movies/MoviesList"
import { STREAM_POVIDERS } from "@/config/constants"

export const dynamic = 'force-dynamic'

async function getMovies(provider: string) {
  const res = await fetch(`http://localhost:8787/api/movies/provider/${provider}`)
  const movies = await res.json()
  return movies
}

export default async function MoviesProvider({ params }: { params: { provider: string } }) {
  const data = await getMovies(params.provider)

  const titleProvider = STREAM_POVIDERS.find((item) => item.key === params.provider)?.name

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <main className="flex col justify-center py-8">
        <div className="container flex flex-col">
          <div className="text-balance">
            <h1 className="text-3xl pb-2">Los últimos estrenos en {titleProvider}</h1>
            <p>¡No te pierdas ningún lanzamiento en {titleProvider}! Con nuestra aplicación, tendrás acceso a una lista actualizada de las películas y programas recién agregados en la plataforma.</p>
          </div>

          <div className="py-4 px-3 md:px-0">
            <MoviesList movies={data?.movies} />
          </div>

        </div>
      </main>
    </main>
  )
}
