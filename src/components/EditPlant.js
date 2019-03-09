import React, { Component } from 'react';
import { Field, reduxForm, change } from "redux-form";
import { connect } from 'react-redux';
import { editPlant, getPlants } from '../actions';
import axios from 'axios';
import ImageList from './imageList';

class EditPlant extends Component {
    state = {
        searchedImage: '',
        imageList: [],
        selectedImage: null
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




    onImageSubmit = () => {

        const image = this.state.searchedImage;
        axios.get('https://api.unsplash.com/search/photos', {
            params: { query: image },
            headers: {
                Authorization: 'Client-ID c85af5822bfc242f5f7f8c34f93eb58f86961cf3c6983b97d24fc2e417f05d5b'
            }
        }).then(res => {
            this.setState({ imageList: res.data.results })
            console.log(res.data.results);

        })
    }

    onSelectedImage = (data) => {
        this.setState({ selectedImage: data });
        this.props.dispatch(change('createPlant', 'image', this.state.selectedImage));
    }

    submitForm = (formValues) => {
        this.props.editPlant(this.props.match.params.id, formValues)

    }

    //gets number of days left untill its time to water the plant
    timeDifference = (isoDate) => {

        const oneDay = 24 * 60 * 60 * 1000;
        let dbDate = new Date(isoDate);
        let currentDate = new Date()

        let dayDiff = Math.round(Math.abs((currentDate.getTime() - dbDate.getTime()) / (oneDay)));

        return dayDiff
    }

    render() {
        console.log(this.timeDifference(this.props.plant.date))

        return (
            <div className="ui container">
                Edit plant
                <form onSubmit={e => e.preventDefault()}
                    className="ui form"
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
                        <Field name="date" type="date" onChange={this.handleFile} component={this.renderInput} />
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

function mapStateToProps(state, ownProps) {
    const plant = state.apiReducer[ownProps.match.params.id]

    return {
        plant: state.apiReducer[ownProps.match.params.id],
        userPlantData: Object.values(state.apiReducer),
        currentUserData: state.authReducer,
        initialValues: {
            name: plant.name,
            description: plant.description,
            notes: plant.notes
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