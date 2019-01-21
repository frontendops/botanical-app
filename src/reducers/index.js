import { combineReducers } from 'redux';

const plantInfoReducer = () => {
    return [
        { img: 'https://farm5.staticflickr.com/4863/45878440395_b6fb181478_z_d.jpg',
          name: 'Lilly',
          waterDate: 5,
          description: 'This species is from the plant kingdom'
        },
        { img: 'https://farm5.staticflickr.com/4833/32917918788_b68b3d13b9_z_d.jpg',
          name: 'Petals',
          waterDate: 3,
          description: 'This species is from the plant kingdom'
        },
        { img: 'https://farm5.staticflickr.com/4842/32917914028_9a0ed12924_z_d.jpg',
          name: 'Daisy',
          waterDate: 7,
          description: 'This species is from the plant kingdom'
        },
        { img: 'https://farm8.staticflickr.com/7906/46740615132_7ba81221d0_z_d.jpg',
          name: 'Succulent',
          waterDate: 15,
          description: 'This species is from the plant kingdom'
        },
    ]
}
export default combineReducers({
    plantInfo: plantInfoReducer,
})