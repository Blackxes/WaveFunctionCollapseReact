/**
 * @File File Content
 *
 * @Author Alexander Bassov Thu Aug 25 2022
 * @Email blackxes.dev@gmail.com
 */

/**
 * Creates an object containing information
 * about an invalid property
 *
 * @param {string} error The error message
 * @param {any} propertyName The value which is required
 * @param {boolean} required Defines whether this value is required
 * @param {any} givenValue The given field value
 *
 * @returns
 */
export const createVerifactionError = (
    error: string,
    propertyName: any,
    required: boolean = false,
    givenValue: any
) => ({
    error,
    propertyName,
    required,
    givenValue,
});

/**
 * Verifes
 */
export type VerifyingPropertyConditionType = {
    required: boolean;
    isTypes: string[];
};

export const verifyValues = <T>(
    values: Record<keyof T, any>,
    conditions: Partial<Record<keyof T, VerifyingPropertyConditionType>>
) => {
    for (const [propName, propValue] of Object.entries(values)) {
        // conditions[propName]
    }
};
