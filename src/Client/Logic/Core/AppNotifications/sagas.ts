/**
 * @File File Content
 *
 * @Author Alexander Bassov Wed Oct 07 2020
 * @Email blackxes.dev@gmail.com
 */

import { delay, put, takeEvery } from "typed-redux-saga";

import { AppNotificationAction } from "./types";
import { CreateAppNotificationAT } from "./redux";
import { GetAppAction } from "../../Redux/types";
import { nanoid } from "@reduxjs/toolkit";

/**
 * controls the creation of a notification
 * checks for invalid values and sets up the closing queue
 */
// export function* onPushAppNotification() {
//     yield takeEvery<Extract<AppNotificationAction, {type: typeof CreateAppNotificationAT}>>(
//         CreateAppNotificationAT,
//         function* (action) {
//             const {
//                 title,
//                 message,
//                 type,
//                 closingMethod,
//                 delay: notificationDelay,
//             } = payload.values;

//             try {
//                 if (!title && !message) {
//                     throw new Error(
//                         "couldnt create notification: title and message is missing. One of them is needed"
//                     );
//                 }

//                 const config = {
//                     id: nanoid,
//                     type: type,
//                     title: title,
//                     message: message,
//                     creationDate: +new Date(),
//                     deletionDate: undefined,
//                     closingMethod: closingMethod || "auto",
//                     delay:
//                         notificationDelay !== undefined && notificationDelay > 0
//                             ? notificationDelay
//                             : 5000,
//                     deleted: false,
//                     secondsAlive: undefined,
//                 };

//                 // add notification and queue closing when on auto
//                 yield put({
//                     type: "app_notification/add",
//                     payload: config,
//                 });

//                 if (config.closingMethod == "auto" && config.delay > 0) {
//                     yield delay(config.delay);
//                     yield put({
//                         type: "app_notification/state/close",
//                         payload: config.id,
//                     });
//                 }
//             } catch (error) {
//                 console.log(
//                     "an error occured while creating or deleting a notification",
//                     error
//                 );
//             }
//         }
//     );
// }
