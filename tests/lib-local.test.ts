import { createApi } from "../src/lib";
import { todoRow, todoStatusOptions } from "../src/constants";
import { localLoadData } from "../src/lib/local";

describe("lib-local", () => {
  it("createApi", async () => {
    const api = createApi({ type: "local" });

    // проверяем непопадание в if
    await api.updateTodo(todoRow());
    expect(localLoadData()).toEqual([]);

    const id = "id";
    const date = todoRow().date;

    expect(await api.listTodos()).toEqual([]);
    expect(await api.createTodo(todoRow())).toEqual(undefined);
    expect(await api.updateTodo(todoRow())).toEqual(undefined);
    expect(await api.loadTodo(id)).toEqual(undefined);

    await api.createTodo({...todoRow(), id});

    expect((await api.loadTodo(id))?.date).toEqual(date);
    expect(await api.deleteTodo(id)).toEqual(undefined);
    expect(await api.loadTodo(id)).toEqual(undefined);
    expect((await api.filterTodo({ fieldName: "content", value: "aaa" })).length).toEqual(0);

    await api.createTodo({...todoRow(), content: "caaat"});
    
    expect((await api.filterTodo({ fieldName: "content", value: "aaa" })).length).toEqual(1);
    expect((await api.filterTodo({ fieldName: "date", value: date })).length).toEqual(2);
    expect((await api.filterTodo({ fieldName: "tag", value: "" })).length).toEqual(0);
    expect((await api.filterTodo({ fieldName: "status", value: String(todoStatusOptions.active) })).length).toEqual(0);
    expect((await api.filterTodo({ fieldName: "", value: "" })).length).toEqual(2);
  });
});
