import { curry } from '../src/curry'

// ---1---
describe('test of curry', () => {
    it('expect hof to return right number if 5 numbers', () => {
        const func = (a: number, b: number, c: number, d: number, e: number) =>
            a + b + c + d + e
        const hof = curry(func)
        expect(hof(1, 2, 3, 4, 5)).toEqual(15)
        expect(hof(2, 3, 4)(5, 6)).toEqual(20)
        expect(hof(3, 4)(5, 6)(7)).toEqual(25)
        expect(hof(4, 5)(6)(7, 8)).toEqual(30)
        expect(hof(5)(6)(7)(8)(9)).toEqual(35)
    })
    it('expect hof to return right number if 10 numbers', () => {
        const func = (
            a: number,
            b: number,
            c: number,
            d: number,
            e: number,
            f: number,
            g: number,
            h: number,
            i: number,
            j: number
        ) => a + b + c + d + e + f + g + h + i + j
        const hof = curry(func)
        expect(hof(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)).toEqual(55)
        expect(hof(2, 3, 4)(5, 6)(7, 8)(8, 9, 9)).toEqual(61)
        expect(hof(3, 4)(5, 6)(7)(10)(11)(8, 9, 10)).toEqual(73)
        expect(hof(4, 5)(6)(7, 8)(1)(1)(3, 4, 5)).toEqual(44)
        expect(hof(5)(6)(7)(8)(9)(18)(7)(0)(9)(7)).toEqual(76)
    })
    it('expect hof to return right number if 3 numbers', () => {
        const func = (a: number, b: number, c: number) => a + b + c
        const hof = curry(func)
        expect(hof(1, 2, 3)).toEqual(6)
        expect(hof(2, 3)(5)).toEqual(10)
        expect(hof(5)(6)(7)).toEqual(18)
    })
})
