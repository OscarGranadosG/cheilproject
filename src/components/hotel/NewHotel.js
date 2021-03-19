import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2';

import { createHotel, dataCity } from '../actions/api';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const NewHotel = () => {

    const [hotel, sethotel] = useState({
        name: '',
        phone: '',
        address: '',
        description: '',
        city_id: '1'
    });

    const {name,phone,address,description,city_id} = hotel;

    const [cities, setcities] = useState([]);

    useEffect(() => {

        const getCities = async () => {
            try {
                const dataCities = await dataCity();
                setcities(dataCities.data.cities);    
            } catch (error) {
                console.log(error)   
            }
        }
        getCities();
    }, [])

    const handleChangeData = e => {
        sethotel({
            ...hotel,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();

        const saveHotel = async() => {
            try {
                await createHotel({hotel});
                Swal.fire({
                    icon: 'success',
                    title: 'Hotel guardado correctamente',
                })

                //Reiniciar el form
                sethotel({
                    name: '',
                    phone: '',
                    address: '',
                    description: '',
                    city_id: '1' 
                })

            } catch (error) {
                console.log(error);
            }
        }

        saveHotel();
        
    }

    return (  
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card shadow p-3 mb-5 bg-white rounded">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Crear Hotel
                        </h2>  
                        <form
                            onSubmit= {handleSubmit}
                        >
                            <TextField  
                                required
                                label="Ingresa el nombre"
                                fullWidth 
                                margin="normal"
                                name= "name"
                                onChange={handleChangeData}
                                value={name}
                            />

                            <TextField  
                                required
                                label="Ingresa el telefono"
                                fullWidth 
                                margin="normal"
                                name="phone"
                                onChange={handleChangeData}
                                value={phone}
                            />

                            <div className="row">
                                <div className="col-sm-12 col-md-8">
                                    <TextField  
                                        required
                                        fullWidth
                                        label="Ingresa la dirección" 
                                        margin="normal"
                                        name="address"
                                        onChange={handleChangeData}
                                        value={address}
                                    />
                                </div>
                                <div className="col-sm-12 col-md-4 d-flex align-items-center form-group pt-3">
                                    <select className="form-control" onChange={handleChangeData} name="city_id" value={city_id}>
                                        { cities.map(city => (
                                            <option 
                                                key={city.id}
                                                value={city.id} 
                                            >
                                            {city.name}
                                            </option>
                                        ))}
                                    </select>
                                </div> 
                            </div>
                            

                            <TextField  
                                required
                                label="Agrega una descripción"
                                fullWidth 
                                margin="normal"
                                name="description"
                                onChange={handleChangeData}
                                value={description}
                            />

                            <button 
                                type="submit" 
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100 mt-3"
                            >
                                Guardar hotel
                            </button>
                            <Button  className= "mt-2">
                                <Link to={'/'}>
                                    Volver al listado de hoteles
                                </Link>
                            </Button>
                        </form> 
                    </div>
                </div>
            </div>
        </div>
        
    );
}
 
export default NewHotel;