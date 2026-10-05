import { waLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./Icons";

export default function FloatingWhatsApp() {
  return (
    <a className="fab" href={waLink()} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
      <WhatsAppIcon />
      <span>Order Now</span>
    </a>
  );
}
