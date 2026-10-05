import { services } from "@/lib/data";

export default function Marquee() {
  // the list is rendered twice so the loop has no gap
  const items = [...services, ...services];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {items.map((name, i) => (
          <span key={i}>{name}</span>
        ))}
      </div>
    </div>
  );
}
