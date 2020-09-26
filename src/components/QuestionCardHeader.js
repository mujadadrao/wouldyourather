import {Card, Image} from "semantic-ui-react";
import React from "react";

const QuestionCardHeader = (props) => {
    const {author, answered, question} = props;
    return (
        <Card.Content>
            <Image
                floated='right'
                size='mini'
                src={`${author.avatarURL}`}
            />
            <Card.Header>Would you Rather?</Card.Header>
            <Card.Meta>Asked by {`${author.name}`}</Card.Meta>
            {answered ?
                (<Card.Description><strong
                    style={{color: "green"}}>{question.optionOne.text}</strong>{' or '}
                    <strong
                        style={{color: "red"}}>{question.optionTwo.text}</strong></Card.Description>) : null
            }
        </Card.Content>
    )

}

export default QuestionCardHeader;