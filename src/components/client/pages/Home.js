import React from 'react'
import Cards from '../components/Cards'
import MainHeader from '../components/MainHeader'
import Navbar from '../components/Navbar'
import {Helmet} from "react-helmet";
import Footer from '../components/Footer';


function Home() {
  
  return (
    <div>
      <Helmet>
        <title> فروش قالب و کامپوننت آماده </title>
        <meta name="description" content="قالب و فایل آماده وب سایت" />
      </Helmet>
      
      <Navbar />
      <MainHeader />
      <Cards />
      <Footer />
    </div>
  )
}

export default Home
