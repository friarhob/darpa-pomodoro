import React, { Component } from 'react';
import './App.css';
import Clock from './Clock.js';

class App extends Component {
  constructor(props)
  {
    super(props);

    this.state = {
      delayMinutes: 50,
      currentTime: new Date().getTime(),
      startTime: new Date().getTime(),
      endTime: new Date().getTime()
    };

    this.offsetDelayMinutes = this.offsetDelayMinutes.bind(this);
    this.updateDelayMinutes = this.updateDelayMinutes.bind(this);
  }

  pad(number)
  {
    var stringNumber = String(number);
    if(stringNumber.length < 2) stringNumber = "0"+stringNumber;
    return stringNumber;
  }

  offsetDelayMinutes(amount)
  {
    this.setState({
      delayMinutes: Math.max(0,(parseInt(this.state.delayMinutes)+amount))
    });
  }

  updateDelayMinutes(newTime)
  {
    this.setState({
      delayMinutes: ((parseInt(newTime)>0)?parseInt(newTime):0)
    });
  }


  render() {
    return (
      <div className="App">
        <header>
          <h1>DARPA</h1>
          <h2>DARPA&apos;s Another React-based Pomodoro App</h2>
        </header>
        <main>
          <Clock />
          <a href="#" className="up" onClick={() => this.offsetDelayMinutes(1)}>up</a>
          <input type="number" value={this.state.delayMinutes} onChange={(e) => this.updateDelayMinutes(e.target.value)} onFocus={(e)=>{e.target.select()}} onClick={(e)=>{e.target.select()}}></input>
          <a href="#" className="down" onClick={() => this.offsetDelayMinutes(-1)}>down</a>

        </main>
        <footer>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/friarhob">Friar Hob</a> wishes you all to have a great life!
        </footer>
      </div>
    );
  }
}

export default App;
