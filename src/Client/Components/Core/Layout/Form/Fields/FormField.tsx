/**
 * @File File Content
 *
 * @Author Alexander Bassov Sun Jul 10 2022
 * @Email blackxes.dev@gmail.com
 */

import * as React from "react";

import styled from "styled-components";

interface FormFieldProps {
    children?: React.ReactNode | React.ReactNode[];
}

export const FormField: React.FunctionComponent<FormFieldProps> = (props) => {
    return <S_FormField {...props} />;
};

const S_FormField = styled.div`
    margin-bottom: 2em;
    width: 100%;
    label,
    input,
    select,
    textarea {
        width: 100%;
        box-sizing: border-box;
    }
    label {
        display: flex;
        flex-direction: column;
        > * {
            margin-top: 0.5em;
        }
    }
`;
