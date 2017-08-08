import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Counter } from './Counter.component';
import * as CounterActions from './counter.actions';

const mapStateToProps = state => ({
  counter: state.counter,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(CounterActions, dispatch);
}

export const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter);
