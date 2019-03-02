import React, { Component } from 'react'

class ImageUpload extends Component {
    state = { selectedFile: null }

    fileChangedHandler = event => {
        this.setState({ selectedFile: event.target.files[0] })
    }

    // axios to cloudinary and pass user id from create plant on submit
    uploadHandler = (e) => {
        e.preventDefault();
        this.props.getImageData(this.state.selectedFile)
    }
    render() {
        return (
            <div>
                <input type="file" onChange={this.fileChangedHandler} />
                <button onClick={this.uploadHandler}>Save Image</button>
            </div>
        )
    }
}

export default ImageUpload