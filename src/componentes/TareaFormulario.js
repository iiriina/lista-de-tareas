import React, {useState} from 'react';
import '../hojas-de-estilo/TareaFormulario.css';
import {v4 as uuidv4} from 'uuid';

function TareaFormulario (props) {

  const[input, setInput] = useState('');
  /* creamos un estado para contener lo que escribio el usuario en el
  formulario
   */

  const manejarCambio = e => {
    setInput(e.target.value);
    /* e.target.value nos permite extraer el valor
    * del campo de texto que ingresó el usuario.
    * y con setInput actualizo a ese valor el estado
    * input que tiene el texto actualizado. */
  }

  const manejarEnvio = e => {
    /* esta funcion se va a llamar cuando se haga click
    sobre el boton agregar tarea, recibe ese evento e
    del click que se hizo
     */

    e.preventDefault();
    /* esta linea hace que no se actualice la pagina cuando
    enviemos el formulario.
     */

    /* creo un nuevo objeto tarea con la informacion
    de la nueva tarea que vamos a agregar a la lista
    de tareas
     */
    const tareaNueva = {
      id: uuidv4(), /* id aleatorio que no se repite jamás */
      texto: input, /* le asignamos el input actual como texto de la tarea */
      completada:false /* inicializa con completada = false */
    }
    props.onSubmit(tareaNueva);
    /* este prop onSubmit contiene agregarTarea de ListaDeTareas */
  }

  return(
    <form
      className='tarea-formulario'
      onSubmit={manejarEnvio}>
      {/* El form contiene un input que es el cuadro de texto donde el usuario
      va a ingresar el texto de su tarea, y un boton para submittearla, es decir
      el boton agregar tarea
      onSubmit se va a ejecutar cuando alguien le haga click al boton
      agregar Tarea */}

      <input
        className='tarea-input'
        type='text'
        placeholder='Escribe una tarea'
        /* placeholder es el texto en grisesito que aparece
        antes de que vos ingreses un valor. Despues cuando ingresas algo
        desaparece
         */
        name='texto'
        /* el atributo name es un como un id usado para identificar un dato de un formulario
        en un servidor o base de datos.
         */
        onChange={manejarCambio} /* para ir guardando el nuevo caracter
         cada vez que el usuario ingrese un caracter o borre uno */
      />
      <button className='tarea-boton'>
        Agregar Tarea
      </button>
      {/* el boton tiene como texto Agregar Tarea */}

    </form>
  );

}
export default TareaFormulario;