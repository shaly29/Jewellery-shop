import { FiFacebook, FiInstagram, FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { FaPinterestP, FaYoutube } from "react-icons/fa";
import { GiLotus } from "react-icons/gi";
import { footerLinks } from "../data/content";

const socials = [
  { icon: FiFacebook, href: "#", label: "Facebook" },
  { icon: FiInstagram, href: "#", label: "Instagram" },
  { icon: FaPinterestP, href: "#", label: "Pinterest" },
  { icon: FaYoutube, href: "#", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-wine-900 text-white/70 pt-16 pb-8">
      <div className="container-px mx-auto max-w-8xl grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <a href="#home" className="flex items-center gap-2.5">
            <GiLotus className="text-gold text-2xl" />
            <span className="flex flex-col leading-none">
              <span className="font-display text-lg tracking-[0.15em] text-white">
                AURELIA
              </span>
              <span className="text-[8px] tracking-[0.3em] text-gold-light mt-0.5">
                FINE JEWELLERY
              </span>
            </span>
          </a>
          <p className="mt-5 text-sm leading-relaxed max-w-xs">
            Timeless Beauty. Endless Memories. Handcrafted jewellery for
            life's most precious occasions.
          </p>
          <div className="mt-6 flex gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="grid place-items-center w-9 h-9 rounded-full bg-white/5 hover:bg-gold hover:text-wine-900 transition-colors duration-300"
              >
                <Icon className="text-sm" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-white font-semibold text-base">Quick Links</h4>
          <ul className="mt-5 space-y-3">
            {footerLinks.quickLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm hover:text-gold-light transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-white font-semibold text-base">Customer Service</h4>
          <ul className="mt-5 space-y-3">
            {footerLinks.customerService.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-sm hover:text-gold-light transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-white font-semibold text-base">Contact Us</h4>
          <ul className="mt-5 space-y-4">
            <li className="flex items-center gap-3 text-sm">
              <FiPhone className="shrink-0 text-gold" />
              +1 (212) 555-7890
            </li>
            <li className="flex items-center gap-3 text-sm">
              <FiMail className="shrink-0 text-gold" />
              hello@aureliajewellery.com
            </li>
            <li className="flex items-start gap-3 text-sm">
              <FiMapPin className="mt-0.5 shrink-0 text-gold" />
              350 Fifth Avenue, New York, NY 10118, USA
            </li>
          </ul>
        </div>
      </div>

      <div className="container-px mx-auto max-w-8xl mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-white/40 text-center sm:text-left">
          © 2026 Aurelia Fine Jewellery. All Rights Reserved.
        </p>
        <div className="flex gap-3 text-xs text-white/40 tracking-wide">
          <span>VISA</span>
          <span>MASTERCARD</span>
          <span>AMEX</span>
          <span>PAYPAL</span>
        </div>
      </div>
    </footer>
  );
}