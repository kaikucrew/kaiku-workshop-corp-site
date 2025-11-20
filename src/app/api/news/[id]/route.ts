import { NextResponse } from 'next/server'

const news = [
  { id: 1, title: 'Business Corp Launches New Product', date: '2023-10-01', content: 'Full story here...' },
  { id: 2, title: 'Q3 Earnings Report', date: '2023-10-15', content: 'Full story here...' },
  { id: 3, title: 'Expansion into New Markets', date: '2023-11-01', content: 'Full story here...' },
]

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id: idString } = await params
  const id = parseInt(idString)
  const item = news.find((n) => n.id === id)
  
  if (!item) {
    return new NextResponse('Not Found', { status: 404 })
  }
  
  return NextResponse.json(item)
}
