import { curry, sum, Parallel, spiral, semverSort } from "../src/main";

// ---1---
describe("test of curry", () => {
  it("expect hof to return right number", () => {
    const func = (a: number, b: number, c: number, d: number, e: number) =>
      a + b + c + d + e;
    const hof = curry(func);
    expect(hof(1, 2, 3, 4, 5)).toEqual(15);
    expect(hof(2, 3, 4)(5, 6)).toEqual(20);
    expect(hof(3, 4)(5, 6)(7)).toEqual(25);
    expect(hof(4, 5)(6)(7, 8)).toEqual(30);
    expect(hof(5)(6)(7)(8)(9)).toEqual(35);
  });
});

// ---2---
describe("test of sum", () => {
  it("results of sum()", () => {
    expect(+sum()).toEqual(0);
  });
  it("results if const s = sum()", () => {
    const s0 = sum();
    expect(+s0(1)).toEqual(1);
    const s1 = sum();
    expect(+s1(1)(2)).toEqual(3);
    const s2 = sum();
    expect(+s2(3)(4)(5)).toEqual(12);
  });
  it("results if const s = sum(3)", () => {
    const s3 = sum(3);
    expect(+s3(5)).toEqual(8);
    const s4 = sum(3);
    expect(+s4(6)).toEqual(9);
  });
});

// ---3---
describe("parallel", () => {
  it("jobs", async () => {
    const runner = new Parallel(2);
    expect(
      await runner.jobs(
        () => new Promise((resolve) => setTimeout(resolve, 10, 1)),
        () => new Promise((resolve) => setTimeout(resolve, 50, 2)),
        () => new Promise((resolve) => setTimeout(resolve, 20, 3)),
        () => new Promise((resolve) => setTimeout(resolve, 90, 4)),
        () => new Promise((resolve) => setTimeout(resolve, 30, 5)),
      ),
    ).toEqual([1, 3, 2, 5, 4]);
  });
});

// ---4---
describe("test of spiral", () => {
  it("should return right spiraled arr", () => {
    expect(
      spiral([
        [0, 1, 2, 3, 4],
        [5, 6, 7, 8, 9],
        [10, 11, 12, 13, 14],
        [15, 16, 17, 18, 19],
      ]),
    ).toEqual([
      0, 1, 2, 3, 4, 9, 14, 19, 18, 17, 16, 15, 10, 5, 6, 7, 8, 13, 12, 11,
    ]);
  });
});

// ---5---
describe("test of semverSort", () => {
  it("should return right sorted arr", () => {
    expect(
      semverSort([
        "1.0.5",
        "2.5.0",
        "0.12.0",
        "1",
        "1.23.45",
        "1.4.50",
        "1.2.3.4.5.6.7",
      ]),
    ).toEqual([
      "0.12.0",
      "1",
      "1.0.5",
      "1.2.3.4.5.6.7",
      "1.4.50",
      "1.23.45",
      "2.5.0",
    ]);
  });
});
