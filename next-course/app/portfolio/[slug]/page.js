'use client'

import { useParams, usePathname, useSearchParams } from 'next/navigation'

export default function ProjectPage({params}) {
    const path = usePathname();
    const query = useParams();
    console.log(path)
    console.log(query)
    return <div>
        <h1>The Portfolio Project Page</h1>
    </div>
}