import type {ArithmeticBitSize} from "./";
import type {ArithmeticSubType} from "./";
import {ARITHMETIC_BIT_SIZE} from "./";
import {ARITHMETIC_SUB_TYPE} from "./";

export type ArithmeticType = `${ArithmeticSubType}${ArithmeticBitSize}`;

export const ARITHMETIC_TYPE: ReadonlyArray<string> = 
    (() => {
        const union: Array<string> = [];
        ARITHMETIC_SUB_TYPE.forEach(subType => ARITHMETIC_BIT_SIZE.forEach(bitSize => union.push(`${subType}${bitSize}`)));
        ARITHMETIC_SUB_TYPE.forEach(subType => union.push(subType));
        return (union);
    })();