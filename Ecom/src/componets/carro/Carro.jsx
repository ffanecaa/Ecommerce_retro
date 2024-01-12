import  './Carro.css'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
const Carro = () => {
        
const data =[
    
    {
      "name": "Producto 1",
      "category": "consola",
      "price": 599.99,
      "location": "Ciudad A",
      "imageURL": "https://d2j6dbq0eux0bg.cloudfront.net/images/93050517/3905839804.jpg",
      "imageURL2": "https://d2j6dbq0eux0bg.cloudfront.net/images/93050517/3899716069.jpg",
      "description": "Descripción del producto 1.",
      "id": "001",
      "sellerId": "vendedor001"
    }]
  return (
    <div className='carro'>

     <h2>Producto Reservado</h2>

  {data?.map(item=>(
    <div className="itemCarro" key={item.id}>
      <img src={item.imageURL} alt="" className="imgcarro" />
      <div className="detailsCarro">
        <h3>{item.name}</h3>
        
        <p>{item.location}</p>
        <p>{item.description.substring(0,60)}</p>
        <p>{item.sellerId}</p>
        <DeleteOutlineOutlinedIcon className='iconbin'/>
        <p>{item.price}</p>
        <button className=' carroButton'>Reserva:</button>
     </div>
    </div>
  ))}


    </div>
  )
}

export default Carro