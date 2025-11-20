import { NextResponse } from 'next/server'

const people = [
  { id: 1, name: 'Jane Doe', role: 'CEO' },
  { id: 2, name: 'John Smith', role: 'CTO' },
  { id: 3, name: 'Alice Johnson', role: 'VP of Marketing' },
]

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id: idString } = await params
  const id = parseInt(idString)
  const person = people.find((p) => p.id === id)
  
  if (!person) {
    return new NextResponse('Not Found', { status: 404 })
  }
  
  return NextResponse.json(person)
}
