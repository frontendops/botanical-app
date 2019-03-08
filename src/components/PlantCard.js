import React from 'react';
import { Link } from "react-router-dom";

const PlantCard = ({ img, name, description, waterDate, id }) => {
    return (
        <div className="ui card">

            <Link to={`/view/${id}`} className="image">
                <img src={img} alt="plant name" />
            </Link>


            <div className="content">
                <div className="header">{name}</div>
                <div className="meta">
                    <span className="date">Water on <b>{`${waterDate}`}</b></span>
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

export default PlantCard