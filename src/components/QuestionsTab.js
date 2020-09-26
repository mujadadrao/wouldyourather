import React, {Component, Fragment} from 'react';
import {Tab} from 'semantic-ui-react';
import QuestionCard from "./QuestionCardTeaser";
import {connect} from 'react-redux';
import {withRouter} from "react-router";
import NoQuestionCard from "./NoQuestionCard";

class QuestionsTab extends Component {
    generateQuestionCard = (question) => {
        return (
            <Fragment key={question.id}>
                <QuestionCard author={this.props.users[question.author]} question={question}/>
                <br/>
            </Fragment>
        );
    }

    generatePanes = (unansweredQuestions, answeredQuestions) => {
        return ([
            {
                menuItem: 'Unanswered', render: () => {
                    return unansweredQuestions.map((question) => (this.generateQuestionCard(question)))
                }
            },
            {
                menuItem: 'Answered', render: () => {
                    return answeredQuestions.map((question) => (this.generateQuestionCard(question)))
                }
            }
        ])
    }

    render() {
        const {user, unansweredQuestions, answeredQuestions} = this.props;
        const panes = this.generatePanes(unansweredQuestions, answeredQuestions);
        if (unansweredQuestions.length === 0) {
            panes[0].render = () => <NoQuestionCard user={user}/>;
        }
        return (
            <Fragment>
                <Tab panes={panes}/>
            </Fragment>
        )
    }
}


function mapStateToProps({authedUser, users, questions}) {
    const currentUser = users[authedUser];
    const answeredQuesArr = Object.keys(currentUser.answers);
    const unansweredQuestions = Object.values(questions).filter((question) => {
        for (let qid of answeredQuesArr) {
            if (question.id === qid) {
                return false;
            }
        }
        return true;
    }).sort((a, b) => (b.timestamp - a.timestamp));
    const answeredQuestions = Object.values(questions).filter((question) => {
        for (let qid of answeredQuesArr) {
            if (question.id === qid) {
                return true;
            }
        }
        return false;
    }).sort((a, b) => (b.timestamp - a.timestamp));

    return {
        user: currentUser,
        answeredQuestions,
        unansweredQuestions,
        users,
    }
}

export default withRouter(connect(mapStateToProps)(QuestionsTab));

