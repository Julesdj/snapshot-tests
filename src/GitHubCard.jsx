import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const GitHubCard = () => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img
                    variant="top"
                    src="https://avatars.githubusercontent.com/u/90865585?v=4"
                />
                <Card.Body>
                    <Card.Title>Julesdj</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">GitHubCard</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default GitHubCard;
