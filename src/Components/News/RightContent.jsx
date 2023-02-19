import React from "react";
import style from "../../css/newsCard.module.scss";
import president from "../../images/president.jpg";
import { Link } from "react-router-dom";

export default function RightContent() {
  return (
    <>
      <div className={style.const_block}>
        <div className={style.year_announcement}>
          <img src={president} alt="" />
          <div className={style.title}>
            <a href="/">
              <h3>2023 yil - "Insonga e’tibor va sifatli ta’lim" yili</h3>
            </a>
          </div>
        </div>
        <div className={style.ext_menu}>
          <Link to="/contact">
            <div className={style.extra}>
              <i className="fa-fa-envelope"></i>
              <p>Boshqaruv raisining virtual qabulxonasi</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
