import React from "react";

const PlantView = (props) => {
  return (
    <div className="ui card">

      <div className="image">
        <img src={props.img} alt="plant name" />
      </div>

      <div className="content">
        <div className="header">{props.name}</div>
        <div className="meta">

          <span>Water in {props.waterDate} days</span>
        </div>
        <div className="description">
          {props.description}
        </div>

      </div>
      <div className="extra content">
        <span className="right floated">

        </span>



      </div>
    </div>
  )
}

export default PlantView