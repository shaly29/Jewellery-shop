import {
  FiFacebook,
  FiInstagram,
  FiPhone,
  FiMail,
  FiMapPin,
} from "react-icons/fi";
import { FaPinterestP, FaYoutube } from "react-icons/fa";
import { footerLinks } from "../data/content";
import logo from "../assets/images/logo.jpg";

const socials = [
  { icon: FiFacebook, href: "https://web.facebook.com/xdreamjewellery?_rdc=1&_rdr#", label: "Facebook" },
  { icon: FiInstagram, href: "https://www.instagram.com/xdreamjewellery_toongabbie/", label: "Instagram" },
  { icon: FaPinterestP, href: "#", label: "Pinterest" },
  { icon: FaYoutube, href: "#", label: "YouTube" },
];

export default function Footer() {
  return (
    // bg-wine-900 & text-gold classes pick up the real X Dream brand
    // colors (#c73051 rose-pink / #d5aa5c gold) from tailwind.config.js
    <footer id="contact" className="bg-wine-900 text-white/70 pt-16 pb-8">
      <div className="container-px mx-auto max-w-8xl grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <a href="#home" className="flex items-center gap-2.5">
            {/* X Dream Jewellery logo — replaces the GiLotus icon + Aurelia wordmark */}
            <img
              src={logo}
              alt="X Dream Jewellery logo"
              className="h-10 w-auto "
            />
            <span className="flex flex-col leading-none">
              <span className="font-display text-lg tracking-[0.15em] text-white">
                X DREAM
              </span>
              <span className="text-[8px] tracking-[0.3em] text-gold-light mt-0.5">
                JEWELLERY
              </span>
            </span>
          </a>
          <p className="mt-4 text-sm leading-relaxed max-w-xs">
            X Dream jewellery is renowned for its magnificent pieces and rare
            craftsmanship — a pleasing combination of modern and traditional
            jewellery.
          </p>
          <div className="mt-4 flex gap-3">
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
          <h4 className="font-display text-white font-semibold text-base">
            Quick Links
          </h4>
          <ul className="mt-4 space-y-3">
            {footerLinks.quickLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm hover:text-gold-light transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-white font-semibold text-base">
            Customer Service
          </h4>
          <ul className="mt-4 space-y-3">
            {footerLinks.customerService.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm hover:text-gold-light transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-white font-semibold text-base">
            Contact Us
          </h4>
          <ul className="mt-4 space-y-4">
            <li className="flex items-center gap-3 text-sm">
              <FiPhone className="shrink-0 text-gold" />
              02 8677 4490
            </li>
            <li className="flex items-center gap-3 text-sm">
              <FiMail className="shrink-0 text-gold" />
              08xdream@gmail.com
            </li>
            <li className="flex items-start gap-3 text-sm">
              <FiMapPin className="mt-0.5 shrink-0 text-gold" />
              8 Aurelia St, Toongabbie, NSW 2146, Australia
            </li>
          </ul>
        </div>
      </div>

      <div className="container-px mx-auto max-w-8xl mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-white/40 text-center sm:text-left">
          © 2026 X Dream Jewellery. All Rights Reserved.
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