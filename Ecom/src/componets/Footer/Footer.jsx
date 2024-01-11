import Contact from "../contact/Contact"
import "./Footer.css"

const Footer = () => {
  return (
   <div className='footer'>
      <div className="top">
        <div className="item">
            <h2>CAtegorias</h2>
            <span>Consola</span>
            <span>ordenas</span>
            <span>otros</span>
        </div>
        <div className="item">
            <h2>links</h2>
            <span>Consola</span>
            <span>ordenas</span>
            <span>otros</span>
        </div>
        <div className="item">
            <h2>about</h2>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis animi perspiciatis expedita itaque. Provident nobis perferendis unde dicta! </span>
        </div>
        <div className="item">
        <Contact/>
        </div>

      </div>
      <div className="bottom">
         <div className="left">
           <span className="logo">
             Retroshop
           </span>
           <span className="copyright">
           © copyright derechos reservados
           </span>
         </div>
         <div className="right">
            <img className="img_pagos" src="/pagos.png" alt="" />
         </div>
      </div>


    </div>
  )
}

export default Footer