export type Configuration = {
    language: "Solidity" | "Vyper" | "lll" | "assembly";
    sources: {
        [contract: string]: {
            keccak256?: string;
            urls?: string[];
            content?: string;
        };
    };
    settings?: {
        remappings?: string[];
        optimizer?: {
            enabled: boolean;
            runs: number;
        };
        evmVersion?: "homestead" | "tangerineWhistle" | "spuriousDragon" | "byzantium" | "constantinople" | "petersburg" | "istanbul" | "berlin" | "london";
        metadata?: {
            useLiteralContent: boolean;
        };
        libraries?: {
            [filename: string]: {
                [library: string]: string;
            }
        },
        outputSelection?: {
            "*": {
                "*": (
                    | "abi"
                    | "ast"
                    | "legacyAST"
                    | "devdoc"
                    | "userdoc"
                    | "metadata"
                    | "ir"
                    | "evm.assembly"
                    | "evm.legacyAssembly"
                    | "evm.bytecode.object"
                    | "evm.bytecode.opcodes"
                    | "evm.bytecode.sourceMap"
                    | "evm.bytecode.linkReferences"
                    | "evm.methodIdentifiers"
                    | "evm.gasEstimates"
                    | "ewasm.wast"
                    | "ewasm.wasm"
                )[];
            }
        }
    }
};

export const Configuration = ({language, sources, settings}: Configuration) => ({language, sources, settings});