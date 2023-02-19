import React from 'react'
import style from "../css/newsCard.module.scss";
import RightContent from './News/RightContent';
import { Outlet } from 'react-router-dom';
// import DocumentList from './pages/DocumentList';

const Docs = ({children}) => {
  return (
    <div className={style.newsSection}>
      <div className={style.container}>
        <Outlet/>
        <RightContent />
      </div>
    </div>
  )
}

export default Docs