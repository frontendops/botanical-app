import React, { Component } from 'react'
import PlantCard from './PlantCard';
import AltPlantCard from './AltPlantCard';

import { connect } from 'react-redux';


class DefaultPlants extends Component {
    renderCards = () => {
        if (this.props.listView === true) {
            return (
            <div className="ui centered cards">
                {this.props.plants.map(plant => (
                    
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
        } else {
            return (
                <div className="ui four doubling cards">
                {this.props.plants.map(plant => (
                    
                    <AltPlantCard key={plant.name} 
                    img={plant.img}
                    name={plant.name}
                    waterDate={plant.waterDate}
                    />
                )
                )}
            </div>
            )
        }
    }
    render () {
        return (
           <React.Fragment>
               {this.renderCards()}
           </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        plants: state.plantInfo,
    };
}

export default connect(mapStateToProps)(DefaultPlants);