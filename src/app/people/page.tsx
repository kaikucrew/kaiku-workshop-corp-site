'use client'

import { usePeopleStore } from '@/store/peopleStore'
import { useEffect } from 'react'
import PeopleLayout from '@/components/PeopleLayout'
import PeopleItem from '@/components/PeopleItem'

export default function People() {
  const { people, isLoading, error, fetchPeople } = usePeopleStore()

  useEffect(() => {
    fetchPeople()
  }, [fetchPeople])

  if (isLoading) {
    return (
      <PeopleLayout>
        <div className="text-center py-12">
          <p className="text-gray-500">Loading people...</p>
        </div>
      </PeopleLayout>
    )
  }

  if (error) {
    return (
      <PeopleLayout>
        <div className="text-center py-12">
          <p className="text-red-500">Error: {error}</p>
        </div>
      </PeopleLayout>
    )
  }

  return (
    <PeopleLayout>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {people.map((person) => (
          <PeopleItem
            key={person.id}
            id={person.id}
            name={person.name}
            role={person.role}
            image={person.image}
          />
        ))}
      </div>
    </PeopleLayout>
  )
}
