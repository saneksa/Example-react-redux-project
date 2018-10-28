import * as React from 'react';
import './Count.css';

class Counter extends React.Component {
  constructor(...args) {
    super(...args);
    this.clickPlus = this.clickPlus.bind(this);
    this.clickMinus = this.clickMinus.bind(this);
  }

  clickPlus() {
    this.props.increment(1);
  }

  clickMinus() {
    this.props.decrement(1);
  }

  render() {
    return (
      <div>
        <input className="inp" value={this.props.data} disabled={true} />
        <br />
        <button onClick={this.clickPlus} className="btn">
          +
        </button>
        <button onClick={this.clickMinus} className="btn">
          -
        </button>
      </div>
    );
  }
}

export default Counter;
