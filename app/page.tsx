"use client"
import { useTheme } from "next-themes";
import Navbar from "./Components/nav-bar/nav-bar";
import ProjectArea from "./Components/project-area/project-area";

export default function Home() {
  const { theme } = useTheme()

  const bgColor = theme === 'light' ? 'bg-gray-200' : 'bg-black'
  return (
    <div className={`${bgColor} border min-h-screen w-full`}>
      <Navbar />
      <div className="grid grid-cols-[3fr_1fr] px-6 mt-8 poppins gap-4">
        <ProjectArea />
      </div>
    </div>
  );
}
