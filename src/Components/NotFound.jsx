import React from 'react'
import { Link } from 'react-router-dom'
import style from '../css/not_found.module.scss'
import not_found from '../images/404.svg'
// import logo from '../images/logo.png'
export default function NotFound() {
  return (
    <div className={style.not_found}>
      <div className={style.container}>
        <div className={style.not_found_block}>
          <img src={not_found} alt="" />
          <div className={style.result}>
            <h1>Bu sahifa topilmadi.</h1>
            <Link to={"/"}>Bosh sahifaga qaytish</Link>
          </div>
        </div>
        {/* <div className={style.top_menu}>
          <div className={style.logo}>
            <img src={logo} alt="" />
          </div>
        </div> */}
      </div>
    </div>
  )
}
