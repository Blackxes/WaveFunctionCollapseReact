/**
 * @File U
 *
 * @Author Alexander Bassov Sun Oct 02 2022
 * @Email blackxes.dev@gmail.com
 */

import * as React from "react";

import styled, { css } from "styled-components";

interface AppWidthWrapperProps {
    ignoreMaxWidth?: boolean;
    children?: React.ReactNode | React.ReactNode[];
}

export const AppWidthWrapper: React.FunctionComponent<AppWidthWrapperProps> = (
    props
) => <SAppWidthWrapper {...props} />;

const SAppWidthWrapper = styled.div<AppWidthWrapperProps>`
    ${({ ignoreMaxWidth }) =>
        ignoreMaxWidth
            ? ""
            : css`
                  margin-left: auto;
                  margin-right: auto;
                  padding-left: 40px;
                  padding-right: 40px;
                  box-sizing: border-box;
                  max-width: var(--app-max-width);
                  width: 100%;
              `};
`;
