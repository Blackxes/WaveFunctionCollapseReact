/**
 * @File File Content
 *
 * @Author Alexander Bassov Fri Oct 14 2022
 * @Email blackxes.dev@gmail.com
 */

import * as React from "react";
import styled from "styled-components";

interface SegmentProps {}

export const Segment: React.FunctionComponent<SegmentProps> = (props) => (
    <SSegment {...props} />
);

const SSegment = styled.div`
    margin-bottom: 60px;
`;
