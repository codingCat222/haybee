"use client";

import { useState } from "react";
import { contact } from "@/lib/data";
import { waLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./Icons";
import Reveal from "./Reveal";

const interests = ["House Painting", "3D Wall Art", "Branding", "Signs and Billboards", "Gifts and Souvenirs", "Custom Order"];

export default function Contact() {
  const [name, setName] = useState("");
  const [interest, setInterest] = useState(interests[0]);
  const [message, setMessage] = useState("");

  const text = `Hi Hay Bee Concepts! My name is ${name || "[name]"}. I am interested in ${interest}. ${message}`.trim();

  return (
    <section id="contact" className="section">
      <div className="container">
        <Reveal><p className="eyebrow">CONTACT</p></Reveal>
        <Reveal delay={0.08}><h2>Get in touch</h2></Reveal>
        <Reveal delay={0.16}><p className="lead">Place an order, ask a question or request a custom piece.</p></Reveal>

        <div className="contact-grid">
          <Reveal>
            <div className="info-list">
              <a href={contact.phoneHref}><small>CALL</small><span>{contact.phone}</span></a>
              <a href={waLink()} target="_blank" rel="noopener noreferrer"><small>WHATSAPP</small><span>{contact.whatsapp}</span></a>
              <a href={contact.instagramHref} target="_blank" rel="noopener noreferrer"><small>INSTAGRAM</small><span>{contact.instagram}</span></a>
              <div><small>LOCATION</small><span>{contact.address}</span></div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form className="form" onSubmit={(e) => e.preventDefault()}>
              <label>
                Full name
                <input value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" />
              </label>
              <label>
                I&apos;m interested in
                <select value={interest} onChange={(e) => setInterest(e.target.value)}>
                  {interests.map((i) => <option key={i}>{i}</option>)}
                </select>
              </label>
              <label>
                Message
                <textarea rows={4} value={message} onChange={(e) => setMessage(e.target.value)} />
              </label>
              <a className="btn btn-whatsapp" href={waLink(text)} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon /> Send on WhatsApp
              </a>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
