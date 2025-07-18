'use client';
import { Heart, ShoppingCart, User, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import "../../globals.css";
import Link from "next/link";
import { useState } from "react";



export const NavBar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    return (
        <nav className="w-full bg-[#EDE9E2] border-b-2  border-[#BCAE9A] ">
            <div className="mx-4 md:mx-10  ">
                <div className="flex items-center justify-between  ">
                    {/* Logo */}
                    <motion.div
                        className="hidden md:flex items-center"
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <motion.img
                            src="/logo.svg"
                            alt="cloess"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                        />
                    </motion.div>

                    {/* Hamburger for mobile */}
                    <motion.button
                        className="md:hidden flex items-center justify-center  p-2 rounded-lg hover:bg-[#bcae9a]/20 transition"
                        aria-label="Open menu"
                        onClick={() => setSidebarOpen(true)}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <Menu className="w-7 h-7 sm:w-8 sm:h-8 text-[#876d49]" />
                    </motion.button>

                    {/* Navigation Menu for desktop */}
                    <nav className="hidden md:flex items-center space-x-8 lg:space-x-12 ">
                        {["HOME", "PRODUCTS", "FEATURES", "CONTACT"].map((item, idx) => (
                            <motion.div
                                key={item}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 + idx * 0.1, duration: 0.5, ease: "easeOut" }}
                            >
                                <Link
                                    href="#"
                                    className={`text-[16px] sm:text-[18px] xl:text-[20px] aboreto-regular transition-colors duration-200 ${idx === 0 ? "text-[#876d49] hover:text-[#876d49]" : "text-[#000000] hover:text-[#876d49]"}`}
                                >
                                    {item}
                                </Link>
                            </motion.div>
                        ))}
                    </nav>

                    {/* Right Icons */}
                    <motion.div
                        className="flex items-center  space-x-4 sm:space-x-6"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                        <motion.button whileHover={{ scale: 1.15 }} className="text-[#1C1C1C] hover:text-[#876d49] cursor-pointer">
                            <User className="w-6 h-6 sm:w-7 sm:h-7 lg:w-7 lg:h-7" strokeWidth={1.2} />
                            <span className="sr-only">User account</span>
                        </motion.button>
                        <motion.button whileHover={{ scale: 1.15 }} className="text-[#1C1C1C] hover:text-[#876d49] cursor-pointer">
                            <Heart className="w-6 h-6 sm:w-7 sm:h-7 lg:w-7 lg:h-7" strokeWidth={1.2}/>
                            <span className="sr-only">Favorites</span>
                        </motion.button>
                        <motion.button whileHover={{ scale: 1.15 }} className="text-[#1C1C1C] hover:text-[#876d49] cursor-pointer">
                            <ShoppingCart className="w-6 h-6 sm:w-7 sm:h-7 lg:w-7 lg:h-7" strokeWidth={1.2} />
                            <span className="sr-only">Shopping cart</span>
                        </motion.button>
                    </motion.div>
                </div>
            </div>

            {/* Sidebar for mobile */}
            <AnimatePresence>
                {sidebarOpen && (
                    <motion.div
                        className="fixed inset-0 z-50 bg-black/40"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => setSidebarOpen(false)}
                    >
                        <motion.div
                            className="absolute top-0 right-0 h-full w-4/5 max-w-xs bg-[#ede9e2] shadow-lg p-6 flex flex-col gap-8"
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            onClick={e => e.stopPropagation()}
                        >
                            <div className="flex items-center justify-between mb-4">
                                <motion.img
                                    src="/logo.svg"
                                    alt="cloess"
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                />
                                <motion.button
                                    className="p-2 rounded-lg hover:bg-[#bcae9a]/20 transition"
                                    aria-label="Close menu"
                                    onClick={() => setSidebarOpen(false)}
                                    whileHover={{ scale: 1.15 }}
                                >
                                    <X className="w-6 h-6 sm:w-7 sm:h-7 text-[#876d49]" />
                                </motion.button>
                            </div>
                            <nav className="flex flex-col gap-4 sm:gap-6">
                                {["HOME", "PRODUCTS", "FEATURES", "CONTACT"].map((item, idx) => (
                                    <motion.div
                                        key={item}
                                        initial={{ opacity: 0, x: 30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.2 + idx * 0.1, duration: 0.4, ease: "easeOut" }}
                                    >
                                        <Link
                                            href="#"
                                            className={`text-[18px] sm:text-[20px] aboreto-regular transition-colors duration-200 ${idx === 0 ? "text-[#876d49] hover:text-[#bcae9a]" : "text-[#000000] hover:text-[#bcae9a]"}`}
                                        >
                                            {item}
                                        </Link>
                                    </motion.div>
                                ))}
                            </nav>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}