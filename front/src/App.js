import React, {Component} from 'react';
import logo from './hogwarts.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from "react-bootstrap/Col";
import StudentCard from "./components/StudentCard";
import {getAllStudents, getAllStudentsByHouse, getRandomStudent} from "./services/ApiServices";
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

    filterByHouse(house){
        getAllStudentsByHouse(house).then(data => {
            this.setState({allStudents: data})
        })
    }

    getAllStudents(){
        getAllStudents().then(data => {
            this.setState({allStudents: data})
        })
    }

    componentDidMount() {
       this.getAllStudents()
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
                    <p>
                        <button onClick={() => {
                            this.filterByHouse("Gryffindor")
                        }}>
                            Gryffindor
                        </button>
                        <button onClick={() => {
                            this.filterByHouse("Slytherin")
                        }}>
                            Slytherin
                        </button>
                        <button onClick={() => {
                            this.filterByHouse("Hufflepuff")
                        }}>
                            Hufflepuff
                        </button>
                        <button onClick={() => {
                            this.filterByHouse("Ravenclaw")
                        }}>
                            Ravenclaw
                        </button>
                        <button onClick={() => {
                            this.getAllStudents()
                        }}>
                            All Houses
                        </button>
                    </p>
                    <ListCharacters characters={this.state.allStudents}/>
                </header>
            </div>
        );
    }
}

export default App;