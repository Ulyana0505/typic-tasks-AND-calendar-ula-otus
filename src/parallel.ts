// ---3---
// Реализовать функцию параллельной потоковой обработки данных. В конструктор передается число парралельных "потоков",
// которое указывает сколько данных обрабатывается в конкретный момент времени
type Job<T> = () => Promise<T>

export class Parallel {
    constructor(private limit: number) {}

    async jobs<T>(...jobList: Job<T>[]) {
        const results = [] as T[]

        const started = new Map<number, Promise<void>>()
        let position = 0
        while (position < jobList.length || started.size) {
            if (started.size < this.limit && position < jobList.length) {
                const current = position
                started.set(
                    current,
                    jobList[current]().then((result) => {
                        results.push(result)
                        started.delete(current)
                    })
                )
                position += 1
            }
            await timer()
        }

        return results
    }
}

function timer() {
    return new Promise((r) => setTimeout(r, 0))
}
