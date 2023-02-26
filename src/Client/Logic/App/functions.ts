1;
/**
 * @File File Content
 *
 * @Author Alexander Bassov Thu Aug 25 2022
 * @Email blackxes.dev@gmail.com
 */

/**
 *
 * @param {string} error The error message
 * @param {any} fieldName The value which is required
 * @param {boolean} required Defines whether this value is required
 * @param {any} givenValue The given field value
 *
 * @returns
 */
export const createVerificationError = (
    error: string,
    fieldName: any,
    required: boolean = false,
    givenValue: any
) => ({
    error,
    fieldName,
    required,
    givenValue,
});
