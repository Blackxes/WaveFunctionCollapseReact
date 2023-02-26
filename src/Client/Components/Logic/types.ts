/**
 * @File @todo FileDescription
 *
 * @Author Alexander Bassov Sat Feb 25 2023 2:23:43 PM
 * @Email blackxes.dev@gmail.com
 */

export interface IGridSettings {
    horizontalTiles: number;
    verticalTiles: number;
    tileWidth: ITile["width"];
    tileHeight: ITile["height"];
}

export enum ETileType {
    NONE,
    ALL,
    GRASS,
    SAND,
    WATER,
    FOREST,
    BIG_FOREST,
}

export interface ITileNeighbours {
    top: number;
    bottom: number;
    left: number;
    right: number;
}

export interface ITile {
    width: 64;
    height: 64;
    collapsed: boolean;
    entropy: ETileType[];
    neighbours: ITileNeighbours;
}

export interface IGridTile extends ITile {
    index: number;
}

export interface ITileActions {
    constrain: (index: number, constrainingTypes: ETileType[]) => void;
    propagate: (index: number) => void;
}

export interface ITileChangeableValues
    extends Partial<Pick<ITile, "entropy" | "collapsed">> {}
