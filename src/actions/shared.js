import {receiveUsers} from '../actions/users';
import {receiveQuestions} from "./questions";
import {_getQuestions, _getUsers} from "../utils/_DATA";
import {hideLoading, showLoading} from "react-redux-loading";
import {addAnswerToQuestion} from "./questions";
import {addAnswerToUser} from "../actions/users";
import {_saveQuestionAnswer} from "../utils/_DATA";
import {_saveQuestion} from "../utils/_DATA";
import {addQuestionToQuestion} from "./questions";
import {addQuestionToUser} from "../actions/users";

function getInitialData() {
    return Promise.all([
        _getUsers(),
        _getQuestions(),
    ]).then(([users, questions]) => ({
        users,
        questions,
    }))
}


export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading());
        return getInitialData()
            .then(({users, questions}) => {
                dispatch(receiveUsers(users));
                dispatch(receiveQuestions(questions));
                dispatch(hideLoading());
            })
    }
}

export function handleAddAnswer(userId, questionId, choice) {
    return dispatch => {
        dispatch(addAnswerToUser(userId, questionId, choice));
        dispatch(addAnswerToQuestion(userId, questionId, choice));
        return _saveQuestionAnswer({
            authedUser: userId,
            qid: questionId,
            answer: choice}
            ).catch(e => {
            console.warn('Error in handleAddAnswer:', e);
        });
    };
}

export function handleAddQuestion(optionOneText, optionTwoText, author){
    return dispatch => {
        return _saveQuestion({ optionOneText, optionTwoText, author }).then(
            question => {
                dispatch(addQuestionToQuestion(question));
                dispatch(addQuestionToUser(question));
                console.log('Question added to state as well');
            }
        );
    };
}