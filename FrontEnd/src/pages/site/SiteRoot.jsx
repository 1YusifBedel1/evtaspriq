
import React from 'react'
import Header from '../../layout/site/Header/Header'
import { Outlet } from 'react-router'
import Footer from '../../layout/site/Footer/Footer'
import Hero from '../../components/Hero/Hero'

const SiteRoot = () => {
  return (
    <>
    <Header/>
    <Hero/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default SiteRoot