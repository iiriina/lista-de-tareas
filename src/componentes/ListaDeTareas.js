import React, { useState } from 'react';
import TareaFormulario from './TareaFormulario';
import Tarea from './Tarea';
import '../hojas-de-estilo/ListaDeTareas.css';

function ListaDeTareas(){

  const [tareas, setTareas] = useState([]);
  /* creamos el estado tareas que va a contener
  * el array de objetos con información de tareas que
  * hayamos creado. setTareas es la funcion que me permite
  * cambiar el estado tareas. Y el estado inicial es un array vacio
  * [] que se le pasa a useState.
  * aca guardo el array de objetos con info tarea porque acá es donde voy a crear
  * abajo la lista de COMPONENTES Tarea. */

  const agregarTarea = tarea => {
    /* recibe un nuevo objeto tarea para agregar al array
    que le va a pasar por parametro TareaFormulario
     */
    if (tarea.texto.trim()){
      /* si no tiene el texto vacio */
      tarea.texto = tarea.texto.trim();
      /* le saco espacios extra adelante y atras del texto ya que estamos */

      const tareasActualizadas = [tarea, ...tareas];
      /* la tarea es el objeto nuevo este que me pasaron por parametro,
      y ...tarea me agrega separados (o sea no adentro del array
      si no que como elementos de este como si le hubiera agregado
      tarea al inicio nomas), los elementos que tenia antes en el array
       */

      setTareas(tareasActualizadas);
      /* y ahora asigno este nuevo array cambiado al estado.
      no puedo usar metodos para modificar el array de tareas
      porque para actualizar el estado necesito si o si usar
      la función con el set, si hiciera push, pop,
      no se actualizaria el estado.
      por eso siempre que quiera agregar o quitar algo del array de objetos
      voy a tener que crear un array nuevo con las modificaciones,
      y asignarlo al estado con set.
       */
    }
  }

  const eliminarTarea = id => {
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
    /* basicamente deja en el array todas las que tengan array distinto
    a la que quiero eliminar
     */
    setTareas(tareasActualizadas);
  }

  const completarTarea = id => {
    const tareasActualizadas = tareas.map(tarea => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada;
      }
      return tarea;
    }
  );
    setTareas(tareasActualizadas);


  }
  return (
    <> {/* si no queres introducir nuevos divs que no tengan sentido,
     ya que tenes el estilo puesto en algun lugar y esta parte la usas
     solo para refactorizar (por eejemplo). Podes usar las etiquetas vacias
     llamadas fragmentos <> </>*/}
      <TareaFormulario onSubmit={agregarTarea}/>
      {/* le paso la funcion agregarTarea para que se llame
      en la función  de tarea formulario cuando apreté el boton agregar tarea,
      ahi se creó el nuevo objeto con la informacion de
      tarea y llamo a este agregarTarea
      que lo agrega en el array que tengo aca de estado. */}

      <div className='tareas-lista-contenedor'>
        {/* lista de tareas contiene, el formulario para ingresar texto
        y el boton para submitearlo, y además una lista de tareas
        que son las que se van a ir agregando conforme al usuario apriete
        el boton de agregar Tarea */}

        {
          tareas.map( tarea =>
            <Tarea
              key = {tarea.id}
              id = {tarea.id}
              texto = {tarea.texto}
              completada = {tarea.completada}
              completarTarea = {completarTarea}
              eliminarTarea = {eliminarTarea}
            />
          )
        }
      </div>
    </>
  );
}

export default ListaDeTareas;