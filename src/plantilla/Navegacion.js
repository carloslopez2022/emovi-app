import React from 'react'
import { Link } from 'react-router-dom'

export default function Navegacion() {
  return (
    <div className='container'>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Emobi</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Inicio</a>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/agregar">Agregar Cita</Link>
        </li>
        
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Salir</a>
        </li>
      </ul>
    </div>
  </div>
</nav>


    </div>
  )
}
