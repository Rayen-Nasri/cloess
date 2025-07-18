'use client';
import { motion } from "framer-motion";
import { Histoire } from "./histoire";
import { Collection } from "./collection";
import { useState } from "react";

export const HeroSection = () => {
    const [activeComponent, setActiveComponent] = useState<string | null>(null);

    const handleComponentToggle = (componentName: string) => {
        setActiveComponent(activeComponent === componentName ? null : componentName);
    };

    return (
        <section className="relative w-full h-full sm:bg-none bg-linear-to-b from-[#EADDB5] to-[#F5F3EF] ">
            <img
                src="/heroBg.svg"
                alt="Cloess"
                className="hidden absolute sm:flex w-full "
                style={{ zIndex: -1, height: "100vh", objectFit: "cover" }}
            />
            <div className="text-black hidden sm:flex  sm:space-x-50 2xl:space-x-55 xl:p-5 2xl:p-12  justify-center text-[113px] 2xl:text-[125px] ">
                <motion.h1 className="playfair-display-sc-regular"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.7 }}
                >
                    CLO
                </motion.h1>
                <motion.h1 className="playfair-display-sc-regular"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.7 }}
                >
                    ESS
                </motion.h1>
            </div>
            <div className="flex flex-col md:flex-row justify-between w-full h-full p-5 sm:p-10 2xl:p-20 space-y-10 md:space-y-0">
                <div className="flex-shrink-0">
                    <Histoire 
                        isActive={activeComponent === 'histoire'} 
                        onToggle={() => handleComponentToggle('histoire')} 
                    />
                </div>
                <div className="flex-shrink-0">
                    <Collection 
                        isActive={activeComponent === 'collection'} 
                        onToggle={() => handleComponentToggle('collection')} 
                    />
                </div>
            </div>
        </section>
    )
}