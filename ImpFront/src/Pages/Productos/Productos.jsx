import React from 'react'
import { useState, useEffect } from 'react'
import { NavProduct } from '../../components/NavProduct'
import './productos.css'
import { NavLink } from "react-router-dom"
import { API_BACK } from '../../Api'
import Espana from '../../assets/img/espana.png'
import Belgica from '../../assets/img/belgica.png'
import China from '../../assets/img/china.png'
import Argentina from '../../assets/img/Argentina.png'
import Escocia from '../../assets/img/Escocia.png'
import Italia from '../../assets/img/Italia.png'
import Japon from '../../assets/img/Japon.png'
import Peru from '../../assets/img/Peru.png'


export const Productos = () => {

  const [productos, setProductos] = useState([]);

  const getFlagImage = (origen) => {
    switch (origen) {
      case 'España':
        return Espana;
      case 'Belgica':
        return Belgica;
      case 'China':
        return China;
      case 'Argentina':
        return Argentina;
      case 'Escocia':
        return Escocia;
      case 'Italia':
        return Italia;
      case 'Japon':
        return Japon;
      case 'Perú':
        return Peru;
      default:
        return null;
    }
  };

  function separadorDeMiles(numero) {
    return numero.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
 
  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await fetch(`${API_BACK}productos/detalle_productosAll/`);
        if (response.ok) {
          const data = await response.json();
          setProductos(data);
        } else {
          console.error('Error al obtener los productos:', response.statusText);
        }
      } catch (error) {
        console.error('Error al obtener los productos:', error);
      }
    };

    fetchProductos();
  }, []);

  return (
    <div style={{background:'rgb(225,235,245)', paddingBottom:'50px'}}>
      <NavProduct ></NavProduct>
      <div className='content-Producto'>
        <NavLink to="/" ><button className='btn-regresarProduct'><i className="bi bi-caret-left-fill"></i></button></NavLink>
      </div>
      <section className='section-card'>
      <h2 style={{color:'#27547b'}}>Revisa nuestro catalogo de productos</h2>
        <div className='content-card-product'>
          {productos.map(producto => (
            <div key={producto.id_produc} className="card">
              <div className="card-img">
                {producto.imagenes.map(imagen => (
                  <img key={imagen.url_imagen} src={imagen.url_imagen} alt={imagen.nombre_archivo} className="card-img" />
                ))}
              </div>
              <div clasname="card-content">
              <h3 className='card-title'>
                  {producto.nombre_produc}
                  {getFlagImage(producto.origen) && (
                    <img className='card-band' src={getFlagImage(producto.origen)} alt={producto.origen} width={30} />
                  )}
                  <span className='card-precio'>${separadorDeMiles(producto.precio)}</span>
                </h3>
                <p className='card-text'> {producto.describ_produc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section style={{background:'#E1EBF5'}}>
        <div>
          
        </div>
      </section>
    </div>
  )
}



