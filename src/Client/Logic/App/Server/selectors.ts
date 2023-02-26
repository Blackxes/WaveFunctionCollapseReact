/**
 * @File File Content
 *
 * @Author Alexander Bassov Tue Sep 13 2022
 * @Email blackxes.dev@gmail.com
 */

import { AppState } from "../../Redux/types";

export const getServerAvailability = (state: AppState) =>
    state.server.available;
export const getServerHasBeenPinged = (state: AppState) =>
    state.server.serverHasBeenPinged;
