import React, {useState} from 'react';
import './Contact.css'

export default function Contact (){
    const [nombre,setNombre] = useState ('');

    const [correo,setCorreo] = useState ('');

    const [mensaje,setMensaje] = useState ('');

    const sendFormulario = ()=>{

        if (!nombre || !correo) {
            alert('Por favor, completa todos los campos antes de enviar el formulario.');
            return;
          }
        console.log("nombre enviado:", nombre );
        console.log("correo enviado:", correo );
        console.log("mensaje enviado:", mensaje );

        setNombre('');
        setCorreo('');
        setMensaje('');

    }


        return(
            <section className='contact'>
                <div className="containerInfo">
                <h1>Contacto
                    <hr/>
                </h1>
                <p>¡Estoy aquí para responder tus preguntas y colaborar contigo en proyectos emocionantes!</p>
                </div>
        
            <div className="containerFormu">
                <div className='form'>
                <label htmlFor="nombre" className='labelNombre'>Nombre: <hr className='hrFormulario'/> </label>
                <input 
                type="text" 
                placeholder='Ingresa tu nombre'
                id='nombre'
                value={nombre}
                onChange={(e)=> setNombre(e.target.value)}
                required
                />

                <label htmlFor="correo" className='labelCorreo'>Correo: <hr className='hrCorreo'/> </label>
                <input 
                type="email"
                id='correo'
                placeholder='Usuario@ejemplo.com'
                value={correo}
                onChange={(e)=> setCorreo(e.target.value)}
                required
                />

                <label htmlFor="mensaje" className='labelMensaje'>Mensaje: <hr className='hrFormulario'/> </label>
                <textarea 
                name="mensaje"
                id="mensaje"
                placeholder='Escribe un mensaje'
                value={mensaje}
                onChange={(e)=> setMensaje(e.target.value)}
                cols="30" 
                rows="4"
                />

                <button onClick={sendFormulario} className='send'>Enviar </button>
                </div>
            </div>
        </section>
        )
    }
