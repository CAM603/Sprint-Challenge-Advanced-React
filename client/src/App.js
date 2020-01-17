import React from 'react';
import axios from 'axios';
import './App.css';
import 'antd/dist/antd.css';
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
      this.setState({data: res.data})
      this.setState({poop: res.data.filter(el => el.country === 'United States')})
    })
    .catch(err => console.log(err))
  }
  
  render() {
    
    return (
      <div className="App">
        <Navigation/>
        <Countries 
        data={this.state.data}
        />
      </div>
    );
  }
}

export default App;
