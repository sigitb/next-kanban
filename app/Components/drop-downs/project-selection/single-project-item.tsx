import { CommandItem } from "@/components/ui/command";
import { Project, projects } from "./project-selection"

export default function SingleProjectItem({project,isSelected,onSelectedItem}:{
    project:Project
    isSelected:boolean
    onSelectedItem:(project:Project) => void

}){

    const {name:projectName, tasks, icon:ProjectIcon} = project;
    return (
        <CommandItem value={projectName}
            onSelect={(value:string) => {
                const findProject = projects.find((proj) => proj.name == value)
                if(findProject){
                    onSelectedItem(findProject)
                }
            }}
            className="cursor-pointer hover:bg-gray-100 rounded-lg p-2"
        >
            <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-3">
                    <div className="size-8 bg-primary flex items-center justify-center rounded-md text-white">
                        <ProjectIcon/>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-medium">{projectName}</span>
                        <span className="text-[12px] text-gray-500">{tasks.length} Task</span>
                    </div>
                </div>
            </div>
        </CommandItem>
    )
}