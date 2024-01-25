import { TodoFilter, TodoRow } from '../types'
import {
    localCreate,
    localDelete,
    localFilter,
    localList,
    localLoad,
    localUpdate,
} from './local'
import {
    remoteCreate,
    remoteDelete,
    remoteFilter,
    remoteList,
    remoteLoad,
    remoteUpdate,
} from './remote'
import { StorageType, TodoCalendar } from './types'

export function createApi(apiType: StorageType): TodoCalendar {
    if (apiType.type === 'local') {
        return {
            async listTodos() {
                return localList()
            },
            async createTodo(data: TodoRow) {
                return localCreate(data)
            },
            async updateTodo(data: TodoRow) {
                return localUpdate(data)
            },
            async loadTodo(id: string) {
                return localLoad(id)
            },
            async deleteTodo(id: string) {
                return localDelete(id)
            },
            async filterTodo(data: TodoFilter) {
                return localFilter(data)
            },
        }
    } else {
        const remoteParams = apiType.params
        return {
            async listTodos() {
                return remoteList(remoteParams.list)
            },
            async createTodo(data: TodoRow) {
                return remoteCreate(remoteParams.create, data)
            },
            async updateTodo(data: TodoRow) {
                return remoteUpdate(remoteParams.update, data)
            },
            async loadTodo(id: string) {
                return remoteLoad(remoteParams.load, id)
            },
            async deleteTodo(id: string) {
                return remoteDelete(remoteParams.delete, id)
            },
            async filterTodo(data: TodoFilter) {
                return remoteFilter(remoteParams.filter, data)
            },
        }
    }
}
