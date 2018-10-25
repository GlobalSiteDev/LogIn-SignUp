import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../../actions';

class LoginForm extends Component {

    submitForm = () => {

    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitForm}>
                    <h2>LOG IN</h2>

                    <div></div>
                </form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(LoginForm);