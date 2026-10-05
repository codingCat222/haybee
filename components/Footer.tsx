import { contact } from "@/lib/data";
import { waLink } from "@/lib/whatsapp";
import { InstagramIcon, PhoneIcon, WhatsAppIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <p className="brand">HAY BEE <span>CONCEPTS</span></p>
            <p className="footer-blurb">Creative. Modern. Memorable. Painting, branding and custom gifts from Ibadan.</p>
            <div className="socials">
              <a href={waLink()} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><WhatsAppIcon /></a>
              <a href={contact.instagramHref} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><InstagramIcon /></a>
              <a href={contact.phoneHref} aria-label="Call us"><PhoneIcon /></a>
            </div>
          </div>

          <div>
            <h4>QUICK LINKS</h4>
            <a href="#top">Home</a>
            <a href="#about">About</a>
            <a href="#work">Our Work</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </div>

          <div>
            <h4>WHAT WE DO</h4>
            <a href="#services">House and 3D Wall Painting</a>
            <a href="#services">Branding and Logos</a>
            <a href="#services">Signs, Neon and Billboards</a>
            <a href="#services">Frames and Plaques</a>
            <a href="#services">Souvenirs and Gifts</a>
          </div>

          <div>
            <h4>VISIT US</h4>
            <p>{contact.address}</p>
            <p>{contact.phone}<br />{contact.whatsapp}</p>
            <a className="btn btn-gold" href={waLink()} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon /> Order via WhatsApp
            </a>
          </div>
        </div>

        <div className="footer-bar">
          <span>&copy; {new Date().getFullYear()} Hay Bee Concepts. All rights reserved.</span>
          <span>We give the best.</span>
        </div>
        <p className="footer-mark" aria-hidden="true">HAY BEE CONCEPTS</p>
      </div>
    </footer>
  );
}
