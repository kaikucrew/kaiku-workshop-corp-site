'use client'

import { useNews } from '@/hooks/useNews'
import NewsLayout from '@/components/NewsLayout'
import NewsItem from '@/components/NewsItem'

export default function News() {
  const { data: news, isLoading, error } = useNews()

  if (isLoading) {
    return (
      <NewsLayout>
        <div className="text-center py-12">
          <p className="text-gray-500">Loading news...</p>
        </div>
      </NewsLayout>
    )
  }

  if (error) {
    return (
      <NewsLayout>
        <div className="text-center py-12">
          <p className="text-red-500">Error loading news. Please try again later.</p>
        </div>
      </NewsLayout>
    )
  }

  return (
    <NewsLayout>
      <div className="">
        <ul role="list" className="divide-y divide-gray-200">
          {news?.map((item) => (
            <li key={item.id}>
              <NewsItem key={item.id} id={item.id} title={item.title} date={item.date} />
            </li>
          ))}
        </ul>
      </div>
    </NewsLayout>
  )
}
