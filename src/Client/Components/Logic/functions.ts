/**
 * @File @todo FileDescription
 *
 * @Author Alexander Bassov Sat Feb 25 2023 3:27:30 PM
 * @Email blackxes.dev@gmail.com
 */

import {
    DefaultTileSettings,
    TileNeighbourContraints,
    TileTypeImageReferences,
} from "./settings";
import {
    IGridTile,
    ITileNeighbours,
    ETileType,
    ITile,
    IGridSettings,
} from "./types";

const BlankTileTypeImagePath = "Assets/images/blank.png";
const ForestTileTypeImagePath = "Assets/images/forest.png";
const BigForestTileTypeImagePath = "Assets/images/big_forest.png";
const GrassTileTypeImagePath = "Assets/images/grass.png";
const SandTileTypeImagePath = "Assets/images/sand.png";
const WaterTileTypeImagePath = "Assets/images/water.png";

export const getImagePathByTileType = (type: ETileType) => {
    switch (type) {
        case ETileType.FOREST:
            return ForestTileTypeImagePath;
        case ETileType.BIG_FOREST:
            return BigForestTileTypeImagePath;
        case ETileType.GRASS:
            return GrassTileTypeImagePath;
        case ETileType.SAND:
            return SandTileTypeImagePath;
        case ETileType.WATER:
            return WaterTileTypeImagePath;
        case ETileType.NONE:
        default:
            return BlankTileTypeImagePath;
    }

    throw new Error("Unreachable Code");
};

export const createGridTileSettings = (
    values: Partial<IGridTile> = {}
): IGridTile => ({
    index: -1,
    ...DefaultTileSettings,
    ...values,
});

export const getInitialGridTiles = (settings: IGridSettings) =>
    Array(settings.horizontalTiles * settings.verticalTiles)
        .fill(undefined)
        .map((v, i) => createGridTileSettings());

export const getTileNeighboursIndex = (
    index,
    settings: IGridSettings
): ITileNeighbours => ({
    top:
        index - settings.horizontalTiles >= 0
            ? index - settings.horizontalTiles
            : -1,
    bottom:
        (index + settings.horizontalTiles) / settings.horizontalTiles <=
        settings.verticalTiles - 1
            ? index + settings.horizontalTiles
            : -1,
    left: (index % settings.horizontalTiles) - 1 >= 0 ? index - 1 : -1,
    right:
        (index % settings.horizontalTiles) + 1 <= settings.horizontalTiles - 1
            ? index + 1
            : -1,
});

export const getLowestEntropyIndex = (
    tiles: IGridTile[]
): IGridTile["index"] => {
    let lowestEnropyCount = Object.keys(ETileType).length / 2;
    const sorted = tiles.sort((a, b) => {
        lowestEnropyCount = Math.min(
            lowestEnropyCount,
            a.entropy.length,
            b.entropy.length
        );

        return b.entropy.length - a.entropy.length;
    });

    const lowestEntropies = sorted.slice(
        0,
        sorted.findIndex((item) => item.entropy.length > lowestEnropyCount)
    );

    return lowestEntropies[Math.random() * lowestEntropies.length].index;
};

export const getNeighbours = (tiles: IGridTile[], index: number) =>
    tiles.filter((item) =>
        Object.values(tiles[index].neighbours).includes(item.index)
    );

export const getEntropyContrainedTiles = (
    tiles: IGridTile[],
    tileTypes: ETileType[],
    contrainingIndicies: number[]
): IGridTile[] => {
    const constrained = Array.from(tiles);

    for (const index of contrainingIndicies) {
        const tile = constrained[index];
        tile.entropy = tile.entropy.filter((tileType) =>
            tileTypes.includes(tileType)
        );
    }

    return constrained;
};

export const getPropagatedTiles = (
    tiles: IGridTile[],
    indicies: number[]
): IGridTile[] => {
    const propedTiles = Array.from(tiles);
    const processed: number[] = [];
    const tilesStack = tiles.reduce(
        (filtered, t) =>
            !indicies.includes(t.index) ? filtered : [...filtered, t.index],
        []
    );

    while (tilesStack.length) {
        // debugger;
        const tile = propedTiles[tilesStack.pop()];

        // Push tiles index to checked to ensure
        // neighbours don't push this tile into the stack again
        !processed.includes(tile.index) && processed.push(tile.index);

        const newPropedEntropy = tile.entropy.reduce((set, type) => {
            for (const constrain of TileNeighbourContraints[type]) {
                if (!set.includes(constrain)) {
                    set.push(constrain);
                }
            }

            return set;
        }, []);

        for (const neighbour of getNeighbours(tiles, tile.index)) {
            if (neighbour.entropy.length == 1) {
                continue;
            }

            if (
                !processed.includes(neighbour.index) &&
                !tilesStack.includes(neighbour.index)
            ) {
                const filteredEntropy = newPropedEntropy.filter((e) =>
                    neighbour.entropy.includes(e)
                );
                !tilesStack.includes(neighbour.index) &&
                    tilesStack.push(neighbour.index);

                // Push this neighbours neighbours back into the stack
                // to re constrain them and find a different match
                if (!filteredEntropy) {
                    const neighboursIndicies = Object.values(
                        neighbour.neighbours
                    );
                    tilesStack.push(...neighboursIndicies);
                    neighboursIndicies.forEach(
                        (i) =>
                            processed.includes(i) &&
                            processed.splice(processed.indexOf(i), 1)
                    );
                    continue;
                }

                propedTiles[neighbour.index].entropy = filteredEntropy;
                processed.push(neighbour.index);
            }
        }
    }

    return propedTiles;
};
