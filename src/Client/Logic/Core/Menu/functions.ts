/**
 * @File menu functions
 *
 * @Author Alexander Bassov Wed Oct 14 2020
 * @Email blackxes.dev@gmail.com
 */

import {
    MappedMenuGroup,
    MappedMenuItem,
    MenuConfigItem,
    MenuTreeBuildingOptions,
} from "./types";
import { MenuConfigItemParentType, MenuKeyType } from "./types";
import { groupBy as _groupBy, sortBy as _sortBy } from "lodash";
import { menuConfig, menuGroups, menuItems } from "./data";

import { MenuGroup } from "./types";
import { filterByProperty, findByProperty } from "../../functions";

/**
 * builds a menu tree
 */
export function getMenuTree<T extends MenuTreeBuildingOptions>(
    menuKey: MenuKeyType,
    // To create a submenu inside a whole menu configuration
    parent?: string,
    options?: T,
    recursive: boolean = true
): T["noGroups"] extends true ? MappedMenuItem[] : MappedMenuGroup[] {
    if (!menuKey) {
        throw new Error("empty menu key");
    }

    if (!Object.keys(menuConfig["menus"]).find((k) => k == menuKey)) {
        throw new Error(`menu key '${menuKey}' not found in configuration`);
    }

    const items = getMenuConfigItems(menuKey, parent);
    const processor = !options?.noGroups
        ? getMappedMenuGroups
        : getMappedMenuItems;
    const mapped = processor.apply(this, [items, false, recursive, options]);

    return mapped;
}

export const getMappedMenuGroups = (
    allConfigItems: MenuConfigItem[],
    parent: MenuConfigItemParentType = undefined,
    recursive: boolean = true,
    options: MenuTreeBuildingOptions
): MappedMenuGroup[] => {
    let mappedItems = getMappedMenuItems(
        allConfigItems,
        parent,
        recursive,
        options
    );
    const grouped: MappedMenuGroup = !options?.noGroups
        ? _groupBy(mappedItems, "group.key")
        : { mappedItems };

    // console.log();

    const mapped: MappedMenuGroup[] = Object.values(grouped).map(
        (items: MappedMenuItem[]): MappedMenuGroup => {
            const group: MenuGroup =
                items.length && findByProperty(menuGroups, items[0].group?.key);

            return {
                ...group,
                items,
            };
        }
    );

    return mapped;
};

export const getMappedMenuItem = (
    key: MenuKeyType,
    allConfigItems: MenuConfigItem[],
    recursive: boolean = true,
    options: MenuTreeBuildingOptions
): MappedMenuItem => {
    const item = findByProperty(menuItems, key);
    const config = findByProperty(allConfigItems, key);
    const group = findByProperty(menuGroups, config.group);
    const children = recursive
        ? !options?.noGroups
            ? getMappedMenuGroups(allConfigItems, key, recursive, options)
            : getMappedMenuItems(allConfigItems, key, recursive, options)
        : [];

    const mapped: MappedMenuItem = {
        ...config,
        ...item,
        group: group,
        parent: findByProperty(menuItems, key, "parent"),
        children,
    };

    return mapped;
};

export const getMappedMenuItems = (
    allConfigItems: MenuConfigItem[],
    parent: MenuConfigItemParentType = undefined,
    recursive: boolean = true,
    options: MenuTreeBuildingOptions
): MappedMenuItem[] => {
    const items = getMenuConfigItems(allConfigItems, parent);
    let mapped = items.map((item) =>
        getMappedMenuItem(item.key, allConfigItems, recursive, options)
    );

    if (!options?.noSort) {
        mapped = _sortBy(mapped, ["order"]);
    }

    return mapped;
};

/**
 * returns the children of a menu item in a menu configuration
 *
 * @param menuKey the key of the menu configuration
 * @param parent parent menu key to filter
 * 	string = returns items with parent x
 * 	false = returns items without a parent
 * 	undefined = returns all items
 */
export function getMenuConfigItems(
    menuKey: MenuKeyType,
    parent?: MenuConfigItemParentType
): MenuConfigItem[];
export function getMenuConfigItems(
    items: MenuConfigItem[],
    parent?: MenuConfigItemParentType
): MenuConfigItem[];
export function getMenuConfigItems(
    source: MenuKeyType | MenuConfigItem[],
    parent?: MenuConfigItemParentType
): MenuConfigItem[] {
    const collection =
        (typeof source === "string" && menuConfig["menus"][source].items) ||
        (Array.isArray(source) && source) ||
        [];

    return (
        (typeof parent == "undefined" && collection) ||
        filterByProperty(
            collection,
            parent === false ? undefined : parent,
            "parent"
        )
    );
}
