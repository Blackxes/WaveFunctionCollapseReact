/**
 * @File File Content
 *
 * @Author Alexander Bassov Mon Oct 24 2022
 * @Email blackxes.dev@gmail.com
 */

import * as React from "react";

import { Flex } from "./Listing/Flex";
import styled from "styled-components";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTimes as fasTimes } from "@fortawesome/free-solid-svg-icons";

interface ModalProps {
    show?: boolean;
    closeTrigger?: () => void;
    children: React.ReactNode | React.ReactNode[];
}

export const Modal: React.FunctionComponent<ModalProps> = (props) => {
    const { children, show, closeTrigger } = props;

    return !show ? null : (
        <SModal justifyContent="center" alignItems="center">
            <SModalBackground onClick={closeTrigger} />
            <SModalContent>{children}</SModalContent>
            <SModalExitButton onClick={closeTrigger}>&times;</SModalExitButton>
        </SModal>
    );
};

const SModal = styled(Flex)`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 100;
    transition: opacity 200ms ease-in-out;
`;

const SModalBackground = styled.div`
    position: absolute;
    width: inherit;
    height: inherit;
    background: rgb(0, 0, 0, 0.85);
    z-index: -1;
`;

const SModalContent = styled.div`
    display: block;
    border: 5px solid orange;
    box-sizing: border-box;
`;

const SModalExitButton = styled.p`
    position: absolute;
    top: 20px;
    right: 20px;
    padding: 6px 15px;
    font-size: 20px;
    &:hover {
        cursor: pointer;
    }
`;
