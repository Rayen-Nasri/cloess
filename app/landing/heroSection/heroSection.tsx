'use client';
import { motion } from "framer-motion"


export const HeroSection = () => {
    return (
        <>

            <div className="relative w-full h-full ">
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

                <div className="text-black p-15 text">
                    <div className="space-y-5 ">
                        <h1 className="aboreto-regular text-[25px] ">
                            Redécouvrez la mode autrement
                        </h1>
                        <p className="Manrope w-[395px] text-center  ">
                            Chez Clo’ess, chaque vêtement a une seconde vie. Inspirée par l’artisanat tunisien et la slow fashion, notre collection incarne l’élégance responsable.
                        </p>
                        <button className="border-[0.5px] rounded-full p-2">
                            <span className="p-7">notre histoire</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}