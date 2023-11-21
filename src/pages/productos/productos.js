import { useEffect, useState } from "react"
import { fetchProducto } from "../../api/dataService"
import 'devextreme/data/odata/store';
import DataGrid, { Column } from 'devextreme-react/data-grid';



const miToken ="eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJyZW56b3FxcXFvcUBlamVtcGxvMTExLmNvbSIsImlhdCI6MTcwMDU0NjkwMCwiZXhwIjoxNzAwNTQ4MzQwfQ.I6TsTrAAiYRQGkJuja3_UbwD-im6kZ6tWeFd6htomztjC5W7DHQi_oyeTLP_8W1-IcCsgfDN95T2StcrtLUIxQ"
export default function Group() {
  // Se declara un estado llamado 'producto' utilizando useState.
  const [producto, setproducto] = useState();

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