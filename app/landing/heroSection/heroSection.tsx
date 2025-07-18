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
        <section
            className="relative w-full h-full min-h-screen bg-gradient-to-b from-[#EADDB5] to-[#F5F3EF] bg-[url('/heroBg.svg')] bg-cover bg-center"
            style={{ zIndex: 0 }}
        >
            {/* Text "CLO" and "ESS" shown only on larger screens */}
            <div className="text-black hidden sm:flex space-x-50 2xl:space-x-55 xl:p-5 2xl:p-12 justify-center text-[113px] 2xl:text-[125px]">
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

            {/* Content containers for Histoire and Collection */}
            <div className="flex flex-col md:flex-row justify-between items-center mx-10 pt-45 md:p-10 h-full space-y-20 md:space-y-0">
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
    );
};