"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

// The loader stays at least this long so the logo animation can finish.
const MIN_TIME_MS = 1800;

export default function Preloader() {
    const [show, setShow] = useState(true);

    useEffect(() => {
        document.body.style.overflow = "hidden";
        const startedAt = Date.now();
        let timer: ReturnType<typeof setTimeout>;

        const finish = () => {
            const wait = Math.max(0, MIN_TIME_MS - (Date.now() - startedAt));
            timer = setTimeout(() => {
                document.body.style.overflow = "";
                setShow(false);
            }, wait);
        };

        if (document.readyState === "complete") finish();
        else window.addEventListener("load", finish, { once: true });

        return () => {
            clearTimeout(timer);
            window.removeEventListener("load", finish);
            document.body.style.overflow = "";
        };
    }, []);

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    className="preloader"
                    exit={{ y: "-100%" }}
                    transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                >
                    <motion.div
                        className="preloader-logo"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                    >
                        <Image src="/images/logo.png" alt="Hay Bee Concepts" width={898} height={652} priority />
                    </motion.div>

                    <div className="preloader-bar">
                        <motion.span
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: MIN_TIME_MS / 1000, ease: "easeInOut" }}
                        />
                    </div>

                    <p>CREATIVE. MODERN. MEMORABLE.</p>
                </motion.div>
            )}
        </AnimatePresence>
    );
}