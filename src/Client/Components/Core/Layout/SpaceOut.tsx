/**
 * @File File Content
 *
 * @Author Alexander Bassov Sun Sep 11 2022
 * @Email blackxes.dev@gmail.com
 */

import * as React from "react";

import styled from "styled-components";

interface SpaceOutProps {
    gap?: string;
    gapTop?: string;
    gapBottom?: string;
}

export const SpaceOut: React.FunctionComponent<
    SpaceOutProps & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
    return <SSpaceOut {...props} />;
};

const SSpaceOut = styled.div<SpaceOutProps>`
    margin-top: ${(props) => props.gapTop || props.gap || "80px"};
    margin-bottom: ${(props) => props.gapBottom || props.gap || "80px"};
`;
