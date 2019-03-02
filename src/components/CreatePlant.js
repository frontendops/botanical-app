import React, { Component } from 'react'
import { Field, reduxForm } from "redux-form";
import { connect } from 'react-redux';
import { addPlant } from '../actions';
import ImageUpload from './imageUpload.js';

const adaptFileEventToValue = delegate => e => delegate(e.target.files[0]);

class CreatePlant extends Component {

    state = {
        selectedImage: null
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

    getImageData = (data) => {
        this.setState({ imageInfo: data });

        console.log(data)
    }

    //uploadFile = ({ input: { value: omitValue, ...formProps }, meta: omitMeta, ...props }) => (
    //   <input type='file' {...formProps} {...props} />
    //);

    UploadFile = ({ input: { value: omitValue, ...inputProps }, meta: omitMeta, ...props }) => (
        <input type='file' {...inputProps} {...props} />
    );



    FileInput = ({
        input: { value: omitValue, onChange, onBlur, ...inputProps },
        meta: omitMeta,
        ...props
    }) => {
        return (
            <input
                onChange={adaptFileEventToValue(onChange)}
                onBlur={adaptFileEventToValue(onBlur)}
                type="file"
                {...props.input}
                {...props}
            />
        );
    };


    submitForm = (formValues) => {
        this.props.addPlant(formValues, this.state.imageInfo.name);
        console.log(this.state.imageInfo);

    }

    render() {
        return (
            <div className="ui container">
                <form onSubmit={this.props.handleSubmit(this.submitForm)}
                    className="ui form"
                    encType="multipart/form-data"
                >
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
                        <ImageUpload getImageData={this.getImageData} />
                    </div>

                    <div className="field">
                        <label>Next Water Date</label>
                        <Field name="date" type="date" onChange={this.handleFile} component={this.renderInput} />
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