"use client"

import Image from "next/image";
import { useUser } from "@clerk/clerk-react";

import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

const DocumentsPage = () => {
    const { user } = useUser();

    return (
        <div className="h-full flex flex-col items-center justify-center space-y-4">
            <Image 
                src= "/empty.png"
                height="300"
                width="300"
                alt="Empty"
                className="dark:hidden"
            />{/*
            <Image 
                src= "/empty.png"
                height="300"
                width="300"
                alt="Empty"
                className="hidden dark:block"
            />*/}
            <h2>
                Welcome to {user?.firstName}&apos;s Cypress
            </h2>
            <Button>
                <PlusCircle className="h-4 w-4 "/>
                <div className="ml-2">
                    Create a note 
                </div>
            </Button>
        </div>
    );
}

export default DocumentsPage;