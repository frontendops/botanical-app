import React, { Component } from 'react'

class ImageList extends Component {
    sendData = (e, data) => {

        this.props.onSelectedImage(data)
    }

    render() {
        return (
            <React.Fragment>
                <div>Double click image to select</div>
                <div className="ui small images">

                    {this.props.images.map(image => (
                        <img src={image.urls.small} key={image.id} alt={image.alt} onClick={e => this.sendData(e, image.urls.small)} />
                    ))}
                </div>
            </React.Fragment>
        )
    }
}

export default ImageList