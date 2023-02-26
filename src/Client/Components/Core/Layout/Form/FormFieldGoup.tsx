/**
 * @File File Content
 *
 * @Author Alexander Bassov Sun Jul 10 2022
 * @Email blackxes.dev@gmail.com
 */

import * as React from "react";

import styled from "styled-components";

interface FormFieldGroupProps {}

export const FormFieldGroup: React.FunctionComponent<FormFieldGroupProps> = (
    props
) => {
    return <S_FormFieldGroup {...props} />;
};

const S_FormFieldGroup = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    > * {
        margin-right: 2em;
        flex: 1 0;
        &:last-child {
            margin-right: 0;
        }
    }
`;
