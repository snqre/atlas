import type {Type} from "./type";
import * as DataType from "../index";

export function validate(item: string | DataType.Any.Type[] | Array<unknown>): item is Type {
    if (typeof item === "string") {
        if (!item.startsWith("[")) return false;
        if (!item.endsWith("]")) return false;
        item = item.slice(1, item.length - 1);
        const shards: Array<string> = item.split(",");
        item =
            shards
                .map(_process)
                .join(",");
        const parsed: Array<unknown> = JSON.parse(`[${item}]`);
        return validate(parsed);
    }
    item.forEach(type => {
        if (validate(type))
        console.log(type);
    });
}

function _process(item: string): string {
    const isStruct: boolean = item.startsWith("[") && item.endsWith("]");
    if (!isStruct) return _wrapInQuote(item.trim());
    const innerItems: Array<string> = 
        item
            .slice(1, -1)
            .split(",");
    const wrappedInnerItems: Array<string> = innerItems.map(_process);
    return (`[${wrappedInnerItems.join(",")}]`);
}

function _wrapInQuote(item: string): string {
    return (`"${item}"`);
}

validate("[uint256,[string]]");