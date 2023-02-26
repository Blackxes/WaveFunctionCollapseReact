/**
 * @File File Content
 *
 * @Author Alexander Bassov Tue Sep 13 2022
 * @Email blackxes.dev@gmail.com
 */

export interface ServerState {
    // Defines whether the server has been pinged
    // at least once to check availability
    serverHasBeenPinged: boolean;
    available: boolean;
}
