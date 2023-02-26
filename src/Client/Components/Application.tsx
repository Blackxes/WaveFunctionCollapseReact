/**
 * @File File Content
 *
 * @Author Alexander Bassov Tue Sep 27 2022
 * @Email blackxes.dev@gmail.com
 */

import * as React from "react";

import styled from "styled-components";
import { GlobalStyles } from "../Styles/globalStyle";
import { Flex } from "./Core/Layout/Listing/Flex";
import { DefaultGridSettings } from "./Logic/settings";
import { IGridSettings } from "./Logic/types";
import WaveFunctionCollapse from "./WaveFunctionCollapse";

interface ApplicationProps {}

export const Application: React.FunctionComponent<ApplicationProps> = () => {
    const gridSettings: IGridSettings = {
        ...DefaultGridSettings,
    };

    const onWaveFunctionCollapseStep = () => {
        console.log("Step Wave function collapse");
    };

    return (
        <SApplication>
            <GlobalStyles />
            <SStepButton onClick={onWaveFunctionCollapseStep}>
                Step sister (I'm stuck)
            </SStepButton>
            <WaveFunctionCollapse gridSettings={gridSettings} />
        </SApplication>
    );
};

const SApplication = styled(Flex)`
    margin: 0 auto;
    position: relative;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`;

const SStepButton = styled.button`
    width: fit-content;
    background: orange;
`;
