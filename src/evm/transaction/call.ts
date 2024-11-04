import type {External} from "src/evm/type-system/signature/method";

export type Call<T extends Array<unknown>> = {
    type: "call";
    to: string;
    signature: External;
    args?: T;
    gasPrice?: bigint;
    gasLimit?: bigint;
    amount?: bigint;
    chainId?: bigint;
    confirmations?: bigint;
};

export const Call = <T extends Array<unknown>>({
    to,
    signature,
    args,
    gasPrice,
    gasLimit,
    amount,
    chainId,
    confirmations}: Call<T>) => ({
        type: "call",
        to,
        signature,
        args,
        gasPrice,
        gasLimit,
        amount,
        chainId,
        confirmations
    });