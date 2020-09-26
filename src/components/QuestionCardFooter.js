import {Button, Card} from "semantic-ui-react";
import React from "react";

const QuestionCardFooter = (props) => {
    const {handleOnClickDashboard} = props;
    return (
        <Card.Content extra>
            <Button onClick={() => handleOnClickDashboard()}>Back to Dashboard</Button>
        </Card.Content>
    )

}

export default QuestionCardFooter;