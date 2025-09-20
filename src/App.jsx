import React from 'react';
import HolaMundo from './components/holaMundo';
import KardexEstudiante from './components/kardex-est';
import KardexEstudianteProps from './components/kardex-est-props';
import Asistencia from './components/asistencia';
import Asistencia2 from './components/asistencia2';
import KardexPropsN2 from './components/kardex-props-n2';

function App() {
  const estudiantes=[
      {id:1, "nombre":"Santi Peinado", "carrera":"Ingeniería de Sistemas", "edad":21},
      {id:2, "nombre":"San Flores", "carrera":"Ingeniería de Sistemas", "edad":22},
      {id:3, "nombre":"Dibu Martinez", "carrera":"Ingeniería de Sistemas", "edad":23},
      
      ];
  return (
    <>
      <h1>Clase Virtual 15 de septiembre</h1>
      <KardexEstudiante />
     <KardexEstudianteProps
     nombre="Nicolas Maduro"
      carrera="Ingeniería de Sistemas"
      materia="Diseño Web II"
      notas={[9, 10, 11]}
      edad={20}
     />
     <br />
      <Asistencia nombre="Santi Peinado" asistencias={10} />
      <Asistencia nombre="San Flores" asistencias={5} />
      <Asistencia nombre="Dibu Martinez" asistencias={8} />
      <br />
      <br />
      <Asistencia2 nombre="Santi Peinado" asistencias={10} />
      <Asistencia2 nombre="San Flores" asistencias={5} />
      <Asistencia2 nombre="Dibu Martinez" asistencias={8} />
     
      <h1>Lista de estudiantes</h1>
      
       
      {estudiantes.map((estudiante) => (
        <KardexPropsN2 datos={estudiante} key={estudiante.id} />
      ))}


    </>
  );
}
 
export default App;