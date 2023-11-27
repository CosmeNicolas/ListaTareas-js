/* Crea una web con bootstrap y js, que contenga un botón input donde se pueda cargar una tarea y un botón que al ser presionado agregue dicha tarea a una lista, cada elemento ingresado en la lista debe poder ser eliminado con un botón creado para ese fin.  */


//funcion para agregar tarea 

const agregarTarear = ()=>{
  //traemos el valor del input
  const valorTarea = document.getElementById('tareaInput').value;
  const tareaAgregada = valorTarea
  console.log(tareaAgregada)

  //si la tarea no es un argumento,
  if(tareaAgregada !== ''){
    const listaTareas = document.getElementById('listaTareas');

    //creamos el elemento li 
    const elementoLista = document.createElement('li');
    //agregamos estilo a la clase
    listaTareas.className = 'letras-tareas m-2 '
    //agregamos el elemento li de la tarea
    elementoLista.innerText = tareaAgregada;
   

    //creamos el boton para agregar tarea
    const btnEliminar = document.createElement('button');
    btnEliminar.innerText = 'Eliminar';
    btnEliminar.className = ' btn btn-danger my-2 letras-tareas'

    //creamos la funcion eliminar tarea;
    btnEliminar.addEventListener('click', function () {
      elementoLista.remove();
    })

    //Agregar boton de eliminar Tarea
    elementoLista.appendChild(btnEliminar);

    //Agregar la tarea en un li
    listaTareas.appendChild(elementoLista);

    //Limpiar el input despues de agregar la tarea
    tareaInput.value = ''
    console.log(tareaAgregada)

  }

}

//El evento click paraagregar la tarea al hacer click en el boton 
document.getElementById('btn-agregar').addEventListener('click', agregarTarear)


