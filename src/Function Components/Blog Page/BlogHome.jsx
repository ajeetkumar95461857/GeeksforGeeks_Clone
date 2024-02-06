import React from 'react'
import BlogPage from './BlogPage'
const { Data } = require('./Data');


const BlogHome = () => {

  return (
    <div>
        {Data.map((data)=><BlogPage blog={data}/>)}
    </div>
  )
}

export default BlogHome