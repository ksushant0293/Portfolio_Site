import React from 'react'
import Header from "./Header"
import image from "../assets/pexels-cottonbro-4709286.jpg"
import arrowSvg from "../assets/down-arrow.svg"
const Home = () => {
  return (
    <section id="home" className="min-height">
    <Header/>
    <img className="background" src={image} alt="" />
    <div style={{ position: "absolute", top: "5rem", left: "2rem", width: "17rem" }}>
      <h1>SUSHANT KUMAR</h1>
      <h2>FRONTEND WEB DEVELOPER</h2>
    </div>
    <div style={{ position: "absolute", bottom: "3rem", left: "50%" }}>
      <img src={arrowSvg} style={{ height: "3rem", width: "3rem" }} alt="" />
    </div>
  </section>
  )
}
  
export default Home
