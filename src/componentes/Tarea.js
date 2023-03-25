import React from 'react';
import '../hojas-de-estilo/Tarea.css';
import { AiOutlineCloseCircle } from "react-icons/ai";

function Tarea ({id, texto, completada, completarTarea, eliminarTarea}) {

  return (
    <div className= {completada ? 'tarea-contenedor completada': 'tarea-contenedor'}>
      {/* si es true le asignamos las dos clases, si es false le asignamos solo tarea-contenedor */}

      <div className='tarea-texto'
           onClick={() => completarTarea(id)}>
        {/* cuando alguien toque el texto de la tarea, vamos a tener
        que marcar a la tarea como completada.
        le agrego un eventHandler onClick que va a llamar
        a una funcion flecha (no puedo poner directamente completarTarea porque
        tiene argumentos y si le paso argumentos a la funcion seria como llamarla
        de una y no queremos eso, queremos usar la función cuando
        alguien haga click. entonces si alguien hace click, se llama a
        la funcion anonima que hace la llamada a completarTarea con el id */}

        {texto} {/* el texto que me ingresen como prop se va a mostrar */}
      </div>

      <div className='tarea-icono'
           onClick={() => eliminarTarea(id)}>
        {/* cuando alguien clickee en el icono de cerrar
        vamos a querer que se elimine esta tarea.
        Le paso el id porque en el array de objetos de tarea, tenemos que saber
        el id contenido en que objeto es el que tenemos que eliminar.
        asi cuando se elimina el objeto del array, se actualiza
        porque como es el estado se re-renderiza creandose los componentes
        ahora con el array que no contiene a la tarea que eliminamos.
        le agrego un eventHandler onClick que va a llamar
        a una funcion flecha (no puedo poner directamente eliminarTarea porque
        tiene argumentos y si le paso argumentos a la funcion seria como llamarla
        de una y no queremos eso, queremos usar la función cuando
        alguien haga click. entonces si alguien hace click, se llama a
        la funcion anonima que hace la llamada a eliminarTarea con el id */}

        <AiOutlineCloseCircle className='tarea-icono'/> {/* este es el iconito de X que se va a agregar a la tarea */}
      </div>
    </div>
  );
}

export default Tarea;