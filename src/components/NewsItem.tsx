import { Card, Badge } from 'flowbite-react';
import Link from 'next/link';

interface NewsItemProps {
    id: number
    title: string
    date: string
}

export default function NewsItem({ id, title, date }: NewsItemProps) {
    return (
        <Link href={`/news/${id}`} className="block">
            <Card className="mb-4 cursor-pointer transition-shadow hover:shadow-lg">
                <div className="flex items-center justify-between">
                    <h5 className="text-lg font-semibold tracking-tight text-indigo-600">
                        {title}
                    </h5>
                    <Badge color="success">{date}</Badge>
                </div>
            </Card>
        </Link>
    )
}
