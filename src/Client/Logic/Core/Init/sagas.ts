/**
 * @File File Content
 *
 * @Author Alexander Bassov Tue Mar 15 2022
 * @Email alexander.bassov@trentmann.com
 */

import {} from "redux-saga";

import { SetInitializationFinishedAT, StartInitialzationAT } from "./redux";
import { put, putResolve, select, takeLatest } from "typed-redux-saga";

import { getInitialActionQueue } from "./selectors";

export function* onInit() {
    yield* takeLatest(StartInitialzationAT, function* () {
        // Actions which are fired to boot the application
        const actionQueue = yield* select(getInitialActionQueue);

        for (const action of actionQueue) {
            const actionObject = action();

            yield* putResolve(actionObject);
        }

        /** Subprocess */
        yield* put({ type: SetInitializationFinishedAT });
    });
}
