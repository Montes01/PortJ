import React from 'react';
import './About.css';
const img ='../../public/images/bleux.png'
const img2 ='../../public/images/blueasy.png'
const img3 ='../../public/images/gifs.png'


export default function About () {
    const abrirProyect1 = ()=>{
            window.open('https://paginafalla.netlify.app')
        }

    const abrirProyect2 = ()=>{
        window.open('https://easypagina.netlify.app')
    }
    const abrirProyect3 = ()=>{
        window.open('https://gifsapi.netlify.app')
    }
    return(
        <section className='sectionAbout'>
            <p>¡Hola! Soy Jhon Wilmar Rueda, un desarrollador web apasionado con experiencia en (html, css, bases de datos, javascript y react) el cual le gusta la programacion, el deporte y ser barbero. Estoy aquí para ayudarte a crear soluciones web increíbles. Puedes contactarme en (jhonwilmar638@gmail.com). ¡Gracias por visitar mi página!</p>
            <div className="containerProyects">
            <h2>Proyectos</h2>
                <div className="proyect1">
                    <h3>BLEUX</h3>
                    <img onClick={abrirProyect1} src={img} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, possimus similique. Enim et doloremque nisi est, accusantium quam veritatis obcaecati velit a, vero officiis aliquid ipsam itaque mollitia minima laboriosam.</p>
                </div>

                <div className="proyect2">
                    <h3>BLUEASY</h3>
                    <img onClick={abrirProyect2} src={img2} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, possimus similique. Enim et doloremque nisi est, accusantium quam veritatis obcaecati velit a, vero officiis aliquid ipsam itaque mollitia minima laboriosam.</p>
                </div>

                <div className="proyect3">
                    <h3>GIFS</h3>
                    <img onClick={abrirProyect3} src={img3} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, possimus similique. Enim et doloremque nisi est, accusantium quam veritatis obcaecati velit a, vero officiis aliquid ipsam itaque mollitia minima laboriosam.</p>
                </div>

            </div>

        </section>
       

        
    )

}