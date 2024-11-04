import type {Selector} from "src/evm/type-system/signature";
import {Bytecode} from "./";

export type EvmOutput = {
    assembly?: string;
    legacyAssembly?: object;
    bytecode?: Bytecode;
    deployedBytecode?: Bytecode;
    methodIdentifiers?: {[selector: Selector]: string;};
    gasEstimates?: {
        creation?: {
            codeDepositCost?: string;
            executionCost?: string;
            totalCost?: string;
        };
        external?: {[selector: Selector]: string};
        internal?: {[selector: Selector]: string};
    };
};

export const EvmOutput = ({
    assembly,
    legacyAssembly,
    bytecode,
    deployedBytecode,
    methodIdentifiers,
    gasEstimates}: EvmOutput) => ({
        assembly,
        legacyAssembly,
        bytecode,
        deployedBytecode,
        methodIdentifiers,
        gasEstimates
    });