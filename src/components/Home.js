import React, { Component } from 'react'
import DefaultPlants from './DefaultPlants';
import UserPlants from './UserPlants';
import './styles/home.css';

import { connect } from 'react-redux';
import { getPlants } from '../actions';


class Home extends Component {
    state = {
        listView: false,

    }

    changeView = () => {
        this.setState({ listView: !this.state.listView});
    }

    renderPlants = () => {
        if (this.props.isSignedIn) {
            return (
                <UserPlants />
            )
        } else {
            return (
                <DefaultPlants listView={this.state.listView}/>
            )
        }
    }


    render () {
        //change icon class depending on listView
        return (
            <div className="ui container">
        <div className="ui clearing segment">
        <div onClick={this.changeView} className="list-view">
        <i className="th large icon"></i>
        </div>
        </div>
            {this.renderPlants()}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        isSignedIn: state.authReducer.isSignedIn
    };
}
export default connect(mapStateToProps, {
    getPlants
})(Home)