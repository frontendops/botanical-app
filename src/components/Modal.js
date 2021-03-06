import React from 'react';
import ReactDOM from 'react-dom';
import history from '../history';

const Modal = props => {
    return ReactDOM.createPortal(
        <div className="ui dimmer modals visible active"
            onClick={() => history.push('/')}
        >
            <div className="ui standard modal visible active"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="header">Delete Plant</div>
                <div className="content">
                    <p>Are you sure you want to delete this plant?</p>
                </div>
                <div className="actions">
                    <div className="negative ui button"
                        onClick={() => props.deletePlant()}
                    >Delete</div>
                    <div className="ui cancel button"
                        onClick={() => history.push('/')}
                    >Cancel</div>
                </div>
            </div>
        </div>,
        document.querySelector('#modal')
    )
}

export default Modal