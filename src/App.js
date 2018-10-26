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
      running: {
        STOP: 0,
        WORK: 1,
        PLAY: 2,
        LONG: 3,
        current: 0,
        properties: [
          {label: "Work", title: "Click Button to Start"},
          {label: "Stop", title: "Work Time"},
          {label: "Stop", title: "Play Time"},
          {label: "Stop", title: "Long Rest"}
        ],
        intervalFunction: null
      },
      startTime: 0,
      endTime: 0,
      remainingTime: 0
    };

    this.offsetSessionMinutes = this.offsetSessionMinutes.bind(this);
    this.updateSessionMinutes = this.updateSessionMinutes.bind(this);
    this.offsetBreakMinutes = this.offsetBreakMinutes.bind(this);
    this.updateBreakMinutes = this.updateBreakMinutes.bind(this);

    this.toggleButton = this.toggleButton.bind(this);
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

  toggleButton(e)
  {
    e.preventDefault();
    if(this.state.running.current == this.state.running.STOP)
    {
      this.state.running.current = this.state.running.PLAY;
      this.state.running.intervalFunction = setInterval(() => {
        if(new Date().getTime() > this.state.endTime) {
          this.setState({
            endTime: (new Date().getTime())+((this.state.running.current == this.state.running.WORK)?this.state.breakMinutes:this.state.sessionMinutes)*60*1000
          });
          this.state.running.current = 3-this.state.running.current;
        }
        this.setState({
          remainingTime: (this.state.endTime - new Date().getTime())
        });
      }, 200);
    }
    else
    {
      this.state.running.current = this.state.running.STOP;
      clearInterval(this.state.running.intervalFunction);
      this.state.running.intervalFunction = null;
      this.setState({
        endTime: 0,
        remainingTime: 0
      });
    }
  }

  render() {
    const time = (this.state.remainingTime%(24*60*60*1000))/1000;
    return (
      <div className="App">
        <header>
          <h1>DARPA</h1>
          <h2>DARPA&apos;s Another React-based Pomodoro App</h2>

          <Clock />
        </header>
        <main>
          <nav>
            <TimeLength label='Work time (in minutes)' minutes={this.state.sessionMinutes} offset={this.offsetSessionMinutes} update={this.updateSessionMinutes} />
            <TimeLength label='Play time (in minutes)' minutes={this.state.breakMinutes} offset={this.offsetBreakMinutes} update={this.updateBreakMinutes} />
          </nav>
          <article>
            <h1>{this.state.running.properties[this.state.running.current].title}</h1>
            <p>{this.pad(Math.floor(time/(60*60)))}:{this.pad(Math.floor((time%(60*60))/60))}:{this.pad(Math.floor(time%(60)))}</p>
            <button className="toggle" onClick={(e) => this.toggleButton(e)}>{this.state.running.properties[this.state.running.current].label}</button>
          </article>
        </main>
        <footer>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/friarhob">Friar Hob</a> wishes you all to have a great life!
        </footer>
      </div>
    );
  }
}

export default App;
