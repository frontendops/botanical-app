import React from 'react';
import { Link } from "react-router-dom";

const AltPlantCard = ({img, name, waterDate}) => {
        return (
            <div class="ui card">
                
                <Link to="/view" className="image">
                    <img src={img} alt="plant name"/>
                </Link>
                
      
                <div class="content">
                    <div class="header">{name}</div>
                    <div class="meta">
                    <span class="date">{`Water in ${waterDate} days`}</span>
                    </div>
                    
                </div>
                <div class="extra content">
                    <span className="right floated">
                    <Link to="/create">
                    <i class="edit icon"></i>
                    </Link>
                    </span>

                    
                </div>
            </div>
        )
}

export default AltPlantCard;