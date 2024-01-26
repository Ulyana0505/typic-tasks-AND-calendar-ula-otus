// ---1---
// Написать функцию для каррирования
export function curry<T>(func: (...args: T[]) => T) {
    return function curried(...args: T[]) {
        if (args.length >= func.length) {
            // eslint-disable-next-line prefer-spread
            const r = func.apply(null, args)
            // eslint-disable-next-line  @typescript-eslint/no-explicit-any
            return r as any
        } else {
            return function (...args2: T[]) {
                // eslint-disable-next-line prefer-spread
                return curried.apply(null, args.concat(args2))
            }
        }
    }
}
