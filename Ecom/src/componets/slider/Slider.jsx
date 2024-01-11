import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import "./Slider.css"
import { useState } from 'react';
const Slider = () => {

  const[currentSlide,setCurrentSlide]= useState(1)


 const prevSlide = ()=>{
 setCurrentSlide(currentSlide === 0 ? 2: (prev)=> prev -1)
 }
 const proxSlide = ()=>{
 setCurrentSlide(currentSlide === 2 ? 0: (prev)=> prev +1)
 }


  const data=[
    "/comecocos.avif",
    "/mandos.avif" ,
    "/abigarrada.jpg"


  ]
  return (
    <div className="slider">
        <div className="container_slider" style={{transform:`translateX(-${currentSlide *100}vw)`}}>
         <img className="img_slider"  src={data[0]} alt="" />
         <img className="img_slider" src= {data[1]} alt="" />
         <img className="img_slider" src={data[2]} alt="" />
        </div>

        <div className="icons_slider">
            <div className="icon_slider" onClick={prevSlide}>
               <ArrowBackOutlinedIcon/>
            </div>
            <div className="icon_slider" onClick={proxSlide}>
               <ArrowForwardOutlinedIcon/>
            </div>
        </div>
    </div>
  )
}

export default Slider