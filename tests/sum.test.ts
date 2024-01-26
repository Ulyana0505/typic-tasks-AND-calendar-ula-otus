import { sum } from '../src/sum'

// ---2---
describe('test of sum', () => {
    it('results of sum()', () => {
        expect(+sum()).toEqual(0)
    })
    it('results if const s = sum()', () => {
        const s0 = sum()
        expect(+s0(1)).toEqual(1)
        const s1 = sum()
        expect(+s1(1)(2)).toEqual(3)
        const s2 = sum()
        expect(+s2(3)(4)(5)).toEqual(12)
    })
    it('results if const s = sum(3)', () => {
        const s3 = sum(3)
        expect(+s3(5)).toEqual(8)
        const s4 = sum(3)
        expect(+s4(6)).toEqual(9)
    })
    it('results if const s = sum(8)', () => {
        const s5 = sum(8)
        expect(+s5(5)).toEqual(13)
        const s6 = sum(8)
        expect(+s6(6)(1)(6)(5)).toEqual(26)
    })
})
