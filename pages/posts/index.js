import React from 'react'

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
    <AllPosts posts={DUMMY_POSTS}/>
  )
}

export default AllPostsPage
