import React, { Component } from 'react'
import PlantCard from './PlantCard';

import { getPlants } from '../actions';
import { connect } from 'react-redux';


class UserPlants extends Component {
    componentDidMount () {
        console.log(this.props.userPlantData)
    }
    
    render () {
        return (
            <div className="ui centered cards">
               {this.props.userPlantData.map(plant => (
                    
                    <PlantCard key={plant.name}
                    img={plant.img}
                    name={plant.name}
                    waterDate={plant.waterDate}
                    description={plant.description}
                    />
                )
                )}
                
            </div>
        )
    }
}

//ojects get turned into an array to let us map through all of our items
function mapStateToProps(state) {
    return {
        userPlantData: Object.values(state.apiReducer)
    }
}

export default connect(mapStateToProps, {
    getPlants
})(UserPlants);