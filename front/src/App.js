import React, {Component} from 'react';
import logo from './hogwarts.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {apiResponse: []};
    }

    callAPI() {
        fetch("http://localhost:3000/dummy/students")
            .then(res => res.json())
            .then(data => this.setState({apiResponse: data}))
            .catch(err => err);
    }

    displayStudent() {

        return this.state.apiResponse.map((student, index) => {
            return (
                <Col xs={12} sm={6}>
                    <Card
                        bg={"dark"}
                        key={index}
                        text={'white'}

                        className={"mb-2"}
                    >
                        <Card.Header>{student.name}</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                House : {student.house}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            );
        });
    }

    componentDidMount() {
        this.callAPI();
    }


    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Here is a list of all students:
                    </p>
                    <Container>
                        <Row>
                            {this.displayStudent()}
                        </Row>
                    </Container>
                </header>
            </div>
        );
    }


}

export default App;