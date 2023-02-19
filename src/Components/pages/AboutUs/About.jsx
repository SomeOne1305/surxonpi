import React from 'react'
import "../../../css/about.scss"
export default function About({title}) {
  return (
    <div className='about_page'>
        <h2 style={{marginTop:"15px"}}>{title}</h2>
    </div>
  )
}
