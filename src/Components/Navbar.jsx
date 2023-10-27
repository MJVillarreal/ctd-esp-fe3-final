import React from "react"
import { Link, useNavigate } from "react-router-dom"

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}

      <h1>DH ODONTO</h1>

      <div>
        <Link to="/home">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to= "/favs">Favs</Link>
        <button className="themeButton">🌙</button>
      </div>
    </nav>
  )
}

export default Navbar