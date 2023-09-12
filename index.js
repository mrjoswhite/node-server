const listaDeTareas = [
    { indicador: 1, descripción: 'Hacer la compra', estado: 'pendiente' },
    { indicador: 2, descripción: 'Estudiar para el examen', estado: 'completada' },
    { indicador: 3, descripción: 'Salir a correr', estado: 'pendiente' }
  ];
  function añadirTarea(indicador, descripción, estado) {
    listaDeTareas.push({ indicador, descripción, estado });
  }
  
  function eliminarTarea(indicador) {
    listaDeTareas = listaDeTareas.filter(tarea => tarea.indicador !== indicador);
  }
  
  function completarTarea(indicador) {
    listaDeTareas.forEach(tarea => {
      if (tarea.indicador === indicador) {
        tarea.estado = 'completada';
      }
    });
  }
  añadirTarea(4, 'Lavar los platos', 'pendiente');
   