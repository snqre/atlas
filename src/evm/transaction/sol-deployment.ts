export type SolDeployment<T extends Array<unknown>> = {
    type: "sol-deployment",
    sourcecode: string;
    args?: T;
    gasPrice?: bigint;
    gasLimit?: bigint;
    amount?: bigint;
    chainId?: bigint;
    confirmations?: bigint;
};

export const SolDeployment = <T extends Array<unknown>>({
    sourcecode,
    args,
    gasPrice,
    gasLimit,
    amount,
    chainId,
    confirmations}: SolDeployment<T>) => ({
        type: "sol-deployment",
        sourcecode,
        args,
        gasPrice,
        gasLimit,
        amount,
        chainId,
        confirmations
    });