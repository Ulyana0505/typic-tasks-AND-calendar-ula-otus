import { TodoFilter, TodoRow } from '../types'
import { RemotePoint } from './types'

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
export async function remoteData<T>(
    param: RemotePoint,
    data: any,
    defaultData: T
): Promise<T> {
    try {
        const result = await fetch(param.path, {
            method: param.method,
            body: JSON.stringify(data),
        })
        return result.json()
    } catch (e) {
        return defaultData
    }
}

export async function remoteList(param: RemotePoint): Promise<TodoRow[]> {
    return remoteData<TodoRow[]>(param, null, [])
}

export async function remoteCreate(
    param: RemotePoint,
    data: TodoRow
): Promise<void> {
    return remoteData<void>(param, data, void 0)
}

export async function remoteUpdate(
    param: RemotePoint,
    data: TodoRow
): Promise<void> {
    return remoteData<void>(param, data, void 0)
}

export async function remoteDelete(
    param: RemotePoint,
    id: string
): Promise<void> {
    return remoteData<void>(param, { id }, void 0)
}

export async function remoteLoad(
    param: RemotePoint,
    id: string
): Promise<TodoRow | undefined> {
    return remoteData<TodoRow | undefined>(param, { id }, void 0)
}

export async function remoteFilter(
    param: RemotePoint,
    data: TodoFilter
): Promise<TodoRow[]> {
    return remoteData<TodoRow[]>(param, data, [])
}
