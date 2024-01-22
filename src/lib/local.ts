import { TodoFilter, TodoRow } from "../types";

const storageKey = "todo";

export function localList(): TodoRow[] {
  return localLoadData();
}

export function localCreate(data: TodoRow) {
  const list = localLoadData();
  list.push(data);
  localSaveData(list);
}

export function localUpdate(data: TodoRow) {
  const list = localLoadData();
  const ind = list.findIndex((r) => r.id === data.id);
  if (ind > -1) {
    list[ind] = data;
  }
  localSaveData(list);
}

export function localFilter({ fieldName, value }: TodoFilter): TodoRow[] {
  const source = localLoadData();
  let list: TodoRow[];
  switch (fieldName) {
    case "content": {
      const content = value.toLowerCase();
      list = source.filter((r) => r.content.toLowerCase().includes(content));
      break;
    }
    case "date": {
      list = source.filter((r) => r.date === value);
      break;
    }
    case "tag": {
      list = source.filter((r) => r.tags.includes(value));
      break;
    }
    case "status": {
      const status = +value;
      list = source.filter((r) => r.status === status);
      break;
    }
    default: {
      list = source;
      break;
    }
  }
  return list;
}

export function localDelete(id: string) {
  const list = localLoadData().filter((r) => r.id !== id);
  localSaveData(list);
}

export function localLoad(id: string) {
  return localLoadData().find((r) => r.id === id);
}

export function localSaveData(list: TodoRow[]) {
  localStorage.setItem(storageKey, JSON.stringify(list));
}

export function localLoadData(): TodoRow[] {
  const text = localStorage.getItem(storageKey);
  if (text) {
    return JSON.parse(text);
  }
  return [];
}
