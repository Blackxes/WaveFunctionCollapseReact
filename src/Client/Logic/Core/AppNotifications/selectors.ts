/**
 * @File File Content
 *
 * @Author Alexander Bassov Thu Oct 08 2020
 * @Email blackxes.dev@gmail.com
 */

export const getAppNotifications = (state) => state.appNotifications.items;
export const findAppNotification = (state, value, key) =>
    state.appNotifications.items.find((i) => i[key] == value);

export const getAppNotification = (state, id) =>
    findAppNotification(state, id, "id");
