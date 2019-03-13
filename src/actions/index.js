import { GET_PLANTS, ADD_PLANT, DELETE_PLANT, EDIT_PLANT, SIGN_IN, SIGN_OUT, GET_PLANT, GET_AMOUNT } from './types';
import api from './api/plantsApi';
import history from '../history';


export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    }
}

export const signOut = () => {
    return {
        type: SIGN_OUT
    }
}

// export const getDays = (days) => {
//     return {
//         type: GET_DAYS,
//         payload: days
//     }

// }

//post request to add plant to our database
export const addPlant = (formValues) => async (dispatch, getState) => {
    const { userId } = getState().authReducer;
    api.post('/api/plants/create', { ...formValues, userId })
        .then(res => dispatch({
            type: ADD_PLANT,
            payload: res.data
        }))

    history.push('/');
};



//get all plants from our db
export const getPlants = () => async dispatch => {

    api.get('/api/plants/')
        .then(res => dispatch({
            type: GET_PLANTS,
            payload: res.data
        }))
};

//get individual plant
export const getPlant = (id) => async dispatch => {
    const response = await api.get(`/api/plants/${id}`)

    dispatch({ type: GET_PLANT, payload: response.data })
}

//put and edit the plant info
export const editPlant = (id, formValues) => async dispatch => {
    const response = await api.put(`/api/plants/${id}`, formValues)

    dispatch({ type: EDIT_PLANT, payload: response.data });

    history.push('/');

}

// delete teh selected plant
export const deletePlant = (id) => async dispatch => {
    const response = await api.delete(`/api/plants/${id}`)

    dispatch({ type: DELETE_PLANT, payload: id })

    history.push('/')
}


export const getAmount = (amount) => {
    return {
        type: GET_AMOUNT,
        payload: amount
    }
}