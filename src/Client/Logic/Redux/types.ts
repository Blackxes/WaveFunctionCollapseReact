/**
 * @File File Content
 *
 * @Author Alexander Bassov Sun Jul 31 2022
 * @Email blackxes.dev@gmail.com
 */

import { CustomAppActions } from "../App/types";
import { CoreAppAction } from "../Core/types";
import { immutableKeys } from "./constants";
import store from "./store";

export type AppAction = CustomAppActions | CoreAppAction;
// actiontype/placeholder is supposed to mean nothing but being a placeholder actiontype
export type AppActionType = AppAction["type"] | string;
export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch<AppAction>;

/**
 * Omits the in this application ommited keys of a type
 */
export type ImmutableKeysOmmited<T> = Omit<T, typeof immutableKeys[number]>;

/**
 * Extracts an action by action type
 *
 * https://stackoverflow.com/questions/64527150/in-typescript-how-to-select-a-type-from-a-union-using-a-literal-type-property
 */
export type GetAppAction<ActionType> = Extract<AppAction, { type: ActionType }>;
