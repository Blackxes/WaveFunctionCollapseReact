/**
 * @File File Content
 *
 * @Author Alexander Bassov Mon Oct 10 2022
 * @Email blackxes.dev@gmail.com
 */

import * as React from "react";

import styled from "styled-components";

interface SeparatorProps {
    widthType?: "narrow" | "normal" | "wide" | "full" | "extended";
    customWidth?: string;
    // Changes from margin to padding
    clashingSpacing?: boolean;
}

export const Separator: React.FunctionComponent<SeparatorProps> = (props) => (
    <SSeparator {...props} />
);

const getSeparatorWidthByType = (type: SeparatorProps["widthType"]) => {
    switch (type) {
        case "narrow":
            return "40%";
        case "wide":
            return "80%";
        case "full":
            return "100%";
        case "extended":
            return "120%";
        case "normal":
        default:
            return "60%";
    }

    throw new Error("Unreachable code reached.");
};

const SSeparator = styled.hr<SeparatorProps>`
    ${({ clashingSpacing }) =>
        !clashingSpacing
            ? "margin-top: 24px; margin-bottom: 24px;"
            : "padding-top: 24px; padding-bottom: 24px;"}
    width: ${({ customWidth, widthType }) =>
        customWidth || getSeparatorWidthByType(widthType)};
`;
