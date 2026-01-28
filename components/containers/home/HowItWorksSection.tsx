import Image from "next/image";
import { howItWorks } from "@/data";
import { HowItWork } from "@/typescript/types";
import { DynamicIcon } from "lucide-react/dynamic";
import SectionHeader from "@/components/common/SectionHeader/SectionHeader";

const HowItWorksSection = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <SectionHeader
              title="How It Works"
              titleClassName="text-3xl lg:text-[56px]"
            />
            <ul className="flex flex-col gap-8 mt-6">
              {howItWorks.map((item) => (
                <HowItWorksItem
                  key={item.id}
                  item={item}
                />
              ))}
            </ul>
          </div>
          <div>
            <Image
              src="/images/home/how-works.png"
              alt="How It Works"
              width={1050}
              height={1050}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const HowItWorksItem = ({ item }: { item: HowItWork }) => {
  return (
    <li>
      <div
        className={`flex items-center gap-6 ${item.reverse ? "flex-row-reverse" : "flex-row"}`}
      >
        <h3 className="hidden md:block text-5xl md:text-6xl lg:text-9xl text-gray-300">
          {item.subtitle}
        </h3>
        <div className="flex flex-row items-center gap-4 p-6 border rounded-2xl shadow-[0_22px_53px_-6px_rgba(65,77,96,0.3)] bg-white">
          <div
            className={`min-w-14 min-h-14 rounded-full flex items-center justify-center ${item.color.background}`}
          >
            <DynamicIcon
              name={item.icon}
              size={24}
              className={`${item.color.text}`}
            />
          </div>
          <div className="space-y-1">
            <h3 className="text-xl md:text-2xl font-semibold">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default HowItWorksSection;
