import React from 'react'
import {PulseLoader} from "react-spinners"
import loading from '../css/loading.module.scss'

export default function Loading({isLoading}) {
  return (
    <div className={loading.loadBar} style={{display: isLoading ? "flex" : "none"}}>
        <PulseLoader color="#2B3A55" loading={true}/>
    </div>
  )
}
