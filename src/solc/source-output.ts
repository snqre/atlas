export type SourceOutput = {
    id: number;
    ast: object;
    legacyAST?: object;
};

export const SourceOutput = ({id, ast, legacyAST}: SourceOutput) => ({id, ast, legacyAST});