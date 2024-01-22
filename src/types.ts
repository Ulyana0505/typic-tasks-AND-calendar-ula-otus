export type TodoStatus = number;

export interface TodoRow {
  id: string;
  content: string;
  date: string;
  tags: string[];
  status: TodoStatus;
}

export interface TodoFilter {
  fieldName: "content" | "date" | "tag" | "status" | "";
  value: string;
}

export interface TodoTag {
  id: string;
  label: string;
}
