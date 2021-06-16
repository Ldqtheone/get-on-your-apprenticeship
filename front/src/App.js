import React, {Component} from 'react';
import logo from './hogwarts.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from "react-bootstrap/Col";
import StudentCard from "./components/StudentCard";
import {getAllStudents, getAllStudentsByHouse, getRandomStudent} from "./services/ApiServices";
import ListCharacters from "./components/ListCharacters";
import Dropdown from "react-bootstrap/Dropdown";
import ListHouses from "./components/ListHouses";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allStudents: [],
            randomResponse: null,
            selectedFilter: "All"
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
            getAllStudentsByHouse(filter).then(data => {
                this.setState({allStudents: data})
            })
        }

    }

    loadAllStudents() {
        getAllStudents().then(data => {
            this.setState({allStudents: data})
        })
    }

    componentDidMount() {
        this.loadAllStudents()
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
                    
                    <ListHouses key={this.state.selectedFilter} title={this.state.selectedFilter}
                                strings={this.availableFilter} callbackfn={(filter) =>
                        <Dropdown.Item
                            eventKey={filter}
                            onClick={() => this.handleFilter(filter)}
                            selected={this.state.selectedFilter === filter}>{filter}
                        </Dropdown.Item>}
                    />

                    <ListCharacters characters={this.state.allStudents}/>
                </header>
            </div>
        );
    }
}

export default App;