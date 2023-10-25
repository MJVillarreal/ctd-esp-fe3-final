import React from "react";
import { useNavigate } from "react-router-dom";


const Card = ({ name, username, id, addToFavorites }) => {

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    
    const cardData = JSON.stringify({ name, username, id });

    localStorage.setItem('favoriteCard', cardData);

    addToFavorites({ name, username, id });
  };

  const navigate = useNavigate();

  return (
    <div className="card" onClick={() => navigate(`/dentista/${id}`)}>
        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        <h2>{name}</h2>
        <p>{username}</p>
        <p>{id}</p>

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
