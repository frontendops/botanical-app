import React, { Component } from 'react';

import { connect } from 'react-redux';
import { deletePlant } from '../actions';
import Modal from './Modal';

class DeletePlant extends Component {

    onDeletePlant = () => {
        this.props.deletePlant(this.props.match.params.id);
    }
    render() {
        return (
            <div>
                <Modal
                    deletePlant={this.onDeletePlant}
                />
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        plant: ownProps.match.params.id

    }
}

export default connect(mapStateToProps, {
    deletePlant
})(DeletePlant)