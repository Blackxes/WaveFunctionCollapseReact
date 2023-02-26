/**
 * @File File Content
 *
 * @Author Alexander Bassov Thu Jul 21 2022
 * @Email blackxes.dev@gmail.com
 */

// import {
//     ContextComponentProps,
//     ContextConfig,
// } from "../../../Components/Core/Rendering/ContextedContent";
import { menuItems } from "../Menu/data";

import { MenuConfigItem } from "../Menu/types";

/**
 * Maps a menu item configurations with additional values
 * into a context configuration items
 */
// export type AssignedComponentType = Record<
//     string,
//     React.FunctionComponent<ContextComponentProps>
// >;
// export const convertMenuItemIntoContextConfig = (
//     menuKeys: MenuConfigItem[],
//     assignedComponents: AssignedComponentType
// ): ContextConfig[] => {
//     return menuKeys.map<ContextConfig>(({ key }) => {
//         const found = menuItems.find((item) => item.key == key);

//         if (!found) {
//             console.error(
//                 `Couldn't convert menu item into context config item. Menu item "${key}" not found. Misspelled maybe?\n`
//             );
//             console.error("Given menuKeys %o", menuKeys);

//             return {} as ContextConfig;
//         }

//         return {
//             key,
//             component: assignedComponents[key],
//             label: found.title,
//             menuIcon: found?.style?.icon?.fontAwesomeIcon,
//         } as ContextConfig;
//     });
// };
