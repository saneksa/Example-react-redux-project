// @flow
import * as React from 'react';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import { Add, Remove } from '@material-ui/icons';
import { withRouter } from 'react-router-dom';
import { containerStyle, buttonStyle } from './Count.style';

export interface ICounterProps {
  data: number;
  increment: (value: number) => void;
  decrement: (value: number) => void;
}

class Counter extends React.PureComponent<ICounterProps> {
  clickPlus = () => {
    this.props.increment(1);
  };

  clickMinus = () => {
    this.props.decrement(1);
  };

  render() {
    return (
      <div className={`${containerStyle({ display: 'block' })}`}>
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

export default withRouter(Counter);
