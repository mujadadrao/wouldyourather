import React from 'react';
import QuestionsTab from "./QuestionsTab";
import {Grid} from "semantic-ui-react";

const Dashboard = () => {
    return (
        <div>
            <br/>
            <Grid className="centered">
                <QuestionsTab/>
            </Grid>
        </div>
    );
}


export default Dashboard;