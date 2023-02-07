import React from 'react'

import PostGrid from '../posts/posts-grid'
import classes from './featured-posts.module.css'

const FeaturedPosts = (props) => {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostGrid posts={props.posts}/>
    </section>
  )
}

export default FeaturedPosts
