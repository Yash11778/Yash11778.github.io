import Link from "next/link";
import { Mail, Linkedin, Instagram } from "lucide-react";
import { SITE_NAME, SOCIAL_LINKS, PHONE_NUMBERS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="relative pt-16 md:pt-24 border-t border-neutral-200 dark:border-white/10 overflow-hidden bg-neutral-50 dark:bg-black flex flex-col justify-between">
      {/* Social & Contact Bar */}
      <div className="w-full max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center md:items-end gap-10 mb-16 md:mb-24 relative z-20">
        {/* Contact Stack & Copyright */}
        <div className="flex flex-col items-center md:items-start gap-3 order-2 md:order-1 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start gap-1.5 text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 font-medium mb-2">
            <strong>Contact Us:</strong>
            {PHONE_NUMBERS.map((phone) => (
              <a
                key={phone.wa}
                href={phone.wa}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-neutral-900 dark:hover:text-white transition-colors"
              >
                {phone.display}
              </a>
            ))}
          </div>

          <p className="text-neutral-500 dark:text-neutral-400 text-sm font-medium">
            &copy; {new Date().getFullYear()} Daemons Build. Engineered for
            scale.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-6 order-1 md:order-2">
          <Link
            href={SOCIAL_LINKS.email}
            className="text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </Link>
          <Link
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </Link>
          <Link
            href={SOCIAL_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Massive Glowing Text */}
      <div className="w-full relative flex items-end justify-center pointer-events-none select-none overflow-visible mt-2 pb-[10vw] md:pb-[5vw]">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-neutral-400/20 dark:bg-white/10 blur-[80px] md:blur-[100px] rounded-full z-0" />
        <h2 className="text-[19.5vw] md:text-[18vw] leading-[0.85] font-bold tracking-tighter text-neutral-900 dark:text-white relative z-10 drop-shadow-sm dark:drop-shadow-[0_0_40px_rgba(255,255,255,0.2)] whitespace-nowrap">
          {SITE_NAME}
          <span className="text-neutral-400 dark:text-neutral-600">.</span>
        </h2>
      </div>
    </footer>
  );
}
