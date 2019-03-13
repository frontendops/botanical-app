import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { } from '../actions'

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


        return (
            <div className="ui card">

                <Link to={`/view/${id}`} className="image">
                    <img src={img} alt="plant name" />
                </Link>


                <div className="content">
                    <div className="header">{name}</div>
                    <div className="meta">
                        <span className="date">Water in <b>{`${waterDate}`}</b> days </span>
                    </div>
                    <div className="description">
                        {description}
                    </div>
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

export default connect(mapStateToProps, {

})(PlantCard)