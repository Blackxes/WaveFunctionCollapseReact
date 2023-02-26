/**
 * @File File Content
 *
 * @Author Alexander Bassov Fri Nov 04 2022
 * @Email blackxes.dev@gmail.com
 */

import * as React from "react";

import { Navigate, useLocation } from "react-router-dom";

interface RedirectDoubleSlashProps {}

export const RedirectDoubleSlash: React.FunctionComponent<
    RedirectDoubleSlashProps
> = (props) => {
    const location = useLocation();

    if (/\/{2,}/.test(location.pathname)) {
        const replaced = location.pathname.replace(/\/{2,}/, "/");

        console.log("Double Slash");

        return <Navigate to={replaced} replace />;
    }

    return null;
};
