import "./Counter.css";
import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      running: {
        STOP: 0,
        WORK: 1,
        PLAY: 2,
        LONG: 3,
        current: 0,
        properties: [
          { label: "Work", title: "Click 'Work' to Start" },
          { label: "Stop", title: "Work Time" },
          { label: "Stop", title: "Play Time" },
          { label: "Stop", title: "Long Rest" }
        ],
        intervalFunction: null
      },
      endTime: 0,
      remainingTime: 0
    };

    this.toggleButton = this.toggleButton.bind(this);
  }

  pad(number) {
    var stringNumber = String(number);
    if (stringNumber.length < 2) stringNumber = "0" + stringNumber;
    return stringNumber;
  }

  toggleButton(e) {
    e.preventDefault();
    if (this.state.running.current === this.state.running.STOP) {
      //      this.state.running.current = this.state.running.PLAY;
      this.setState((state, props) => ({
        running: Object.assign(state.running, { current: state.running.PLAY })
      }));

      //this.state.running.intervalFunction = setInterval(() => {
      this.setState((state, props) => ({
        running: Object.assign(state.running, {
          intervalFunction: setInterval(() => {
            if (new Date().getTime() > this.state.endTime) {
              this.setState((state, props) => ({
                endTime:
                  new Date().getTime() +
                  (state.running.current === state.running.WORK
                    ? props.breakMinutes
                    : props.sessionMinutes) *
                    60 *
                    1000,
                running: Object.assign(state.running, {
                  current: 3 - state.running.current
                })
              }));
            }
            this.setState({
              remainingTime: this.state.endTime - new Date().getTime()
            });
          }, 200)
        })
      }));
    } else {
      clearInterval(this.state.running.intervalFunction);
      this.setState((state, props) => ({
        running: Object.assign(state.running, {
          current: state.running.STOP,
          intervalFunction: null
        }),
        endTime: 0,
        remainingTime: 0
      }));
    }
  }

  render() {
    const time = (this.state.remainingTime % (24 * 60 * 60 * 1000)) / 1000;
    return (
      <div className="Counter">
        <h1>
          {this.state.running.properties[this.state.running.current].title}
        </h1>
        <p className="display">
          {this.pad(Math.floor(time / (60 * 60)))}:
          {this.pad(Math.floor((time % (60 * 60)) / 60))}:
          {this.pad(Math.floor(time % 60))}
        </p>
        <button className="toggle" onClick={e => this.toggleButton(e)}>
          {this.state.running.properties[this.state.running.current].label}
        </button>
      </div>
    );
  }
}

export default Counter;
