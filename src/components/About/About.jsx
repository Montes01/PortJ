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
         <h4>  <font color="aqua" >¡Hola!</font> Soy Jhon Wilmar Rueda, un desarrollador web apasionado con experiencia en (html, css, bases de datos, javascript y react) el cual le gusta la programacion, el deporte y ser barbero. Estoy aquí para ayudarte a crear soluciones web increíbles. Puedes contactarme en (jhonwilmar638@gmail.com). ¡Gracias por visitar mi página! </h4>
            <div className="containerProyects">
            <h2>Proyectos
                <hr className='hrProyect'/>
            </h2>
                <div className="proyect1">
                    <h3>BLEUX
                        <hr className="hrProyect1" />
                    </h3>
                    <img onClick={abrirProyect1} src={img} alt="" />
                    <p>Esta página se centra en promocionar un producto o servicio, destacando sus características y opciones de precios. La información proporcionada es de relleno ("Lorem ipsum"), pero la estructura general de la página sugiere su propósito de promoción y ventas.</p>
                </div>

                <div className="proyect2">
                    <h3>BLUEASY
                    <hr className="hrProyect2" />
                    </h3>
                    <img onClick={abrirProyect2} src={img2} alt="" />
                    <p>la página web "blueasy" es un sitio multipropósito con secciones que presentan información sobre servicios, un portafolio de imágenes, información de contacto y testimonios. Sin embargo, el contenido actual es principalmente de relleno.</p>
                </div>

                <div className="proyect3">
                    <h3>GIFS
                    <hr className="hrProyect3" />

                    </h3>
                    <img onClick={abrirProyect3} src={img3} alt="" />
                    <p>esta página llamada "Gifs" permite a los usuarios buscar y ver GIFs, mostrando tanto GIFs tendencia como resultados de búsqueda en dos secciones separadas. </p>
                </div>

            </div>

        </section>
       

        
    )

}