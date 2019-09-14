import { all } from "redux-saga/effects";

import watchgetUsersSaga from "./users";

export default function* rootSaga() {
  yield all([watchgetUsersSaga()]);
}
