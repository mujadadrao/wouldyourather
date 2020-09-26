import React, {Component, Fragment} from 'react';
import './App.css';
import Dashboard from "./components/Dashboard";
import {connect} from 'react-redux';
import {handleInitialData} from "./actions/shared";
import {LoadingBar} from "react-redux-loading";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from "./components/Login";
import Question from "./components/QuestionCard";
import NavigationBar from "./components/NavigationBar";
import Page404 from "./components/Page404";
import NewQuestion from "./components/NewQuestion";
import Leaderboard from "./components/Leaderboard";

class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }


    render() {
        const {authedUser} = this.props;
        return (
            <Router>
                <Fragment>
                    <LoadingBar/>
                    <div className='container'>
                        <div>
                            {
                                authedUser === null ? (<Route component={Login}/>) : (
                                    <Fragment>
                                        <NavigationBar/>
                                        <Switch>
                                            <Route exact path='/' component={Dashboard}/>
                                            <Route path='/question/:id' component={Question}/>
                                            <Route path='/add' exact component={NewQuestion} />
                                            <Route path='/leaderboard' exact component={Leaderboard} />
                                            <Route component={Page404}/>
                                        </Switch>
                                    </Fragment>
                                )
                            }
                        </div>
                    </div>
                </Fragment>
            </Router>
        );
    }
}

function mapStateToProps({authedUser}) {
    return {
        authedUser
    };
}


export default connect(mapStateToProps)(App);
