"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { videos } from "@/lib/data";
import { waLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./Icons";
import Reveal from "./Reveal";

type Clip = (typeof videos)[number];

// Plays the silent preview only while it is on screen, to save phone data and battery.
function PreviewVideo({ clip }: { clip: Clip }) {
    const ref = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => (entry.isIntersecting ? el.play().catch(() => { }) : el.pause()),
            { threshold: 0.3 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <video ref={ref} src={clip.preview} poster={clip.poster} muted loop playsInline preload="metadata" />
    );
}

export default function WatchWork() {
    const [open, setOpen] = useState<Clip | null>(null);

    useEffect(() => {
        if (!open) return;
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", onKey);
        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", onKey);
        };
    }, [open]);

    return (
        <section id="watch" className="section section-dark watch">
            <div className="container watch-grid">
                <div>
                    <Reveal><p className="eyebrow gold-text">WATCH OUR WORK</p></Reveal>
                    <Reveal delay={0.08}><h2>See it being made.</h2></Reveal>
                    <Reveal delay={0.16}>
                        <p className="lead">
                            Banners, prints and finishes, straight from our workshop in Akobo. Tap a video to watch it full screen.
                        </p>
                    </Reveal>
                    <Reveal delay={0.24}>
                        <a
                            className="btn btn-whatsapp"
                            href={waLink("Hi Hay Bee Concepts! I saw your banner printing video and I would like a quote.")}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <WhatsAppIcon /> Get a print quote
                        </a>
                    </Reveal>
                </div>

                <div className="clips">
                    {videos.map((clip, i) => (
                        <Reveal key={clip.slug} delay={i * 0.1}>
                            <button type="button" className="clip" onClick={() => setOpen(clip)} aria-label={`Play video: ${clip.title}`}>
                                <PreviewVideo clip={clip} />
                                <span className="clip-play" aria-hidden="true">
                                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                                </span>
                                <span className="clip-caption">
                                    <b>{clip.title}</b>
                                    {clip.caption}
                                </span>
                            </button>
                        </Reveal>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {open && (
                    <motion.div
                        className="lightbox"
                        role="dialog"
                        aria-modal="true"
                        aria-label={open.title}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setOpen(null)}
                    >
                        <button type="button" className="lightbox-close" onClick={() => setOpen(null)} aria-label="Close video">
                            &times;
                        </button>
                        <video src={open.full} poster={open.poster} controls autoPlay playsInline onClick={(e) => e.stopPropagation()} />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}