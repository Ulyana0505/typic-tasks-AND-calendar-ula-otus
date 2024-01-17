// ---1---
// Написать функцию для каррирования (https://ru.wikipedia.org/wiki/%D0%9A%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5)
// Пример использования функции
// const func = (a, b, c, d, e) => a + b + c + d + e;
// const hof = yourFunction(func);
// console.log(hof(1, 2, 3, 4, 5)); // 15
// console.log(hof(2, 3, 4)(5, 6)); // 20
// console.log(hof(3, 4)(5, 6)(7)); // 25
// console.log(hof(4, 5)(6)(7, 8)); // 30
// console.log(hof(5)(6)(7)(8)(9)); // 35
export function func(a: number, b: number, c?: number, d?: number, e?: number) {
    let C = c || 0;
    let D = d || 0;
    let E = e || 0;
    return a + b + C + D + E;
    // if(c) {
    //     return a + b + c;
    // } else if(c && d) {
    //     return a + b + c + d;
    // } else if(c && d && e) {
    //     return a + b + c + d + e;
    // } else {
    //     return a + b;
    // }
}
export function curry(f, a?, b?, c?, d?, e?) {
    // return function(a: number) {
    //     return function(b: number) {
    //         return f(a, b);
    //     }
    // }

    return function(a: number) {
        return function(b: number) {
            return function(c: number) {
                return function(d: number){
                    return function(e: number){
                        return f(a, b, c, d, e);
                    }
                }
            }
        }
    }

    // if(c) {
    //     return a + b + c;
    // } else if(c && d) {
    //     return a + b + c + d;
    // } else if(c && d && e) {
    //     return a + b + c + d + e;
    // } else {
    //     return a + b;
    // }
}
export const hof = curry(func);




// ---2---
// Написать функцию сумматор. При вызове функции с аргументами она суммирует переданные значения
export const sum = function (x?: number) {
    let acc = x || 0;

    function summarise(y: number) {
        acc += y;
        return summarise;
    }

    summarise.toString = function() {
        return acc;
    }

    return summarise;
}


// ---3---
// Реализовать функцию параллельной потоковой обработки данных. В конструктор передается число парралельных "потоков", 
// которое указывает сколько данных обрабатывается в конкретный момент времени
type Job<T> = () => Promise<T>

export class Parallel {
    constructor(private limit: number) {
    }

    async jobs<T>(...jobList: Job<T>[]) {

        const results = [] as T[];

        const started = new Map<number, Promise<void>>();
        let position = 0;
        while (position < jobList.length || started.size) {
            if (started.size < this.limit && position < jobList.length) {
                const current = position;
                started.set(current, jobList[current]().then(result => {
                    results.push(result);
                    started.delete(current);
                }));
                position += 1;
            }
            await timer();
        }

        return results
    }
}

function timer() {
    return new Promise(r => setTimeout(r, 0))
}

// ---4---
// Реализовать фукнцию, возвращающую развернутую по спирали матрицу (любой размерности)
// spiral([
// [0, 1, 2, 3, 4],
// [5, 6, 7, 8, 9],
// [10, 11, 12, 13, 14],
// [15, 16, 17, 18, 19]
// ]); // [0, 1, 2, 3, 4, 9, 14, 19, 18, 17, 16, 15, 10, 5, 6, 7, 8, 13, 12, 11]


// моя провальная попыточка
// export function spiral(arr: number[][]) {
//     const reverse = (arr: number[][]) => arr.map((line) => line.reverse());
//     const rearrange = (arr: number[][]) => {
//         const rows = arr.length;
//         const cols = arr[0].length;
//         const result: number [][] = [];
//         for(let i = 0; i < rows; i++) {
//             result[i] = [];
//             for(let j = 0; j < cols; j++){
//                 result[i][j] = arr[j][i];
//             }
//         }
//         return result;
//     }

//     const sliced = arr.slice(1);
//     const reversed = reverse(sliced);
//     const rearranged = rearrange(reversed);
//     const spiraled = spiral(rearranged);
//     return spiraled;
// };

// взятый по той ссылке код, только поставила создание констант transpose и reverse также внутрь функции
//все работает и ПОЧТИ все понятно. Плыву только в transpose, особенно в цикле for 
export function spiral(arr: number[][]): number[] {
    const transpose = (arr: number[][]) => {
        const rows = arr.length;
        const cols = arr[0] !== undefined ? arr[0].length : 0;
        const result: number[][] = [];
        for (let i = 0; i < cols; ++i) {
          result[i] = [];
          for (let j = 0; j < rows; ++j) {
            result[i][j] = arr[j][i];
          }
        }
        return result;
    };

    const reverse = (arr: number[][]) => arr.map((row) => row.reverse());

    if (arr.length === 0) {
      return [];
    }
  
    const sliced = arr.slice(1);
    const reversed = reverse(sliced);
    const transposed = transpose(reversed);
    const spiraled = spiral(transposed);
    return arr[0].concat(spiraled);
}

// ---5---
// Реализовать функцию, реализующую сортировку с учетом правил semver
export function semverSort(arr: string[]) {
    const biggerArr: string[] = arr.map((el) =>
        el.split(".").map((num) => +num + 100).join(".")
    );
    const sortedBiggerArr: string[] = biggerArr.sort();
    const sortedArr: string[] = sortedBiggerArr.map((el) =>
        el.split(".").map((num) => +num - 100).join(".")
    );
    return sortedArr;
};
