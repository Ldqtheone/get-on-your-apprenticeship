import React, {Component} from 'react';
import logo from './hogwarts.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from "react-bootstrap/Col";
import StudentCard from "./components/StudentCard";
import {getAllStudents, getRandomStudent} from "./services/ApiServices";
import ListCharacters from "./components/ListCharacters";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allStudents: [],
            randomResponse: {}
        };
    }

    handleRandomStudent() {
        getRandomStudent().then(data => {
            this.setState({randomResponse: data})
        })
    }

    componentDidMount() {
        getAllStudents().then(data => {
            this.setState({allStudents: data})
        })
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>

                    {this.state.randomResponse &&
                    <Col xs={12} sm={6}>
                        <StudentCard {...this.state.randomResponse}/>
                    </Col>
                    }
                    <button onClick={() => {
                        this.handleRandomStudent()
                    }}>
                        Choose your student for the cup
                    </button>
                    <p>
                        Here is a list of all students:
                    </p>
                    <ListCharacters characters={this.state.allStudents}/>
                </header>
            </div>
        );
    }


}

export default App;