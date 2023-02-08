import React from 'react'

import { getPostsFiles, getPostData } from '@/lib/posts-util'

import PostContent from '@/components/posts/post-detail/post-content'

const PostDetailPage = (props) => {
  return (
    <PostContent posts={props.post}/>
  )
}

export function getStaticProps(context) {
  const { params } = context
  const { slug } = params

  const postData = getPostData(slug)

  return {
    props: {
      post: postData
    },
    revalidate: 600
  }
}

export function getStaticPaths() {
  const postFileNames = getPostsFiles()

  const slugs = postFileNames.map(fileName => fileName.replace(/\.md$/, ''))
  return {
    paths: slugs.map(slug => ({params: {slug: slug}})),
    fallback: false
  }
}

export default PostDetailPage
