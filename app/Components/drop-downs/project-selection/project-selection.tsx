import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useState } from "react";
import { FaFlagCheckered, FaMobileRetro } from "react-icons/fa6";
import { IconType } from "react-icons/lib";
import ProjectCommandItems from "./project-comment-items";
import { useTheme } from "next-themes";

export type Project = {
    id: string;
    name: string;
    icon: IconType;
    createdAt: Date;
    tasks: string[];
}

export const projects: Project[] = [
    {
        id:"1",
        name:"Project 1",
        icon: FaMobileRetro,
        createdAt: new Date(),
        tasks:[]
    },
    {
        id:"2",
        name:"Project 2",
        icon: FaFlagCheckered,
        createdAt: new Date(),
        tasks:[]
    }
]

export default function ProjectSelectionDropDown(){
    const [selectedProject, setSelectedProject] = useState<Project>(projects[0])
    const {theme} = useTheme()
    const bgColor = theme === 'light' ? 'bg-gray-50' : 'bg-black'
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button 
                variant="ghost"
                className={`w-full flex justify-between py-9 rounded-xl ${bgColor}`}>
                    <div className="flex items-start flex-col text-[16px] gap-1">
                        <p className="text-[13px] text-slate-500">Project</p>
                        <p className="font-bold">{selectedProject.name}</p>
                    </div>
                    <div className="size-10 bg-primary rounded-full flex items-center justify-center text-2xl text-white">
                        <selectedProject.icon/>
                    </div>
                </Button>
            </PopoverTrigger>
            <PopoverContent className="p-2 poppins rounded-xl">
                <ProjectCommandItems selectedProject={selectedProject} setSelectedProject={setSelectedProject} />
            </PopoverContent>
        </Popover>
    )
}