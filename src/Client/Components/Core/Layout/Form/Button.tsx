/**
 * @File File Content
 *
 * @Author Alexander Bassov Sat Jul 09 2022
 * @Email blackxes.dev@gmail.com
 */

import * as React from "react";

import styled, { css } from "styled-components";
// import { ThemeContext } from "../../Contexts/ThemeContext";

interface ButtonProps {
    buttonType?: "success" | "error" | "warning" | "info";
    message?: string;
    bigger?: boolean;
}

export const Button: React.FunctionComponent<
    ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = (props) => {
    // const { theme } = React.useContext(ThemeContext);

    return <S_Button {...props} />;
};

const S_Button = styled.button<ButtonProps>`
    ${(props) =>
        !props.bigger
            ? ""
            : css`
                  padding: 14px 36px;
              `}
    transition: background 0.15s ease-in-out;
    background: ${({ buttonType, theme }) =>
        getButtonBackgroundColorByType(buttonType, theme)};
    border: 3px solid
        ${({ buttonType, theme }) => getButtonBorderByType(buttonType, theme)};
    color: ${({ buttonType, theme }) =>
        getButtonColorByType(buttonType, theme)};
    &:hover {
        background: ${({ buttonType, theme }) =>
            getOnHoverButtonBackground(buttonType, theme)};
        cursor: pointer;
    }
    &:last-child {
        margin-bottom: 0;
    }
`;

const getButtonBackgroundColorByType = (
    type: ButtonProps["buttonType"],
    theme: Record<string, any>
) => {
    switch (type) {
        case "success":
            return theme.colorSuccess;
        case "error":
            return theme.colorError;
        case "warning":
            return theme.colorWarning;
        case "info":
            return theme.colorInfo;
    }

    throw new Error("Unreachable code");
};

const getButtonBorderByType = (
    type: ButtonProps["buttonType"],
    theme: Record<string, any>
) => {
    switch (type) {
        case "success":
            return theme.colorSuccessBorder;
        case "error":
            return theme.colorErrorBorder;
        case "warning":
            return theme.colorWarningBorder;
        case "info":
            return theme.colorInfoBorder;
    }

    throw new Error("Unreachable code");
};

const getButtonColorByType = (
    type: ButtonProps["buttonType"],
    theme: Record<string, any>
) => {
    switch (type) {
        case "success":
            return theme.colorSuccessFont;
        case "error":
            return theme.colorErrorFont;
        case "warning":
            return theme.colorWarningFont;
        case "info":
            return theme.colorInfoFont;
    }

    throw new Error("Unreachable code");
};

const getOnHoverButtonBackground = (
    type: ButtonProps["buttonType"],
    theme: Record<string, any>
) => {
    switch (type) {
        case "success":
            return theme.colorSuccessOnHoverBackground;
        case "error":
            return theme.colorErrorOnHoverBackground;
        case "warning":
            return theme.colorWarningOnHoverBackground;
        case "info":
            return theme.colorInfoOnHoverBackground;
    }

    throw new Error("Unreachable code");
};
