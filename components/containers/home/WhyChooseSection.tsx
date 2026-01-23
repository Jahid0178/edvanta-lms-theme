import FeatureCard from "@/components/cards/FeatureCard/FeatureCard";
import SectionHeader from "@/components/common/SectionHeader/SectionHeader";
import { Badge } from "@/components/ui/badge";
import { whyChooseFeatures } from "@/data";
import { Sparkles } from "lucide-react";

const WhyChooseSection = () => {
  return (
    <section className="py-[60px]">
      <div className="container">
        <div className="flex flex-col items-center gap-6">
          <Badge className="px-4 py-2 gap-2 bg-secondary/5 text-secondary">
            <Sparkles
              size={16}
              style={{ width: 16, height: 16 }}
            />{" "}
            Plans
          </Badge>
          <SectionHeader
            title="Why Choose Edvanta?"
            description="The most trusted platform for skill-based learning"
            position="center"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-[54px]">
          {whyChooseFeatures.map((feature) => (
            <FeatureCard
              key={feature.id}
              feature={feature}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
