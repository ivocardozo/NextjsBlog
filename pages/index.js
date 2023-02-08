import React, { Fragment } from 'react'
import Head from 'next/head'

import Hero from '@/components/home-page/hero'
import FeaturedPosts from '@/components/home-page/featured-posts'
import { getFeaturedPosts } from '@/lib/posts-util'

const HomePage = (props) => {
  return (
    <Fragment>
        <Hero />
        <FeaturedPosts posts={props.posts}/>
        <Head>
            <title>My Blog</title>
            <meta
                name='description'
                content='I post about programming and web development'
            />
        </Head>
    </Fragment>
  )
}

export function getStaticProps() {
    const featuredPosts = getFeaturedPosts()
    return {
        props: {
            posts: featuredPosts
        }
    }
}

export default HomePage
