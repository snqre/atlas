import type {TransactionReceipt} from "ethers";
import type {Unsafe} from "src/util/type";
import type {Transaction} from "src/evm/transaction";
import type {Account} from "./account";
import {Wallet} from "ethers";
import {JsonRpcProvider} from "ethers";
import {Interface} from "ethers";

export async function Evm(_url: string) {
    let _provider: JsonRpcProvider;
    let _account: Wallet;

    /***/ {
        _provider = new JsonRpcProvider(_url);
    }

    /***/ {
        return ({});
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
                const defaultGasPrice: bigint = 20000000000n;
                const defaultGasLimit: bigint = 10000000n;
                const defaultAmount: bigint = 0n;
                const defaultConfirmations: bigint = 1n;
                switch (transaction.type) {
                    case "call":
                        transaction.gasPrice ??= defaultGasPrice;
                        transaction.gasLimit ??= defaultGasLimit;
                        transaction.amount ??= defaultAmount;
                        transaction.confirmations ??= defaultConfirmations;
                        return (await (await _signer.sendTransaction({
                            from: await address(),
                            to: transaction.to,
                            nonce: Number(await nextNonce()),
                            gasPrice: transaction.gasPrice,
                            gasLimit: transaction.gasLimit,
                            value: transaction.amount,
                            chainId: transaction.chainId,
                            data: new Interface([transaction.signature])
                        })).wait(Number(transaction.confirmations)));
                }
            }
        })();
    }
}