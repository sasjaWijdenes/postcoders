import axios from 'axios';

export const getAreaData = async (searchValue) => {
    const { data } = await axios.get(`https://api.zippopotam.us/GB/${searchValue}`);
    return data.places;
};
