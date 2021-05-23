import Avatar from './avatar'
import Date from './date'
import MovieImage from './movie-image'
import Link from 'next/link'

export default function MoviePreview({
  title,
  image,
  slug,
  synopsis,
}) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-2 md:col-gap-1 lg:col-gap-1">
      <div className="mb-1">
        <MovieImage title={title} url={image.url} slug={slug} />
      </div>
      <h3 className="text-1xl mb-3 leading-snug">
        <Link as={`/films/${slug}`} href="/films/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <p className="mb-3">
        <a className="hover:underline">{synopsis}</a> 
      </p>
    </div>
  )
}
