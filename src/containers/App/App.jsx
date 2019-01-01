// @flow
import React from 'react';
import Counter from '../../components/Count/Count';
import { Plus, Minus } from '../../store/CountStore/action';
import ConnectComponents from '../../decoraters/ConnectComponents';
import getCount from '../../store/CountStore/selectors';
import { appContainer } from './App.style';

interface IAppProps {
  count: number;
  countPlus: (value: number) => void;
  countMinus: (value: number) => void;
}

class App extends React.Component<IAppProps> {
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
      <div className={appContainer}>
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
