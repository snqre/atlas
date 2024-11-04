import type {Method} from "./signature/method";
import type {Error} from "./signature";
import type {Event} from "./signature";

export type AbstractBinaryInterface = 
    (
        | Method
        | Error
        | Event
    )[];