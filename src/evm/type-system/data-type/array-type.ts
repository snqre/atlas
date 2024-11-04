import type {ArithmeticType} from "./";
import type {BytesType} from "./";
import type {BaseType} from "./";
import {ARITHMETIC_TYPE} from "./";
import {BYTES_TYPE} from "./";
import {BASE_TYPE} from "./";

export type ArrayType = 
    | `${ArithmeticType | BytesType | BaseType}[]`
    | `${ArithmeticType | BytesType | BaseType}[][]`;

export const ARRAY_TYPE: ReadonlyArray<string> = 
    (() => {
        const union: Array<string> = [];
        const compounds: ReadonlyArray<string> =
            [
                ... ARITHMETIC_TYPE,
                ... BYTES_TYPE,
                ... BASE_TYPE
            ];
        compounds.forEach(type => union.push(`${type}[]`));
        compounds.forEach(type => union.push(`${type}[][]`));
        return (union);
    })();