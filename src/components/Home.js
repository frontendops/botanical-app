import React, { Component } from 'react'
import PlantCard from './PlantCard';

class Home extends Component {
    render () {
        return (
            <div className="ui centered cards">

                <PlantCard img="https://farm5.staticflickr.com/4863/45878440395_b6fb181478_z_d.jpg"/>

                <PlantCard img="https://farm5.staticflickr.com/4833/32917918788_b68b3d13b9_z_d.jpg"/>

                <PlantCard img="https://farm5.staticflickr.com/4842/32917914028_9a0ed12924_z_d.jpg"/>

                <PlantCard img="https://farm8.staticflickr.com/7906/46740615132_7ba81221d0_z_d.jpg"/>

                <PlantCard img="https://farm8.staticflickr.com/7889/46793361921_3cd31b9e34_z_d.jpg"/>
                
            </div>
        )
    }
}

export default Home