import React, { Component } from 'react'


class CreatePlant extends Component {
    render () {
        return (
            <div className="ui container">
             <form class="ui form">
                <div class="field">
                    <label>Plant name</label>
                    <input type="text" name="plant-name" placeholder="Enter name of plant" />
                </div>

                <div class="field">
                    <label>Plant description</label>
                    <input type="text" name="plant-description" placeholder="Enter description of plant"/>
                </div>

                <div class="field">
                    <label>Next Water Date</label>
                    <input type="date"/>
                </div>
                <button class="ui olive button" type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default CreatePlant;