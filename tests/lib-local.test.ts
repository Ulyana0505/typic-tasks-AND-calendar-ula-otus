import { createApi } from "../src/lib";
import { todoRow } from "../src/constants";
import { localLoadData } from "../src/lib/local";

describe("lib-remote", () => {
  it("createApi", async () => {
    const api = createApi({ type: "local" });

    // проверяем не попадание в if
    await api.updateTodo(todoRow());
    expect(localLoadData()).toEqual([]);
  });
});
