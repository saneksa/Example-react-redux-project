import { connect } from 'react-redux';

export default Components => connect(
  Components.mapStateToProps,
  Components.mapDispatchToProps
)(Components);
