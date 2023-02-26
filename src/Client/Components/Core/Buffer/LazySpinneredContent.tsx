/**
 * @File Displays a "loading" hint before the actual content is shown
 * 	until the flag to render it is true
 *
 * @Author Alexander Bassov Wed Jul 06 2022
 * @Email blackxes.dev@gmail.com
 */

import * as React from "react";

import styled, { css } from "styled-components";

import { IconLookup } from "@fortawesome/free-solid-svg-icons";
import SpinnerIconFallback from "../../../Assets/icons/loader.svg";

interface LazySpinneredContentProps {
    isLoading: boolean;
    hasFailed?: boolean;
    onFailComponent?: React.ReactElement;
    loaderWidth?: string;
    loaderComponent?: React.ReactElement;
    loaderIcon?: IconLookup;
    loaderIconComponent?: React.ReactElement;
    children?: React.ReactElement;
    centered?: boolean;
}

const defaultProps: Partial<LazySpinneredContentProps> = {
    isLoading: false,
    hasFailed: false,
    onFailComponent: null,
    loaderWidth: "30px",
    loaderComponent: null,
    loaderIcon: null,
    loaderIconComponent: null,
    children: null,
};

export const LazySpinneredContent: React.FunctionComponent<
    LazySpinneredContentProps
> = ({
    isLoading,
    hasFailed,
    onFailComponent,
    loaderWidth,
    loaderComponent,
    loaderIcon,
    loaderIconComponent,
    children,
    centered,
}) => {
    // const { theme } = React.useContext(ThemeContext);
    const LoadingFallbackComponent = loaderIcon ?? SpinnerIconFallback();
    const SpinnerComponent = loaderIconComponent ?? LoadingFallbackComponent;

    if (hasFailed) {
        return onFailComponent ?? null;
    }

    if (isLoading) {
        return (
            loaderComponent ?? (
                <S_LazySpinneredContent
                    // theme={theme}
                    loaderWidth={loaderWidth}
                    centered={centered}
                >
                    <SpinnerIconFallback
                        viewBox={`0 0 ${SpinnerComponent.props.width} ${SpinnerComponent.props.height}`}
                    />
                </S_LazySpinneredContent>
            )
        );
    }

    return children;
};

LazySpinneredContent.defaultProps = defaultProps;

const S_LazySpinneredContent = styled.div<{
    loaderWidth: string;
    centered?: boolean;
}>`
    display: flex;
    align-items: center;
    ${(props) =>
        !props.centered
            ? ""
            : css`
                  justify-content: center;
              `}
    svg {
        width: ${(props) => props.loaderWidth ?? "2em"};
        height: auto;
        &,
        & * {
            fill: ${({ theme }) => theme.colorAction ?? "#fff"};
            stroke: ${({ theme }) => theme.colorAccent ?? "#000"};
        }
    }
`;
