export type ArithmeticSubType = typeof ARITHMETIC_SUB_TYPE[number];

export const ARITHMETIC_SUB_TYPE = 
    [
        "uint",
        "int"
    ] as const;