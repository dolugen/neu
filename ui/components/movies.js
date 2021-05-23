import MoviePreview from './movie-preview'

export default function Movies({ movies }) {
    return (
      <section>
        {/* <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
          Movies
        </h2> */}
        <div className="grid grid-cols-2 md:grid-cols-3 md:col-gap-1 lg:col-gap-2 row-gap-0 md:row-gap-2 mb-2">
          {movies.map((movie) => (
            <MoviePreview
              key={movie.slug}
              title={movie.title_mongolian}
              image={movie.image}
              slug={movie.slug}
              synopsis={movie.synopsis}
            />
          ))}
        </div>
      </section>
    )
  }
  