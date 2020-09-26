import React, {Component} from 'react';
import {Button, Card, Image} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {withRouter} from "react-router";
import {navigateToOtherAction} from "../actions/navbar";


class QuestionCardTeaser extends Component {
    handleOnClick = (questionId) => {
        this.props.dispatch(navigateToOtherAction());
        this.props.history.push(`/question/${questionId}`);
    }

    render() {
        const {author, question} = this.props;
        return (
            <Card position='center'>
                <Card.Content>
                    <Image
                        floated='right'
                        size='mini'
                        src={`${author.avatarURL}`}
                    />
                    <Card.Header>Would you Rather?</Card.Header>
                    <Card.Meta>Asked by {`${author.name}`}</Card.Meta>
                    <Card.Description><strong style={{color: "green"}}>{question.optionOne.text}</strong> or ...
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Button onClick={() => this.handleOnClick(question.id)}>View Question</Button>
                </Card.Content>
            </Card>
        )
    }


}

export default withRouter(connect()(QuestionCardTeaser));
