import React from 'react'

const PlantCard = ({img, name, description, waterDate}) => {
        return (
            <div class="ui card">
                <div class="image">
                    <img src={img} alt="plant name"/>
                </div>
                <div class="content">
                    <div class="header">{name}</div>
                    <div class="meta">
                    <span class="date">{`Water in ${waterDate} days`}</span>
                    </div>
                    <div class="description">
                    {description}
                    </div>
                </div>
                <div class="extra content">
                    <span className="right floated">
                    <i class="edit icon"></i>
                    </span>
                    <a href="https://www.google.com">
                    <i class="edit outline icon"></i>
                    notes
                    </a>
                </div>
            </div>
        )
}

export default PlantCard