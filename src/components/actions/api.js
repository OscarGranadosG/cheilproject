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

const deleteHotel = async (id) => {
    return await axios.delete(`${URL}/hotels/${id}`);
}

const getHotel = async (id) => {
    return await axios.get(`${URL}/hotels/${id}/edit`)
}




export {
    dataHotels,
    createHotel,
    dataCity,
    deleteHotel,
    getHotel
}