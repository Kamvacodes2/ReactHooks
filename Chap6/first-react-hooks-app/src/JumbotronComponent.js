import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

function JumbotronComponent(props) {
    return (
        <div>
            <Jumbotron>
                <p>{props.children}</p>
                <p><Button variant="primary">Learn more</Button></p>
            </Jumbotron>
        </div>
    )
}

export default JumbotronComponent;

// This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.