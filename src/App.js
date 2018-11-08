import React, { Component } from "react";
import "./App.css";
import Clock from "./Clock.js";
import IntegerBox from "./IntegerBox.js";
import Counter from "./Counter.js";

const colourClasses = ["blue", "green", "red"];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sessionMinutes: 50,
      breakMinutes: 10
    };

    this.offsetSessionMinutes = this.offsetSessionMinutes.bind(this);
    this.updateSessionMinutes = this.updateSessionMinutes.bind(this);
    this.offsetBreakMinutes = this.offsetBreakMinutes.bind(this);
    this.updateBreakMinutes = this.updateBreakMinutes.bind(this);
    this.setColour = this.setColour.bind(this);

    this.setColour(0);
  }

  setColour(index) {
    document.body.className = colourClasses[index];
  }

  pad(number) {
    var stringNumber = String(number);
    if (stringNumber.length < 2) stringNumber = "0" + stringNumber;
    return stringNumber;
  }

  offsetSessionMinutes(amount) {
    this.setState({
      sessionMinutes: Math.max(0, parseInt(this.state.sessionMinutes) + amount)
    });
  }

  updateSessionMinutes(newTime) {
    this.setState({
      sessionMinutes: parseInt(newTime) > 0 ? parseInt(newTime) : 0
    });
  }

  offsetBreakMinutes(amount) {
    this.setState({
      breakMinutes: Math.max(0, parseInt(this.state.breakMinutes) + amount)
    });
  }

  updateBreakMinutes(newTime) {
    this.setState({
      breakMinutes: parseInt(newTime) > 0 ? parseInt(newTime) : 0
    });
  }

  render() {
    return (
      <div className="App">
        <header>
          <div className="Title">
            <h1>DARPA</h1>
            <h2>DARPA&apos;s Another React-based Pomodoro App</h2>
          </div>
          <div className="ClockBox">
            <Clock />
          </div>
        </header>
        <main>
          <nav>
            <IntegerBox
              label="Work time (in minutes)"
              value={this.state.sessionMinutes}
              offset={this.offsetSessionMinutes}
              update={this.updateSessionMinutes}
            />
            <IntegerBox
              label="Play time (in minutes)"
              value={this.state.breakMinutes}
              offset={this.offsetBreakMinutes}
              update={this.updateBreakMinutes}
            />
          </nav>
          <article>
            <Counter
              sessionMinutes={this.state.sessionMinutes}
              breakMinutes={this.state.breakMinutes}
              setColour={this.setColour}
            />
          </article>
        </main>
        <footer>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/friarhob"
          >
            Friar Hob
          </a>
          &nbsp;wishes you all to have a great life!
        </footer>
      </div>
    );
  }
}

export default App;
