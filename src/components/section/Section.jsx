import './Section.css'
export const Section = () => {
  const abrirFacebook = () => {
    window.open('https://www.facebook.com/jhonwilmar.ortiz.7?mibextid=LQQJ4d', '_blank');
  };

  const abrirInstagram = ()=>{
    window.open('https://instagram.com/jhon__w7')
  };

  return (
    <section className='sectionInicio'>
        <div className="box1">
        <h2><font color="aqua">hola</font> yo soy </h2>
        <h1>Jhon Wilmar </h1>
        <p> Soy un desarrollador web con experiencia en la creación de aplicaciones web<font color="aqua">.</font>  Mi objetivo es combinar creatividad y tecnología para proporcionar soluciones web innovadoras y atractivas<font color="aqua">.</font> </p>
        <div className='images'>
          <img className='img1' onClick={abrirFacebook} src="https://cdn-icons-png.flaticon.com/128/2168/2168281.png" alt="" />
          <img className='img3' onClick={abrirInstagram} src="https://cdn-icons-png.flaticon.com/128/717/717392.png" alt="" />
        </div>
        </div>

        <div className="box2">
          <img src="https://wallpapercave.com/wp/wp4671964.jpg" alt="" />
        </div>
    </section>
  )
}
