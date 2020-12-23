import Link from 'next/link'

export default function MovieImage({ title, url, slug }) {
  const imageUrl = `${
    url.startsWith('/') ? process.env.NEXT_PUBLIC_STRAPI_API_URL: ''
  }${url}`
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/movies/${slug}`} href="/movies/[slug]">
          <a aria-label={title}>
            <img src={imageUrl} alt={title} />
          </a>
        </Link>
      ) : (
        <img src={imageUrl} alt={title} />
      )}
    </div>
  )
}
