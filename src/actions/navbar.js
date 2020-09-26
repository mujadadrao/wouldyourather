export const NAV_TO_DASHBOARD = 'NAV_TO_DASHBOARD';
export const NAV_TO_OTHER = 'NAV_TO_OTHER';
export const NAV_TO_NEW_QUESTION = 'NAV_TO_NEW_QUESTION';
export const NAV_TO_LEADERBOARD = 'NAV_TO_LEADERBOARD';

export const DASHBOARD = 'dashboard';
export const NEW_QUESTION = 'new_question';
export const LEADERBOARD = 'leaderboard';
export const OTHER = 'other';

export function navigateToDashboardAction(){
    return {
        type: NAV_TO_DASHBOARD
    }
}

export function navigateToNewQuestionAction(){
    return {
        type: NAV_TO_NEW_QUESTION
    }
}

export function navigateToLeaderboardAction(){
    return {
        type: NAV_TO_LEADERBOARD
    }
}

export function navigateToOtherAction(){
    return {
        type: NAV_TO_OTHER
    }
}