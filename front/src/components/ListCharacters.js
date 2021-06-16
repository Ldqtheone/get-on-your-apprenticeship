import PropTypes from 'prop-types'
import React from 'react';
import StudentCard from "./StudentCard";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

/**
 *Component ListCharacters
 *
 */
export default function ListCharacters(props) {
    function displayCharacters() {
        return props.characters.map((character, index) => {
            return (
                <Col xs={12} sm={6} lg={4} key={index}>
                    <StudentCard {...character}/>
                </Col>
            );
        });
    }
    return (
        <Container>
            <Row>
                {displayCharacters()}
            </Row>
        </Container>
    );
}

ListCharacters.propTypes = {
    characters: PropTypes.array.isRequired
}

ListCharacters.defaultProps = {
    characters: []
}