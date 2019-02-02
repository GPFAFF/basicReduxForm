import { connect } from 'react-redux';
import { textAction, submitAction } from './actions';

const mapStateToProps = state => state.form;
const mapDispatchToProps = { textAction, submitAction };

export default connect(mapStateToProps, mapDispatchToProps);
