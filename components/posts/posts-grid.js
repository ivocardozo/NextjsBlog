import React from 'react'

import PostItem from './post-item'
import classes from './posts-grid.module.css'

const { posts } = props

const PostsGrid = (props) => {
  return (
    <ul className={classes.grid}>
        {posts.map(post => (
            <PostItem />
        ))}
    </ul>
  )
}

export default PostsGrid
