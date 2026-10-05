"use client";

import { useState } from "react";
import Image from "next/image";
import { navLinks } from "@/lib/data";
import { waLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./Icons";

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="header">
      <div className="container header-bar">
        <a href="#top" className="brand" onClick={close}>
          <Image src="/images/mark.png" alt="" width={34} height={34} />
          <b>HAY BEE <span>CONCEPTS</span></b>
        </a>

        <nav className={open ? "nav is-open" : "nav"} aria-label="Main">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={close}>
              {link.label}
            </a>
          ))}
          <a className="btn btn-gold" href={waLink()} target="_blank" rel="noopener noreferrer" onClick={close}>
            <WhatsAppIcon /> Order Now
          </a>
        </nav>

        <button
          type="button"
          className="burger"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}