import List from "../../componets/List/List";
import "./Products.css";
import { useParams } from "react-router-dom";
import { useState } from "react";
const Products = () => {
  const idCategorie = parseInt(useParams().id);
  console.log(idCategorie);
  const [maxPrice, setMaxPrice] = useState(1000);

  const HandlePriceMax = (e) => {
    setMaxPrice(e.target.value);
  };
  const [sort, setSort] = useState(null);
  const handleSortChange = (e) => {
    setSort(e.target.value);
  };
  console.log(sort);
  return (   // modificar para pasar id dinamicamente  llamar a products y pasarle product
  // hacer un map  por ver
  //antes link categorias
    <div className="products">
      <div className="products_left">
        <div className="filterProduct">
          <h2 className="h2filter">categories</h2>
          <div className="inputItemProduct">
            <input type="checkbox" name="" id="1" />
            <label htmlFor="1">consolas</label>
          </div>
          <div className="inputItemProduct">
            <input type="checkbox" name="" id="2" />
            <label htmlFor="2">televisores</label>
          </div>
          <div className="inputItemProduct">
            <input type="checkbox" name="" id="3" />
            <label htmlFor="3">ordenadores</label>
          </div>
        </div>
        <div className="filterProduct">
          <h2 className="h2filter">prices</h2>
          <div className="inputItemProduct">
            <span>0</span>
            <input type="range" min={0} max={1000} onChange={HandlePriceMax} />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterProduct">
          <h2 className="h2filter">sort</h2>
          <div className="inputItemProduct">
            <input
              type="radio"
              name="price"
              value="asc"
              id="asc"
              checked={sort === "asc"}
              onChange={handleSortChange}
            />
            <label htmlFor="asc">precio mas bajo</label>
          </div>
          <div className="inputItemProduct">
            <input
              type="radio"
              name="price"
              value="desc"
              id="desc"
              checked={sort === "desc"}
              onChange={handleSortChange}
            />
            <label htmlFor="desc">precio mas alto primero</label>
          </div>
        </div>
        </div>
        <div className="products_right">
          <img src="/habita.jpg" alt="" />
          {/* fotoss */}
          <List idCategorie={idCategorie} maxPrice={maxPrice} sort={sort} />
        </div>
     
    </div>
  );
};

export default Products;
