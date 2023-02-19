import React from 'react'
import Navigation  from './Navigation'
import Menu from './Menu'
import { Outlet } from 'react-router-dom'
import Wheater from './Wheater'
import CalAndPoll from './CalAndPoll'
import Footer from './Footer'
import MediaSect from './Videos/MediaSect'

const Layout = () => {
  return (
    <>
        <Navigation/>
        <Menu/>
        {/* <Slider/> */}
        <Outlet/>
        <MediaSect/>
        <CalAndPoll/>
        <MediaSect/>
        <Wheater/>
        <Footer/>
    </>
  )
}

export default Layout