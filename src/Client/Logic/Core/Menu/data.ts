/**
 * @File File
 *
 * @Author Alexander Bassov Wed Sep 02 2020
 * @Email blackxes.dev@gmail.com
 */

import {
    BasedataClansContainerKey,
    BasedataClansContainerTabsKey,
    BasedataContainerKey,
    BasedataMenuKey,
    BasedataPlayersContainerKey,
    BasedataPlayersContainerTabsKey,
    BasedataTabAllClansKey,
    BasedataTabAllPlayersKey,
    BasedataTabNewClanKey,
    BasedataTabNewPlayerKey,
    CommunityOutpostLeagueMenuKey,
    CommunityOutpostLeagueWorldContainerKey,
} from "./keys";
import { MenuConfigWrapper, MenuGroup, MenuItem } from "./types";
import {
    faDatabase as fasDatabase,
    faEarth as fasEarth,
    faShield as fasShield,
    faUser as fasUser,
    faUserGroup as fasUserGroup,
    faUsersBetweenLines as fasUsersBetweenLines,
} from "@fortawesome/free-solid-svg-icons";

/**
 * menu configurations
 */
export type MenuConfigWrapperMenuKeyType = MenuConfigWrapper["menus"];
export const menuConfig: MenuConfigWrapper = {
    default: "main_menu",
    menus: {
        [CommunityOutpostLeagueMenuKey]: {
            items: [
                {
                    key: CommunityOutpostLeagueWorldContainerKey,
                },
                {
                    key: BasedataContainerKey,
                },
            ],
        },
        [BasedataMenuKey]: {
            items: [
                {
                    key: BasedataPlayersContainerKey,
                },
                {
                    key: BasedataClansContainerKey,
                },
            ],
        },
        [BasedataPlayersContainerTabsKey]: {
            items: [
                {
                    key: BasedataTabAllPlayersKey,
                },
                {
                    key: BasedataTabNewPlayerKey,
                },
            ],
        },
        [BasedataClansContainerTabsKey]: {
            items: [
                {
                    key: BasedataTabAllClansKey,
                },
                {
                    key: BasedataTabNewClanKey,
                },
            ],
        },
    },
};

/**
 * apps menu groups
 */
export const menuItems: MenuItem[] = [
    // Community outpost league menu
    {
        title: "World",
        key: CommunityOutpostLeagueWorldContainerKey,
        path: CommunityOutpostLeagueWorldContainerKey,
        style: {
            icon: {
                fontAwesomeIcon: fasEarth,
            },
        },
    },
    {
        title: "Foundation Data",
        key: BasedataContainerKey,
        path: BasedataContainerKey,
        style: {
            icon: {
                fontAwesomeIcon: fasDatabase,
            },
        },
    },
    // Foundation data menu
    {
        title: "Players",
        key: BasedataPlayersContainerKey,
        path: BasedataPlayersContainerKey,
        style: {
            icon: {
                fontAwesomeIcon: fasUser,
            },
        },
    },
    {
        title: "Clans",
        key: BasedataClansContainerKey,
        path: BasedataClansContainerKey,
        style: {
            icon: {
                fontAwesomeIcon: fasShield,
            },
        },
    },
    // Foundation data players container tabs
    {
        title: "Players",
        key: BasedataTabAllPlayersKey,
        path: BasedataTabAllPlayersKey,
        style: {
            icon: {
                fontAwesomeIcon: fasUserGroup,
            },
        },
    },
    {
        title: "+",
        key: BasedataTabNewPlayerKey,
        path: BasedataTabNewPlayerKey,
        style: {
            icon: {
                fontAwesomeIcon: fasUser,
            },
        },
    },
    // Foundation data clans container tabs
    {
        title: "Clans",
        key: BasedataTabAllClansKey,
        path: BasedataTabAllClansKey,
        style: {
            icon: {
                fontAwesomeIcon: fasUsersBetweenLines,
            },
        },
    },
    {
        title: "+",
        key: BasedataTabNewClanKey,
        path: BasedataTabNewClanKey,
        style: {
            icon: {
                fontAwesomeIcon: fasShield,
            },
        },
    },
];

/**
 * menu group configurations
 */
export const menuGroups: MenuGroup[] = [];
