import type {ArithmeticType} from "./";
import {ARITHMETIC_TYPE} from "./";

export function isArithmeticType(string: string): string is ArithmeticType {
    return ARITHMETIC_TYPE.includes(string);
}