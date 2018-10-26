import React, { Component } from 'react';
import './App.css';
import Clock from './Clock.js';
import TimeLength from './TimeLength.js';

class App extends Component {
  constructor(props)
  {
    super(props);

    this.state = {
      sessionMinutes: 50,
      breakMinutes: 10,
      currentTime: new Date().getTime(),
      startTime: new Date().getTime(),
      endTime: new Date().getTime()
    };

    this.offsetSessionMinutes = this.offsetSessionMinutes.bind(this);
    this.updateSessionMinutes = this.updateSessionMinutes.bind(this);
    this.offsetBreakMinutes = this.offsetBreakMinutes.bind(this);
    this.updateBreakMinutes = this.updateBreakMinutes.bind(this);
  }

  pad(number)
  {
    var stringNumber = String(number);
    if(stringNumber.length < 2) stringNumber = "0"+stringNumber;
    return stringNumber;
  }

  offsetSessionMinutes(amount)
  {
    this.setState({
      sessionMinutes: Math.max(0,(parseInt(this.state.sessionMinutes)+amount))
    });
  }

  updateSessionMinutes(newTime)
  {
    this.setState({
      sessionMinutes: ((parseInt(newTime)>0)?parseInt(newTime):0)
    });
  }

  offsetBreakMinutes(amount)
  {
    this.setState({
      breakMinutes: Math.max(0,(parseInt(this.state.breakMinutes)+amount))
    });
  }

  updateBreakMinutes(newTime)
  {
    this.setState({
      breakMinutes: ((parseInt(newTime)>0)?parseInt(newTime):0)
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

          <TimeLength label='Session time (in minutes)' minutes={this.state.sessionMinutes} offset={this.offsetSessionMinutes} update={this.updateSessionMinutes} />
          <TimeLength label='Break time (in minutes)' minutes={this.state.breakMinutes} offset={this.offsetBreakMinutes} update={this.updateBreakMinutes} />

          

        </main>
        <footer>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/friarhob">Friar Hob</a> wishes you all to have a great life!
        </footer>
      </div>
    );
  }
}

export default App;
