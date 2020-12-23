import Avatar from './avatar'
import Date from './date'
import MovieImage from './movie-image'
import Link from 'next/link'

export default function MoviePreview({
  title,
  image,
  slug,
}) {
  return (
    <div>
      <div className="mb-5">
        <MovieImage title={title} url={image.url} slug={slug} />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
    </div>
  )
}
