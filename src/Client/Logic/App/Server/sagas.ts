/**
 * @File File Content
 *
 * @Author Alexander Bassov Tue Sep 13 2022
 * @Email blackxes.dev@gmail.com
 */

import {
    PingServerAT,
    PingServerAction,
    SetServerAvailabilityAction,
} from "./regux";
import { putResolve, takeLatest } from "typed-redux-saga";

import { makeApiRequest } from "../Api/functions";

export function* onPingServer() {
    yield* takeLatest<ReturnType<typeof PingServerAction>>(
        PingServerAT,
        function* ({ payload }) {
            const result = yield makeApiRequest("server/availability/check");

            yield* putResolve(
                SetServerAvailabilityAction(Boolean(result?.success), true)
            );

            payload.resolve();
        }
    );
}
