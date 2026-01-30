import Link from "next/link";
import { footerSocialLinks } from "@/data";
import { DynamicIcon } from "lucide-react/dynamic";

const FooterBottom = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="py-[52px] flex flex-col md:flex-row items-center justify-between gap-4 border-t border-white/20">
      {/* Copyright section */}
      <p className="text-base leading-relaxed text-center md:text-left">
        © {currentYear} Edvanta by{" "}
        <Link
          target="_blank"
          href="https://www.stackstudio.tech"
          className="hover:underline"
        >
          StackStudio.tech
        </Link>
        . All rights reserved.
      </p>
      {/* Social links section */}
      <ul className="flex items-center gap-8">
        {footerSocialLinks.map((link) => (
          <li key={link.id}>
            <Link href={link.url}>
              <DynamicIcon
                name={link.icon}
                size={20}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterBottom;
