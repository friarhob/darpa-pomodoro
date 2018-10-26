import React, { Component } from 'react';

class TimeLength extends Component {
  constructor(props)
  {
    super(props);

    this.state = {
      minutes: this.props.minutes
    }

    this.update = this.update.bind(this);
    this.offset = this.offset.bind(this);
  }

  offset(amount)
  {
      this.props.offset(amount);
      this.setState({
        minutes: Math.max(0,(parseInt(this.state.minutes)+amount))
      })
  }

  update(e)
  {
    e.preventDefault();
    this.props.update(e.target.value);
    this.setState({
      minutes: e.target.value
    });
  }



  render() {
    return (
      <div className="TimeLength">
          <p className="label">{this.props.label}</p>
          <button className="offset" onClick={() => this.offset(10)}>+10</button>
          <button className="offset" onClick={() => this.offset(5)}>+5</button>
          <button className="offset" onClick={() => this.offset(1)}>+1</button>
          <input className="minutes" type="number" value={this.state.minutes} onChange={(e) => {this.update(e);}} onFocus={(e)=>{e.preventDefault(); e.target.select();}} onClick={(e)=>{e.target.select()}}></input>
          <button className="offset" onClick={() => this.offset(-1)}>-1</button>
          <button className="offset" onClick={() => this.offset(-5)}>-5</button>
          <button className="offset" onClick={() => this.offset(-10)}>-10</button>
      </div>
    );
  }
}

export default TimeLength;
