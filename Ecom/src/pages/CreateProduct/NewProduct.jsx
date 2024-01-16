import  { useState, useContext } from 'react';
import "./NewProduct.css"
import { useNavigate } from 'react-router-dom';
import { authContext } from '../../providers/AuthProvider'
// import { useLocalStorage } from '../hooks/useLocalStorage';

const NewProduct = () => {
  const navigate = useNavigate();
  const [token, setToken] = useContext(authContext);
  // const formToken = token ? token.replace(/^"(.*)"$/, '$1') : null;
 // console.log(formToken);
//   const [productName, setProductName] = useLocalStorage('productpage_name');

  const [productData, setProductData] = useState({
    name: '',
    category: '',
    price: '',
    location: '',
    description: '',
    
  });

  const [statusMessage, setStatusMessage] = useState('');

  const autolink = () => {
    navigate('/');
  };

  const enviar = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', productData.name);
    formData.append('category', productData.category);
    formData.append('price', productData.price);
    formData.append('location', productData.location);
    formData.append('description', productData.description);
    formData.append('avatar', productData.avatar);
    formData.append('avatar2', productData.avatar2);


    try {
      const response = await fetch('http://localhost:3001/products/create', {
        method: 'POST',
        headers: {
          Authorization:  `Bearer ${token}`
        },
        body: formData,
      });
   console.log(formData);
      if (response.ok) {
        setStatusMessage('Registro exitoso');
        autolink();
      } else {
        const data = await response.json();
        if (data) {
          setStatusMessage(data.message);
        }
      }
    } catch (error) {
      setStatusMessage('Error al enviar los datos');
    }
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setProductData({ ...productData, [id]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setProductData({ ...productData, avatar: file });
  };
  const handleFileChange2 = (e) => {
    const file2 = e.target.files[0];
    setProductData({ ...productData, avatar2: file2 });
  };

  return (
    <div className="container_entries">
  
      <h1>Registro de Producto</h1>
      <div className="form_container">
      <form className="formCreate" onSubmit={enviar} >
        <label htmlFor="name">Introduce nombre del producto</label>
        <input type="text" id="name" value={productData.name} onChange={handleInputChange} />

        <label htmlFor="category">Categoría</label>
        <input type="text" id="category" value={productData.category} onChange={handleInputChange} />

        <label htmlFor="price">Precio</label>
        <input type="text" id="price" value={productData.price} onChange={handleInputChange} />

        <label htmlFor="location">Ubicación</label>
        <input type="text" id="location" value={productData.location} onChange={handleInputChange} />

      
   
        <label htmlFor="description">Descripción</label>
        <textarea id="description" value={productData.description} onChange={handleInputChange}></textarea>
    <label htmlFor="avatar">URL de la imagen</label>
   <input style={{ width: "300px" }} type="file" id="avatar" onChange={handleFileChange} />
    <label htmlFor="avatar2">URL de la imagen</label>
   <input style={{ width: "300px" }} type="file" id="avatar2" onChange={handleFileChange2} />
 
        <button  className="newProduct_button" type="submit">enviar</button>
      
      </form>
      </div>
      {statusMessage && <p className="exitoso">{statusMessage}<span>&#160;</span></p>}
    </div>
  );
};

export default NewProduct;
//   <label htmlFor="imageURL">URL de la imagen</label>
//<input type="file" id="imageURL" onChange={handleFileChange} />