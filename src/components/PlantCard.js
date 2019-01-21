import React, { Component } from 'react'

class PlantCard extends Component {
    render () {
        return (
            <div class="ui card">
                <div class="image">
                    <img src={this.props.img} alt="plant name"/>
                </div>
                <div class="content">
                    <div class="header">Kristy</div>
                    <div class="meta">
                    <span class="date">Last watered 3 mo ago</span>
                    </div>
                    <div class="description">
                    Kristy is an art director living in New York.
                    </div>
                </div>
                <div class="extra content">
                    <a href="https://www.google.com">
                    <i class="edit outline icon"></i>
                    notes
                    </a>
                </div>
            </div>
        )
    }
}

export default PlantCard