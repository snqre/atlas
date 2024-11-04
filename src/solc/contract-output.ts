import {EvmOutput} from "./";

export type ContractOutput = {
    abi?: object[];
    metadata?: string;
    userdoc?: object;
    devdoc?: object;
    ir?: string;
    evm?: EvmOutput;
    ewasm?: {
        wast?: string;
        wasm?: string;
    };
};

export const ContractOutput = ({
    abi,
    metadata,
    userdoc,
    devdoc,
    ir,
    evm,
    ewasm}: ContractOutput) => ({
        abi,
        metadata,
        userdoc,
        devdoc,
        ir,
        evm,
        ewasm
    });