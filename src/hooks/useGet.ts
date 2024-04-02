import useSWR from 'swr'

interface UseGet<T> {
    key: string,
    fetcher: () => Promise<T>,
}

interface GenericResponse<T> {
    data: T | undefined,
    error?: string,
    isLoading: boolean,
    isValidating: boolean,
}

export const useGet = <T>({ key, fetcher }: UseGet<T>): GenericResponse<T> => {
    const { data, error, isLoading, isValidating } = useSWR<T>(key, fetcher)
    return {
        data,
        error,
        isLoading,
        isValidating
    }
}

/* Usage */
interface ResponseType {
    id: number,
    title: string,
    body: string
}

/* Build the fetcher*/
export const Fetcher = async (): Promise<ResponseType[]> => {
    const url = 'https://jsonplaceholder.typicode.com/posts'
    const response = await fetch(url)
    return response.json()
}

const { data, error, isLoading, isValidating } = useGet<ResponseType[]>({
    key: '/posts',
    fetcher: Fetcher
})

console.log({
    data,
    error,
    isLoading,
    isValidating
})