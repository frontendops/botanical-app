import React from 'react';
import { Link } from "react-router-dom";

const PlantCard = ({img, name, description, waterDate, id}) => {
        return (
            <div className="ui card">
                
                <Link to="/view" className="image">
                    <img src={img} alt="plant name"/>
                </Link>
                
      
                <div className="content">
                    <div className="header">{name}</div>
                    <div className="meta">
                    <span className="date">{`Water in ${waterDate} days`}</span>
                    </div>
                    <div className="description">
                    {description}
                    </div>
                </div>
                <div className="extra content">
                    <span className="right floated">
                    <Link to={`/edit/${name}`}>
                    <i className="edit icon"></i>
                    </Link>
                    </span>

                    
                    <Link to="notes">
                    <i className="edit outline icon"></i>
                    notes
                    </Link>
                </div>
            </div>
        )
}

export default PlantCard