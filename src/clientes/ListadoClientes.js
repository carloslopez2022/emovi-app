import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function ListadoClientes() {

    const urlBase = "http://localhost:8080/emobi-app/clientes";

    const[clientes, setClientes] = useState([]);
    useEffect(()=> {
        cargarClientes();

    },[]);

    const cargarClientes = async()=>{ 
        const respuesta = await axios.get(urlBase);
        console.log("Respuesta carga clientes");
        console.log(respuesta.data);
        setClientes(respuesta.data);


    } 

    const eliminarCliente = async (id) => {
        await axios.delete(`${urlBase}/${id}`);
        cargarClientes();


    }
    return (
        <div className="container">
        <div className="container text-center" style={{margin:"30px"}}>
        <h1>AGENDAMIENTO DE CITAS</h1>

        </div>

        <table className="table table-striped table-hover aling-middle ">
    <thead className="table-dark">
    <tr>
        <th scope="col">Id</th>
        <th scope="col">Nombre</th>
        <th scope="col">Correo</th>
        <th scope="col">Celular</th>
        <th scope="col">Tipo de Vehiculo</th>
        <th scope="col">Tipo de Servicio</th>
        <th scope="col">Fecha de Cita</th>
        <th>  </th>
    </tr>
    </thead>
    <tbody>
        {
            clientes.map((cliente, indice)=>(

        
    <tr key={indice}>
        <th scope="row"> {cliente.id} </th>
        <td>{cliente.nombre}</td>
        <td>{cliente.correo}</td>
        <td>{cliente.celular}</td>
        <td>{cliente.tipovehiculo}</td>
        <td>{cliente.tiposervicio}</td>
        <td>{cliente.fecha}</td>

        <td className='text-center'>
            <div>
                <Link to={`/editar/${cliente.id}`}
                className='btn btn-warning btn-sm me-3'>Editar </Link>
            
                <Link to={`/eliminar/${cliente.id}`}
                    className='btn btn-danger btn-sm'
                    >
                    Eliminar
                </Link>
            </div>
            
            
            


        </td>
    </tr>
            ))
        }
    </tbody>
    </table>

    </div>
    
  )
}
