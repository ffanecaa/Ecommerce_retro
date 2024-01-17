import  { useState, useEffect } from "react";
import useProducts from "../../Hook/useProducts";
import Cards from "../../componets/cards/Cards";

export const Categories = () => {
  const { products } = useProducts();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedPrice, setSelectedPrice] = useState("all");
  const [selectedName, setSelectedName] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    
    let search = products;

    if (selectedCategory !== "all") {
    
      search = search.filter(product => product.category === selectedCategory);
    }

    if (selectedPrice !== "all") {
      
      const priceRange = getPriceRange(selectedPrice);
      search = search.filter(product => product.price >= priceRange.min && product.price <= priceRange.max);
    }

    if (selectedName !== "") {
       
        search = search.filter(product => product.name.toLowerCase().includes(selectedName.toLowerCase()));
      }
      if (selectedLocation !== "") {
       
        search = search.filter(product => product.location.toLowerCase().includes(selectedLocation.toLowerCase()));
      }

    setFilteredProducts(search);
  }, [selectedCategory, selectedPrice,selectedName,selectedLocation, products]);

  const getPriceRange = (priceOption) => {
    switch (priceOption) {
      case "low":
        return { min: 0.00, max: 100.00 };
      case "medium":
        return { min: 101.00, max: 500.00 };
      case "high":
        return { min: 501.00, max: 1000.00 };
      case "premiun":
        return { min: 501.00, max: Infinity };
      default:
        return { min: 0, max: Infinity };
    }
  };

  return (
    // hacer div flex 
    <div >
     <div>
      <label htmlFor="category">Selecciona una categoría:</label>
      <select
        id="category"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="all">Todas las categorías</option>
      
        {/* peta pq repite tantas opciones d categorias como productos hay
         {products.map(product => (
  <option key={product.category} value={product.category}>
    {product.category}
  </option>
))}  https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Set  js puro    */}
  {[...new Set(products.map(product => product.category))].map(category => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}

      </select>

      
      <label htmlFor="price">Selecciona un rango de precios:</label>
      <select
        id="price"
        value={selectedPrice}
        onChange={(e) => setSelectedPrice(e.target.value)}
      >
        <option value="all">Todos los precios</option>
        <option value="low">menos de 100€</option>
        <option value="medium">entre 100 y 500€</option>
        <option value="high">entre 500 y 1000€</option>
        <option value="premium">mas de 1000€</option>
      </select>
      <label htmlFor="name">Buscar por nombre:</label>
      <input
        type="text"
        id="name"
        value={selectedName}
        onChange={(e) => setSelectedName(e.target.value)}
      />
       <label htmlFor="location">Buscar por ubicación:</label>
      <input
        type="text"
        id="location"
        value={selectedLocation}
        onChange={(e) => setSelectedLocation(e.target.value)}
      />
      </div>
      {/* Lista de productos filtrados   derecha  */}
      <div className="">
        {filteredProducts.map(product => (
          <Cards key={product.id} item={product} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
