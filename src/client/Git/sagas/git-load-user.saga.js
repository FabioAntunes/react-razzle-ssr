import { put, call } from 'redux-saga/effects';
import { LOAD_USER, loadingUser, userLoaded, loadUserSucess } from '../git.actions';
import { getUser } from '../api/user.api'

export default function* loadUser(action) {
  try {
    yield put(loadingUser());

    const user = yield call(getUser, action.username);

    yield put(userLoaded());
    yield put(loadUserSucess(user.data));
  } catch (err) {
    console.log(err);
  }
}

