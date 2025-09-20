import React, {useState} from 'react';

function Asistencia2({nombre, asistencias}) {
const [numAsistencias, setNumAsistencias] = useState(asistencias); 



    // agregar asistencia
    const agregarAsistencia = () => {
        setNumAsistencias(numAsistencias + 1);
    };
    // quitar asistencia
    const quitarAsistencia = () => {
        setNumAsistencias(numAsistencias - 1);
    };
    return (
        <>
            <div>
                <h2>Asistencia de {nombre}</h2>
                <button onClick={agregarAsistencia}>Agregar Asistencia</button>
                <button onClick={quitarAsistencia}>Quitar Asistencia</button>
                <p>Número de asistencias: {numAsistencias}</p>
            </div>
        </>
    );
}
export default Asistencia2;