import MoviePreview from './movie-preview'

export default function Movies({ movies }) {
    return (
      <section>
        {/* <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
          Movies
        </h2> */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:col-gap-16 lg:col-gap-32 row-gap-20 md:row-gap-32 mb-32">
          {movies.map((movie) => (
            <MoviePreview
              key={movie.slug}
              title={movie.title_mongolian}
              image={movie.image}
              slug={movie.slug}
            />
          ))}
        </div>
      </section>
    )
  }
  