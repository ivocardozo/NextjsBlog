import React from 'react'
import ReactMarkdown from 'react-markdown'
import Image from 'next/image'

import PostHeader from './post-header'
import classes from './post-content.module.css'

const PostContent = (props) => {
  const { posts } = props
    const imagePath = `/images/posts/${posts.slug}/${posts.image}`
  const customRenderers = {
    // image(image) {
    //   return (
    //     <Image 
    //       src={`/images/posts/${posts.slug}/${image.src}`}
    //       alt={image.alt}
    //       width={600}
    //       height={300}
    //     />
    //   )
    // }
    paragraph(paragraph) {
      const { node } = paragraph

      if ( node.children[0].type === 'image') {
        const image = node.children[0]

        return (
          <div className={classes.image}>
            <Image
              src={`/images/posts/${posts.slug}/${image.url}`}
              alt={image.alt}
              width={600}
              height={300}
            />
          </div>
        )
      }

      return <p>{paragraph.children}</p>
    }
  }
  return (
    <article className={classes.content}>
      <PostHeader 
        title={posts.title}
        image={imagePath}
        />
      <ReactMarkdown renderers={customRenderers}>
        {posts.content}
      </ReactMarkdown>
    </article>
  )
}

export default PostContent
