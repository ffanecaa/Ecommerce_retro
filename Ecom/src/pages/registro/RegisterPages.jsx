import { useState } from "react";

import "./registerPages.css";
import { useNavigate } from "react-router-dom";

const RegisterPages = () => {
  const navigate = useNavigate();

  function autolink() {
    navigate("/Login");
  }
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [statusMessage, setStatusMessage] = useState(""); // Estado para el mensaje de estado

  const enviar = (e) => {
    e.preventDefault();

    fetch('http://localhost:3001/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
    .then(response => {
      if (response.ok) {
        console.log("Éxito");
        setStatusMessage("Registro exitoso");
        autolink()
      } else {
        return response.json(); // Devolver el cuerpo de la respuesta como JSON
      }
    })
    .then(data => {
      if (data) {
        console.log(data);
        setStatusMessage(data.message);
      
      }
    })
    .catch(error => {
      console.error("Error al enviar los datos:", error);
      setStatusMessage("Error al enviar los datos");
    });
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setUserData({ ...userData, [id]: value });
  };

  return (
    <div className="register">
     
      <h2>Registro</h2>
      <form className="form_register" onSubmit={enviar}>
        <label htmlFor="name">Introduce nombre</label>
        <input
          type="text"
          id="name"
          value={userData.name}
          onChange={handleInputChange}
        />
        <label htmlFor="email">Introduce email</label>
        <input
          type="email"
          id="email"
          value={userData.email}
          onChange={handleInputChange}
        />
        <label htmlFor="password">Genera una contraseña</label>
        <input
          type="password"
          id="password"
          value={userData.password}
          onChange={handleInputChange}
        />
        <button type="submit">Registrar</button>
      </form>
      {statusMessage && <p className="exitoso">{statusMessage}<span>&#160;</span></p>}  
     
    </div>
  );
};

export default RegisterPages;
