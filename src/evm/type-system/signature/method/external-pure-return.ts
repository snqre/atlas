import type {Selector} from "src/evm/type-system/signature/selector";

export type ExternalPureReturn = `function ${Selector} external pure returns ${string}`;