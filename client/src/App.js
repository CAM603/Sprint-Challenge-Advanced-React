import React from 'react';
import axios from 'axios';
import './App.css';
import Navigation from './components/Navigation';
import Countries from './components/Countries';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }
  componentDidMount() {
    axios
    .get(`http://localhost:5000/api/players`)
    .then(res => {
      console.log(res.data)
      this.setState({data: res.data})
    })
    .catch(err => console.log(err))
  }

  render() {
    const US = this.state.data.filter(el => el.country === 'United States')
    
    return (
      <div className="App">
        <Navigation/>
        <Countries 
        US={US}
        />
      </div>
    );
  }
}

export default App;
