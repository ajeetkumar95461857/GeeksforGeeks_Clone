import React from 'react'

const BlogPage = ({
    blog: {
        heading,
        categories,
        body
      },
}) => {
  return (
    <div>
        <div className="Blog">
            <div className="heading">
                <h1>{heading}</h1>
            </div>
            <div className="categories">
                <h2>{categories}</h2>
            </div>
            <div className="body">
                <p>{body}</p>
            </div>
        </div>
    </div>
  )
}

export default BlogPage