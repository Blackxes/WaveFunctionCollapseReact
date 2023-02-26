/**
 * @File File Content
 *
 * @Author Alexander Bassov Tue Sep 13 2022
 * @Email blackxes.dev@gmail.com
 */

import { createAction, createSlice } from "@reduxjs/toolkit";

import { ServerState } from "./types";

export const SetServerAvailabilityAT = "server/availability/set";
export const SetServerAvailabilityAction = createAction(
    SetServerAvailabilityAT,
    (status, serverHasBeenPinged = false) => ({
        payload: {
            status,
            serverHasBeenPinged,
        },
    })
);

export const SetServerHasBeenCheckedAT = "server/checked/set_checked";
export const SetServerHasBeenCheckedAction = createAction(
    SetServerHasBeenCheckedAT
);

export const PingServerAT = "server/ping";
export const PingServerAction = createAction(PingServerAT, () => ({
    payload: {
        resolve: () => {},
    },
}));

/**
 * State
 */
const initialState: ServerState = {
    serverHasBeenPinged: false,
    available: false,
};

/**
 * Reducer
 */
const serverSlice = createSlice({
    name: "tickets",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(SetServerAvailabilityAction, (state, { payload }) => {
                state.available = payload.status;
                state.serverHasBeenPinged = payload.serverHasBeenPinged;
            })
            .addCase(SetServerHasBeenCheckedAction, (state) => {
                state.serverHasBeenPinged = true;
            });
    },
});

export const serverReducer = serverSlice.reducer;
