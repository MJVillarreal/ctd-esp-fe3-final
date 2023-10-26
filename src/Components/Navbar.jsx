import React from 'react'
import { useNavigate } from "react-router-dom";
import { useAppContext } from './utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  // const { state, dispatch } = useAppContext();

  // const toggleTheme = () => {
  //   dispatch({ type: 'TOGGLE_THEME' });
  // };

  const navigate = useNavigate();

  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}

      <h1>DH ODONTO</h1>
      
      <div>
        <button onClick={() => navigate(`/home/`)}>Home</button>
        <a>Contact</a>
        <a>Favs</a>
        <button className='themeButton'>🌙</button>
      </div>
    </nav>
  );
};

export default Navbar