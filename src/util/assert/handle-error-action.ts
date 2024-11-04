import type {MaybeAsync} from "src/util/type";

export type HandleErrorAction<T> = (data: unknown, stack?: string) => MaybeAsync<T>;