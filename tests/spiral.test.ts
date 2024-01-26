import { spiral } from '../src/spiral';

// ---4---
describe('test of spiral', () => {
    it('should return right spiraled arr, 4 arr in arr, arr length 5', () => {
        expect(
            spiral([
                [0, 1, 2, 3, 4],
                [5, 6, 7, 8, 9],
                [10, 11, 12, 13, 14],
                [15, 16, 17, 18, 19],
            ])
        ).toEqual([
            0, 1, 2, 3, 4, 9, 14, 19, 18, 17, 16, 15, 10, 5, 6, 7, 8, 13, 12,
            11,
        ])
    });
    it('should return right spiraled arr, 2 arr in arr, arr length 7', () => {
        expect(
            spiral([
                [0, 1, 2, 3, 4, 5, 6],
                [5, 6, 7, 8, 9, 0, 8],
            ])
        ).toEqual([
            0, 1, 2, 3, 4, 5, 6, 8, 0, 9, 8, 7, 6, 5
        ])
    });
    it('should return right spiraled arr, 3 arr in arr, arr length different', () => {
        expect(
            spiral([
                [0, 1, 2, 3, 4, 5, 6],
                [5, 6, 7, 8],
                [5, 6, 7, 8, 9],
            ])
        ).toEqual([
            0, 1, 2, 3, 4, 5, 6, 8, 9, 8, 7, 6, 5, 5, 6, 7
        ])
    });
    it('should return right spiraled arr, 6 arr in arr, arr length 4', () => {
        expect(
            spiral([
                [0, 1, 2, 3],
                [5, 6, 7, 8],
                [10, 11, 12, 13],
                [15, 16, 17, 18],
                [2, 3, 6, 7],
                [1, 2, 3, 1],
            ])
        ).toEqual([
            0, 1, 2, 3, 8, 13, 18, 7, 1, 3, 2, 1, 2, 15, 10, 5, 6, 7, 12, 17, 6, 3, 16, 11,
        ])
    });
})