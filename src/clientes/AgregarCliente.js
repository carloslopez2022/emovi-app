import axios from 'axios'
import React, { useState } from 'react'
import { Await, useNavigate } from 'react-router-dom'

export default function AgregarCliente() {

    let Navegacion = useNavigate();
    const [clientes, setClientes]=useState ( {
        nombre: '',
        correo: '',
        celular: '',
        tipovehiculo: '',
        tiposervicio: '',
        fecha: '',
    } )
    const {nombre,correo,celular,tipovehiculo,tiposervicio,fecha}= clientes

    const onInputChange = (e)=> {

        setClientes( {...clientes, [e.target.name]: e.target.value } )
    }



const onSubmit = async (e) => {
    e.preventDefault();
    const urlBase = "http://localhost:8080/emobi-app/clientes";
    await axios.post(urlBase, clientes);

    Navegacion('/');
}


  return (
    <div className='container'>
        <div className='container text-center' style={{margin: "30px"}} >

            <h3>Agregar Cita</h3>
        </div>
        <form onSubmit={ (e)=> onSubmit(e) }>
            <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre</label>
                <input type="text" className="form-control" id="nombre" name='nombre' required= {true}  
                value={nombre}  onChange={ (e)=>onInputChange (e) }/>
                
            </div>
            <div className="mb-3">
                <label htmlFor="correo" className="form-label">Correo</label>
                <input type="text" className="form-control" id="correo" name='correo' required= {true}
                value={correo}  onChange={ (e)=>onInputChange (e) }/>
                
            </div>
            <div className="mb-3">
                <label htmlFor="celular" className="form-label">Celular</label>
                <input type="text" className="form-control" id="celular" name='celular' required= {true} 
                value={celular}  onChange={ (e)=>onInputChange (e) }/>
                
            </div>
            <div className="mb-3">
                <label htmlFor="tipovehiculo" className="form-label">Tipo de Vehiculo</label>
                <input type="text" className="form-control" id="tipovehiculo" name='tipovehiculo' required= {true} 
                value={tipovehiculo}  onChange={ (e)=>onInputChange (e) }/>
                
            </div>
            <div className="mb-3">
                <label htmlFor="tiposervicio" className="form-label">Tipo de  Servicio</label>
                <input type="text" className="form-control" id="tiposervicio" name='tiposervicio' required= {true}
                value={tiposervicio}  onChange={ (e)=>onInputChange (e) }/>
                
            </div>
            <div className="mb-3">
                <label htmlFor="fecha" className="form-label">Fecha Cita</label>
                <input type="text" className="form-control" id="fecha" name='fecha' required= {true}
                value={fecha}  onChange={ (e)=>onInputChange (e)}/>
                
            </div>
            <div className="text-center">
            <button type="submit" className="btn btn-warning btn-sm me-3">Agregar</button>
            <a href='/' className='btn btn-danger btn-sm'>Regresar</a>
            </div>
            </form>


    </div>
    )
}
