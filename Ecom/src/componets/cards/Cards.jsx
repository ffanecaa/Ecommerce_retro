import { Link } from '@mui/material'
import  './Cards.css'

const Cards = ({item}) => {
  return (
    <Link  className="link_cards " to ={`/product/${item.id}`}>
    <div className='cards'>
     <div className="image_cards">
        <img src={item.imageURL} alt="" className='image_cards_1' />
        <img src={item.imageURL2} alt="" className='image_cards_2' />
     </div>
<h2>{item.name}</h2>
<p>{item.price}</p>
    </div>
    </Link>
  )
}

export default Cards