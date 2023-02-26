/**
 * @File File Content
 *
 * @Author Alexander Bassov Tue Oct 06 2020
 * @Email blackxes.dev@gmail.com
 */

import {
    AddAppNotificationAT,
    ClearAppNotificationsAT,
    CloseAppNotificationAT,
    CreateAppNotificationAT,
    DeleteAppNotificationAT,
    LoadAppNotificationsAT,
    OpenAppNotificationAT,
    RequestAppNotificationDeletionAT,
    RequestAppNotificationUpdateAT,
    SaveAppNotificationsAT,
    SetAppNotificationsAT,
    UpdateAppNotificationAT,
} from "./redux";

import { ImmutableKeysOmmited } from "../../Redux/types";
import { StatusType } from "../../types";

/**
 * Models / Types
 */
export type AppNotificationType = StatusType | "regular";
export type AppNotificationClosingMethod = "auto" | "manually";

export interface AppNotification {
    uid: string;
    /** either title or message has to be given or the notification wont be created */
    title?: string;
    message?: string | string[];
    type?: AppNotificationType;
    creationDate?: number;
    deletionDate?: number;
    deleted?: boolean;
    /** when undefined the notification wont disappear */
    delay?: number;
    /** how this notification has been closed */
    closingMethod?: AppNotificationClosingMethod;
    /** how long this notification has been visible before closed */
    secondsAlive?: number;
    closed?: boolean;
}

/**
 * State
 */
export interface AppNotificationState {
    items: AppNotification[];
}

/**
 * Actions
 */
export type AppNotificationAction =
    | {
          type: typeof SetAppNotificationsAT;
          payload: {
              items: AppNotification[];
          };
      }
    | {
          type: typeof ClearAppNotificationsAT;
      }
    | {
          type: typeof LoadAppNotificationsAT;
      }
    | {
          type: typeof SaveAppNotificationsAT;
      }
    | {
          type: typeof CreateAppNotificationAT;
          payload: {
              values: Partial<ImmutableKeysOmmited<AppNotification>>;
          };
      }
    | {
          type: typeof AddAppNotificationAT;
          payload: {
              item: AppNotification;
          };
      }
    | {
          type: typeof DeleteAppNotificationAT;
          payload: {
              uid: AppNotification["uid"];
          };
      }
    | {
          type: typeof RequestAppNotificationDeletionAT;
          payload: {
              uid: AppNotification["uid"];
          };
      }
    | {
          type: typeof UpdateAppNotificationAT;
          payload: {
              uid: AppNotification["uid"];
              values: Partial<ImmutableKeysOmmited<AppNotification>>;
          };
      }
    | {
          type: typeof RequestAppNotificationUpdateAT;
          payload: {
              uid: AppNotification["uid"];
              values: Partial<ImmutableKeysOmmited<AppNotification>>;
          };
      }
    | {
          type: typeof CloseAppNotificationAT;
          payload: {
              uid: AppNotification["uid"];
          };
      }
    | {
          type: typeof OpenAppNotificationAT;
          payload: {
              uid: AppNotification["uid"];
          };
      };
