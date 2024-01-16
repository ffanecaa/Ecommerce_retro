import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Link ,NavLink} from 'react-router-dom';
import "./navbar.css"
import { useState } from 'react';
import Carro from '../carro/Carro';



const Navbar = () => {

const[open,setOpen]= useState(false)
const handleOpenCart = ()=>{
  setOpen(!open)
}


  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img  className="img_navbar"src="/bandera.png" alt=""style={{width:"30px "}} />
            <KeyboardArrowDownIcon/>
          </div>
          <div className="item">
            <NavLink className="link" to ="/products/1">consolas</NavLink>
          </div>
          <div className="item">
            <Link className="link" to ="/products/2">ordenas</Link>
          </div>
          <div className="item">
            <Link className="link" to ="/products/3">otros</Link>
          </div>
        </div>

        <div className="center">
            <Link className="link" to ="/">RetroShop</Link>
        </div>
        <div className="right">
          <div className="items">
            <Link className="link" to ="/login">login</Link>
           </div>
          <div className="items">
            <Link className="link" to ="/register">register</Link>
           </div>
          <div className="items">
            <Link className="link" to ="/createproduct">crear</Link>
           </div>
           <div className="icons">
            <SearchIcon/>
            <PersonOutlineOutlinedIcon/>
           
            <FavoriteBorderOutlinedIcon/>
            <div className="cartIcon" onClick={handleOpenCart}>
               <ShoppingCartOutlinedIcon/>
               <span>0</span>
            </div>
           </div>
        </div>
      </div>
      {open && <Carro/>}
    </div>
  )
}

export default Navbar