import {Icon, Progress} from "semantic-ui-react";
import React from "react";

const QuestionCardResults = (props) => {
    const {user, question} = props;
    const choiceOneVotes = question.optionOne.votes.length;
    const choiceTwoVotes = question.optionTwo.votes.length;
    const totalVotes = choiceOneVotes + choiceTwoVotes;
    const voteOfUser = user.answers[question.id];
    let option1Color = 'grey';
    let option2Color = 'grey';
    if (choiceOneVotes > choiceTwoVotes) {
        option1Color = 'orange';
    } else if (choiceTwoVotes > choiceOneVotes) {
        option2Color = 'orange';
    }
    return (
        <div>
            <Progress percent={((choiceOneVotes / totalVotes) * 100).toFixed(2)}
                      progress='percent' color={option1Color}>
                {question.optionOne.text}
                {voteOfUser === 'optionOne' &&
                (<span> ( Your Choice <Icon name='check'/>)</span>)}
            </Progress>
            <p>{`${choiceOneVotes} out of ${totalVotes} votes`}</p>
            <Progress percent={((choiceTwoVotes / totalVotes) * 100).toFixed(2)}
                      progress='percent' color={option2Color}>
                {question.optionTwo.text}
                {voteOfUser === 'optionTwo' &&
                (<span> ( Your Choice <Icon name='check'/>)</span>)}
            </Progress>
            <p>{`${choiceTwoVotes} out of ${totalVotes} votes`}</p>
            <br/>
        </div>
    )

}

export default QuestionCardResults;