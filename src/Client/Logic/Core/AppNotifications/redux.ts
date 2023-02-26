/**
 * @File File Content
 *
 * @Author Alexander Bassov Sat Aug 06 2022
 * @Email blackxes.dev@gmail.com
 */

import {
    createAddReducerFunction,
    createDeleteReducerFunction,
    createUpdateReducerFunction,
} from "../../Redux/functions";

import { AppNotificationState } from "./types";
import { createSlice } from "@reduxjs/toolkit";

/**
 * Action types
 */
export const SetAppNotificationsAT = "app_notifications/set";
export const ClearAppNotificationsAT = "app_notifications/clear";
export const LoadAppNotificationsAT = "app_notifications/load";
export const SaveAppNotificationsAT = "app_notifications/save";

export const CreateAppNotificationAT = "app_notification/create";
export const AddAppNotificationAT = "app_notification/add";
export const DeleteAppNotificationAT = "app_notification/delete";
export const RequestAppNotificationDeletionAT =
    "app_notification/delete/request";
export const UpdateAppNotificationAT = "app_notification/update";
export const RequestAppNotificationUpdateAT = "app_notification/update/request";

export const CloseAppNotificationAT = "app_notification/state/close";
export const OpenAppNotificationAT = "app_notification/state/open";

/**
 * State
 */
const initialState: AppNotificationState = {
    items: [],
};

/**
 * Reducer
 */
const basedataSlice = createSlice({
    name: "app_notifications",
    initialState,
    reducers: {},
    extraReducers: {
        // All
        [SetAppNotificationsAT]: (state, { payload }) => {
            state.items = payload.items;
        },
        [ClearAppNotificationsAT]: (state, { payload }) => {
            state.items = [];
        },
        // Single
        [AddAppNotificationAT]: createAddReducerFunction("players"),
        [DeleteAppNotificationAT]: createDeleteReducerFunction("players"),
        [UpdateAppNotificationAT]: createUpdateReducerFunction("players"),
        [OpenAppNotificationAT]: (state, { payload }) => {
            const found = state.items.find((item) => item.uid == payload.uid);
            found.closed = false;
        },
        [CloseAppNotificationAT]: (state, { payload }) => {
            const found = state.items.find((item) => item.uid == payload.uid);
            found.closed = true;
        },
    },
});

export const basedataReducer = basedataSlice.reducer;
