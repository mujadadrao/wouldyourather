import React, {Component} from 'react';
import {Grid} from 'semantic-ui-react';
import {connect} from 'react-redux';
import LeaderboardUserCard from "./LeaderboardUserCard";

class Leaderboard extends Component {
    render() {
        const {users} = this.props;
        return (
            <Grid className='segment centered'>
                <br/>
                {
                    users.map((user, position) => {
                        return (
                            <Grid.Row columns={1} key={user.id}>
                                <LeaderboardUserCard user={user} position={position + 1}/>
                            </Grid.Row>
                        )
                    })
                }
                <br/>
            </Grid>
        )
    }
}

function mapStateToProps({users}) {
    const usersObjectsArr = Object.values(users);
    const topThreeUsers = usersObjectsArr.map(user => ({
        id: user.id,
        name: user.name,
        avatarURL: user.avatarURL,
        questionsAnswered: Object.values(user.answers).length,
        questionsCreated: user.questions.length,
        score: Object.values(user.answers).length + user.questions.length,
    })).sort((a, b) => a.score - b.score).reverse().slice(0, 3);
    return {
        users: topThreeUsers,
    };
}

export default connect(mapStateToProps)(Leaderboard);
