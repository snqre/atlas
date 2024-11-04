export type SourceLocation = {
    file: string;
    start: number;
    end: number;
};

export const SourceLocation = ({file, start, end}: SourceLocation) => ({file, start, end});