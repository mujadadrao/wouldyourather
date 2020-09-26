import {RECEIVE_QUESTIONS, ADD_ANSWER_TO_QUESTION, ADD_QUESTION_TO_QUESTION} from "../actions/questions";

export default function questions(state = {}, action){
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions,
            }
        case ADD_ANSWER_TO_QUESTION:
            return {
                ...state,
                [action.questionId]: {
                    ...state[action.questionId],
                    [action.choice]: {
                        ...state[action.questionId][action.choice],
                        votes: state[action.questionId][action.choice].votes.concat(action.id)
                    }
                }
            };
        case ADD_QUESTION_TO_QUESTION:
            return {
                ...state,
                [action.question.id]: action.question,
            }
        default:
            return state

    }
}