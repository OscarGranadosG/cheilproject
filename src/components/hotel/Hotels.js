import React, { useEffect,useState } from 'react'

import { dataHotels, deleteHotel } from '../actions/api';
import Hotel from './Hotel';


const Hotels = () => {

    const [hotels, sethotels] = useState([]);

    useEffect(() => {
        
        const getHotelsData = async () => {
            try {
                const req = await dataHotels();
                sethotels(req.data.hotels);
            } catch (error) {
                console.log(error);
            }
        }

        getHotelsData();

    }, [])

    const deleteHotelId = id => {
        try {
            deleteHotel(id);
            const newHotel = hotels.filter(hotel => hotel.id !== id); 
            sethotels(newHotel); 
        } catch (error) {
            console.log(error);
        } 
    }

    return (  
        <div className="col-12 row">
            {hotels.map(hotel=>(
                <Hotel 
                    key={hotel.id}
                    hotel= {hotel}
                    deleteHotelId={deleteHotelId}
                />
            ))}
            
        </div>
    );
}
 
export default Hotels;