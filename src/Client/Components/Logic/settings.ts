/**
 * @File @todo FileDescription
 *
 * @Author Alexander Bassov Sat Feb 25 2023 2:39:56 PM
 * @Email blackxes.dev@gmail.com
 */

import { IGridSettings, ITile, ETileType } from "./types";

export const TileTypeImageReferences = {
    [ETileType.NONE]: "images/blank.png",
    [ETileType.ALL]: "images/blank.png",
    [ETileType.GRASS]: "images/grass.png",
    [ETileType.SAND]: "images/sand.png",
    [ETileType.WATER]: "images/water.png",
    [ETileType.FOREST]: "images/forest.png",
    [ETileType.BIG_FOREST]: "images/big_forest.png",
};

export const TileNeighbourContraints = {
    [ETileType.NONE]: [ETileType.NONE],
    [ETileType.ALL]: Object.keys(ETileType).reduce(
        (all, item) => (Number.isNaN(+item) ? [...all] : [...all, +item]),
        []
    ),
    [ETileType.GRASS]: [ETileType.GRASS, ETileType.SAND, ETileType.FOREST],
    [ETileType.SAND]: [ETileType.SAND, ETileType.WATER, ETileType.GRASS],
    [ETileType.WATER]: [ETileType.WATER, ETileType.SAND],
    [ETileType.FOREST]: [
        ETileType.FOREST,
        ETileType.GRASS,
        ETileType.BIG_FOREST,
    ],
    [ETileType.BIG_FOREST]: [ETileType.BIG_FOREST, ETileType.FOREST],
};

export const DefaultGridSettings: IGridSettings = {
    horizontalTiles: 7,
    verticalTiles: 7,
    tileHeight: 64,
    tileWidth: 64,
};

export const DefaultTileSettings: ITile = {
    height: 64,
    width: 64,
    collapsed: false,
    entropy: TileNeighbourContraints[ETileType.ALL],
    neighbours: { top: -1, bottom: -1, left: -1, right: -1 },
};
