import React from 'react'
import Navigation from './Navigation'
import { Route, Routes } from 'react-router-dom'

import Menu from './Menu'
import MediaSect from './Videos/MediaSect'
import NewsBlock from './News/NewsBlock'
// import Slider from './Slider'
import Wheater from './Wheater'
import CalAndPoll from './CalAndPoll'
import Footer from './Footer'
import SliderBlock from './SliderBlock'
// import NotFound from "./NotFound"
import Article from './News/Article'


export default function Router() {
    return (
        <>
            <Navigation/>
            <Menu/>
            <Routes>
                <Route path='/' element={<SliderBlock/>}/>
                <Route path='/' element={<MediaSect/>}/>
            </Routes>
            <Article/>
            <NewsBlock/>
            <Wheater/>
            <CalAndPoll/>
            <Footer/>
        </>
    )
}
