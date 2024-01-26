// ---2---
// Написать функцию сумматор. При вызове функции с аргументами она суммирует переданные значения
export const sum = function (x?: number) {
    let acc = x || 0

    function summarise(y: number) {
        acc += y
        return summarise
    }

    summarise.toString = function () {
        return acc
    }

    return summarise
}
