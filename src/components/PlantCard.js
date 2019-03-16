import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';


class PlantCard extends Component {
    componentDidMount() {
        const data = {
            date: this.props.waterDate,
            id: this.props.id,
            name: this.props.name
        }
        this.props.getData(data)
    }


    render() {
        const { img, name, description, waterDate, id } = this.props

        let waterNotif = <div></div>
        let userDate = <span></span>

        if (waterDate !== 0) {
            userDate = <span className="date">Water in <b>{`${waterDate}`}</b> days </span>
        } else {
            userDate = <span className="date">Water today!! </span>
        }

        if (waterDate <= 4) {
            waterNotif = <button className=" tiny ui blue button"> Water </button>
        }
        return (
            <div className="ui card">

                <div className="image">
                    <img src={img} alt="plant name" />
                </div>

                <div className="content">
                    <div className="header">{name}</div>
                    <div className="meta">

                        {userDate}
                    </div>
                    <div className="description">
                        {description}
                    </div>
                    <Link to={`/edit/${id}`}>
                        {waterNotif}
                    </Link>
                </div>
                <div className="extra content">
                    <span className="right floated">
                        <Link to={`/edit/${id}`}>
                            <i className="edit icon"></i>
                        </Link>
                    </span>


                    <Link to={`/delete/${id}`}>
                        <i className="trash icon"></i>
                        Delete Plant
                        </Link>
                </div>
            </div>
        )
    }


}

function mapStateToProps(state) {
    return {

    }
}

export default connect(mapStateToProps)(PlantCard)