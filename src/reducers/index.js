import authedUser from "./authedUser";
import users from "./users";
import questions from "./questions";
import {combineReducers} from "redux";
import navbar from "./navbar";
import { loadingBarReducer } from 'react-redux-loading';


export default combineReducers({
        authedUser,
        users,
        questions,
        navbar,
        loadingBar: loadingBarReducer,
    }
);