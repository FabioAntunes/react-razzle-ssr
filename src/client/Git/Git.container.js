import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { GitWrapper } from './GitWrapper.component.js'
import { loadUser } from './git.actions';
import { push } from 'react-router-redux'


const mapStateToProps = state => ({
  git: state.git,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    submitForm: push,
    loadUser
  }, dispatch);
}

export const GitContainer = connect(mapStateToProps, mapDispatchToProps)(GitWrapper);
