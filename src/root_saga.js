import { all } from 'redux-saga/effects';
import DATA_saga from './redux/saga'

export default function* rootSaga(getState) {
  yield all([
    DATA_saga()
  ]);
}
