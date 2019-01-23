import React, { Component } from 'react'
import PlantCard from './PlantCard';
import AltPlantCard from './AltPlantCard';
import './styles/home.css';

import { connect } from 'react-redux';


class Home extends Component {
    state = {
        listView: false,

    }

    changeView = () => {
        this.setState({ listView: !this.state.listView});
    }

    renderCards = () => {
        if (this.state.listView === true) {
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
        } else {
            return (
                <div className="ui four doubling cards">
                {this.props.plants.map(plant => (
                    
                    <AltPlantCard 
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
            <div className="ui container">
        <div class="ui clearing segment">
        <div onClick={this.changeView} class="list-view">
        <i class="th large icon"></i>
        </div>
        </div>
            {this.renderCards()}
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