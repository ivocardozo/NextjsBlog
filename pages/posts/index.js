import React, { Fragment } from 'react'
import Head from 'next/head'

import AllPosts from '@/components/posts/all-posts'

const DUMMY_POSTS = [
    {
        slug: 'getting-started-with-nextjs',
        title: 'getting started with nextJs',
        image: 'getting-started-nextjs.png',
        excerpt:
            'NextJs is a the React framwork for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR',
        date: '2022-02-10'
    },
    {
        slug: 'getting-started-with-nextjs2',
        title: 'getting started with nextJs',
        image: 'getting-started-nextjs.png',
        excerpt:
            'NextJs is a the React framwork for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR',
        date: '2022-02-10'
    },{
        slug: 'getting-started-with-nextjs3',
        title: 'getting started with nextJs',
        image: 'getting-started-nextjs.png',
        excerpt:
            'NextJs is a the React framwork for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR',
        date: '2022-02-10'
    },
    {
        slug: 'getting-started-with-nextjs4',
        title: 'getting started with nextJs',
        image: 'getting-started-nextjs.png',
        excerpt:
            'NextJs is a the React framwork for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR',
        date: '2022-02-10'
    }
  ]
  
const AllPostsPage = () => {
  return (
    <Fragment>
        <Head>
            <title>All Posts</title>
            <meta 
                name='description'
                content='A list of all programming-related tutorial and posts'
            />
        </Head>
        <AllPosts posts={DUMMY_POSTS}/>
    </Fragment>
  )
}

export default AllPostsPage
