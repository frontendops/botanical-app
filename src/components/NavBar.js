import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Auth from './Auth';

import { connect } from 'react-redux';


class NavBar extends Component {

    renderNewPlantBtn = () => {
        const { isSignedIn } = this.props.auth
        if (isSignedIn) {
            return (
                <Link to="/create">
                    <div className="ui grey basic button">New Plant</div>
                </Link>
            )
        }
    }
    render() {

        return (
            <div className="ui menu">
                <Link to="/">
                    <div className="item">Plantly</div>
                </Link>
                <div className="right menu">
                    <Link to="/">

                        <Auth />

                    </Link>

                    {this.renderNewPlantBtn()}

                </div>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        auth: state.authReducer
    }
}

export default connect(mapStateToProps)(NavBar)