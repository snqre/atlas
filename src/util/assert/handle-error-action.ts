import type {MaybeAsync} from "src/util/type";
import type {UnsafeLike} from "src/util/type";

export type HandleErrorAction<T> = (data: UnsafeLike, stack?: string) => MaybeAsync<T>;