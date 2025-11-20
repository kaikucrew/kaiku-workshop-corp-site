import Link from 'next/link'
import { ReactNode } from 'react'

interface NewsLayoutProps {
    children: ReactNode
    title?: string
}

export default function NewsLayout({ children, title = 'Latest News' }: NewsLayoutProps) {
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="mb-8">
                    <Link href="/" className="text-indigo-600 hover:text-indigo-500">
                        &larr; Back to Home
                    </Link>
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-8">{title}</h1>
                {children}
            </div>
        </div>
    )
}
