import './IntegerBox.css';
import React, { Component } from 'react';

class IntegerBox extends Component {
  constructor(props)
  {
    super(props);

    this.state = {
      value: this.props.value
    }

    this.update = this.update.bind(this);
    this.offset = this.offset.bind(this);
  }

  offset(amount)
  {
      this.props.offset(amount);
      this.setState({
        value: Math.max(0,(parseInt(this.state.value)+amount))
      })
  }

  update(e)
  {
    e.preventDefault();
    this.props.update(e.target.value);
    this.setState({
      value: e.target.value
    });
  }



  render() {
    return (
      <div className="IntegerBox">
          <div className="number">
            <p className="label">{this.props.label}</p>
            <input className="value" type="number" value={this.state.value} onChange={(e) => {this.update(e);}} onFocus={(e)=>{e.preventDefault(); e.target.select();}} onClick={(e)=>{e.target.select()}}></input>
          </div>
          <div className="buttons">
            <button className="offset" onClick={() => this.offset(10)}>+10</button>
            <button className="offset" onClick={() => this.offset(5)}>+5</button>
            <button className="offset" onClick={() => this.offset(1)}>+1</button>
            <button className="offset" onClick={() => this.offset(-1)}>-1</button>
            <button className="offset" onClick={() => this.offset(-5)}>-5</button>
            <button className="offset" onClick={() => this.offset(-10)}>-10</button>
          </div>
      </div>
    );
  }
}

export default IntegerBox;
