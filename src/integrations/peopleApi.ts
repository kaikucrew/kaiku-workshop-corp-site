export interface Person {
    id: number
    name: string
    role: string
    image: string
}

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'

export async function fetchPeople(): Promise<Person[]> {
    try {
        const response = await fetch(`${BASE_URL}/api/people`)

        if (!response.ok) {
            throw new Error(`Failed to fetch people: ${response.statusText}`)
        }

        const data = await response.json()
        return data as Person[]
    } catch (error) {
        console.error('Error fetching people:', error)
        throw error
    }
}
