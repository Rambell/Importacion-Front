import React from 'react'
import Ship from '../assets/img/ppn.png'
import Jamon from '../assets/img/jamon.jpg'
import Espana from '../assets/img/espana.png'
import Cerveza from '../assets/img/cervezabel.jpg'
import Belgica from '../assets/img/belgica.png'
import TrigosSarra from '../assets/img/trigosSarra.jpg'
import China from '../assets/img/china.png'
import { NavLink} from "react-router-dom"

export const Home = () => {
  return (
    <div>
      <section className='home-contenido'>
          <img className='content-imgh' src={Ship} alt="logo" width={400} />
          <div className='content-p'>
            <p className='parrafo-home'>
              Esfuerzo unico para generar lazos con productores de todo el mundo y asi llevar
              productos unicos hasta tu mesa.                 
            </p>
          </div>    
      </section>
      <section className='section-home'>
        <div className='pais-productos'>
          <h2 >Recorremos el mundo para entregarte productos de calidad</h2>
        </div>
        <div className='content-card'>
          <div className='card'>
            <img className='card-img' src={Jamon} alt="serrano"/>
            <div className='card-content'>
              <h3 className='card-title'>Jamón Serrano <img className='card-band' src={Espana} alt="espana" width={200}/></h3>
              <p className='card-text'>Deléitate con el auténtico sabor, con nuestro exquisito jamón serrano.</p>
            </div>
          </div>
          <div className='card'>
            <img className='card-img' src={Cerveza} alt="cerveza" />
            <div className='card-content'>
              <h3 className='card-title' >Cerveza Belga <img  className='card-band' src={Belgica} alt="espana" width={200}/></h3>
              <p className='card-text'>Una obra maestra artesanal que despierta los sentidos y cautiva el alma.</p>
            </div>
          </div>
          <div className='card'>
            <img className='card-img' src={TrigosSarra} alt="serrano"/>
            <div className='card-content'>
              <h3 className='card-title'>Trigo Sarraceno <img className='card-band' src={China} alt="espana" width={200}/></h3>
              <p className='card-text'>Es un tesoro de vitalidad y energía que despierta los sentidos.</p>
            </div>
          </div>
        </div>
        <div>
          <h2 className='pais-productos' style={{paddingTop:'20px'}}>Revisa nuestro catalogo completo de los productos</h2>
          <NavLink to="/productos" className='pais-productos' style={{textDecoration:'none'}}><button className='btn-vProductos'>Ver Productos</button></NavLink>
        </div>
        <div className='home-parte3'>
          <h2 className='pais-productos' style={{paddingTop:'20px'}}>Trabajamos a la par y en regla con el Servicio Naciona de Aduanas</h2>
          <div className='conten-home3'>
            <div className='content-p3'>
              <p className='parrafo-home3'>
              El Servicio Nacional de Aduanas cumple funciones claves para el desarrollo del país, teniendo un rol preponderante en materia de comercio exterior, 
              especialmente, en la facilitación y agilización de las operaciones de importación y exportación, a través de la simplificación de trámites y procesos aduaneros.            
              </p>
            </div> 
            <img className='content-imgh3' src={Ship} alt="logo" width={400} />
          </div>
          
        </div>
      </section>
    </div>
  )
}
