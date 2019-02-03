import React, { Component } from 'react'
import PlantCard from './PlantCard';

import { getPlants } from '../actions';
import { connect } from 'react-redux';


class UserPlants extends Component {
    componentDidMount () {
        console.log(this.props.userPlantData)
    }
    renderUserPlants = () => {
        const currentUserId = this.props.currentUserData.userId
        return (
            this.props.userPlantData.filter(user => user.userId === currentUserId).map((plant, id) => (
                <PlantCard key={plant.name}
                img={plant.img}
                name={plant.name}
                waterDate={plant.waterDate}
                description={plant.description}
                id={id}
                />
            )
            )
        )
    }

    render () {
        return (
            <div className="ui centered cards">
               {this.renderUserPlants()}
                
            </div>
        )
    }
}

//ojects get turned into an array to let us map through all of our items
function mapStateToProps(state) {
    return {
        userPlantData: Object.values(state.apiReducer),
        currentUserData: state.authReducer
    }
}

export default connect(mapStateToProps, {
    getPlants
})(UserPlants);