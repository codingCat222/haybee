"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { projects, type Category } from "@/lib/data";
import { waLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./Icons";
import Reveal from "./Reveal";

type Filter = "all" | Category;

const filters: { value: Filter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "painting", label: "Painting" },
  { value: "branding", label: "Branding" },
  { value: "gifts", label: "Gifts" },
];

export default function Work() {
  const [filter, setFilter] = useState<Filter>("all");
  const visible = projects.filter((p) => filter === "all" || p.category === filter);

  return (
    <section id="work" className="section section-dark">
      <div className="container">
        <Reveal><p className="eyebrow gold-text">OUR WORK</p></Reveal>
        <Reveal delay={0.08}><h2>Made with care, finished to last.</h2></Reveal>
        <Reveal delay={0.16}><p className="lead">Pick a piece you like and order it straight on WhatsApp.</p></Reveal>

        <div className="tabs" role="group" aria-label="Filter work">
          {filters.map((f) => (
            <button
              key={f.value}
              type="button"
              className={filter === f.value ? "tab is-active" : "tab"}
              onClick={() => setFilter(f.value)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <motion.div layout className="cards">
          <AnimatePresence mode="popLayout">
            {visible.map((p) => (
              <motion.article
                key={p.slug}
                layout
                className="card"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35 }}
              >
                <div className="card-image">
                  <Image src={p.image} alt={p.title} fill sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 380px" />
                  <span className="card-tag">{p.category}</span>
                </div>
                <div className="card-body">
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                  <a
                    className="btn btn-whatsapp"
                    href={waLink(`Hi Hay Bee Concepts! I am interested in ${p.title}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WhatsAppIcon /> Order on WhatsApp
                  </a>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        <Reveal>
          <div className="custom-order">
            <div>
              <h3>Something different in mind?</h3>
              <p>Tell us the idea. We will design it, make it and deliver it.</p>
            </div>
            <a className="btn btn-gold" href={waLink("Hi Hay Bee Concepts! I would like a custom order.")} target="_blank" rel="noopener noreferrer">
              Request a custom order
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
