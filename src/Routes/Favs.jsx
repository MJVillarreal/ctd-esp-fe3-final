import React, { useEffect, useState }  from "react";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    
    // Recupero favoritos del localStorage
    const keys = Object.keys(localStorage);
    const favs = keys.filter(key => key.startsWith('fav_')).map(key => JSON.parse(localStorage.getItem(key)));
    setFavoritos(favs);
  }, []);

    

  return (
    <>
      <h1>Dentistas favoritos</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}

        {favoritos.map((favorito, index) => (
          <Card
            key={index}
            name={favorito.name}
            username={favorito.username}
            id={favorito.id}
            isFavorite={true}
          />
        ))}
        

      </div>
    </>
  );
};

export default Favs;
