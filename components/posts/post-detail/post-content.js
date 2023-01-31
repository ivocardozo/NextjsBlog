import React from 'react'
import reactMarkdown from 'react-markdown'

import PostHeader from './post-header'
import classes from './post-content.module.css'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

const DUMMY_POST = {
    slug: 'getting-started-with-nextjs',
    title: 'getting started with nextJs',
    image: 'getting-started-nextjs.png',
    excerpt: '# This is a first post',
    date: '2022-02-10',
    content: '# This is a fist post'
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
