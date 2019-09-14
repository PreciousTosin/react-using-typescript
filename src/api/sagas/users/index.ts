import { call, put, takeLatest } from "redux-saga/effects";

import urlConfig from "../../config/url";

function fetchUsers() {
  const { fetchUsersUrl } = urlConfig;
  return fetch(fetchUsersUrl);
}

function* getUsers() {
  console.log("CALLED SAGA FUNCTION");
  try {
    const response = yield call(fetchUsers);
    const data = yield response.json();
    console.log("SAGA DATA: ", data);
    yield put({ type: "RECEIVE_USERS", users: data });
  } catch (e) {
    yield put({ type: "FETCH FAILED", message: e.message });
  }
}

export default function* watchgetUsersSaga() {
  console.log("CALLED WATCHER");
  // yield "WATCHER CALL";
  yield takeLatest("RECEIVE_USERS_SAGA", getUsers);
}

// export default getUsers;

/*export default function* watchFetchMoreCatsSaga(){
  yield takeLatest("FETCH_MORE_CATS", fetchMoreCatsSaga)
}

//query 5 cat image at the same time
function* fetchMoreCatsSaga(){
  yield put({type: "FETCH_MORE_CATS_SAGA_START"})

 const catResponse = yield fetch("https://api.thecatapi.com/v1/images/search?limit=5",{
      headers: {
          "Content-Type": "application/json",
          "x-api-key": "YOUR_API_KEY"
      }
  })

  const cats = yield catResponse.json()

  yield put({type: "FETCH_MORE_CATS_SAGA_SUCCESS", payload: cats})
} */
