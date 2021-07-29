import { call, all, takeEvery, put, fork } from "redux-saga/effects";
import actions from "./actions";
import axios from "axios";



export function ApigetweatherDataCall() {
    
  return axios
  ("https://jsonmock.hackerrank.com/api/articles")
  .then((res) => {
      return {
        data: res
      };
        })
    .catch((err) => {
      return { errorMessage: err };
    });
}

export function* getweatherData() {
  yield takeEvery('FETCH_REQUEST', function* ({payload}) {
      console.log('payload')
      
//    yield call(ApigetweatherDataCall, payload);
    //Uncomment the above line to get current data, and comment below 2 lines
    let {data,errorMessage} =yield call(ApigetweatherDataCall);
    // let errorMessage=null
    if (!errorMessage) {
      yield put({
        type: 'GET_API_DATA',
        data: data.data.data
      });
    } else {
      yield put({
        type: 'GET_DATA_ERROR'
        // errorMessage: errorMessage,
      });
    }
  });
}

export default function* DATA_saga() {
    yield all([
        fork(getweatherData)
      ]);
   ;
}
