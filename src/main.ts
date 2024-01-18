// ---1---
// Написать функцию для каррирования
export function curry<T>(func: (...args: T[]) => T) {
  return function curried(...args: T[]) {
    if (args.length >= func.length) {
      // eslint-disable-next-line prefer-spread
      const r = func.apply(null, args);
      // eslint-disable-next-line  @typescript-eslint/no-explicit-any
      return r as any;
    } else {
      return function (...args2: T[]) {
        // eslint-disable-next-line prefer-spread
        return curried.apply(null, args.concat(args2));
      };
    }
  };
}

// ---2---
// Написать функцию сумматор. При вызове функции с аргументами она суммирует переданные значения
export const sum = function (x?: number) {
  let acc = x || 0;

  function summarise(y: number) {
    acc += y;
    return summarise;
  }

  summarise.toString = function () {
    return acc;
  };

  return summarise;
};

// ---3---
// Реализовать функцию параллельной потоковой обработки данных. В конструктор передается число парралельных "потоков",
// которое указывает сколько данных обрабатывается в конкретный момент времени
type Job<T> = () => Promise<T>;

export class Parallel {
  constructor(private limit: number) {}

  async jobs<T>(...jobList: Job<T>[]) {
    const results = [] as T[];

    const started = new Map<number, Promise<void>>();
    let position = 0;
    while (position < jobList.length || started.size) {
      if (started.size < this.limit && position < jobList.length) {
        const current = position;
        started.set(
          current,
          jobList[current]().then((result) => {
            results.push(result);
            started.delete(current);
          }),
        );
        position += 1;
      }
      await timer();
    }

    return results;
  }
}

function timer() {
  return new Promise((r) => setTimeout(r, 0));
}

// ---4---
export function spiral(arr: number[][]): number[] {
  if (arr.length === 0) {
    return [];
  }

  const result = [] as number[];

  function next(matrix: number[][]) {
    const firstRow = matrix.shift();
    if (!firstRow) return;
    for (const el of firstRow) {
      result.push(el);
    }

    for (let y = 0; y < matrix.length; y++) {
      const lastEl = matrix[y].pop();
      if (lastEl) {
        result.push(lastEl);
      }
    }
    const lastRow = matrix.pop();
    if (!lastRow) return;
    lastRow.reverse();
    for (const el of lastRow) {
      result.push(el);
    }
    if (matrix.length > 1) {
      for (let y = matrix.length - 1; y > 0; y--) {
        const firstEl = matrix[y].shift();
        if (firstEl) {
          result.push(firstEl);
        }
      }
    }
    next(matrix);
  }

  next(arr);

  return result;
}

// ---5---
// Реализовать функцию, реализующую сортировку с учетом правил semver
export function semverSort(arr: string[]) {
  const biggerArr: string[] = arr.map((el) =>
    el
      .split(".")
      .map((num) => +num + 100)
      .join("."),
  );
  const sortedBiggerArr: string[] = biggerArr.sort();
  const sortedArr: string[] = sortedBiggerArr.map((el) =>
    el
      .split(".")
      .map((num) => +num - 100)
      .join("."),
  );
  return sortedArr;
}
