import { NextResponse } from 'next/server'

const people = [
  { id: 1, name: 'Jane Doe', role: 'CEO' },
  { id: 2, name: 'John Smith', role: 'CTO' },
  { id: 3, name: 'Alice Johnson', role: 'VP of Marketing' },
]

export async function GET() {
  return NextResponse.json(people)
}
