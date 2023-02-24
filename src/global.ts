// eslint-disable-next-line import/no-unresolved, import/extensions
import { getId } from "./Helpers.js";

export const canvas = getId("canvas");
export const ctx = canvas.getContext("2d");
export const grid:number = 32;
export const sizeField:number = 16;
export const numberOftribes = 8;
