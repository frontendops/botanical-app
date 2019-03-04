import React, { Component } from 'react'

class ImageList extends Component {
    sendData = (e, data) => {

        this.props.onSelectedImage(data)
    }

    render() {
        return (
            <div className="ui small images">
                {this.props.images.map(image => (
                    <img src={image.urls.small} key={image.id} onClick={e => this.sendData(e, image.urls.small)} />
                ))}
            </div>
        )
    }
}

export default ImageList