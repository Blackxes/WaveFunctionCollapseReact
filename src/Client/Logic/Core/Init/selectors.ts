/**
 * @File File Content
 *
 * @Author Alexander Bassov Mon Aug 22 2022
 * @Email blackxes.dev@gmail.com
 */

import { AppState } from "../../Redux/types";

export const getInitialActionQueue = (state: AppState) =>
    state.init.initActionQueue;
export const getIsInitialized = (state: AppState) => state.init.isInitialized;
export const getIsInitializing = (state: AppState) => state.init.isInitializing;
