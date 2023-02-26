/**
 * @File File Content
 *
 * @Author Alexander Bassov Wed Aug 03 2022
 * @Email blackxes.dev@gmail.com
 */

/**
 * Keys of object instances which are by default
 * immutable in this application
 */
export const immutableKeys = ["uid"] as const;

/**
 * When defined these keys must be preserved
 * if the instance is being overwritten
 */
export const preservedKeys = ["uid"] as const;
