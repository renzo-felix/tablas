import React, { useState } from "react";
import "./reserva.css";
import { postRequest } from "../../api/dataService2";
import {useSearchParams} from "react-router-dom" 


function ReservarMesa() {
 const [Param]=useSearchParams();
 const miToken=Param.get('token');
 
 


  const [values, setValues] = useState({
    email: '',
    idmesa: '', // Agregado el estado para idmesa
    idreserva: '', // Agregado el estado para idreserva
  });

  const [errors, setErrors] = useState({});

  const handleInput = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validación antes de la solicitud POST
    if (values.email  && values.idmesa && values.idreserva&& values.fecha) {
      postRequest(miToken, values.email, values.idmesa, values.idreserva,values.fecha)
      
        .then((response) => {
          // Manejar la respuesta de la solicitud POST si es necesario
          console.log(response);
          
        })
        .catch((error) => {
          // Manejar errores de la solicitud POST si es necesario
          console.error('Hubo un problema con la solicitud POST:', error);
        });
    } else {
      // Mostrar mensajes de error si los campos están vacíos
      setErrors({
        token:miToken ? '' : 'Token es obligatorio',
        email: values.email ? '' : 'Email es obligatorio',
        idmesa: values.idmesa ? '' : 'IdMesa es obligatorio',
        idreserva: values.idreserva ? '' : 'IdReserva es obligatorio',
        idreserva: values.fecha ? '' : 'la fecha es obligatorio',
      });
    }
  };

  return (
    <div>
      <div className="allPage">
        <div className="formContainer">
          <p className="contTitle">reserva</p>
          <form onSubmit={handleSubmit}>
            <div className="inputSpace">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Email"
                onChange={handleInput}
                name="email"
              />
              {errors.email && <span> {errors.email} </span>}
            </div>
            <div className="inputSpace">
              <label htmlFor="idmesa">IdMesa</label>
              <input
                type="text"
                placeholder="IdMesa"
                onChange={handleInput}
                name="idmesa"
              />
              {errors.idmesa && <span> {errors.idmesa} </span>}
            </div>
            <div className="inputSpace">
              <label htmlFor="idreserva">IdReserva</label>
              <input
                type="text"
                placeholder="IdReserva"
                onChange={handleInput}
                name="idreserva"
              />
              {errors.idreserva && <span> {errors.idreserva} </span>}
            </div>
            <div className="inputSpace">
              <label htmlFor="fecha">fecha</label>
              <input
                type="text"
                placeholder="fecha"
                onChange={handleInput}
                name="fecha"
              />
              {errors.idreserva && <span> {errors.fecha} </span>}
            </div>
            <button type="submit" className="loginButton">
              Registrar
            </button>
            <p>You are agree to our terms and policies?</p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ReservarMesa;
