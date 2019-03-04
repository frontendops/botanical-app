import React, { Component } from 'react';
import { Field, reduxForm } from "redux-form";
import { connect } from 'react-redux';
import { editPlant } from '../actions'

class EditPlant extends Component {
    state = {
        plantData: {}
    }
    componentDidMount = () => {
        const currentUserId = this.props.currentUserData.userId
        const myPlants = this.props.userPlantData.filter(user => user.userId === currentUserId)
            .filter(plant => plant._id === this.props.plant._id)
        this.setState({ plantData: myPlants });

    }

    renderInput = (formProps) => {
        return (
            <input placeholder={formProps.placeholder}
                type={formProps.type}
                {...formProps.input} />
        )
    }

    renderTextArea = (formProps) => {
        return (
            <textarea placeholder={formProps.placeholder}
                rows={formProps.rows}
                {...formProps.input}>

            </textarea>
        )
    }

    submitForm = (formValues) => {
        // this.props.addPlant(formValues);
        console.log(this.state.plantData);
    }

    render() {

        return (
            <div>
                Edit Plant

               <div className="ui container">
                    <form onSubmit={this.props.handleSubmit(this.submitForm)}
                        className="ui form">
                        <div className="field">
                            <label>Plant name</label>
                            <Field name="name" component={this.renderInput}
                                placeholder="Enter name of plant"
                            />

                        </div>

                        <div className="field">
                            <label>Plant description</label>
                            <Field name="description" component={this.renderInput}
                                placeholder="Enter description of plant"
                            />

                        </div>

                        <div className="field">
                            <label>Select image</label>
                            <Field name="image" type="file" component={this.renderInput} />
                        </div>

                        <div className="field">
                            <label>Next Water Date</label>
                            <Field name="date" type="date" component={this.renderInput} />
                        </div>

                        <div className="field">
                            <label>Plant notes</label>
                            <Field component={this.renderTextArea} name="notes" rows="4" placeholder="write any notes in here. (describe anything that you find fascinating)" />

                        </div>

                        <button className="ui olive button" type="submit">Save plant</button>
                    </form>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        plant: state.apiReducer[ownProps.match.params.id],
        userPlantData: Object.values(state.apiReducer),
        currentUserData: state.authReducer
    }
}

export default connect(mapStateToProps, {
    editPlant
})(reduxForm({
    form: 'createPlant'
})(EditPlant));