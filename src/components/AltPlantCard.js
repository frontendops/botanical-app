import React from 'react';
import { Link } from "react-router-dom";

const AltPlantCard = ({img, name, waterDate}) => {
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
                    
                </div>
                <div className="extra content">
                    <span className="right floated">
                    <Link to="/create">
                    <i className="edit icon"></i>
                    </Link>
                    </span>

                    
                </div>
            </div>
        )
}

export default AltPlantCard;