import { Dispatch, SetStateAction } from "react";
import { Project, projects } from "./project-selection";
import { Command, CommandEmpty, CommandInput, CommandList } from "@/components/ui/command";
import SingleProjectItem from "./single-project-item";

export default function ProjectCommandItems({selectedProject, setSelectedProject}:{
    selectedProject:Project;
    setSelectedProject:Dispatch<SetStateAction<Project>>
}){
    function handleProjectSelect(project:Project){
        setSelectedProject(project)
    }

    return (
        <Command>
            <CommandInput placeholder="Search a project" />
            <CommandList className="my-3">
                <CommandEmpty>No result found.</CommandEmpty>
            </CommandList>
            <div className="flex flex-col gap-3">
                {projects.map((project, index) =>(
                    <SingleProjectItem 
                        project={project}
                        key={index}
                        onSelectedItem={handleProjectSelect}
                        isSelected={selectedProject.name === project.name}
                    />
                ))}
            </div>
        </Command>
    )
}