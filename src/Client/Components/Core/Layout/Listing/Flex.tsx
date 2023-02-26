/**
 * @File The Flex component provides the bear minimum of listing elements
 *
 * @Author Alexander Bassov Mon Oct 03 2022
 * @Email blackxes.dev@gmail.com
 */

import * as React from "react";

import styled from "styled-components";

export interface FlexProps {
    vertical?: boolean;
    gap?: string;
    alignItems?: string;
    justifyContent?: string;
    whiteSpace?: string;
    whiteSpaceNoWrap?: boolean;
    noMargin?: boolean;
    minWidth?: boolean;
    autoWidth?: boolean;
    children?: React.ReactNode | React.ReactNode[];
    // Used property key for each child
    reactKey?: string;
    wrapComponent?: React.ComponentType<{
        children: React.ReactNode | React.ReactNode[];
    }>;
}

export const Flex: React.FunctionComponent<FlexProps> = ({
    children,
    reactKey,
    wrapComponent,
    ...rest
}) => {
    // Convert children into an array if not and wrap them
    const WrapComponent = wrapComponent ?? React.Fragment;
    const wrappedChildren = (
        children.constructor !== Array ? [children] : children
    ).map((item, index) => (
        <WrapComponent key={item[reactKey] ?? index} children={item} />
    ));

    return <SFlex {...rest} children={wrappedChildren} />;
};

const SFlex = styled.div<FlexProps>`
    display: flex;
    gap: ${({ gap }) => gap ?? ""};
    ${({ vertical }) => (!vertical ? "" : "flex-direction: column;")}
    ${({ alignItems }) => (!alignItems ? "" : `align-items: ${alignItems};`)}
    ${({ justifyContent }) =>
        !justifyContent ? "" : `justify-content: ${justifyContent};`}
    ${({ whiteSpace, whiteSpaceNoWrap }) =>
        whiteSpace
            ? `white-space: ${whiteSpaceNoWrap};`
            : whiteSpaceNoWrap
            ? "white-space: nowrap;"
            : ""}
    ${({ noMargin }) => (!noMargin ? "" : "& > * { margin: 0; }")}
	${({ autoWidth }) => (!autoWidth ? "" : "& > * { flex: 1 0; }")}
	${({ minWidth }) =>
        !minWidth ? "" : "& > * { width: min-content; white-space: nowrap; }"}
`;
