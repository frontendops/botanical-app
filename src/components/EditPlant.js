import React, { Component } from 'react';
import { Field, reduxForm } from "redux-form";
import { connect } from 'react-redux';
import { editPlant, getPlants } from '../actions'

class EditPlant extends Component {
    state = {
        userPlant: null
    }

    //fetch the data on page reload!!!
    componentWillMount = () => {
        this.props.getPlants()
        this.setState({ userPlant: this.props.plant })

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
        this.props.editPlant(this.props.match.params.id, formValues)

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
    const plant = state.apiReducer[ownProps.match.params.id]

    return {
        plant: state.apiReducer[ownProps.match.params.id],
        userPlantData: Object.values(state.apiReducer),
        currentUserData: state.authReducer,
        initialValues: {
            name: plant.name,
            description: plant.description
        }
    }
}

const formWrapped = reduxForm({
    form: 'createPlant',
    enableReinitialize: true,
})(EditPlant)


export default connect(mapStateToProps, {
    editPlant, getPlants
})(formWrapped)