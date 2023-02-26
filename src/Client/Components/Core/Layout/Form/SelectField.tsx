/**
 * @File File Content
 *
 * @Author Alexander Bassov Mon Jul 11 2022
 * @Email blackxes.dev@gmail.com
 */

import * as React from "react";

import styled from "styled-components";

interface SelectFieldProps {
    options: Array<{
        label: string;
        value: number | string | undefined | null;
    }>;
}

export const SelectField: React.FunctionComponent<SelectFieldProps> = ({
    options,
    ...rest
}) => {
    return (
        <S_SelectField {...rest}>
            {options.map(({ value, label }) => (
                <option key={value} value={value}>
                    {label}
                </option>
            ))}
        </S_SelectField>
    );
};

const S_SelectField = styled.select``;
