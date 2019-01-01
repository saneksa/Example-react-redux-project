import { css } from 'glamor';

export const containerStyle = props => css({
  display: props.display
});

export const buttonStyle = props => css({
  display: 'inline-block',
  margin: `${20}px`
});
