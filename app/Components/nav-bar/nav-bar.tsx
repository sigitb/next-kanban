"use client"

import { ModeToggle } from "@/app/mode-toggle"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import AppNameAndLogo from "./logo-app"
import SearchBar from "./search-bar"

export default function Navbar(){
    return (
        <div className="poppins p-6 flex justify-between items-center">
            <div className="flex items-center gap-16">
                <AppNameAndLogo/>
                <SearchBar />
            </div>
            <div className="flex items-center gap-5">
                <ModeToggle/>
                <Separator orientation="vertical" className="h-5 w-[2px] bg-gray-500"/>
                <Button className="rounded-3xl h-10 shadow-none">Add New Project</Button> 
            </div>
        </div>
    )
}