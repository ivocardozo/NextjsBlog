import ReactMarkdown from 'react-markdown'
import React from 'react'
import PostHeader from './post-header'

import classes from './post-content.module.css'
import Image from 'next/image'

const PostContent = (props) => {
  const { post } = props

  const imagePath = `/images/posts/${post.slug}/${post.image}`

  const customRenderers = {
    // image(image) {
    //   return (
    //     <Image
    //       src={`/images/posts/${post.slug}/${image.src}`}
    //       alt={image.alt}
    //       widt={600}
    //       height={300}
    //     />
    //   )
    // },
    paragraph(paragraph) {
      const { node } = paragraph

      if (node.children[0].type === 'image') {
        const image = node.children[0]

        return (
          <div>
            <Image
            src={`/images/posts/${post.slug}/${image.url}`}
            alt={image.alt}
            widt={600}
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
        <PostHeader title={post.title} image={imagePath}/>
        <ReactMarkdown renderers={customRenderers}>{post.content}</ReactMarkdown>
    </article>
  )
}

export default PostContent
