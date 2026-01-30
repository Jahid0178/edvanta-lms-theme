import React from "react";
import { Stats } from "@/typescript/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DynamicIcon } from "lucide-react/dynamic";

interface Args {
  stats: Stats;
}

const StatsCard = ({ stats }: Args) => {
  return (
    <Card
      className="justify-center items-center gap-4 shadow-none"
      role="region"
      aria-labelledby={`stats-title-${stats.id}`}
    >
      <CardHeader className="w-16 h-16 rounded-xl flex items-center justify-center bg-blue-100/50">
        <span>
          <DynamicIcon
            name={stats.icon}
            size={32}
            className="text-blue-600"
            aria-hidden="true"
          />
        </span>
      </CardHeader>
      <CardContent className="space-y-2 text-center">
        <CardTitle
          className="text-3xl"
          id={`stats-title-${stats.id}`}
        >
          {stats.title}
        </CardTitle>
        <CardDescription className="text-base">
          {stats.subtitle}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default StatsCard;
