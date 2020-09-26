import React, {Component} from 'react';
import {Button, Card, Image} from "semantic-ui-react";
import {Link} from "react-router-dom";

class NoQuestionCard extends Component {
    render() {
        const {user} = this.props;
        return (
            <Card>
                <Card.Content>
                    <Image
                        floated='right'
                        size='mini'
                        src={user.avatarURL}
                    />
                    <Card.Header>{user.name}</Card.Header>
                    <Card.Meta>Congratulations</Card.Meta>
                    <Card.Description>
                        You have answered all the questions! Create more questions for your friends!
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Link to='/add'>
                        <Button basic color='green'><p>Create Question</p></Button>
                    </Link>
                </Card.Content>
            </Card>
        )
    }
}

export default NoQuestionCard;