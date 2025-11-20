import { create } from 'zustand'
import { fetchPeople } from '@/integrations/peopleApi'

export interface Person {
    id: number
    name: string
    role: string
    image: string
}

interface PeopleStore {
    people: Person[]
    isLoading: boolean
    error: string | null
    fetchPeople: () => Promise<void>
    addPerson: (person: Person) => void
    removePerson: (id: number) => void
    updatePerson: (id: number, updates: Partial<Person>) => void
}

export const usePeopleStore = create<PeopleStore>((set) => ({
    people: [],
    isLoading: false,
    error: null,

    fetchPeople: async () => {
        set({ isLoading: true, error: null })
        try {
            const people = await fetchPeople()
            set({ people, isLoading: false })
        } catch (error) {
            set({
                error: error instanceof Error ? error.message : 'Failed to fetch people',
                isLoading: false
            })
        }
    },

    addPerson: (person) =>
        set((state) => ({ people: [...state.people, person] })),

    removePerson: (id) =>
        set((state) => ({ people: state.people.filter((p) => p.id !== id) })),

    updatePerson: (id, updates) =>
        set((state) => ({
            people: state.people.map((p) => (p.id === id ? { ...p, ...updates } : p)),
        })),
}))
