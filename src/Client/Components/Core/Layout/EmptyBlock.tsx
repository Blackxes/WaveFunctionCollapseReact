/**
 * @File Serves to be placed as spacer without any content
 * 	Height can be adjusted on demand
 *
 * @Author Alexander Bassov Mon Oct 10 2022
 * @Email blackxes.dev@gmail.com
 */

import * as React from "react";

import styled from "styled-components";

interface EmptyBlockProps {
    blockHeight?: string;
}

export const EmptyBlock: React.FunctionComponent<EmptyBlockProps> = (props) => {
    const blockRef = React.createRef<HTMLDivElement>();

    React.useEffect(() => {
        if (blockRef) {
            blockRef?.current?.style?.setProperty(
                "--block-height",
                props.blockHeight ?? "0px"
            );
        }
    }, [blockRef, props.blockHeight]);

    return <SEmptyBlock ref={blockRef} />;
};

const SEmptyBlock = styled.div`
    height: var(--block-height);
`;
