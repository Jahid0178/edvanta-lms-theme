import Link from "next/link";
import { footerQuickLinks } from "@/data";
import { DynamicIcon } from "lucide-react/dynamic";
import Logo from "@/components/common/Logo/Logo";

const FooterTop = () => {
  return (
    <div className="pt-[100px] pb-[52px]">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-4 xl:col-span-6">
          <div className="w-full max-w-md">
            <Logo className="text-white" />
            <p className="text-base leading-relaxed mt-[52px]">
              Edvanta is a leading online learning platform that provides
              high-quality courses to students worldwide. We offer a wide range
              of courses in various fields, including technology, business, and
              more.
            </p>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-4 xl:col-span-3">
          <h3 className="text-2xl font-bold">Quick Links</h3>
          <ul className="flex flex-col gap-4 mt-[52px]">
            {footerQuickLinks.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.href}
                  className="text-base leading-relaxed"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-12 lg:col-span-4 xl:col-span-3">
          <h3 className="text-2xl font-bold">Contact us</h3>
          <ul className="flex flex-col gap-4 mt-[52px]">
            <li>
              <Link
                href="tel:+1234567890"
                className="flex items-center gap-6"
              >
                <DynamicIcon
                  name="phone"
                  size={20}
                  style={{ width: 20, height: 20 }}
                />
                <span>(209) 555-0104</span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center gap-6"
              >
                <DynamicIcon
                  name="map-pin"
                  size={20}
                  style={{ width: 20, height: 20 }}
                />
                <span>2715 Ash Dr. San Jose, South Dakota 83475</span>
              </Link>
            </li>
            <li>
              <Link
                href="mailto:stackstudio.tech@gmail.com"
                className="flex items-center gap-6"
              >
                <DynamicIcon
                  name="mail"
                  size={20}
                  style={{ width: 20, height: 20 }}
                />
                <span>stackstudio.tech@gmail.com</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
