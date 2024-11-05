import type {TransactionReceipt} from "ethers";
import type {Unsafe} from "src/util/type";
import type {Transaction} from "src/evm/transaction";
import type {Account} from "./account";
import type {Maybe} from "src/util/type";
import type {ContractMethod} from "ethers";
import {Wallet} from "ethers";
import {JsonRpcProvider} from "ethers";
import {Interface} from "ethers";
import {Contract} from "ethers";
import {some} from "src/util/type";
import {assert} from "src/util/assert";

export type Evm = {
    unlock(_key: string): Account;
};

export function Evm(_url: string): Evm {
    let _provider: JsonRpcProvider;

    /***/ {
        _provider = new JsonRpcProvider(_url);
    }

    /***/ {
        return ({unlock});
    }

    function unlock(_key: string): Account {
        return (() => {
            let _signer: Wallet;
    
            /***/ {
                _signer = new Wallet(_key, _provider);
            }
        
            /***/ {
                return ({address, nonce, nextNonce, send});
            }
        
            async function address(): Promise<string> {
                return (await _signer.getAddress());
            }
        
            async function nonce(): Promise<bigint> {
                return (await nextNonce() - 1n);
            }
        
            async function nextNonce(): Promise<bigint> {
                return (BigInt(await _signer.getNonce()));
            }
        
            async function send<T extends Array<unknown>>(transaction: Transaction<T>): Promise<TransactionReceipt | Unsafe> {
                return (await _send(transaction, _signer));
            }
        })();
    }

    async function _send<T extends Array<unknown>>(transaction: Transaction<T>, signer: Wallet): Promise<TransactionReceipt | Unsafe> {
        const defaultGasPrice: bigint = 20000000000n;
        const defaultGasLimit: bigint = 10000000n;
        const defaultAmount: bigint = 0n;
        const defaultConfirmations: bigint = 1n;
        switch (transaction.type) {
            case "query":
                const contract: Contract = new Contract(transaction.to, [transaction.signature], signer);
                const contractMethod: ContractMethod = contract.getFunction(/** @todo a way to get signature name */);
                return (await contractMethod(transaction.args));

            case "call":
                transaction.gasPrice ??= defaultGasPrice;
                transaction.gasLimit ??= defaultGasLimit;
                transaction.amount ??= defaultAmount;
                transaction.confirmations ??= defaultConfirmations;
                const response: Maybe<TransactionReceipt> = 
                    (await (await signer.sendTransaction({
                        from: await signer.getAddress(),
                        to: transaction.to,
                        nonce: Number(await signer.getNonce()),
                        gasPrice: transaction.gasPrice,
                        gasLimit: transaction.gasLimit,
                        value: transaction.amount,
                        chainId: transaction.chainId,
                        data: new Interface([transaction.signature]).encodeFunctionData(/** @todo a way to get signature name */)
                    })).wait(Number(transaction.confirmations)));
                assert(some(response), "NO_RESPONSE");
                return (response);

            case "deployment":
                return ();

            default: assert(false, "UNSUPPORTED_TRANSACTION");
        }
    }
}