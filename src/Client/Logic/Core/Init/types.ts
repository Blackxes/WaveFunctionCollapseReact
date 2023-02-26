/**
 * @File File Content
 *
 * @Author Alexander Bassov Wed Aug 03 2022
 * @Email blackxes.dev@gmail.com
 */

import { createAction } from "@reduxjs/toolkit";

export interface InitState {
    isInitializing: boolean;
    isInitialized: boolean;
    initActionQueue: ReturnType<typeof createAction>[];
}
