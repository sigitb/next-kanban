import { Separator } from "@/components/ui/separator"
import { useTheme } from "next-themes"

export type TaskCard = {
    label: string
    value: number
}
export default function TasksStats() {

    const statisticCards: TaskCard[] = [
        { label: "total", value: 23 },
        { label: "in progress", value: 231 },
        { label: "waiting", value: 324 },
        { label: "complated", value: 212 },
    ]

    return (
        <div className="flex flex-col gap-2">
            <span className="font-bold text-xl">Tasks</span>
            <div className="grid grid-cols-2 gap-3 mt-3">
                {statisticCards.map((statCard, index) => (
                    <SingleCard key={index} statCard={statCard} />
                ))}
            </div>
        </div>
    )
}

function SingleCard({ statCard }: { statCard: TaskCard }) {
    const { theme } = useTheme()
    const bgColor = theme === 'light' ? 'bg-gray-100' : 'bg-black'
    return (
        <div className={`p-3 ${bgColor} rounded-xl`}>
            <span className="text-gray-600 text-[12px]">
                {statCard.label.toUpperCase()}
            </span>
            <div className="flex gap-2 mt-1 items-center">
                <Separator className="w-1 h-4 bg-primary" orientation="vertical" />
                <span className="font-bold text-lg">{statCard.value}</span>
            </div>
        </div>
    )
}