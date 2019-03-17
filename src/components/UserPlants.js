import _ from 'lodash';
import React, { Component } from 'react'
import PlantCard from './PlantCard';
import Notifications from './Notifications';
import { getPlants } from '../actions';
import { connect } from 'react-redux';


class UserPlants extends Component {

    state = {
        days: []
    }

    componentDidMount() {
        this.props.getPlants()
    }


    renderUserPlants = () => {
        const currentUserId = this.props.currentUserData.userId;
        const uniquePlants = _.uniqBy(this.props.userPlantData, '_id')
        return (
            uniquePlants.filter(user => user.userId === currentUserId).sort((a, b) => {
                return this.timeDifference(a.date) - this.timeDifference(b.date)
            }).map((plant) => (
                <PlantCard key={plant.name}
                    img={plant.image}
                    name={plant.name}
                    waterDate={this.timeDifference(plant.date)}
                    description={plant.description}
                    id={plant._id}
                    getData={this.getData}
                />
            )
            )
        )
    }

    //gets how many days until next day to water plant
    timeDifference = (isoDate) => {

        const oneDay = 24 * 60 * 60 * 1000;
        let dbDate = new Date(isoDate);
        let currentDate = new Date()

        let dayDiff = Math.round(Math.abs((currentDate.getTime() - dbDate.getTime()) / (oneDay)));

        // this.props.(dayDiff);

        return dayDiff;
    }

    getData = (data) => {
        this.setState(prevState => ({
            days: [...prevState.days, {
                days: data.date,
                id: data.id,
                name: data.name
            }],
        }))
    }


    render() {
        if (this.props.listView === true) {
            return (
                <div>
                    <Notifications dates={this.state.days} />

                    <div className="ui centered cards">
                        {this.renderUserPlants()}

                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    <Notifications dates={this.state.days} />

                    <div className="ui four doubling cards">
                        {this.renderUserPlants()}

                    </div>
                </div >
            )
        }


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