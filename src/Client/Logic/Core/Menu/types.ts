/**
 * @File types of tabs
 *
 * @Author Alexander Bassov Tue Oct 13 2020
 * @Email blackxes.dev@gmail.com
 */

import { IconLookup } from "@fortawesome/free-solid-svg-icons";

export type MenuKeyType = MenuItem["key"];
export type MenuConfigItemParentType = MenuKeyType | false | undefined;
export type MenuGroupKeyType = MenuGroup["key"];

/** menu build configuration */
export interface MenuConfigWrapper {
    default: keyof MenuConfigWrapper["menus"];
    menus: {
        [key: number]: never;
        [key: string]: MenuConfig;
    };
}

export interface MenuConfig {
    items?: MenuConfigItem[];
}

export interface MenuConfigItem {
    key: string;
    /** key of a menu group item */
    group?: MenuGroupKeyType;
    /** numeric order / negative and positive possible [default: 0] */
    order?: number;
    /** parent menu item key */
    parent?: MenuConfigItemParentType;
}

/**
 * menu tree has been built types
 */
export interface MappedMenuItem extends MenuItem {
    group?: MenuGroup;
    parent?: MenuItem;
    order?: number;
    options?: MenuTreeBuildingOptions;
    children?: MappedMenuGroup[];
}

/** menu tree */
export interface MappedMenuGroup extends MenuGroup {
    items?: MappedMenuItem[];
}

/**
 * menu definition detailed information about menu components
 */
type MenuItemRouteProps = Partial<{
    component: React.ComponentType;
    exact: boolean;
    path: string;
    strict: boolean;
}>;

/** Menu item styling options which are handled in the MenuComponent */
export interface MenuItemStylingConfig {
    fontAwesomeIcon: IconLookup;
    hide?: boolean;
}

export interface MenuItemStyling {
    icon?: MenuItemStylingConfig;
    prefixIcon?: MenuItemStylingConfig;
    postFixIcon?: MenuItemStylingConfig;
}

export interface MenuItem extends MenuItemRouteProps {
    key: string;
    onClick?: (menuKey: string) => undefined;
    title?: string;
    hideTitle?: boolean;
    renderPrefixIcon?: boolean;
    /** styling options */
    style?: MenuItemStyling;
}

export interface MenuGroup {
    title?: string;
    key?: string;
}

export interface MenuTreeBuildingOptions {
    noSort?: boolean;
    noGroups?: boolean;
}
