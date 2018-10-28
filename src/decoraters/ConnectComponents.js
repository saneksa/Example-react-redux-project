import { connect } from 'react-redux';

export default function (Components) {
  return connect(
    Components.mapStateToProps,
    Components.mapDispatchToProps
  )(Components);
}
