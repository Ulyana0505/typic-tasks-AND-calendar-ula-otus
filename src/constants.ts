import { TodoFilter, TodoRow, TodoTag } from './types'
import { createApi } from './lib'

export const todoStatusList = ['ожидание', 'активно', 'выполнено']

export const todoStatusOptions = {
    wait: 0,
    active: 1,
    complete: 2,
}

export const idContent = 'content'
export const idTodoContent = 'todo-content'
export const idTodoDate = 'todo-date'

export const todoAction_Edit = 'edit'
export const todoAction_Remove = 'remove'

export const elements = {
    state_all: document.createElement('button'),
    state_complete: document.createElement('button'),
    state_active: document.createElement('button'),
    tool_date: document.createElement('input'),
    tool_content: document.createElement('input'),
}

export const todoTags: TodoTag[] = [
    { id: 'case', label: 'дело' },
    { id: 'event', label: 'событие' },
    { id: 'walk', label: 'прогулка' },
]

export function todoRow(): TodoRow {
    return {
        id: '',
        tags: [],
        status: todoStatusOptions.wait,
        date: new Date().toJSON().slice(0, 10),
        content: '',
    }
}

export const state = {
    edit: todoRow(),
    filtered: null as null | TodoFilter,
}

export const api = createApi({ type: 'local' })
