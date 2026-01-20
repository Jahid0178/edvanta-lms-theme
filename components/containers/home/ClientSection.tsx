import Image from "next/image";
import Marquee from "react-fast-marquee";
import { clients } from "@/data";

const ClientSection = () => {
  return (
    <Marquee className="gap-[96px] py-[43px] bg-white">
      <div className="flex items-center gap-[96px]">
        {[...clients, ...clients].map((client, index) => (
          <Image
            key={index}
            src={client}
            alt={`client-${index}`}
            width={100}
            height={100}
            quality={75}
            className="w-full h-full object-contain"
          />
        ))}
      </div>
    </Marquee>
  );
};

export default ClientSection;
