import type {BaseType} from "./";
import {BASE_TYPE} from "./";

export function isBaseType(item: unknown): item is BaseType {
    if (typeof item !== "string") return false;
    return BASE_TYPE.includes((item as any));
}