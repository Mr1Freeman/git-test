import React, {Component} from 'react';
import './App.css';
import Car from './Car/Car'

class App extends Component {
  render() { 
    const divStyle = {
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'space-around',
      flexWrap: 'wrap'

    }
    
    return ( 
      <div style={divStyle}>

          <Car name={'Ford'} year = {2018}/> 
          <Car name= "Audi" year = {2019}/>
          <Car name={'Bmw'}  year = {2005}/>
      </div>
    )
  }
}

export default App;
