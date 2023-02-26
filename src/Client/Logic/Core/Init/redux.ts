/**
 * @File File Content
 *
 * @Author Alexander Bassov Tue Mar 15 2022
 * @Email alexander.bassov@trentmann.com
 */

import { createAction, createSlice } from "@reduxjs/toolkit";

import { INTIALIZING_ACTIONS } from "../../App/init";
import { InitState } from "./types";

/**
 * Action types / Actions
 */
export const StartInitialzationAT = "init/start";
export const StartInitialzationAction = createAction(StartInitialzationAT);
export const FinalizeInitializationAT = "init/finalize";
export const FinalizeInitializationAction = createAction(
    FinalizeInitializationAT
);
export const SetInitializationFinishedAT = "init/finished";
export const SetInitializationFinishedAction = createAction(
    SetInitializationFinishedAT
);

/**
 * State
 */
const initialState: InitState = {
    isInitializing: false,
    isInitialized: false,
    initActionQueue: INTIALIZING_ACTIONS,
};

/**
 * Reducer
 */
const initSlice = createSlice({
    name: "init",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(StartInitialzationAction, (state) => {
                state.isInitializing = true;
            })
            .addCase(SetInitializationFinishedAction, (state) => {
                state.isInitializing = false;
                state.isInitialized = true;
            });
    },
});

export const initReducer = initSlice.reducer;
