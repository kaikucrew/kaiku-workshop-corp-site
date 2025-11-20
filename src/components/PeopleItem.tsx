interface PeopleItemProps {
    id: number
    name: string
    role: string
    image: string
}

export default function PeopleItem({ name, role, image }: PeopleItemProps) {
    return (
        <div className="card bg-white overflow-hidden shadow rounded-lg">
            <div className="card-body">
                <div className="avatar avatar-placeholder">
                    <div className="bg-neutral text-neutral-content w-24 rounded-full">
                        <span className="text-3xl">D</span>
                    </div>
                </div>
                <h3 className="mt-4 text-lg leading-6 font-medium text-gray-900">{name}</h3>
                <p className="mt-1 text-sm text-gray-500">{role}</p>
            </div>
        </div>
    )
}
