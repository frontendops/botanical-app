import React, { Component } from 'react'
import axios from 'axios';
import ImageList from './imageList';
import { Field, reduxForm, change } from "redux-form";
import { connect } from 'react-redux';
import { addPlant } from '../actions';


class CreatePlant extends Component {

    state = {
        searchedImage: '',
        imageList: [],
        selectedImage: ""
    }

    renderError = ({ error, touched }) => {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    renderInput = (formProps) => {
        return (
            <React.Fragment>
                {this.renderError(formProps.meta)}
                <input placeholder={formProps.placeholder}
                    type={formProps.type}
                    {...formProps.input} />
            </React.Fragment>
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

    //send axios request to fetch for searched images here
    onImageSubmit = () => {

        const image = this.state.searchedImage;
        axios.get('https://api.unsplash.com/search/photos', {
            params: { query: image },
            headers: {
                Authorization: 'Client-ID c85af5822bfc242f5f7f8c34f93eb58f86961cf3c6983b97d24fc2e417f05d5b'
            }
        }).then(res => {
            this.setState({ imageList: res.data.results })

        })
    }

    onSelectedImage = (data) => {
        this.setState({ selectedImage: data });
        this.props.dispatch(change('createPlant', 'image', this.state.selectedImage));
    }

    renderImageChosen = () => {
        if (this.state.selectedImage.length > 0) {
            return (
                <div className="ui success message">
                    <div className="header">
                        Your image was successfully saved
                    </div>
                    <p>Double click another image to save instead</p>
                </div>
            );


        }
    }

    //when rendering list. need to seperate to another component


    submitForm = (formValues) => {
        this.props.addPlant(formValues);

    }

    render() {
        let userMsg = <div></div>;
        if (this.state.selectedImage.charAt(0) === "h") {
            userMsg = <div className="ui green message">Your image was successfully saved</div>
        }

        return (
            <div className="ui container">
                <form onSubmit={e => e.preventDefault()}
                    className="ui form error"
                >
                    <div className="field">
                        <label>Plant name</label>
                        <Field name="name" component={this.renderInput}
                        />

                    </div>

                    <div className="field">
                        <label>Plant description</label>
                        <Field name="description" component={this.renderInput}
                            placeholder="Enter description of plant"
                        />

                    </div>

                    {userMsg}

                    <div className="field">
                        <div className="ui action input">
                            <input onChange={e => this.setState({ searchedImage: e.target.value })} />
                            <button
                                onClick={this.onImageSubmit}
                                className="ui olive button">Search Image</button>
                        </div>

                        <ImageList
                            images={this.state.imageList}
                            onSelectedImage={this.onSelectedImage}
                        />


                        <div className="ui transparent input">
                            <Field name="image" component={this.renderInput} />
                        </div>


                    </div>

                    <div className="field">
                        <label>Next Water Date</label>
                        <Field name="date" type="date" component={this.renderInput} />
                    </div>

                    <div className="field">
                        <label>Plant notes</label>
                        <Field component={this.renderTextArea} name="notes" rows="4" placeholder="write any notes in here. (describe anything that you find fascinating)" />

                    </div>

                </form>

                <button className="ui olive button" onClick={this.props.handleSubmit(this.submitForm)}>Save plant</button>
            </div>
        )
    }
}

const validate = (formValues) => {
    let errors = {};

    if (!formValues.name) {
        errors.name = "You need to give your plant a name!"
    }

    if (!formValues.date) {
        errors.date = "You might want to know when to water!"
    }

    return errors;
}

export default connect(null, {
    addPlant
})(reduxForm({
    form: 'createPlant',
    validate: validate
})(CreatePlant));