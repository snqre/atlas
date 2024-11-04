import type {Selector} from "src/evm/type-system/signature/selector";

export type ExternalViewReturn = `function ${Selector} external view returns (${string})`;