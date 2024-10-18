import { MAX_COLS, MAX_ROWS } from "./constants";
import { GridType, TileType } from "./types";

const retrieveHeuristicCost = (currentTile:TileType,endTile:TileType)=>{
    const manhattanDis= 1;
    const r= Math.abs(currentTile.row-endTile.row);
    const c= Math.abs(currentTile.col-endTile.col);
    return manhattanDis*(r+c);
}

export const initFuncitonCost = ()=>{
    const functionCost = [];
    for(let i=0;i<MAX_ROWS;i++){
        const row= [];
        for(let j=0;j<MAX_COLS;j++){
            row.push(Infinity);
        }
        functionCost.push(row);
    }
    return functionCost;
}

export const initHeuristicCost = (grid:GridType,endTile:TileType)=>{
    const heuristicCost = [];
    for(let i=0;i<MAX_ROWS;i++){
        const row = [];
        for(let j=0;j<MAX_COLS;j++){
            row.push(retrieveHeuristicCost(grid[i][j],endTile));
        }
        heuristicCost.push(row);
    }
    return heuristicCost;
}