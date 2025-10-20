import { Button } from "@/components/ui/button";
import { ChartBarBig } from "lucide-react";
import SortingDropDown from "../../drop-downs/sorting-drop-down";

export default function ProjectAreaHeader(){
    return (
        <div className="flex justify-between items-center">
            <div className="flex gap-3 items-center">
                <span className="text-2xl font-bold">Project</span>
            </div>
            <div className="flex gap-2 items-center">
                <div className="flex items-center gap-1">
                    <ChartBarBig className="text-xl text-gray-500"/>
                    <span className="text-gray-500 text-sm">Sort</span>
                </div>
                <SortingDropDown/>

                <Button className="rounded-3xl px-4">Add Task</Button>
            </div>
        </div>
    )
}