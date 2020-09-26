import React, {Fragment} from 'react';
import {Button, Container, Header} from 'semantic-ui-react';
import {Link} from "react-router-dom";

const Page404 = () => {
    return (
        <Fragment>
            <br/>
            <Container textAlign="center">
                <Header as="h3">404 Error</Header>
                <p>You have visited a page that does not exist</p>
                <p>Click the button below to go to home page!</p>
                <Link to='/'><Button>Dashboard</Button></Link>
            </Container>
        </Fragment>
    );
}

export default Page404;
