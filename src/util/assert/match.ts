import type {MaybeAsync} from "src/util/type";
import type {UnsafeLike} from "src/util/type";
import type {HandleErrorAction} from "./";
import {Unsafe} from "src/util/type";

export async function match<Code>(e: UnsafeLike, code: Code, handler: HandleErrorAction<void>): Promise<void> {
    if ("unwrap" in (e as any)) e = (e as any).unwrap();
    if (!(e instanceof Error)) return;
    if (e.message !== code) return;
    await handler(Unsafe(e.cause), e.stack);
    return;
}