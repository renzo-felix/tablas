import axios from 'axios';

const BASE_URL = 'https://proyectodbp-production.up.railway.app';

// Función asincrónica para realizar una solicitud POST con parámetros.
export const postRequest = async (token_, email_, idmesa_, idreserva_, fecha_) => {
    try {
        // Utiliza Axios para hacer una solicitud POST a la URL deseada.
        const response = await axios.post(`${BASE_URL}/reserva`, {
            token: token_,
            email: email_,
            MesaId: idmesa_,
            reservaId: idreserva_,
            fecha:fecha_
        });

        // Devuelve los datos de la respuesta.
        return response.data;
    } catch (error) {
        // Manejar errores de la solicitud.
        console.error('Hubo un problema con la solicitud POST:', error);
        throw error; // Puedes lanzar el error para que sea manejado por quien llame a esta función.
    }
}
