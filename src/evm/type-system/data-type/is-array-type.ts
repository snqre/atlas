import type {ArrayType} from "./";
import {ARRAY_TYPE} from "./";

export function isArrayType(item: unknown): item is ArrayType {
    if (typeof item !== "string") return false;
    return ARRAY_TYPE.includes((item));
}