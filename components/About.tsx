import Image from "next/image";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container about-grid">
        <div>
          <Reveal><p className="eyebrow">ABOUT US</p></Reveal>
          <Reveal delay={0.08}><h2>A creative studio for every finish.</h2></Reveal>
          <Reveal delay={0.16}>
            <p className="lead">
              Hay Bee Concepts paints houses, designs brands and makes the signs, gifts and artwork people remember.
              We design it, make it and deliver it.
            </p>
          </Reveal>
          <Reveal delay={0.22}>
            <p className="lead tagline">We give the best.</p>
          </Reveal>
        </div>
        <Reveal delay={0.12}>
          <div className="about-photo">
            <Image src="/images/wall-art.jpg" alt="Portrait wall art" fill sizes="(max-width: 860px) 100vw, 520px" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
