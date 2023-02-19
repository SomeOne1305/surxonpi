import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout';
// import Article from './Components/News/Article'
import DocumentList from './Components/pages/DocumentList'
import './css/App.css';
import Docs from './Components/Docs';
import SliderBlock from './Components/SliderBlock';
import NotFound from './Components/NotFound';
import NewsBlock from './Components/News/NewsBlock';
import Article from './Components/News/Article';
import Contact from './Components/Contact';
import Loading from './Components/Loading';





function App() {
  const [loading, setLoading] = React.useState(true)
  window.addEventListener('load', ()=>{
    setLoading(false)
  })
  return (
    <>
      <Loading isLoading={loading}/>
      <div className="All" style={{display: loading ? "none" : "block"}}>
        <Routes>
          <Route path='/'element={<Layout/>}>
            <Route path='' element={<SliderBlock/>}/>
            <Route path='docs' element={<Docs/>}>
              <Route path='/docs/:title' element={<DocumentList/>}/>
            </Route>
            <Route path='news' element={<NewsBlock/>}/>
            <Route path='news/:id' element={<Article/>}/>
            <Route path='contact-us' element={<Contact/>}/>
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
