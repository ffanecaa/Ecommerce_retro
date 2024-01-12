import { useState } from "react"
import "./Product.css"
const Product = () => {

const dataImages =[
  "https://d2j6dbq0eux0bg.cloudfront.net/images/93050517/3905839804.jpg",
  "https://d2j6dbq0eux0bg.cloudfront.net/images/93050517/3899716069.jpg",
]

const[selectImage,SetSelectImage]= useState(1)
const handleimage0 = ()=>{
  SetSelectImage(0)
}
const handleimage1 = ()=>{
  SetSelectImage(1)
}
  return (
    <div className='product'>
<div className="product_left">
   <div className="productImage">
    <img className="imgprod" src={dataImages[0]}alt=""  onClick={handleimage0}/>
    <img className="imgprod"src={dataImages[1]} alt=""  onClick={handleimage1}/>
   </div>
   <div className="mainproductImage">
    <img  className="mainImg"src={dataImages[selectImage]} alt="" />
   </div>
</div>

<div className="product_right"></div>




    </div>
  )
}

export default Product