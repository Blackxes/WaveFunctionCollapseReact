/**
 * @File Define your initializing actions below
 * 	those actions will be dispatched when the application starts
 *
 * @Author Alexander Bassov Thu Aug 04 2022
 * @Email blackxes.dev@gmail.com
 */

import { PingServerAction } from "./Server/regux";
import { createAction } from "@reduxjs/toolkit";

export const INTIALIZING_ACTIONS: ReturnType<typeof createAction>[] = [
    PingServerAction,
];
