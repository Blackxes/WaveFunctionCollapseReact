/**
 * @File File Content
 *
 * @Author Alexander Bassov Sun Sep 11 2022
 * @Email blackxes.dev@gmail.com
 */

import * as React from "react";

import styled, { css } from "styled-components";

interface LabelProps {
    spacing?: string;
    highlight?: string;
}

export const Label: React.FunctionComponent<
    LabelProps & React.LabelHTMLAttributes<HTMLLabelElement>
> = (props) => <SSLabel {...props} />;

const SSLabel = styled.label<LabelProps>`
    ${(props) =>
        !props.spacing
            ? ""
            : css`
                  margin-bottom: ${props.spacing ?? "16px"};
              `}
    ${(props) =>
        !props.highlight
            ? ""
            : css`
                  color: ${props.highlight};
              `}
`;
