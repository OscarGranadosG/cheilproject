import React, { useEffect } from 'react'

import { dataHotels } from '../actions/api';

const Hotels = () => {

    useEffect(() => {
        
        const getHotelsData = async () => {
            try {
                const req = await dataHotels();
                console.log(req.data.hotels);
            } catch (error) {
                
            }
        }

        getHotelsData();

    }, [])

    return (  
        <h1>Desde Hotel</h1>
    );
}
 
export default Hotels;