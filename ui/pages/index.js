import Container from '@/components/container'
import MoreStories from '@/components/more-stories'
import Movies from '@/components/movies'
import HeroPost from '@/components/hero-post'
import Intro from '@/components/intro'
import Layout from '@/components/layout'
import { getAllPostsForHome, getAllMoviesForHome } from '@/lib/api'
import Head from 'next/head'
import { CMS_NAME } from '@/lib/constants'


    
export default function Index({ allPosts, allMovies, preview }) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  const heroMovie = allMovies.slice(1)
  return (
    <>
      <Layout>
        <Head>
          <title>artfilm.mn</title>
        </Head>
        <Container>
          <Intro/>
          {/* {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )} */}
          {/* {morePosts.length > 0 && <MoreStories posts={morePosts} />} */}
          {heroMovie.length > 0 && <Movies movies={allMovies}/>}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = null }) {
  const allPosts = (await getAllPostsForHome(preview)) || []
  const allMovies = (await getAllMoviesForHome(preview)) || []
  return {
    props: { allPosts, allMovies, preview },
  }
}
