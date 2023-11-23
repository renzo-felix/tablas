import { useEffect, useState } from "react"
import { fetchProducto } from "../../api/dataService3"
import 'devextreme/data/odata/store';
import DataGrid, { Column } from 'devextreme-react/data-grid';
import Cookies from 'js-cookie';



export default function Group() {
  // Se declara un estado llamado 'producto' utilizando useState.
  const [producto, setproducto] = useState();
 const miToken=Cookies.get('token_')
 {
}
  // Utiliza useEffect para realizar la solicitud a la API cuando el componente se monta.
  useEffect(() => {
    fetchProducto(miToken)
      .then((response) => {
        // Extrae los datos de respuesta de la solicitud.

        // Registra los datos de grupos en la consola.
        console.log(response);

        // Modifica el estado 'producto' transformando los datos de grupos.
        setproducto(response.map(data => ({
          id: data.id,
          libre:data.libre,
          capacidad: data.capacidad
            
        })))
      })
      .catch((error) => {
        console.log(error);
      })
  }, []); // El [] como segundo argumento asegura que useEffect se ejecute solo una vez al montar el componente.

  return (
      <DataGrid
        // Establece la fuente de datos para el DataGrid como 'producto'.
        dataSource={producto}
        
        // Muestra bordes alrededor de las celdas de la tabla.
        showBorders={true}
      >
        {/* Define la primera columna con el campo 'id' y un ancho de 50 píxeles. */}
        <Column dataField="id" width={50} />
        
        {/* Define la segunda columna con el campo 'name'. */}
        <Column dataField="libre" />
        {/* Define la segunda columna con el campo 'name'. */}
        <Column dataField="capacidad" />
        
        
      </DataGrid>

  )
}