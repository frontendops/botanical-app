import { GET_PLANTS, ADD_PLANT, DELETE_PLANT, EDIT_PLANT } from './types';
import api from './api/plantsApi';


export const addPlant = (formValues) => async dispatch => {
    api.post('/api/plants/create', formValues)
    .then(res => dispatch({
        type: ADD_PLANT,
        payload: res.data
    }))
};

export const getPlants = () => async dispatch => {
    api.get('/api/plants/')
    .then(res => dispatch({
        type: GET_PLANTS,
        payload: res.data
    }))
};
 


