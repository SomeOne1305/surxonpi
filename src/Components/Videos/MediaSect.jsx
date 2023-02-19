import React from 'react'
import { Link } from 'react-router-dom'
import style from '../../css/media-sect.module.scss'
import img1 from '../../images/1.JPG'
import img2 from '../../images/2.JPG'
import img3 from '../../images/3.JPG'
import video from '../../images/video.mp4'

export default function MediaSect() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [source, setSource] = React.useState("")
  const [vidSource, setVidSource] = React.useState('')
  function Modal_window(e){
    setIsOpen(true)
    setSource(e.target.currentSrc);
  }
  function videoPlay(){
    setIsOpen(true)
    setVidSource(video)
  }
  function videoPause(){
    setIsOpen(false)
    setVidSource("")
  }
  return (
    <div className={style.media_section}>
      <div className={style.container}>
        <div className={style.medias_block}>
          <div className={style.media_section_title}>
            <h3>Media</h3>
            <div className={style.second}>
              <i className="fa-regular fa-photo-film"></i>
              <Link to={"/"}>Barchasini ko'rish</Link>
            </div>
          </div>
          <div className={style.medias}>
          <div className={style.media_section_img}>
              <img src={img1} alt="" onClick={(e)=>Modal_window(e)}/>
            </div>
            <div className={style.media_section_img}>
              <img src={img2} alt="" onClick={(e)=>Modal_window(e)}/>
            </div>
            <div className={style.media_section_img}>
              <img src={img3} alt="" onClick={(e)=>Modal_window(e)}/>
            </div>
            
            <div className={style.video}>
              <video src={video}width={"100%"} height={"100%"}></video>
              <div className={style.play_btn} onClick={()=>videoPlay()}>
                <div className={style.play}>
                  <i className="fa fa-play"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.modal_window} style={{transform: isOpen ? "scale(1)" : "scale(0)"}}>
        <div className={style.container}>
          <div className={style.image} style={{display:vidSource === "" ? "block": "none"}}>
            <img src={source} alt="" />
          </div>
          <video src={vidSource} controls width={"90%"} height={"90%"} style={{display:vidSource !== "" ? "block" :"none"}}></video>
        </div>
        <div className={style.quit} onClick={()=>videoPause()}>
          <i className="fa-regular fa-xmark"></i>
        </div>
      </div>
    </div>
  )
}
