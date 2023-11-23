import axios from 'axios';

// La función que realizará la solicitud POST
export  async function postRequest(mesaId, reservaId, fecha, token) {
  try {
    const url = 'https://proyectodbp-production.up.railway.app'; // Reemplaza con la URL y el endpoint correctos de tu API

    // Datos que se enviarán en el cuerpo de la solicitud POST
    const datos = {
      mesaId: mesaId,
      reservaId: reservaId,
      fecha: fecha,
    };

    // Configuración de la solicitud, incluyendo el token en el encabezado Bearer
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    // Realizar la solicitud POST
    const response = await axios.post(url, datos, config);

    // Manejar la respuesta aquí (puede variar según la estructura de tu API)
    console.log('Respuesta:', response.data);

    // Devolver la respuesta si es necesario
    return response.data;
  } catch (error) {
    // Manejar errores aquí
    console.error('Error en la solicitud POST:', error);
    throw error; // Puedes manejar el error según tus necesidades
  }
}

