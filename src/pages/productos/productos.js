import { useEffect, useState } from "react"
import { fetchProducto } from "../../api/dataService"
import 'devextreme/data/odata/store';
import DataGrid, { Column } from 'devextreme-react/data-grid';
import {useSearchParams} from "react-router-dom"  


export default function Group() {
  // Se declara un estado llamado 'producto' utilizando useState.
  const [producto, setproducto] = useState();
  const [Param]=useSearchParams();
  const miToken=Param.get('token');

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
          productName: data.productName, 
          productPrice:data.productPrice,   
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
        <Column dataField="productName" />
         {/* Define la segunda columna con el campo 'name'. */}
        <Column dataField="productPrice" />
        
      </DataGrid>

  )
}