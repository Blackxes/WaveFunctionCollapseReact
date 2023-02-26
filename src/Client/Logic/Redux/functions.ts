/**
 * @File File Content
 *
 * @Author Alexander Bassov Sun Jul 17 2022
 * @Email blackxes.dev@gmail.com
 */

import { AnyAction } from "redux";
import { immutableKeys } from "./constants";

/**
 * Creates a redux reducer function which adds an item
 * into an array of a first level key
 */
export const createAddReducerFunction = (scope: any) => {
    return (state, { payload }: AnyAction) => {
        state[scope].push(payload.item);
    };
};

/**
 * Creates a redux reducer function which set an item
 * of an array of a first level key
 */
export const createSetReducerFunction = (scope: any) => {
    return (state, { payload }: AnyAction) => {
        state[scope].map((item) => {
            if (item.uid != payload.uid) {
                return item;
            }

            // Check if the new item has any type conflicts
            const conflictedKeys = [];

            for (const [key, value] of Object.entries(payload.item)) {
                if (key in item && typeof item[key] !== typeof value) {
                    conflictedKeys.push({
                        key,
                        givenType: typeof value,
                        expectedType: typeof item[key],
                    });
                    continue;
                }

                // Don't continue to overwrite when at least one is conflicted
                if (conflictedKeys.length) {
                    continue;
                }
            }

            if (conflictedKeys.length) {
                const errorSplit = [
                    `Typeconflicts: Overwriting an item inside '${scope}'`,
                    ...conflictedKeys.map(
                        (info) =>
                            `Key '${info.key}' Expected '${info.expectedType}' but '${info.givenType}' given`
                    ),
                ];

                console.error(errorSplit.join("\n"));

                return item;
            }

            // Filter out immutable fields
            immutableKeys.forEach((key) => {
                delete payload.item[key];
            });

            return { ...payload.item };
        });
    };
};

/**
 * Creates a redux reducer function which delete an item
 * of an array of a first level key
 */
export const createDeleteReducerFunction = (scope: any) => {
    return (state, { payload }: AnyAction) => {
        state[scope].filter((item) => item.uid != payload.uid);
    };
};

/**
 * Creates a redux reducer function which updates values of an item
 * of an array of a first level key
 */
export const createUpdateReducerFunction = (scope: any) => {
    return (state, { payload }: AnyAction) => {
        state[scope].map((item) => {
            if (item.uid != payload.uid) {
                return item;
            }

            // Ignores overwriting when the type doesn't match
            // Only when an application update is happening
            // The type check is ignored else these fields are not overwritten
            //
            // @todo add connection to the application update state
            const _temp = Object.entries({ ...payload.values });
            let updated = { ...item };

            for (const [key, value] of _temp) {
                if (
                    immutableKeys.includes(
                        key as typeof immutableKeys[number]
                    ) ||
                    (key in updated && !(typeof value !== updated[key]))
                ) {
                    continue;
                }

                updated[key] = value;
            }

            return updated;
        });
    };
};
