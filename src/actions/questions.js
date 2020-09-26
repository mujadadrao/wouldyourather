export const ADD_ANSWER_TO_QUESTION = 'ADD_ANSWER_TO_QUESTION';
export const ADD_QUESTION_TO_QUESTION = 'ADD_QUESTION_TO_QUESTION';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'

export function receiveQuestions (questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}

export function addAnswerToQuestion (userId, questionId, choice) {
    return {
        type: ADD_ANSWER_TO_QUESTION,
        id: userId,
        questionId,
        choice,
    }
}

export function addQuestionToQuestion (question) {
    return {
        type: ADD_QUESTION_TO_QUESTION,
        question,
    }
}


