import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../../actions';
import styles from './LoginForm.module.css';
import Input from '../../components/UI/Input/Input';

class LoginForm extends Component {

    state = {
        loginForm: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Enter your email'
                },
                value: ''
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Enter your password'
                },
                value: ''
            }
        },
        error: '',
        success: false
    }

    submitForm = () => {

    }

    inputChangedHandler = (event, inputIdentifier) => {
        // Clone deeply with spread operator

        const updatedLoginForm = {
            ...this.state.loginForm
        };
        const updatedFormElement = {
            ...updatedLoginForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedLoginForm[inputIdentifier] = updatedFormElement;
        this.setState({loginForm: updatedLoginForm});
    }

    render() {
        const formElements = [];

        for (let key in this.state.loginForm) {
            formElements.push({
                id: key,
                config: this.state.loginForm[key]
            });
        }


        return (
            <div className={styles.Container}>
                <h2>LOG IN</h2>
                <form onSubmit={this.submitForm}>
                    {formElements.map(formElement => (
                        <Input
                            key={formElement.id}
                            elementType={formElement.config.elementType}
                            elementConfig={formElement.config.elementConfig}
                            value={formElement.config.value}
                            changed={(event) => this.inputChangedHandler(event, formElement.id)}
                            />
                    ))}
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
