import { all } from 'redux-saga/effects'
import { gitWatcher } from './Git/git.sagas'

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    gitWatcher()
  ])
}
