/**
 * @File @todo FileDescription
 *
 * @Author Alexander Bassov Sat Feb 25 2023 2:22:43 PM
 * @Email blackxes.dev@gmail.com
 */

import * as React from "react";
import styled from "styled-components";
import { getImagePathByTileType } from "./Logic/functions";
import { DefaultTileSettings } from "./Logic/settings";
import { IGridTile, ETileType, ITileActions } from "./Logic/types";

// import { WaveFunctionCollapseGrid } from "./types";

type TileProps = {
    tile: IGridTile;
    coords: { x: number; y: number };
    actions: ITileActions;
};

type STileProps = {} & Pick<TileProps, "tile">;

const TileComponent: React.FunctionComponent<TileProps> = (props) => {
    const { tile, actions, coords } = props;

    const onClick = () => {
        let newConstrain: ETileType = ETileType.NONE;

        while (
            newConstrain == ETileType.ALL ||
            newConstrain == ETileType.NONE
        ) {
            newConstrain =
                tile.entropy[Math.floor(Math.random() * tile.entropy.length)];
        }

        actions.constrain(tile.index, [newConstrain]);
    };

    return (
        <STile tile={tile} onClick={onClick}>
            {tile.entropy.length == 1 ? (
                <STileBackground tile={tile} />
            ) : (
                <SMeta>
                    {/* <SIndexValue>{coords.y * 5 + coords.x}</SIndexValue> */}
                    {/* <SContrainValue>{tile.entropy.join(", ")}</SContrainValue> */}
                    <SContrainValue>{tile.entropy.length}</SContrainValue>
                </SMeta>
            )}
        </STile>
    );
};

const STileBackground = styled.div<STileProps>`
    width: 100%;
    height: 100%;
    background-image: url(${({ tile }) =>
        getImagePathByTileType(tile.entropy.at(0))});
`;

const STile = styled.div<STileProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    background: aquamarine;
    ${({ tile }) => (tile.entropy.length == 1 ? `background-image: url` : "")}

    ${({ tile }) =>
        tile.entropy.length == 1
            ? `background-image: url(${getImagePathByTileType(
                  tile.entropy.at(0)
              )});`
            : ""}
    background-repeat: no-repeat;
    background-size: 100%;
    ${({ tile }) => (tile.collapsed ? "filter: brightness(0.5)" : "")};
    image-rendering: pixelated;
    width: ${DefaultTileSettings.width}px;
    height: ${DefaultTileSettings.height}px;

    &:hover {
        filter: brightness(0.9);
    }
`;

const SMeta = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    & * {
        margin: 0;
        font-size: 16px;
    }
`;

const SContrainValue = styled.p`
    padding: 5px 10px;
    color: white;
    text-align: center;
`;

const SIndexValue = styled.p`
    // color: green;
`;

export default TileComponent;
