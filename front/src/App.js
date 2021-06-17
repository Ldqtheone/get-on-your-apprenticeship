import React, {Component} from 'react';
import logo from './hogwarts.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from "react-bootstrap/Col";
import StudentCard from "./components/StudentCard";
import {getAllStudents, getAllStudentsByHouse, getRandomStudent} from "./services/ApiServices";
import ListCharacters from "./components/ListCharacters";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import FilterSelector from "./components/FilterSelector";
import Spinner from "react-bootstrap/Spinner";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allStudents: [],
            randomResponse: null,
            selectedFilter: "All",
            isLoading: false,
        };
        this.availableFilter = ['All', 'Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw']
    }

    handleRandomStudent() {
        getRandomStudent().then(data => {
            this.setState({randomResponse: data})
        })
    }

    handleFilter(filter) {
        this.setState({selectedFilter: filter})
        if (filter === "All") {
            this.loadAllStudents()
        } else {
            this.loadFilteredStudents(filter)
        }

    }

    loadAllStudents() {
        this.setState({isLoading: true})
        getAllStudents().then(data => {
            this.setState({allStudents: data}, () => {
                this.setState({isLoading: false})
            })
        })
    }

    loadFilteredStudents(filter) {
        this.setState({isLoading: true})
        getAllStudentsByHouse(filter).then(data => {
            this.setState({allStudents: data}, () => {
                this.setState({isLoading: false})
            })
        })
    }

    componentDidMount() {
        this.loadAllStudents()
    }

    render() {
        return (
            <Container className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                </header>
                <body>

                <Container className="mt-5">

                    {this.state.randomResponse &&
                    <Row className="justify-content-center">
                        <Col xs={12} sm={6}>
                            <StudentCard {...this.state.randomResponse}/>
                        </Col>
                    </Row>
                    }
                    <Row className="justify-content-center">
                        <Button onClick={() => {
                            this.handleRandomStudent()
                        }}>
                            Choose your student for the cup
                        </Button>
                    </Row>

                </Container>
                <Container className="mt-5">
                    <Row>
                        <Col>
                            <h2>Here is a list of all Characters:</h2>
                        </Col>
                        <Col>
                            <FilterSelector
                                handleClick={(filter) => {
                                    this.handleFilter(filter)
                                }}
                                filters={this.availableFilter}
                                selectedFilter={this.state.selectedFilter}/>
                        </Col>
                    </Row>
                </Container>

                {this.state.isLoading ?
                    <Spinner animation="border" variant="primary" style={{margin: "20px 50%"}}/>
                    :
                    <ListCharacters characters={this.state.allStudents}/>
                }

                </body>
            </Container>
        );
    }
}

export default App;