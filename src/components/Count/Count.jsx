// @flow
import * as React from 'react';
import './Count.css';
import propTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import { Add, Remove } from '@material-ui/icons';
import { containerStyle, buttonStyle } from './Count.style';

export interface ICounterProps {
  data: string;
  increment: (value: number) => void;
  decrement: (value: number) => void;
}

class Counter extends React.PureComponent<ICounterProps> {
  static propTypes = {
    increment: propTypes.func,
    decrement: propTypes.func,
    data: propTypes.number
  };

  clickPlus = () => {
    this.props.increment(1);
  };

  clickMinus = () => {
    this.props.decrement(1);
  };

  render() {
    return (
      <div className={`${containerStyle({ display: 'flex' })}`}>
        <div>
          <Input value={this.props.data} disabled={true} />
        </div>
        <br />
        <div className={buttonStyle()}>
          <Button onClick={this.clickPlus} variant="contained" color="primary">
            <Add />
          </Button>
        </div>
        <div className={buttonStyle()}>
          <Button onClick={this.clickMinus} variant="contained" color="primary">
            <Remove />
          </Button>
        </div>
      </div>
    );
  }
}

export default Counter;
