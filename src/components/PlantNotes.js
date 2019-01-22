import React, { Component } from 'react'

class PlantNotes extends Component {
    render () {
        return (
            <div class="ui form">
                <div class="field">
                    <label>Plant Notes</label>
                    <textarea rows="6"></textarea>
                </div>

                <button class="ui olive button centered" type="submit">Save note</button>
                
            </div>
        )
    }
}

export default PlantNotes;