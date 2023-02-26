/**
 * @File File Content
 *
 * @Author Alexander Bassov Fri Jul 15 2022
 * @Email blackxes.dev@gmail.com
 */

import * as React from "react";

interface InputNumberFieldProps extends React.HTMLAttributes<HTMLInputElement> {
    name: string;
    type?: string;
}

export const InputNumberField: React.FunctionComponent<
    InputNumberFieldProps
> = ({ type, name, ...rest }) => {
    return <input name={name} type={type ?? "text"} min="1" {...rest} />;
};
