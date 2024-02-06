import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import Home from './Home/Home';
import MergeSortHome from './Programming Concepts/MergeSort/MergeSortHome';
import UseState from './Programming Concepts/UseState/UseState';
import Frontend from './Programming Concepts/expressToMongoDB/Frontend';
import BlogHome from './Function Components/Blog Page/BlogHome';
import SkeletonForDataUpload from './Function Components/SkeletonForDataUpload/SkeletonForDataUpload';

const Router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/merge",
      element: <MergeSortHome/>,
    },
    {
      path: "/useState",
      element: <UseState/>,
    },
    {
      path: "/express",
      element: <Frontend/>,
    },
    {
      path: "/blog",
      element: <BlogHome/>,
    },
    {
      path: "/skeleton",
      element: <SkeletonForDataUpload/>
    },
  ]);

export default Router