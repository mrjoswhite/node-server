const listaDeTareas = [
    { indicador: 1, descripción: 'Hacer la compra', estado: 'pendiente' },
    { indicador: 2, descripción: 'Estudiar para el examen', estado: 'completada' },
    { indicador: 3, descripción: 'Salir a correr', estado: 'pendiente' }
  ];
  function añadirTarea(indicador, descripción, estado) {
    return new Promise((resolve, reject) => {
      listaDeTareas.push({ indicador, descripción, estado });
      resolve();
    });
  }
  
  function eliminarTarea(indicador) {
    return new Promise((resolve, reject) => {
      listaDeTareas = listaDeTareas.filter(tarea => tarea.indicador !== indicador);
      resolve();
    });
  }
  
  function completarTarea(indicador) {
    return new Promise((resolve, reject) => {
      listaDeTareas.forEach(tarea => {
        if (tarea.indicador === indicador) {
          tarea.estado = 'completada';
        }
      });
      resolve();
    });
  }
  
  