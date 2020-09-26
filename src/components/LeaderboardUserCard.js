import React, {Component} from 'react';
import {Button, Card, Image} from "semantic-ui-react";

const positions = {
    1: {
        text: '1st',
        color: 'green'
    },
    2: {
        text: '2nd',
        color: 'orange'
    },
    3: {
        text: '3rd',
        color: 'yellow'
    },
}

class LeaderboardUserCard extends Component {
    render() {
        const {user, position} = this.props;
        return (
            <Card>
                <Card.Content>
                    <Image
                        floated='right'
                        size='mini'
                        src={user.avatarURL}
                    />
                    <Card.Header>{user.name}</Card.Header>
                    <Card.Meta><strong>Position: {positions[position].text}</strong></Card.Meta>
                </Card.Content>
                <Card.Content>
                    <p>Questions Answered: {user.questionsAnswered}</p>
                </Card.Content>
                <Card.Content>
                    <p>Questions Created: {user.questionsCreated}</p>
                </Card.Content>
                <Card.Content extra>
                    <Button basic color={positions[position].color}>
                        Score: {user.score}
                    </Button>
                </Card.Content>
            </Card>
        )
    }
}

export default LeaderboardUserCard;