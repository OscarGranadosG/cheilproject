import React, {useEffect,useState} from 'react';
import { Link } from 'react-router-dom'

import { getHotel, dataCity } from '../actions/api';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const EditHotel = (id) => {

    const [hotel, sethotel] = useState({
        name: '',
        phone: '',
        address: '',
        description: '',
        city_id: '1' 
    });

    const { name, address, phone, description } = hotel

    useEffect(() => {

        const getHotelData = async () => {
            try {
                const dataHotel = await getHotel(id.match.params.id);
                sethotel(dataHotel.data.hotel);    
            } catch (error) {
                console.log(error);
            }
        }
        getHotelData();

    }, [id])

    const handleChangeData = e => {
        sethotel({
            ...hotel,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
    }

    

    return (  
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Editar Hotel
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
                                onChange = {handleChangeData}
                                value={name}
                                
                            />

                            <TextField  
                                required
                                label="Ingresa el telefono"
                                fullWidth 
                                margin="normal"
                                name="phone"
                                onChange = {handleChangeData}
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
                                        onChange = {handleChangeData}
                                        value={address}
                                    />
                                </div>
                                <div className="col-sm-12 col-md-4 d-flex align-items-center form-group pt-3">
                                    <select className="form-control" name="city_id" >
                                        {/* { cities.map(city => (
                                            <option 
                                                key={city.id}
                                                value={city.id} 
                                            >
                                            {city.name}
                                            </option>
                                        ))} */}
                                    </select>
                                </div> 
                            </div>
                            

                            <TextField  
                                required
                                label="Agrega una descripción"
                                fullWidth 
                                margin="normal"
                                name="description"
                                onChange = {handleChangeData}
                                value={description}
                            />

                            <button 
                                type="submit" 
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100 mt-3"
                            >
                                Guardar cambios
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
 
export default EditHotel;