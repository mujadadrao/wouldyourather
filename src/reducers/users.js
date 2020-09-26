import {ADD_ANSWER_TO_USER, RECEIVE_USERS, ADD_QUESTION_TO_USER} from '../actions/users'

export default function users(state = {}, action){
    switch (action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users,
            }
        case ADD_ANSWER_TO_USER:
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    answers: {
                        ...state[action.id].answers,
                        [action.questionId]: action.choice,
                    }
                },
            }
        case ADD_QUESTION_TO_USER:
            return {
                ...state,
                [action.author]: {
                    ...state[action.author],
                    questions: state[action.author].questions.concat(action.id)
                }
            };
        default:
            return state
    }
}