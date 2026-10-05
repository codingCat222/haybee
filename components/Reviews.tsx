import { reviews } from "@/lib/data";
import Reveal from "./Reveal";

export default function Reviews() {
  return (
    <section className="section section-dark">
      <div className="container">
        <Reveal><p className="eyebrow gold-text">REVIEWS</p></Reveal>
        <Reveal delay={0.08}><h2>What customers say</h2></Reveal>
        <div className="reviews">
          {reviews.map((r, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <figure className="review">
                <blockquote>{r.quote}</blockquote>
                <figcaption>
                  <b>{r.name}</b> {r.project}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
