import React, { useEffect, useState } from 'react';
import './Compras.css'

async function getProduct() {
  const response = await fetch('https://fakestoreapi.com/products');
  const data = await response.json();
  return data;
}

export const Compras = () => {
  const [productos, setProductos] = useState([]);
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const products = await getProduct();
      setProductos(products);
    }

    fetchProducts();
  }, []);

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  return (
    <section className='Shop'>
      <div className='Carrito'>
        <h2>Carrito de Compras</h2>
        <ul>
          {carrito.map((item, index) => (
            <li key={index}>{item.title}</li>
          ))}
        </ul>
      </div>
      {productos.map((el, index) => (
        <div className='Products' key={index}>
          <h1>{el.title}</h1>
          <img src={el.image} alt="" />
          <p>{el.description}</p>
          <button onClick={() => agregarAlCarrito(el)}>Agregar al carrito</button>
        </div>
      ))}
    </section>
  );
};