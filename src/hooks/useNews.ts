import { useQuery } from '@tanstack/react-query'

export interface NewsItem {
    id: number
    title: string
    date: string
    content?: string
}

export function useNews() {
    return useQuery<NewsItem[]>({
        queryKey: ['news'],
        queryFn: async () => {
            const response = await fetch('/api/news')
            if (!response.ok) {
                throw new Error('Failed to fetch news')
            }
            return response.json()
        },
    })
}
