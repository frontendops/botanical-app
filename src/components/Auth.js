import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut, getPlants} from '../actions';

class Auth extends Component {
    componentDidMount () {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '301625942479-036cu7tulv8jc3527vi2puq3igiq5h6h.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = isSignedIn => {
        if (isSignedIn) {
          this.props.signIn(this.auth.currentUser.get().getId());
        } else {
          this.props.signOut();
        }
      };

      onSignInClick = () => {
        this.auth.signIn();
        this.props.getPlants();

      };
    
      onSignOutClick = () => {
        this.auth.signOut();
      };

      //change login button text and functionality when clicked
    renderAuthButton = () => {
        let {isSignedIn} = this.props;
        if (isSignedIn === null) {
            console.log('nothing');
        } else if (isSignedIn === true) {
            return (
                <div className="ui olive button" onClick={this.onSignOutClick}>Sign Out</div>
            );
        } else {
            return (
                <div onClick={this.onSignInClick}>Log In</div>
            );
        };
    }
    
    render () {
        return <React.Fragment>
          {this.renderAuthButton()}
        </React.Fragment>
    }
}

function mapStateToProps(state) {
    return { isSignedIn: state.authReducer.isSignedIn}
}

export default connect(mapStateToProps, {
    signIn, signOut, getPlants
})(Auth);