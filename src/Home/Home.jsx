import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import './Home.css'
import Body from './Component/Body/Body'
import Footer from './Component/Footer/Footer'
import Categories from './Component/Categories/Categories'
import DSA from './Component/DSA/DSA'
import Card from '../Function Components/Card/Card'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Categories/>
      <Body/>
      <Footer/>
      <DSA/>
    </div>
  )
}

export default Home