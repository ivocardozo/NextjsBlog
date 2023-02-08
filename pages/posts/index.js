import React, { Fragment } from 'react'
import Head from 'next/head'

import AllPosts from '@/components/posts/all-posts'
import { getAllPosts } from '@/lib/posts-util'

const AllPostsPage = (props) => {
  return (
    <Fragment>
        <AllPosts posts={props.posts}/>
        <Head>
            <title>All posts</title>
            <meta 
                name='description'
                content='page to see all posts'
            />
        </Head>
    </Fragment>
  )
}

export function getStaticProps() {
    const allPosts = getAllPosts()
    return {
        props: {
            posts: allPosts
        }
    }
}

export default AllPostsPage
