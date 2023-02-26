/**
 * @File File Content
 *
 * @Author Alexander Bassov Sun Oct 09 2022
 * @Email blackxes.dev@gmail.com
 */

import * as React from "react";

import styled from "styled-components";

export interface GridProps {
    vertical?: boolean;
    rows?: number;
    columns?: number;
    autoFlow?: string | boolean;
    gap?: string;
    rowGap?: string;
    columnGap?: string;
    noMargin?: boolean;
    alignItems?: string;
    justifyContent?: string;
    justifyItems?: string;
    // Fixed width for each child
    fixedWidth?: string;
    // Fixed height for each child
    fixedHeight?: string;
    children?: React.ReactNode | React.ReactNode[];
    // Used property key for each child
    reactKey?: string;
    wrapComponent?: React.ComponentType<{
        children: React.ReactNode | React.ReactNode[];
    }>;
}

export const Grid: React.FunctionComponent<GridProps> = ({
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

    return <SGrid {...rest} children={wrappedChildren} />;
};

const SGrid = styled.div<GridProps>`
    display: grid;
    gap: ${({ gap }) => gap ?? ""};
    ${({ noMargin }) => (!noMargin ? "" : "& > * { margin: 0; }")}
    ${({ columns, fixedWidth }) =>
        !columns
            ? ""
            : `grid-template-columns: repeat(${columns},${
                  fixedWidth || "1fr"
              });`}
    ${({ rows, fixedHeight }) =>
        !rows
            ? ""
            : `grid-template-rows: repeat(${rows}, ${fixedHeight || "1fr"});`}
	${({ rowGap }) => (!rowGap ? "" : `row-gap: ${rowGap};`)}
	${({ columnGap }) => (!columnGap ? "" : `row-gap: ${columnGap};`)}
	${({ vertical, autoFlow }) =>
        autoFlow === false
            ? ""
            : `grid-auto-flow: ${autoFlow ?? (vertical ? "row" : "column")};`}
	${({ alignItems }) => (!alignItems ? "" : `align-items: ${alignItems}`)};
    ${({ justifyContent }) =>
        !justifyContent ? "" : `justify-content: ${justifyContent}`};
    ${({ justifyItems }) =>
        !justifyItems ? "" : `justify-items: ${justifyItems}`};
`;
