import React, {Component} from 'react';
import {Button, Dimmer, Form, Loader, Grid} from 'semantic-ui-react';
import {handleAddQuestion} from "../actions/shared";
import {connect} from "react-redux";
import {Redirect} from "react-router";

class NewQuestion extends Component {
    state = {
        optionOne: '',
        optionTwo: '',
        loading: false,
        submitted: false,
    }

    handleOnChange = (value, option) => {
        this.setState(() => ({
            [option]: value,
        }))
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const {authedUser, dispatch} = this.props;
        const {optionOne, optionTwo} = this.state;
        new Promise((res, rej) => {
            this.setState(() => ({
                loading: true,
            }));
            dispatch(handleAddQuestion(optionOne, optionTwo, authedUser));
            setTimeout(() => res('success'), 1000);
        }).then(() => {
            this.setState({
                option1: '',
                option2: ''
            });
            this.setState(() => ({
                submitted: true,
            }));
        });
    }

    render() {
        const disableSubmit = (this.state.optionOne === '' || this.state.optionTwo === '');
        if (this.state.submitted === true) {
            return <Redirect to="/"/>;
        }
        return (
            <Grid className='segment centered'>
                <br />
                <Form className='segment center' onSubmit={this.handleSubmit}>
                    <h3>Add New Question</h3>
                    <p>Would you rather?</p>
                    <Form.Field>
                        <input onChange={(event) => this.handleOnChange(event.target.value,
                            'optionOne')} placeholder='Enter first option'/>
                    </Form.Field>
                    <Form.Field><label>or</label></Form.Field>
                    <Form.Field>
                        <input onChange={(event) => this.handleOnChange(event.target.value,
                            'optionTwo')} placeholder='Enter second option'/>
                    </Form.Field>
                    <Button type='submit' color='blue' disabled={disableSubmit}>Add Question</Button>
                    {this.state.loading && (
                        <Dimmer active inverted>
                            <Loader content="Please wait..."/>
                        </Dimmer>
                    )}
                </Form>
                <br />
            </Grid>
        );
    }
}


function mapStateToProps({authedUser}) {
    return {
        authedUser
    };
}

export default connect(mapStateToProps)(NewQuestion);
