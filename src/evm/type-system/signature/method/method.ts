import type {ExternalPureReturn} from "./";
import type {ExternalPure} from "./";
import type {ExternalViewReturn} from "./";
import type {ExternalView} from "./";
import type {External} from "./";

export type Method = 
    | ExternalPureReturn
    | ExternalPure
    | ExternalViewReturn
    | ExternalView
    | External;