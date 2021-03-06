import { combineReducers } from 'redux';
import { GET_PLANTS, ADD_PLANT, DELETE_PLANT, EDIT_PLANT, SIGN_IN, SIGN_OUT, GET_PLANT, GET_AMOUNT } from '../actions/types';
import _ from 'lodash';

import { reducer as formReducer } from 'redux-form';

const initialAuth = {
  isSignedIn: null,
  userId: null
}

const authReducer = (state = initialAuth, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isSignedIn: true, userId: action.payload }

    case SIGN_OUT:
      return { ...state, isSignedIn: false, userId: null }

    default:
      return state;
  }
}


const plantInfoSignedOut = () => {
  return [
    {
      img: 'https://farm5.staticflickr.com/4863/45878440395_b6fb181478_z_d.jpg',
      name: 'Lilly',
      waterDate: 5,
      description: 'This species is from the plant kingdom'
    },
    {
      img: 'https://farm5.staticflickr.com/4833/32917918788_b68b3d13b9_z_d.jpg',
      name: 'Petals',
      waterDate: 3,
      description: 'This species is from the plant kingdom'
    },
    {
      img: 'https://farm5.staticflickr.com/4842/32917914028_9a0ed12924_z_d.jpg',
      name: 'Daisy',
      waterDate: 7,
      description: 'This species is from the plant kingdom'
    },
    {
      img: 'https://farm8.staticflickr.com/7906/46740615132_7ba81221d0_z_d.jpg',
      name: 'Succulent',
      waterDate: 15,
      description: 'This species is from the plant kingdom'
    },
  ]
}



//add all actions after backend
// const initialPlantState = {
//   days: 5
// }


function apiReducer(state = {}, action) {

  switch (action.type) {
    case GET_PLANTS:
      return { ...state, ..._.mapKeys(action.payload, '_id') };

    case EDIT_PLANT:
      return { ...state, [action.payload.id]: action.payload };

    case ADD_PLANT:
      return { ...state, [action.payload.id]: action.payload };

    case GET_PLANT:
      return { ...state, [action.payload.id]: action.payload };

    case DELETE_PLANT:
      return _.omit(state, action.payload);

    default:
      return state;
  }
}


const importantPlants = {
  amount: 0
}
function amountReducer(state = importantPlants, action) {
  switch (action.type) {
    case GET_AMOUNT:
      return { ...state, amount: action.payload }
    default:
      return state;
  }
}

export default combineReducers({
  plantInfo: plantInfoSignedOut,
  form: formReducer,
  apiReducer,
  authReducer,
  amountReducer

})