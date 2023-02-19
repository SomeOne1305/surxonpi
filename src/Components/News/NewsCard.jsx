import React from 'react'
import style from '../../css/newsCard.module.scss'

export default function NewsCard({ news_image, news_title, news_info, date }) {
    return (
        <div className={style.news_card}>
            <div className={style.topDate}>
                <span>22 Dekabr</span>
            </div>
            <div className={style.image}>
                <img src={news_image} alt="" />
            </div>
            <div className={style.infoBlock}>
                <h3>{news_title}</h3>
                <p>{news_info}</p>
                <div className={style.date}>
                    <span>{date}<div className={style.watching}><i className="fa fa-eye"></i>  0</div></span>
                    <a href="/">
                        <span>Ko'proq <i className="fa fa-arrow-right"></i></span>
                    </a>
                </div>
            </div>
        </div>  
    )
}
