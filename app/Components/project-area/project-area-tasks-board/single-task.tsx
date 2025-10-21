import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";
import TaskDropDown from "../../drop-downs/task-drop-down";
import { useTheme } from "next-themes";

export default function SingleTask(){
    const {theme} = useTheme()
    const stylePriority = theme === 'light' ? 'bg-green-500/15 text-green-900' : 'bg-green-700/40 text-green-500' 
    return (
        <Card className="shadow-none mt-3">
            <CardHeader className="p-4">
                <div className="flex justify-between items-center">
                    <div className={`p-1 py-[4px] rounded-3xl px-2 pr-4 font-medium flex items-center gap-1 text-sm ${stylePriority}`}>
                    <ChevronDown className="mb-[2px]"/>
                    <span className="text-[12px]">Low</span>
                    </div>
                    <TaskDropDown/>
                </div>
            </CardHeader>
            <CardContent className="flex flex-col gap-3 mt-1">
                <span className="font-bold text-lg">CopyWriteing content</span>
                <span className="text-sm text-gray-600">created content for a client today every day</span>
            </CardContent>
        </Card>
    )
}