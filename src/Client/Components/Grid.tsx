/**
 * @File @todo FileDescription
 *
 * @Author Alexander Bassov Sat Feb 25 2023 2:39:02 PM
 * @Email blackxes.dev@gmail.com
 */

import * as React from "react";
import styled from "styled-components";
import {
    createGridTileSettings,
    getTileNeighboursIndex,
} from "./Logic/functions";
import {
    DefaultGridSettings,
    DefaultTileSettings,
    TileNeighbourContraints,
} from "./Logic/settings";
import Tile from "./Tile";
import {
    ITileChangeableValues,
    IGridTile,
    ITileNeighbours,
    ETileType,
    IGridSettings,
    ITile,
    ITileActions,
} from "./Logic/types";

interface IGridProps {
    settings: IGridSettings;
    tiles: IGridTile[];
    // onContrainTiles: (incidicies: number[], types: ETileType[]) => void;
    // onCollapseTiles: (indicies: number[]) => void;
    // onUpdateTiles: (indicies: number[], values: ITileChangeableValues) => void;
    tileActions: ITileActions;
}

const Grid: React.FunctionComponent<IGridProps> = (props) => {
    const { settings, tiles, tileActions } = props;
    const tileComponents = tiles.map((tile, index) => {
        tile.neighbours = getTileNeighboursIndex(index, settings);
        tile.index = index;
        const coordX = index % settings.horizontalTiles;
        const coordY = +Math.floor(index / settings.horizontalTiles).toFixed();

        return (
            <Tile
                // changeTile={onChangeTile}
                tile={tile}
                coords={{ x: coordX, y: coordY }}
                actions={tileActions}
            />
        );
    });

    return <SGrid {...props}>{...tileComponents}</SGrid>;
};

const SGrid = styled.div<Partial<IGridProps>>`
    padding: 5px;
    display: grid;
    grid-template-columns: repeat(
        ${({ settings }) => settings.horizontalTiles},
        ${({ settings }) => settings.tileWidth}px
    );
`;

export default Grid;
