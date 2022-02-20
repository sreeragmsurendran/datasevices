import React from 'react'
import Carousel from '../components/Carousel/Carousel'

import Content from '../components/Content/Content'
import Feature from '../components/Feature/Feature'
import Footer from '../components/Footer/Footer'
import Hero from '../components/Hero/Hero'
import Navbar from '../components/Navbar/Navbar'
import {heroOne,heroTwo, heroThree} from '../data/HeroData'

function Home() {
  return (<>
   <Navbar/>
  <Hero/>
  <Feature/>
  <Content {...heroOne}/>
  <Content {...heroTwo}/>
  <Content {...heroThree}/>
  <Carousel/>
  <Footer/>

  </>
 
  )
}

export default Home