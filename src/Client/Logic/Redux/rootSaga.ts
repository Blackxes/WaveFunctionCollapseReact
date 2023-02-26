/**
 * @File File Content
 *
 * @Email alexander.bassov@trentmann.com
 */

import { all } from "redux-saga/effects";
import { onPingServer } from "../App/Server/sagas";

export default function* rootSaga() {
    yield all([onPingServer()]);
}
