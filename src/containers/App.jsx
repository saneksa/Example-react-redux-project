import React from 'react';
import './App.css';
import Counter from '../components/Count/Count';
import { Plus, Minus } from '../store/CountStore/action';
import ConnectComponents from '../decoraters/ConnectComponents';
import getCount from '../store/CountStore/selectors';

class App extends React.Component {
  static mapStateToProps(state) {
    return {
      count: getCount(state)
    };
  }

  static mapDispatchToProps(dispatch) {
    return {
      countMinus(value) {
        dispatch(Minus(value));
      },

      countPlus(value) {
        dispatch(Plus(value));
      }
    };
  }

  render() {
    return (
      <div className="App">
        <Counter
          data={this.props.count}
          increment={this.props.countPlus}
          decrement={this.props.countMinus}
        />
      </div>
    );
  }
}

export default ConnectComponents(App);
