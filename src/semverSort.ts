// ---4---
export function spiral(arr: number[][]): number[] {
    if (arr.length === 0) {
        return []
    }

    const result = [] as number[]

    function next(matrix: number[][]) {
        const firstRow = matrix.shift()
        if (!firstRow) return
        for (const el of firstRow) {
            result.push(el)
        }

        for (let y = 0; y < matrix.length; y++) {
            const lastEl = matrix[y].pop()
            if (lastEl) {
                result.push(lastEl)
            }
        }
        const lastRow = matrix.pop()
        if (!lastRow) return
        lastRow.reverse()
        for (const el of lastRow) {
            result.push(el)
        }
        if (matrix.length > 1) {
            for (let y = matrix.length - 1; y > 0; y--) {
                const firstEl = matrix[y].shift()
                if (firstEl) {
                    result.push(firstEl)
                }
            }
        }
        next(matrix)
    }

    next(arr)

    return result
}

// ---5---
// Реализовать функцию, реализующую сортировку с учетом правил semver
export function semverSort(arr: string[]) {
    const biggerArr: string[] = arr.map((el) =>
        el
            .split('.')
            .map((num) => +num + 100)
            .join('.')
    )
    const sortedBiggerArr: string[] = biggerArr.sort()
    const sortedArr: string[] = sortedBiggerArr.map((el) =>
        el
            .split('.')
            .map((num) => +num - 100)
            .join('.')
    )
    return sortedArr
}
