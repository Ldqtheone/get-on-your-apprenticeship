import React, {Component} from 'react';
import logo from './hogwarts.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import StudentCard from "./components/StudentCard";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {apiResponse: []};
    }

    callAPI() {
        fetch("http://localhost:3000/real/students")
            .then(res => res.json())
            .then(data => this.setState({apiResponse: data}))
            .catch(err => err);
    }

    displayStudent() {
        return this.state.apiResponse.map((student, index) => {
            return (
                <Col xs={12} sm={6} key={index}>
                    <StudentCard {...student}/>
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