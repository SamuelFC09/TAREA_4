import React, {useState} from 'react';

function Asistencia({nombre, asistencias}) {
const [numAsistencias, setNumAsistencias] = useState(asistencias); 

    return (
      <>
          <div>
              <h2>Asistencia de {nombre}</h2>
                <button onClick={() => setNumAsistencias(numAsistencias + 1)}>Agregar Asistencia</button>
                <button onClick={() => setNumAsistencias(numAsistencias - 1)}>Quitar Asistencia</button>
                <p>Número de asistencias: {numAsistencias}</p> 
          </div>
      </>
    );
}
export default Asistencia;