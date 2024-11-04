import type {ExternalPure} from "src/evm/type-system/signature/method";
import type {ExternalPureReturn} from "src/evm/type-system/signature/method";
import type {ExternalView} from "src/evm/type-system/signature/method";
import type {ExternalViewReturn} from "src/evm/type-system/signature/method";

export type Query<T extends Array<unknown>> = {
    type: "query";
    to: string;
    signature:
        | ExternalPure
        | ExternalPureReturn
        | ExternalView
        | ExternalViewReturn;
    args?: T;
};

export const Query = <T extends Array<unknown>>({
    to, 
    signature, 
    args}: Query<T>) => ({
        type: "query", 
        to, 
        signature, 
        args});