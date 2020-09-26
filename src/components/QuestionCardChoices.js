import {Button} from "semantic-ui-react";
import React from "react";

const QuestionCardChoices = (props) => {
    const {user, question, handleOnClickAnswer} = props;
    return (
        <div className='ui two buttons'>
            <Button basic color='green' onClick={(event) =>
                handleOnClickAnswer(user.id, question.id, 'optionOne')}>
                {`${question.optionOne.text}`}
            </Button>
            <Button basic color='red' onClick={() =>
                handleOnClickAnswer(user.id, question.id, 'optionTwo')}>
                {`${question.optionTwo.text}`}
            </Button>
        </div>
    )

}

export default QuestionCardChoices;