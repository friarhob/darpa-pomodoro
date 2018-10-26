import React, { Component } from 'react';

class Clock extends Component {
  constructor(props)
  {
    super(props);

    this.state = {
      currentTime: new Date().getTime(),
    };

    setInterval(() => {
      var date = new Date().getTime()-(new Date().getTimezoneOffset()*60*1000);
      this.setState({currentTime: date});
    }, 500);

  }

  pad(number)
  {
    var stringNumber = String(number);
    if(stringNumber.length < 2) stringNumber = "0"+stringNumber;
    return stringNumber;
  }

  render() {
    const time = Math.floor((this.state.currentTime%(24*60*60*1000))/1000);
    return (
      <div className="Clock">
          <p>{this.pad(Math.floor(time/(60*60)))}:{this.pad(Math.floor((time%(60*60))/60))}:{this.pad(Math.floor(time%(60)))}</p>
      </div>
    );
  }
}

export default Clock;
