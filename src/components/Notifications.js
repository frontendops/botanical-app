import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAmount } from '../actions'

class Notifications extends Component {
    state = {
        amount: 0
    }

    //delete this
    sayHello = (arg) => {
        console.log(`there are ${arg} plants that need attentions`);

    }


    render() {
        if (this.props.dates.length > 0) {
            const amount = this.props.dates.filter(date => date.days <= 4).length
            const num = 5
            this.props.getAmount(amount)
            return (
                <div>
                    <div className="ui compact menu" onLoad={() => this.sayHello()} >
                        <a className="item">
                            <i className="icon mail"></i> Need attention
                        <div className="floating ui red label">{amount}</div>
                        </a>
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