'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
    const pathname = usePathname()

    const isActive = (path: string) => {
        return pathname === path
    }

    return (
        <div className="navbar bg-base-100 shadow-lg">
            <div className="navbar-start">
                <Link href="/" className="text-xl">
                    Business Corp
                </Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <Link href="/people" className={isActive('/people') ? 'active' : ''}>
                            People
                        </Link>
                    </li>
                    <li>
                        <Link href="/news" className={isActive('/news') ? 'active' : ''}>
                            News
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
