import type {BytesBitSize} from "./";
import type {BytesSubType} from "./";
import {BYTES_BIT_SIZE} from "./";
import {BYTES_SUB_TYPE} from "./";

export type BytesType = `${BytesSubType}${BytesBitSize}`;

export const BYTES_TYPE: ReadonlyArray<string> = 
    (() => {
        const union: Array<string> = [];
        BYTES_SUB_TYPE.forEach(baseType => BYTES_BIT_SIZE.forEach(bitSize => union.push(`${baseType}${bitSize}`)));
        return (union);
    })();