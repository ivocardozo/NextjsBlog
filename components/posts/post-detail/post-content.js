import ReactMarkdown from 'react-markdown'
import React from 'react'
import PostHeader from './post-header'

import classes from './post-content.module.css'

const DUMMY_POST = {
    slug: 'getting-started-with-nextjs',
    title: 'getting started with nextJs',
    image: 'getting-started-nextjs.png',
    excerpt:
        'NextJs is a the React framwork for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR',
    date: '2022-02-10',
    content: '# This is a first post'
}

const PostContent = () => {
    const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`
  return (
    <article className={classes.content}>
        <PostHeader title={DUMMY_POST.title} image={imagePath}/>
        <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
    </article>
  )
}

export default PostContent
