import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { AnimatedTooltip } from "./ui/animated-tooltip";

const Instructers = () => {
    return (
        <div className="h-fit">
            <BackgroundBeamsWithCollision className="h-40 flex flex-col " >
                <div className="flex flex-col text-center">
                    <h2 className=" mb-2 md:mb-5 text-3xl md:text-7xl font-extrabold ">Meet Our Instructers</h2>
                    <p className="mt-3 md:mt-5 font-semibold text-neutral-800 dark:text-neutral-300 ">discover the tailent profesionals who will guide your musical jusrny</p>
                </div> <br />
                <div className=" flex flex-row">
                    <AnimatedTooltip items={people} />
                </div>
            </BackgroundBeamsWithCollision>
        </div>
    )
}

export default Instructers;



const people = [

    {
        id: 2,
        name: "Robert Johnson",
        designation: "Product Manager",
        image:
            "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
        id: 3,
        name: "Jane Smith",
        designation: "Data Scientist",
        image:
            "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
        id: 4,
        name: "Emily Davis",
        designation: "UX Designer",
        image:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
        id: 5,
        name: "Tyler Durden",
        designation: "Soap Developer",
        image:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    }
];