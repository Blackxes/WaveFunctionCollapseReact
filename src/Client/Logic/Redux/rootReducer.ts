/**
 * @File File Content
 *
 * @Email alexander.bassov@trentmann.com
 */

import { combineReducers } from "redux";
import { initReducer } from "../Core/Init/redux";
import { serverReducer } from "../App/Server/regux";

const reducers = combineReducers({
    init: initReducer,
    server: serverReducer,
});

export default reducers;
