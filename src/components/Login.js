import React, {Component, Fragment} from 'react';
import LoginForm from "./LoginForm";
import {connect} from 'react-redux';
import {Redirect} from "react-router-dom";
import {Grid} from "semantic-ui-react";


class Login extends Component {
    render() {
        if (this.props.authedUser !== null) {
            return <Redirect to={'/'}/>
        }
        return (
            <Fragment>
                <br />
                <Grid className='centered'>
                    <div className='container'>
                        <h1>Welcome to Would You Rather?</h1>
                        <LoginForm/>
                    </div>
                </Grid>
            </Fragment>
        )
    }
}

function mapStateToProps({authedUser}) {
    return {
        authedUser,
    }
}


export default connect(mapStateToProps)(Login);