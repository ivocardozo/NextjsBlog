import React from 'react'
import ReactMarkdown from 'react-markdown'

import PostHeader from './post-header'
import classes from './post-content.module.css'

const PostContent = (props) => {
    const { posts } = props
    const imagePath = `/images/posts/${posts.slug}/${posts.image}`
  return (
    <article className={classes.content}>
        <PostHeader title={posts.title} image={imagePath}/>
        <ReactMarkdown>{posts.content}</ReactMarkdown>
    </article>
  )
}

export default PostContent
