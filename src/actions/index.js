import { GET_PLANTS, ADD_PLANT, DELETE_PLANT, EDIT_PLANT, SIGN_IN, SIGN_OUT } from './types';
import api from './api/plantsApi';


export const signIn = () => {
    return {
        type: SIGN_IN
    }
}

export const signOut = () => {
    return {
        type: SIGN_OUT
    }
}

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
 


