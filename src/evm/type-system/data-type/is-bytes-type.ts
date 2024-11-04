import type {BytesType} from "./";
import {BYTES_TYPE} from "./";

export function isBytesType(item: unknown): item is BytesType {
    if (typeof item !== "string") return false;
    return BYTES_TYPE.includes((item));
}