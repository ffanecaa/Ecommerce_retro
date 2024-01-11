import Cards from '../cards/Cards'
import './Featured.css'

const Featured = ({type}) => {

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
          },
          {
            "name": "Producto 2",
            "category": "consola",
            "price": 39.99,
            "location": "Ciudad B",
            "imageURL": "https://d2j6dbq0eux0bg.cloudfront.net/images/93050517/3920802421.jpg",
            "imageURL2": "https://d2j6dbq0eux0bg.cloudfront.net/images/93050517/3920825752.jpg",
            "description": "Descripción del producto 2.",
            "id": "002",
            "sellerId": "vendedor002"
          },
          {
            "name": "Producto 3",
            "category": "consola",
            "price": 129.99,
            "location": "Ciudad C",
            "imageURL": "https://d2j6dbq0eux0bg.cloudfront.net/images/93050517/3911424752.jpg",
            "imageURL2": "https://d2j6dbq0eux0bg.cloudfront.net/images/93050517/3911405454.jpg",
           
            "description": "Descripción del producto 3.",
            "id": "003",
            "sellerId": "vendedor003"
          },
          {
            "name": "Producto 4",
            "category": "consola",
            "price": 129.99,
            "location": "Ciudad C",
            "imageURL": "https://d2j6dbq0eux0bg.cloudfront.net/images/93050517/3911424431.jpg",
            "imageURL2": "https://d2j6dbq0eux0bg.cloudfront.net/images/93050517/3911418218.png",
           
            "description": "Descripción del producto 3.",
            "id": "004",
            "sellerId": "vendedor003"
          }
]


  return (
    <div className='featured'>

    <div className="top_featured">
        <h1>{type} products</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, reprehenderit asperiores provident vitae ea iure quisquam doloremque exercitationem itaque beatae numquam est quos magni temporibus sequi minus? Totam, eveniet soluta.</p>
    </div>
    <div className="bottom_featured">
        {data.map(item =>(
         <Cards item={item} key={item.id}/>
        ))}
    </div>


    </div>
  )
}

export default Featured