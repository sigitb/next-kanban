"use client"
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ArrowDown, ArrowUp } from "lucide-react";
import * as React from "react";

const options = ["A-Z", "Z-A"];
export default function SortingDropDown(){
    const [selectOption, setSelectOption] = React.useState("A-Z")
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost">
                    <span className="font-medium text-sm">{selectOption}</span>
                    {
                        selectOption === 'A-Z' ? 
                            (<ArrowDown className="text-sm"/>)
                        : 
                        (<ArrowUp className="text-sm"/>)
                    }
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-20 poppins">
                    {
                        options.map((option, index) => (
                            <DropdownMenuCheckboxItem 
                            key={index} 
                            className="h-9" 
                            checked={option === selectOption} 
                            onCheckedChange={() => setSelectOption(option)}
                            >
                                {option}
                            </DropdownMenuCheckboxItem>
                        ))
                    }
            </DropdownMenuContent>
        </DropdownMenu>
    )
}