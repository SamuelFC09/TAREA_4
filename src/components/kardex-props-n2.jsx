import React, {useState} from 'react';
function KardexPropsN2({datos}) {
    const {datosPersonales, datosAcademicos} = useState(datos);
    
    return (
        <>
        <div className="card">
            <div className="card-header">
                {datos.nombre}
            </div>
            <div className="card-body">
                <h5 className="card-title">Kardex del Estudiante</h5>
                <p className="card-text">Carrera: {datos.carrera}</p>
                <p className="card-text">Materia: {datos.materia}</p>
                <p className="card-text">Edad: {datos.edad}</p>
            </div>
            </div>
        </>
    );


}

export default KardexPropsN2;