import { TodoFilter, TodoRow } from '../types'

export type StorageType = ApiLocal | ApiRemote
export type RemotePoint = { path: string; method: string }
export type ApiOptions =
    | 'list'
    | 'create'
    | 'update'
    | 'load'
    | 'delete'
    | 'filter'
export type ApiLocal = { type: 'local' }
export type ApiRemote = {
    type: 'remote'
    params: Record<ApiOptions, RemotePoint>
}

export interface TodoCalendar {
    createTodo: (todo: TodoRow) => Promise<void>
    loadTodo: (id: string) => Promise<TodoRow | undefined>
    listTodos: () => Promise<TodoRow[]>
    updateTodo: (data: TodoRow) => Promise<void>
    deleteTodo: (id: string) => Promise<void>
    filterTodo: (data: TodoFilter) => Promise<TodoRow[]>
}
