import React from 'react';
import axios from 'axios';
import './App.css';
import Navigation from './components/Navigation';

class App extends React.Component {
  constructor() {
    super();

  }
  componentDidMount() {
    axios
    .get(`http://localhost:5000/api/players`)
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <Navigation />
        
      </div>
    );
  }
}

export default App;
