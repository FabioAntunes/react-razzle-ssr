import { LOCATION_CHANGE } from 'react-router-redux';
import { takeLatest, take, fork, cancel } from 'redux-saga/effects';
import { LOAD_USER } from './git.actions';
import loadUser from './sagas/git-load-user.saga';


export function* combinedSagas() {
  yield fork(takeLatest, LOAD_USER, loadUser);
}

export function* gitWatcher() {
  while(true) {
    const watcher = yield fork(combinedSagas);

    yield take(LOCATION_CHANGE);
    yield cancel(watcher);
  }
 
}

