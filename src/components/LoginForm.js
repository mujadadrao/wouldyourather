import React, {Component} from 'react';
import {Form, Header} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {setAuthedUser} from "../actions/authedUser";
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';


class LoginForm extends Component {
    state = {
        value: ''
    };

    onChange = (event, {value}) => {
        this.setState(() => ({
            value
        }))
    }

    getUsersData = () => {
        return this.props.users.map((user) => ({
            key: user.id,
            text: user.name,
            value: user.id,
            image: user.avatarURL,
        }))
    };

    handleOnSubmit = (event) => {
        event.preventDefault();
        const {dispatch} = this.props;
        const authedUser = this.state.value;
        dispatch(setAuthedUser(authedUser));
    }

    render() {
        return (
            <Form onSubmit={this.handleOnSubmit}>
                <Header as="h2" color="blue">
                    Who are you mate?
                </Header>
                <Form.Dropdown
                    placeholder="Select your name from the list?"
                    fluid
                    selection
                    scrolling
                    options={this.getUsersData()}
                    value={this.state.value}
                    onChange={this.onChange}
                    required
                />
                <Form.Button content="Login" color='blue' disabled={this.state.value === ''} fluid/>
            </Form>
        );
    }
}

function mapStateToProps(store) {
    const {users} = store;
    return {
        users: Object.values(users)
    }
}

LoginForm.propTypes = {
    users: PropTypes.array.isRequired,
}

export default withRouter(connect(mapStateToProps)(LoginForm));