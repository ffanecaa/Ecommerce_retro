import { useContext, useState } from "react";

import "./registerPages.css";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../providers/AuthProvider"


const LoginPages = () => {
  const [,setToken] = useContext(authContext)

  const navigate = useNavigate();

  function autolink() {
    navigate("/");
  }
  const [userData, setUserData] = useState({
    email: "",
    password: ""
  });
  const [statusMessage, setStatusMessage] = useState("");

  const enviar = (e) => {
    e.preventDefault();
    
    fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Failed to login');
      }
    })
    .then(data => {
      const token = (data.token);
      //const formToken = token ? token.replace(/^"(.*)"$/, '$1') : null;
     /* localStorage.setItem('token', token);*/
      setToken(token)
      console.log("Token recibido:", token);
      setStatusMessage("ok");
      autolink()
    })
    .catch(error => {
      console.error("Error en inicio de sesión:", error.message);
      setStatusMessage("error");
    });
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setUserData({ ...userData, [id]: value });
  };

  return (
    <div className="register">
  
      <h2>Login</h2>
      <form className="form_login" onSubmit={enviar}>
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
        <button type="submit">Iniciar Sesión</button>
      </form>
      {statusMessage && <p>{statusMessage}
      </p>}
    </div>
  );
};

export default LoginPages;
