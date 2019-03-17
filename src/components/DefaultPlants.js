import React, { Component } from 'react'

import PlantView from './PlantView';


import { connect } from 'react-redux';


class DefaultPlants extends Component {
    //calling this.getdata on cards that dont need data
    renderCards = () => {
        if (this.props.listView === true) {
            return (
                <div className="ui centered cards">
                    {this.props.plants.map(plant => (

                        <PlantView key={plant.name}
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

                        <PlantView key={plant.name}
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
    render() {
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