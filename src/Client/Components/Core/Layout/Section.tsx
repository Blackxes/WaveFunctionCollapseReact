/**
 * @File File Content
 *
 * @Author Alexander Bassov Fri Sep 30 2022
 * @Email blackxes.dev@gmail.com
 */

import * as React from "react";

import styled from "styled-components";

interface SectionProps {
    // Adds margin to the bottom
    spacingBottom?: string;
    // Adds padding to the sides
    spacingSides?: string;
    children: React.ReactNode;
}

export const Section: React.FunctionComponent<SectionProps> = (props) => (
    <SSection {...props} />
);

const SSection = styled.div<SectionProps>`
    margin-bottom: ${(props) => props.spacingBottom ?? "20px"};
    padding: ${(props) =>
        props.spacingSides
            ? `${props.spacingSides} ${props.spacingSides}`
            : "40px 40px"};
    width: 100%;
`;
