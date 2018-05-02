import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux'
import {Counter} from '../components/count/index'
import {Plus, Minus}  from '../actions/countAction'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Counter data = {this.props.count}
                   increment = {this.props.countPlus}
                   decrement = {this.props.countMinus}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    count: state.data.count
});

const mapDispatchToProps = dispatch => ({

    countMinus(value) {
        dispatch(Minus(value));
    },

    countPlus(value) {
        dispatch(Plus(value));
    }

});

export const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);