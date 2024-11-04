import type {Maybe} from "./";

export type Some<T> = T;

export function some<T>(item: Maybe<T>): item is Some<T> {
    if (item === undefined) return false;
    if (item === null) return false;
    return true;
}