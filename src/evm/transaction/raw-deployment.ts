import type {Bytecode} from "src/evm/type-system/bytecode";

export type RawDeployment = {
    type: "raw-deployment";
    bytecode: Bytecode;
    gasPrice?: bigint;
    gasLimit?: bigint;
    amount?: bigint;
    chainId?: bigint;
    confirmations?: bigint;
};

export const RawDeployment = ({
    bytecode,
    gasPrice,
    gasLimit,
    amount,
    chainId,
    confirmations}: RawDeployment) => ({
        type: "raw-deployment",
        bytecode,
        gasPrice,
        gasLimit,
        amount,
        chainId,
        confirmations
    });