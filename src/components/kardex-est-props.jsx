function KardexEstudianteProps({ nombre, carrera, materia, notas, edad }) {
   //const nombre = "Pedro Sanchez";
  //  const Carrera = "Ingeniería de Sistemas"; 
  //  const materia = "Diseño Web II";
  //  const nota1 = 18;
  //  const nota2 = 20;
  //  const nota3 = 15;
  //  const promedio = (nota1 + nota2 + nota3) / 3;   
  //  const edad = 20;

   //const promedio = (notas.reduce((acc, nota) => acc + nota, 0)) / notas.length;

    return (
      <>
        <div className="card">
            <div className="card-header">{nombre}</div>
            <div className="card-body">
                <h5 className="card-title">Kardex del Estudiante</h5>
                <p className="card-text">Carrera: {carrera}</p>
                <p className="card-text">Materia: {materia}</p>
                <p className="card-text">Notas: {notas[0]},{notas[1]},{notas[2]}</p>
                <p className="card-text">Promedio: {notas.reduce((acc, nota) => acc + nota, 0)/ notas.length} </p>
                <p className="card-text">Edad: {edad}</p>

            </div>
         </div>
      </>
    )
}
export default KardexEstudianteProps;
