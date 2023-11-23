import axios from 'axios';

// Definición de la URL base para las solicitudes al servidor.
const BASE_URL = "https://proyectodbp-production.up.railway.app";
/*
// Función asincrónica para recuperar grupos desde el servidor.
export const fetchGroups = async () => {
    // Utiliza Axios para hacer una solicitud GET a la URL de grupos.
    return axios.get(`${BASE_URL}/producto`)
    
}*/


// Función asincrónica para recuperar grupos desde el servidor.
export const fetchProducto = async (token) => {
    try {
        // Utiliza Axios para hacer una solicitud GET a la URL de grupos.
        const response = await axios.get(`${BASE_URL}/mesa`, {
            headers: {
                Authorization: `Bearer ${token}` // Agrega el token al encabezado de autorización
            }
        });

        // Devuelve los datos de la respuesta.
        return response.data;
    } catch (error) {
        // Manejar errores aquí
        console.error('Error al recuperar mesas:', error);
        throw error;
    }
};


