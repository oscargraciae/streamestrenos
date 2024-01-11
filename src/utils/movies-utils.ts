import { Movie } from "@/entities/Movie"

interface MoviesGroupedByProvider {
  [provider: string]: Movie[];
}


export function moviesGroupByProvider(movies: Movie[]): MoviesGroupedByProvider {
  const _movies = movies?.reduce((acc: MoviesGroupedByProvider | undefined, movie: Movie) => {
    const { provider } = movie

    if (!provider) {
      return acc
    }
    
    if (!acc) {
      acc = {}
    }

    if (!acc[provider]) {
      acc[provider] = []
    }

    acc[provider].push(movie)
    
    return acc
  }, undefined)

  return _movies || {}
}