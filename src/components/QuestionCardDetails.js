import {Card} from "semantic-ui-react";
import React from "react";
import QuestionCardChoices from "./QuestionCardChoices";
import QuestionCardResults from "./QuestionCardResults";

const QuestionCardDetails = (props) => {
    const {user, question, answered, handleOnClickAnswer} = props;
    return (
        <Card.Content extra>
            {
                !answered ? (<QuestionCardChoices user={user} question={question}
                                                  handleOnClickAnswer={handleOnClickAnswer}/>) :
                    (<QuestionCardResults user={user} question={question}/>)
            }
        </Card.Content>
    )

}

export default QuestionCardDetails;