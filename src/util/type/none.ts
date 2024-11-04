import type {Maybe} from "./";
import {some} from "./";

export type None = null | undefined;

export function none<T>(item: Maybe<T>): item is None {
    return !some(item);
}