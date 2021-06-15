import React, { Component } from 'react';
import logo from './hogwarts.png';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: [] } ;
  }

  callAPI() {
    fetch("http://localhost:3000/dummy/students")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: JSON.parse(res) },()=>console.log(this.state)))
        .catch(err => err);
  }

  componentWillMount() {
    this.callAPI();
  }

  generateStudentList(){
      return (
          this.state.apiResponse.map((listValue, index) => {
              return (
                  <tr key={index}>
                      <td>{listValue.name}</td>
                      <td>{listValue.house}</td>
                  </tr>
              );
          })
      )
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Here is a list of all students:
        </p>
        <table>
            <thead>
               <tr>
                   <th>Nom</th>
                   <th>Maison</th>
               </tr>
            </thead>
            <tbody>
                {this.generateStudentList()}
            </tbody>
        </table>
        </header>
      </div>
    );
  }
}

export default App;