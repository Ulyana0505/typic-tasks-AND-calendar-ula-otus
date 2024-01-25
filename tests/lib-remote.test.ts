import { createApi } from '../src/lib'
import { remoteData } from '../src/lib/remote'
import { mockFetch, mockFetchFail } from './utils'
import { todoRow } from '../src/constants'
import { TodoFilter } from '../src/types'

describe('lib-remote', () => {
    const point = { method: '', path: '' }
    it('remoteData', async () => {
        mockFetch([1])
        expect(await remoteData(point, null, [])).toEqual([1])
        mockFetchFail()
        expect(await remoteData(point, null, [])).toEqual([])
    })
    it('createApi', async () => {
        const point = { method: '', path: '' }
        const api = createApi({
            type: 'remote',
            params: {
                create: point,
                filter: point,
                delete: point,
                load: point,
                update: point,
                list: point,
            },
        })
        const data = 22
        mockFetch(data)
        expect(await api.createTodo(todoRow())).toEqual(data)
        expect(await api.loadTodo('id')).toEqual(data)
        expect(await api.deleteTodo('id')).toEqual(data)
        expect(await api.listTodos()).toEqual(data)
        expect(await api.updateTodo(todoRow())).toEqual(data)
        expect(await api.filterTodo({} as TodoFilter)).toEqual(data)
    })
})
