import React, {Component, Fragment} from 'react';
import {Card, Grid} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {withRouter} from "react-router-dom";
import {navigateToDashboardAction} from "../actions/navbar";
import {handleAddAnswer} from "../actions/shared";
import QuestionCardHeader from "./QuestionCardHeader";
import QuestionCardDetails from "./QuestionCardDetails";
import QuestionCardFooter from "./QuestionCardFooter";
import Page404 from "./Page404";

class QuestionCard extends Component {
    handleOnClickAnswer = (userId, questionId, choice) => {
        this.props.dispatch(handleAddAnswer(userId, questionId, choice));
    }

    handleOnClickDashboard = () => {
        this.props.dispatch(navigateToDashboardAction());
        this.props.history.push(`/`);
    }

    render() {
        if (this.props.page404) {
            return (<Page404/>);
        }
        const {user, author, question, answered} = this.props;
        return (
            <Fragment>
                <br/> <br/>
                <Grid className="centered">
                    <Card position='center'>
                        <QuestionCardHeader author={author} question={question} answered={answered}/>
                        <QuestionCardDetails user={user} question={question} answered={answered}
                                             handleOnClickAnswer={this.handleOnClickAnswer}/>
                        <QuestionCardFooter handleOnClickDashboard={this.handleOnClickDashboard}/>
                    </Card>
                </Grid>
            </Fragment>
        )
    }


}

function mapStateToProps({authedUser, questions, users}, props) {
    const currentUser = users[authedUser];
    const question = questions[props.match.params.id];
    if (question === undefined) {
        return {
            page404: true,
        }
    }
    let answered = Object.keys(currentUser.answers).includes(question.id);
    return {
        user: currentUser,
        author: users[question.author],
        users,
        question,
        answered,
        page404: false,
    }
}

export default withRouter(connect(mapStateToProps)(QuestionCard));
