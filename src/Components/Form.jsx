import React, { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
  });

  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let hasError = false;

    // Validación del nombre
    if (formData.nombre.length <= 5) {
      setError('Por favor ingrese un nombre válido (más de 5 caracteres)');
      hasError = true;
    }

    // Validación del email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Por favor ingrese un correo electrónico válido');
      hasError = true;
    }

    if (hasError) {
      setEnviado(false); 
      return; 
    }

    setError('');

    console.log(formData);
    setEnviado(true); 
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="inputForm">
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Nombre"
          />
        </div>
        <div  className="inputForm">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
          />
        </div>
        <button type="submit">Enviar</button>
      </form>

      {error && <div className="mensajeError">{error}</div>}

      {enviado && (
        <div className="mensajeExito">
          <h3>Gracias {formData.nombre}, te contactaremos cuando antes vía mail</h3>
        </div>
      )}

    </div>
  );
};

export default Form;
