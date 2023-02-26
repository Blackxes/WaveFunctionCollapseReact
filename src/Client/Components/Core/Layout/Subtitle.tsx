/**
 * @File File Content
 *
 * @Author Alexander Bassov Sun Oct 02 2022
 * @Email blackxes.dev@gmail.com
 */

import * as React from "react";

import styled from "styled-components";

interface SubtitleProps extends React.HTMLAttributes<HTMLParagraphElement> {}

export const Subtitle: React.FunctionComponent<SubtitleProps> = (props) => {
    return <SSubtitle {...props} />;
};

const SSubtitle = styled.p<SubtitleProps>`
    margin-bottom: 20px;
    font-size: 1.67em;
`;
