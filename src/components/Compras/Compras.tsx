import React, { useEffect, useState, useContext } from 'react';
import './Compras.css'
import { Context, ContextProvider } from '../../Contexts/ContextoCarrito';

async function getProduct() {
  const response = await fetch('https://fakestoreapi.com/products');
  const data = await response.json();
  return data;
}

export const Compras = () => {
  const [productos, setProductos] = useState(new Array<{}>);
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const products = await getProduct();
      setProductos(products);
    }

    fetchProducts();
  }, []);
  const context = useContext(Context);
const addProductToCart = () => {
  context.setCounter(context.counter + 1);
}



  return (
    <ContextProvider>

      <section className='Shop'>

        {productos.map((el, index) => (
          <div className='Products' key={index}>
            <h1>{el.title}</h1>
            <img src={el.image} alt="" />
            <div>
              <p>{el.description}</p>
            </div>
            <button onClick={addProductToCart}>Agregar al carrito</button>
          </div>
        ))}

        <section className='carrito'>
          <span>{context.counter}</span>
          <img src="/public/images/carrito.png" className='imagenCarrito' alt="" />
        </section>
      </section>
    </ContextProvider>
  );
};