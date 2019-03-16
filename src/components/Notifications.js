import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAmount } from '../actions'


class Notifications extends Component {
    state = {
        amount: 0
    }



    render() {
        if (this.props.dates.length > 0) {
            const amount = this.props.dates.filter(date => date.days <= 4).length
            this.props.getAmount(amount)
            return (
                <div>
                    <div className="ui compact menu" >
                        <div className="item">
                            <i className="leaf icon"></i> Need attention
                        <div className="floating ui red label">{amount}</div>
                        </div>
                    </div>

                </div>
            )
        } else {
            return <div></div>
        }

    }
}

function mapStateToProps(state) {
    return {

    }
}
export default connect(mapStateToProps, {
    getAmount
})(Notifications)