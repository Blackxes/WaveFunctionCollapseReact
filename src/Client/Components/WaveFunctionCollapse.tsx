/**
 * @File @todo FileDescription
 *
 * @Author Alexander Bassov Sat Feb 25 2023 2:18:59 PM
 * @Email blackxes.dev@gmail.com
 */

import * as React from "react";
import styled from "styled-components";
import Grid from "./Grid";
import {
    getEntropyContrainedTiles as getEntropyConstrainedTiles,
    getInitialGridTiles,
    getPropagatedTiles,
} from "./Logic/functions";
import { DefaultGridSettings } from "./Logic/settings";
import {
    ETileType,
    IGridSettings,
    IGridTile,
    ITileActions,
    ITileChangeableValues,
} from "./Logic/types";

interface IWaveFunctionCollapseProps {
    gridSettings?: IGridSettings;
}

const WaveFunctionCollapse: React.FunctionComponent<
    IWaveFunctionCollapseProps
> = ({ gridSettings }) => {
    const [tiles, setTiles] = React.useState(getInitialGridTiles(gridSettings));

    const onContrainTiles = (
        indicies: number[],
        constrainedTypes: ETileType[]
    ) => {
        setTiles([
            ...getEntropyConstrainedTiles(tiles, constrainedTypes, indicies),
        ]);

        onPropagateTiles(indicies);
    };

    const onCollapseTiles = (index: number, tileType: ETileType) => {
        setTiles(
            tiles.map((item) =>
                item.index != index ? item : { ...item, entropy: [tileType] }
            )
        );
    };

    const onPropagateTiles = (indicies: number[]) => {
        setTiles([...getPropagatedTiles(tiles, indicies)]);
        console.log("Propagating Tiles", indicies);
    };

    const tileActions: ITileActions = {
        constrain: (index: number, constrainingTypes: ETileType[]) =>
            onContrainTiles([index], constrainingTypes),
        propagate: (index: number) => onPropagateTiles([index]),
    };

    return (
        <SWaveFunctionCollapse>
            <Grid
                tiles={tiles}
                tileActions={tileActions}
                settings={gridSettings}
            />
        </SWaveFunctionCollapse>
    );
};

const SWaveFunctionCollapse = styled.div`
    margin-inline: auto;
    max-width: max(940px, calc(720px - 1rem));
    display: flex;
    align-items: center;
`;

export default WaveFunctionCollapse;
