import React from "react";
import style from "../../css/newsCard.module.scss";
import RightContent from "./RightContent";
import { Routes, Route } from "react-router-dom";
import NewsCardView from "./NewsCardView";
// import About from "../pages/AboutUs/About";
import Contact from "../Contact";
import Loader from "../Loading"
import Article from "./Article";
import NotFound from "../NotFound";


const DocumentList = React.lazy(() => import(/*webpackChunkName=DocumentList*/ "../pages/DocumentList"))

export default function NewsBlock() {
  return (
    <div className={style.newsSection}>
      <div className={style.container}>
        <>Hello world</>
      </div>
    </div>
  );
}
