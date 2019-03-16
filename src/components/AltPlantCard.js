import React from 'react';


const AltPlantCard = ({ img, name, waterDate }) => {
    return (
        <div className="ui card">

            <div className="image">
                <img src={img} alt="plant name" />
            </div>

            <div className="content">
                <div className="header">{name}</div>
                <div className="meta">
                    <span className="date">{`Water in ${waterDate} days`}</span>
                </div>

            </div>
            <div className="extra content">
                <span className="right floated">
                    <i className="edit icon"></i>
                </span>


            </div>
        </div>
    )
}

export default AltPlantCard;