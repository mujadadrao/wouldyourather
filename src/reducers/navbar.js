import {NAV_TO_DASHBOARD, NAV_TO_OTHER, NAV_TO_LEADERBOARD, NAV_TO_NEW_QUESTION, DASHBOARD,
    OTHER, NEW_QUESTION, LEADERBOARD} from "../actions/navbar";

export default function navbar(state = DASHBOARD, action) {
    switch (action.type) {
        case NAV_TO_DASHBOARD:
            return DASHBOARD
        case NAV_TO_NEW_QUESTION:
            return NEW_QUESTION
        case NAV_TO_LEADERBOARD:
            return LEADERBOARD
        case NAV_TO_OTHER:
            return OTHER
        default:
            return state
    }
}