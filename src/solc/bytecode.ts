export type Bytecode = {
    object?: string;
    opcodes?: string;
    sourceMap?: string;
    linkReferences?: {
        [filename: string]: {
            [library: string]: {
                start: number;
                length: number;
            }[];
        };
    };
};

export const Bytecode = ({
    object, 
    opcodes, 
    sourceMap, 
    linkReferences}: Bytecode) => ({
        object,
        opcodes,
        sourceMap,
        linkReferences
    });