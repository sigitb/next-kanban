"use client"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MoreHorizontal, SquarePen, Trash2 } from "lucide-react"
import { JSX } from "react"

type MenuItem = {
    icon: JSX.Element
    label: string
    className: string
    separator?: undefined
}

export default function TaskDropDown() {
    const menuItems: MenuItem[] = [
        {
            icon: <SquarePen />,
            label: "Edit Task",
            className: "",
        },
        {
            icon: <Trash2 />,
            label: "Hapus Task",
            className: "text-red-600",
        },
    ]
    return (
        <div>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                        <MoreHorizontal className="h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="poppins">
                    {
                        menuItems.map((item, index) => item.separator ?
                            (
                                <DropdownMenuSeparator key={index} />) :
                            (<DropdownMenuItem key={index} className={`flex items-center gap-1 p-[10px] ${item.className}`}>{item.icon}
                                <span>{item.label}</span>
                            </DropdownMenuItem>)
                        )
                    }
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}