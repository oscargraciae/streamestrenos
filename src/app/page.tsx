export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <main className="flex col justify-center py-8">
        <div className="text-white container flex flex-col">
          <div className="text-white text-center space-y-8 w-full md:w-2/3 self-center mb-12 px-3 md:px-0">
            <h1 className="text-xl md:text-4xl">Descubre los últimos lanzamientos de tus plataformas de streaming favoritas en <span className="border-b-4 border-b-orange-500">un solo lugar</span></h1>
            <h2 className="text-sm md:text-lg text-gray-400 hidden md:block">¿Estás cansado de buscar en varias plataformas de streaming para ver qué hay de nuevo? Con nuestra aplicación, puedes ver los últimos lanzamientos de Netflix, Amazon Prime Video, Disney+ y más.</h2>
          </div>
          
          <div className="self-center px-3">
            {/* <StreamProviders /> */}
          </div>

          <div className="py-4 px-3 md:px-0">
            {/* <MoviesList movies={movies} /> */}
          </div>
        </div>
      </main>
    </main>
  )
}
