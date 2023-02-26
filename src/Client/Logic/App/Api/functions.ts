/**
 * @File File Content
 *
 * @Author Alexander Bassov Sun Sep 11 2022
 * @Email blackxes.dev@gmail.com
 */

export function* makeApiRequest(route: string, options = {}) {
    let response = null;

    try {
        const rawReponse = yield fetch(process?.env?.BASE_URL + route, options);
        response = yield rawReponse.json();
    } catch (error) {
        return {
            value: response,
            url: process?.env?.BASE_URL + route,
            error: ["Request failed", error],
            status: 500,
        };
    }

    return response;
}
