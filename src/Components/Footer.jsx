import React from "react";
import style from "../css/footer.module.scss";
import logo from "../images/logo.png";

export default function Footer() {
  React.useEffect(() => {
    let head = document.querySelector("head");
    const ww10 = document.createElement("script");
    ww10.setAttribute('src', "./ww10.js");
    head.append(ww10)
    return () => {
      head.removeChild(ww10);
    };
  });
  return (
    <footer>
      <div className={style.container}>
        <div className={style.footer_block}>
          <div className={style.footer_}>
            <div className={style.logo}>
              <img src={logo} alt="" />
            </div>
            <div className={style.items}>
              <p className={style.name}>
                "Surxon parmalash ishlari" aksiyadorlik jamiyati
              </p>
              <h3 className={style.community_name}>"Surxon PI" AJ</h3>
              <p className={`${style.name} ${style.privacy}`}>
                Sayt ma'lumotlaridan foydalanilganda{" "}
                <span className={`${style.community_name} ${style.source_url}`}>
                  surxonpi.uz
                </span>{" "}
                manbasi ko'rsatilishi shart.
              </p>
              <a
                href="http://www.uz/ru/res/visitor/index?id=35620"
                target="_top"
              >
                <img
                  height="34"
                  src="http://cnt0.www.uz/counter/collect?id=35620&pg=http%3A//uzinfocom.uz&&col=340F6E&amp;t=ffffff&amp;p=BD6F6F"
                  width="88"
                  alt="Топ рейтинг www.uz"
                />
              </a>
            </div>
          </div>
          <div className={style.location_of_com}>
            <div className={style.item}>
              <i className="fa fa-phone" id={style.phone}></i>
              <span>(8-376) 46-53342</span>
            </div>
            <div className={style.item}>
              <i className="fa fa-envelope" id={style.envelope}></i>
              <span>info@surxonpi.uz</span>
            </div>
            <div className={style.item}>
              <i className="fa fa-earth" id={style.earth}></i>
              <span>https://surxonpi.uz</span>
            </div>
            <div className={style.item}>
              <i className="fa fa-location-dot" id={style.location}></i>
              <p>Surxondaryo viloyati Qumqo'rgon tumani Navoiy ko'chasi-8</p>
            </div>
          </div>
          <div className={style.no_copywrite}>
            <span>
              {new Date().getFullYear()} © Barcha huquqlar himoyalangan
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
