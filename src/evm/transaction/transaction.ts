import type {Call} from "./";
import type {Deployment} from "./";
import type {Query} from "./";
import type {RawDeployment} from "./";
import type {SolDeployment} from "./";

export type Transaction<T extends Array<unknown>> = 
    | Call<T>
    | Deployment<T>
    | Query<T>
    | RawDeployment
    | SolDeployment<T>;