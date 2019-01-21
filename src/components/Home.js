import React, { Component } from 'react'
import PlantCard from './PlantCard';

import { connect } from 'react-redux';


class Home extends Component {
    render () {
        return (
            <div className="ui centered cards">
                {this.props.plants.map(plant => (
                    
                    <PlantCard 
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

function mapStateToProps(state) {
    return {
        plants: state.plantInfo
    };
}
export default connect(mapStateToProps)(Home)