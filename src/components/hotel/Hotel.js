import React from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2';
import EditHotel from './EditHotel';

const Hotel = ({hotel, deleteHotelId}) => {

    const { id, name, phone, address, description } = hotel;

    const submitDelete = id => {
        Swal.fire({
            title: '¿Estas seguro?',
            text: 'Un hotel que se elimina no se puede recuperar',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if(result.isConfirmed){
                try {
                    deleteHotelId(id);
                    Swal.fire(
                        'Eliminado!',
                        'El hotel fue eliminado',
                        'success'
                    )
                } catch (error) {
                    console.log(error)
                }
            }
        });
    }

    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card">
                <img className="card-img-top" src="https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg"></img>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <h6 className="card-text">Telefono: {phone}</h6>
                    <h6 className="card-text">Dirección: {address}</h6>
                    <div className="d-flex flex-row-reverse">
                        <button 
                            type="button" 
                            className="btn btn-danger mt-2" 
                            onClick={ () => submitDelete(id) }>
                        Borrar</button>      
                        <Link to={`/edit/${id}`} className="btn btn-primary d-block d-md-inline-block mx-2 mt-2">
                            Editar
                        </Link>
                    </div>                   
                </div>

            </div>
        </div>
        
    );
}
 
export default Hotel;