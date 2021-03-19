import axios from 'axios';

const URL = 'http://cheilapi.test/api';

//url api
const dataHotels = async() => {
    return await axios.get(`${URL}/hotels`);
}

const createHotel = async ({ hotel }) => {
    return await axios.post(`${URL}/hotels`, hotel);
}

const dataCity = async () => {
    return await axios.get(`${URL}/cities`);
}



export {
    dataHotels,
    createHotel,
    dataCity
}