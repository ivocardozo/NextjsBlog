import React from 'react'

import PostHeader from './post-header'
import classes from './post-content.module.css'

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
        {DUMMY_POST.content}
    </article>
  )
}

export default PostContent
