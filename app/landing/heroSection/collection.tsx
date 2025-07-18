'use client';
import { motion, AnimatePresence } from "framer-motion";
import { Search, ShoppingBag } from "lucide-react";
import { useEffect, useState } from 'react';

interface CollectionProps {
    isActive: boolean;
    onToggle: () => void;
}

export const Collection = ({ isActive, onToggle }: CollectionProps) => {
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        if (!isActive) {
            setShowContent(false);
        }
    }, [isActive]);

    return (
        <div className="flex items-center justify-center">

            <motion.div
                className="relative z-10 "
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <motion.div
                    className="relative flex items-center justify-center bg-white/30  cursor-pointer overflow-hidden "
                    initial={{
                        scale: 0.9,
                        borderRadius: "50%"
                    }}
                    animate={{
                        scale: 1,
                        borderRadius: showContent ? "24px" : "50%",
                        boxShadow: "0 0px 60px #ffffff, 0 0 0 1px #ffffff",
                        width: showContent ? 340 : 200,
                        height: showContent ? 320 : 200,
                    }}
                    whileHover={{
                        scale: showContent ? 1.01 : 1.05,
                        boxShadow: "0 0px 60px #ffffff, 0 0 0 1px #ffffff",
                        transition: { duration: 0.3 }
                    }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    onClick={() => {
                        if (!showContent) {
                            onToggle();
                            setShowContent(true);
                        }
                    }}
                >
                    {/* Subtle gradient overlay */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-amber-50/30"
                        animate={{ borderRadius: showContent ? "24px" : "50%" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    ></motion.div>

                    {/* Animated border ring */}
                    <motion.div
                        className="absolute inset-0"
                        style={{
                            background: "conic-gradient(from 0deg, transparent, rgba(245,158,11,0.3), transparent, rgba(236,72,153,0.3), transparent)",
                        }}
                        animate={{
                            rotate: 360,
                            borderRadius: showContent ? "24px" : "50%"
                        }}
                        transition={{
                            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                            borderRadius: { duration: 0.6, ease: "easeOut" }
                        }}
                    />

                    {/* Inner content container */}
                    <motion.div
                        className="relative z-10 w-full h-full bg-[#C9DBF2]/ backdrop-blur-sm flex items-center justify-center"
                        animate={{ borderRadius: showContent ? "20px" : "50%" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <AnimatePresence mode="wait">
                            {!showContent ? (
                                <motion.div
                                    key="initial"
                                    className="flex flex-col items-center justify-center h-full w-full px-8"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                >
                                    <motion.div
                                        className="mb-4"
                                        animate={{ y: [0, -6, 0] }}
                                        transition={{ duration: 3, repeat: Infinity, ease: [0.45, 0, 0.55, 1] }}
                                    >
                                        <span className="text-black">
                                            <ShoppingBag />
                                        </span>
                                    </motion.div>

                                    <motion.div
                                        className="text-center"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        <span className="text-gray-600 text-[14px] font-medium">Cliquez pour acheter</span>
                                        <motion.div
                                            className="flex justify-center mt-2"
                                            animate={{ scale: [1, 1.2, 1] }}
                                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                        >
                                            <div className="w-2 h-2 bg-gradient-to-r from-amber-400 to-rose-400 rounded-full"></div>
                                        </motion.div>
                                    </motion.div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="content"
                                    className="absolute inset-0 flex flex-col items-center justify-center p-6"
                                    initial={{ opacity: 0, scale: 0.8, y: 40 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.8, y: -40 }}
                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                >
                                    <motion.h1
                                        className="aboreto-regular font-bold text-[20px] text-black text-center mb-4"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 }}
                                    >
                                        Nouvelle collection disponible
                                    </motion.h1>

                                    <motion.p
                                        className="Manrope text-center text-gray-700 mb-6 text-[14px] leading-relaxed font-medium px-2"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        Des pièces uniques, conçues avec soin à partir de matières revalorisées. Elles allient douceur, caractère et conscience, dans le respect de valeurs durables et féminines.
                                    </motion.p>

                                    <motion.button
                                        className="relative group border-2 border-transparent rounded-full px-6 py-2 bg-gradient-to-r from-amber-200 to-rose-200 hover:from-amber-200 hover:to-rose-200 text-gray-800 font-semibold text-[13px] tracking-wide overflow-hidden"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 }}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <span className="relative z-10 aboreto-regular">Notre collection</span>
                                        <div className="absolute inset-0 bg-gradient-to-r from-amber-300/50 to-rose-300/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </motion.button>

                                    <motion.button
                                        className="absolute top-3 right-3 w-7 h-7 flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-all duration-200"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setShowContent(false);
                                        }}
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.4 }}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                    </motion.button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    );
};