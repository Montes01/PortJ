import './Section.css'
export const Section = () => {
  const abrirFacebook = () => {
    window.open('https://www.facebook.com/jhonwilmar.ortiz.7?mibextid=LQQJ4d', '_blank');
  };

  const abrirInstagram = ()=>{
    window.open('https://instagram.com/jhon__w7')
  };

  return (
    <section>
        <div className="box1">
        <h2>hello it's Me</h2>
        <h1>Jhon Wilmar </h1>
        <h2>and i am a <font color="aqua">frontEnd|</font> </h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, facilis. Vel eveniet alias magni eum magnam perspiciatis officia incidunt, deserunt earum, a, dolorum libero </p>
        <div className='images'>
          <img className='img1' onClick={abrirFacebook} src="https://cdn-icons-png.flaticon.com/128/2168/2168281.png" alt="" />
          <img className='img3' onClick={abrirInstagram} src="https://cdn-icons-png.flaticon.com/128/717/717392.png" alt="" />
        </div>
        </div>

        <div className="box2">
          <img src="https://e1.pxfuel.com/desktop-wallpaper/798/35/desktop-wallpaper-goonzart-on-instagram-bart-simpson-bart-gucci.jpg" alt="" />
        </div>
    </section>
  )
}
