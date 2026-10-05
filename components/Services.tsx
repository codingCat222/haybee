import { services } from "@/lib/data";
import { waLink } from "@/lib/whatsapp";
import Reveal from "./Reveal";

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <Reveal><p className="eyebrow">SPECIALIZED IN</p></Reveal>
        <Reveal delay={0.08}><h2>Everything creative, under one roof.</h2></Reveal>
        <Reveal delay={0.16}><p className="lead">Tap any service to ask for a quote on WhatsApp.</p></Reveal>

        <ul className="service-list">
          {services.map((name, i) => (
            <li key={name}>
              <a href={waLink(`Hi Hay Bee Concepts! I need a quote for ${name}.`)} target="_blank" rel="noopener noreferrer">
                <span className="service-num">{String(i + 1).padStart(2, "0")}</span>
                <span className="service-name">{name}</span>
                <span className="service-arrow" aria-hidden="true">↗</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
