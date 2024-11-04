import type {ArithmeticType} from "./";
import type {ArrayType} from "./";
import type {BaseType} from "./";
import type {StructType} from "./";
import {ARITHMETIC_TYPE} from "./";
import {ARRAY_TYPE} from "./";
import {BASE_TYPE} from "./";

export type AnyType =
    | ArithmeticType
    | ArrayType
    | BaseType
    | StructType;

export const ANY_TYPE = 
    [
        ... ARITHMETIC_TYPE,
        ... ARRAY_TYPE,
        ... BASE_TYPE
    ] as const;