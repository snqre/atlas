export type Unsafe = {
    unwrap(): unknown;
};

export function Unsafe(_item: unknown): Unsafe {

    /***/ {
        return {unwrap};
    }

    function unwrap(): unknown {
        return _item;
    }
}