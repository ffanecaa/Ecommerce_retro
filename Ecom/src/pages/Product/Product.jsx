import { useState } from "react"
import "./Product.css"
import { useParams } from "react-router-dom";
import EuroIcon from '@mui/icons-material/Euro';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
const Product = () => {

const data =[{
  "name": "Producto 1",
  "category": "consola",
  "price": 599.99,
  "location": "Ciudad A",
  "imageURL": "https://d2j6dbq0eux0bg.cloudfront.net/images/93050517/3905839804.jpg",
  "imageURL2": "https://d2j6dbq0eux0bg.cloudfront.net/images/93050517/3899716069.jpg",
  "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam numquam aut temporibus tempore illum odio amet fuga, nulla perspiciatis suscipit sapiente officia",
  "id": "001",
  "sellerId": "vendedor001"
}
]

const [selectImage, setSelectImage] = useState(data[0].imageURL);

  const handleImage0 = () => {
    setSelectImage(data[0].imageURL);
  };

  const handleImage1 = () => {
    setSelectImage(data[0].imageURL2);
  };

  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteToggle = () => {
    setIsFavorite(!isFavorite);
  };

  
  return (
    <div className='product'>
      <div className="product_left">
        <div className="productImage">
          <img className="imgprod" src={data[0].imageURL} alt="" onClick={handleImage0} />
          <img className="imgprod" src={data[0].imageURL2} alt="" onClick={handleImage1} />
        </div>
        <div className="mainproductImage">
          <img className="mainImg" src={selectImage} alt="" />
        </div>
</div>

<div className="product_right">
<h2 className="producth2">{data[0].name} </h2>
<p className="product_parrafo product_price">{data[0].price}<EuroIcon/></p>
<p className="product_parrafo">{data[0].description}</p>


{/* fetch envio reserva al carro y el carro reservamos */}
<button className="productbutton">RESERVAR <ShoppingCartOutlinedIcon/></button>
{/* el rollo me gusta terciario use state y fetch */}
<p className="product_parrafo favorite" onClick={handleFavoriteToggle}> {isFavorite ? <FavoriteBorderOutlinedIcon/>  :<FavoriteOutlinedIcon/>} </p>





</div>




    </div>
  )
}

export default Product