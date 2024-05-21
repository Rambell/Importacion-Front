import React from 'react'
import { Navbar } from './components/Navbar'
import { ContenidoFotoer } from './components/ContenidoFotoer'
import {PresentacionProductos} from './components/PresentacionProductos'
import { useLocation } from 'react-router-dom';

export const Layout = ( { children } ) => {

  const location = useLocation();
  const hideNavbarPaths = ['/productos']; // Rutas donde no se debe mostrar el Navbar
  const hideImagePaths = ['/productos'];

 return (
    <div>
      {!hideNavbarPaths.includes(location.pathname) && (
        <>
          <header className='content-header'>
            <Navbar />
          </header>
          <PresentacionProductos />
        
          <div className='imgBarco'>
            <div className='overlay'></div>
          </div>
        </>
      )}
      {children}
      {!hideNavbarPaths.includes(location.pathname) &&
        <footer>
          <ContenidoFotoer />
        </footer>}
    </div>
  );  
}

/*
return (
  <div>
    {!hideNavbarPaths.includes(location.pathname) &&
    <header className='content-header'>
       <Navbar />
    </header>}
    <PresentacionProductos />
    {!hideImagePaths.includes(location.pathname) && (
      <div className='imgBarco'>
        <div className='overlay'></div>
      </div>
    )}
    {children}
    {!hideNavbarPaths.includes(location.pathname) &&
    <footer>
      <ContenidoFotoer />
    </footer>}
  </div>
);  
}

*/