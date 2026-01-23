import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { WhyChooseFeature } from "@/typescript/types";
import { DynamicIcon } from "lucide-react/dynamic";

interface Args {
  feature: WhyChooseFeature;
}

const FeatureCard = ({ feature }: Args) => {
  return (
    <Card className="rounded-4xl shadow-none border-primary py-[34px] hover:shadow-xl hover:drop-shadow-[0_10px_15px_rgba(59,130,246,0.2)] hover:-translate-y-2 transition-all duration-300">
      <CardHeader className="px-[34px]">
        <span className="bg-secondary/5 p-2 rounded-full w-14 h-14 flex items-center justify-center gradient-top-to-bottom">
          <DynamicIcon
            name={feature.icon}
            size={28}
            style={{ width: 28, height: 28 }}
            color={"#ffffff"}
          />
        </span>
      </CardHeader>
      <CardContent className="space-y-3 px-[34px]">
        <CardTitle className="text-2xl">{feature.title}</CardTitle>
        <CardDescription>{feature.description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
