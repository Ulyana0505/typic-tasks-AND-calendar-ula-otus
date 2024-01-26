import { Parallel } from '../src/parallel';

// ---3---
describe('parallel', () => {
    it('5 jobs, Parallet take two', async () => {
        const runner = new Parallel(2)
        expect(
            await runner.jobs(
                () => new Promise((resolve) => setTimeout(resolve, 10, 1)),
                () => new Promise((resolve) => setTimeout(resolve, 50, 2)),
                () => new Promise((resolve) => setTimeout(resolve, 20, 3)),
                () => new Promise((resolve) => setTimeout(resolve, 90, 4)),
                () => new Promise((resolve) => setTimeout(resolve, 30, 5))
            )
        ).toEqual([1, 3, 2, 5, 4])
    })
    it('5 jobs, Parallet take three', async () => {
        const runner = new Parallel(3)
        expect(
            await runner.jobs(
                () => new Promise((resolve) => setTimeout(resolve, 90, 1)),
                () => new Promise((resolve) => setTimeout(resolve, 60, 2)),
                () => new Promise((resolve) => setTimeout(resolve, 20, 3)),
                () => new Promise((resolve) => setTimeout(resolve, 10, 4)),
                () => new Promise((resolve) => setTimeout(resolve, 30, 5))
            )
        ).toEqual([3, 4, 2, 5, 1])
    })
    it('10 jobs, Parallet take two', async () => {
        const runner = new Parallel(2)
        expect(
            await runner.jobs(
                () => new Promise((resolve) => setTimeout(resolve, 90, 1)),
                () => new Promise((resolve) => setTimeout(resolve, 60, 2)),
                () => new Promise((resolve) => setTimeout(resolve, 20, 3)),
                () => new Promise((resolve) => setTimeout(resolve, 10, 4)),
                () => new Promise((resolve) => setTimeout(resolve, 30, 5)),
                () => new Promise((resolve) => setTimeout(resolve, 40, 6)),
                () => new Promise((resolve) => setTimeout(resolve, 80, 7)),
                () => new Promise((resolve) => setTimeout(resolve, 15, 8)),
                () => new Promise((resolve) => setTimeout(resolve, 100, 9)),
                () => new Promise((resolve) => setTimeout(resolve, 40, 10))
            )
        ).toEqual([2, 3, 1, 4, 5, 6, 8, 7, 10, 9])
    })
})