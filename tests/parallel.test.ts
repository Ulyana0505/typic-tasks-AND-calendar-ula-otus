import { Parallel } from '../src/parallel';

// ---3---
describe('parallel', () => {
    it('jobs, Parallet take two', async () => {
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
    it('jobs, Parallet take three', async () => {
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
})