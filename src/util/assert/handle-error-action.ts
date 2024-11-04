import type {MaybeAsync} from "src/util/type";
import type {Unsafe} from "src/util/type";

export type HandleErrorAction<T> = (data: Unsafe, stack?: string) => MaybeAsync<T>;