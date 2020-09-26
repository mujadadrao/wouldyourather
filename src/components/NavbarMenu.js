import React, {Component} from 'react';
import {Button, Grid, Image, Menu} from 'semantic-ui-react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {unsetAuthedUser} from "../actions/authedUser";
import {withRouter} from 'react-router-dom';
import {
    DASHBOARD,
    LEADERBOARD,
    navigateToDashboardAction,
    navigateToLeaderboardAction,
    navigateToNewQuestionAction,
    NEW_QUESTION
} from "../actions/navbar";


class NavbarMenu extends Component {
    navigateToDashboard() {
        this.props.dispatch(navigateToDashboardAction());
        this.props.history.push('/');
    }

    navigateToNewQuestion() {
        this.props.dispatch(navigateToNewQuestionAction());
        this.props.history.push('/add');
    }

    navigateToLeaderboard() {
        this.props.dispatch(navigateToLeaderboardAction());
        this.props.history.push('/leaderboard');
    }


    logoutUser = () => {
        const {dispatch} = this.props;
        dispatch(unsetAuthedUser());
        this.navigateToDashboard();
    }

    render() {
        const {activeItem} = this.props;
        return (
            <div>
                <Menu pointing secondary>
                    <Menu.Item
                        name={DASHBOARD}
                        active={activeItem === DASHBOARD}
                        onClick={() => this.navigateToDashboard()}
                    />
                    <Menu.Item
                        name={NEW_QUESTION}
                        active={activeItem === NEW_QUESTION}
                        onClick={() => this.navigateToNewQuestion()}
                    />
                    <Menu.Item
                        name={LEADERBOARD}
                        active={activeItem === LEADERBOARD}
                        onClick={() => this.navigateToLeaderboard()}
                    />
                    <Menu.Menu position='right'>
                        <Grid.Row>
                            <Grid.Column>
                                <div style={{paddingTop: 5, paddingRight: 5}}>
                                    <Image
                                        src={this.props.user.avatarURL}
                                        avatar
                                        spaced='left'
                                    />
                                    <label style={{paddingLeft: 5, paddingRight: 25}}>{this.props.user.name}</label>
                                    <Button
                                        content="Logout"
                                        labelPosition="right"
                                        basic
                                        compact
                                        icon="log out"
                                        floated="right"
                                        onClick={(e) => (this.logoutUser())}
                                    />
                                </div>
                            </Grid.Column>
                        </Grid.Row>
                    </Menu.Menu>
                </Menu>
            </div>
        )
    }
}

function mapStateToProps({users, authedUser, navbar}) {
    const userObj = users[authedUser];
    return {
        user: userObj,
        activeItem: navbar,
    };
}

NavbarMenu.propTypes = {
    user: PropTypes.object.isRequired,
}

export default withRouter(connect(mapStateToProps)(NavbarMenu));
