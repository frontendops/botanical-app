import React, { Component } from 'react'
import PlantCard from './PlantCard';

import { getPlants } from '../actions';
import { connect } from 'react-redux';


class UserPlants extends Component {
    componentDidMount() {
        this.props.getPlants()
    }

    timeConverter = (isoDate) => {
        let d = new Date(isoDate)
        let year = d.getFullYear();
        let month = d.getMonth() + 1;
        let dt = d.getDate();

        if (dt < 10) {
            dt = '0' + dt;
        }
        if (month < 10) {
            month = '0' + month;
        }

        let format = month + '-' + dt + '-' + year;

        return format;
    }

    renderUserPlants = () => {
        const currentUserId = this.props.currentUserData.userId

        return (
            this.props.userPlantData.filter(user => user.userId === currentUserId).map((plant) => (
                <PlantCard key={plant.name}
                    img={plant.image}
                    name={plant.name}
                    waterDate={this.timeConverter(plant.date)}
                    description={plant.description}
                    id={plant._id}
                />
            )
            )
        )
    }

    render() {

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