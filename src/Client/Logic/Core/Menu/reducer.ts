/**
 * @File File Content
 *
 * @Author Alexander Bassov Wed Oct 14 2020
 * @Email blackxes.dev@gmail.com
 */

import { MenuConfigWrapper } from './types';
import { Reducer } from 'redux';
import { menuConfig } from './data';

interface MenuState {
    configurations: MenuConfigWrapper;
    activeConfig: string;
    defaultRoute: string;
    hidden?: boolean;
}

const initialTabsState: MenuState = {
    configurations: menuConfig,
    activeConfig: '',
    defaultRoute: 'dashboard',
    hidden: false
};

const menuReducer: Reducer<MenuState> = (
    state: MenuState = initialTabsState,
    { type, payload }
) => {
    switch (type) {
        default:
            return state;
    }
};

export default menuReducer;
