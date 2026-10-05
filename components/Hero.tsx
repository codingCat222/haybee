import Image from "next/image";
import { waLink } from "@/lib/whatsapp";
import Particles from "./Particles";
import Reveal from "./Reveal";
import { WhatsAppIcon } from "./Icons";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <Particles />
      <div className="container hero-grid">
        <div className="hero-text">
          <Reveal>
            <p className="eyebrow gold-text">CREATIVE. MODERN. MEMORABLE.</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1>
              Let&apos;s bring your ideas <em>to life.</em>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="hero-lead">
              Painting, branding, 3D wall art and custom gifts for homes, shops and celebrations in Ibadan.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="btn-row">
              <a className="btn btn-gold" href="#work">See our work</a>
              <a className="btn btn-outline" href={waLink()} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon /> Chat on WhatsApp
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="hero-visual">
          <div className="arch">
            <Image src="/images/house.jpg" alt="Two-storey house painted by Hay Bee Concepts" fill priority sizes="(max-width: 860px) 100vw, 560px" />
          </div>
          <div className="logo-card">
            <Image src="/images/logo.png" alt="Hay Bee Concepts logo" width={898} height={652} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}