import React, { Component } from 'react'
import { Field, reduxForm } from "redux-form";
import FileInput from './FileInput';
import { connect } from 'react-redux';
import {addPlant} from '../actions'

class CreatePlant extends Component {

    renderInput = (formProps) => {
        return (
            <input placeholder={formProps.placeholder} 
            type={formProps.type}
            {...formProps.input}/>
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
       this.props.addPlant(formValues);
       
    }

    render () {
        return (
            <div className="ui container">
             <form onSubmit={this.props.handleSubmit(this.submitForm)} 
             className="ui form">
                <div className="field">
                    <label>Plant name</label>
                    <Field name="name"  component={this.renderInput}
                    placeholder="Enter name of plant"
                    />
                    
                </div>

                <div className="field">
                    <label>Plant description</label>
                    <Field name="description"  component={this.renderInput}
                    placeholder="Enter description of plant"
                    />
                    
                </div>

                <div className="field">
                    <label>Select image</label>
                    <Field name="image" type="file" component={FileInput} />
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
        )
    }
}

export default connect(null, {
    addPlant
})(reduxForm({
    form: 'createPlant'
})(CreatePlant));