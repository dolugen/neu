import Container from '@/components/container'
import MoreStories from '@/components/more-stories'
import Movies from '@/components/movies'
import HeroPost from '@/components/hero-post'
import Intro from '@/components/intro'
import Layout from '@/components/layout'
import { getAllPostsForHome, getAllMoviesForHome } from '@/lib/api'
import Head from 'next/head'
import { CMS_NAME } from '@/lib/constants'
import Carousel from "react-slick"
import Image from 'next/image'


    
export default function Index({ allPosts, allMovies, preview }) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  const heroMovie = allMovies.slice(1)

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };
  return (
    <>
      <Layout>
        <Head>
          <title>artfilm.mn-test</title>
        </Head>
        <Container>
          <Intro/>
          <div>
            Grid Menu
          </div>
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

