import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={365}
    height={100}
    viewBox="0 0 365 100"
    backgroundColor="#ede8e8"
    foregroundColor="#e1dbdb"
    {...props}
  >
    <rect x="77" y="0" rx="12" ry="12" width="224" height="22" /> 
    <circle cx="61" cy="114" r="10" /> 
    <circle cx="34" cy="43" r="10" /> 
    <circle cx="33" cy="10" r="10" /> 
    <rect x="77" y="31" rx="12" ry="12" width="224" height="22" /> 
    <rect x="82" y="103" rx="12" ry="12" width="174" height="22" /> 
    <circle cx="34" cy="73" r="10" /> 
    <rect x="79" y="63" rx="12" ry="12" width="224" height="22" /> 
    <circle cx="359" cy="61" r="7" /> 
    <circle cx="371" cy="63" r="7" />
  </ContentLoader>
)

export default MyLoader

