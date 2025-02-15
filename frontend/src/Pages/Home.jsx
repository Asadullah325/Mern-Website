import React from 'react'
import Navbar from '../components/Navbar'
import VideoBackground from '../components/VideoBackground'
import PropertiesContainer from '../components/PropertiesContainer'
import OurStoryContainer from '../components/OurStoryContainer'

const Home = () => {
  return (
    <>
      <Navbar/>
      <VideoBackground/>
      <PropertiesContainer/>
      <OurStoryContainer/>
    </>
  )
}

export default Home