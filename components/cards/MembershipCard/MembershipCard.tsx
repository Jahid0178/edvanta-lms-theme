import React from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Membership } from "@/typescript/types";
import { CircleCheckBig, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Args {
  membership: Membership;
}

const MembershipCard = ({ membership }: Args) => {
  return (
    <Card
      className={`${membership.isPopular ? "gradient-left-to-right text-white" : ""} relative py-8`}
    >
      {membership.isPopular && (
        <Badge className="px-4 py-2 absolute -translate-x-1/2 -top-4 lg:-top-5 left-1/2 bg-linear-to-r from-[#865AEF] to-[#4285F4] flex gap-2 items-center text-sm lg:text-base font-bold">
          <Sparkles
            size={16}
            style={{ width: 16, height: 16 }}
          />{" "}
          Most Popular
        </Badge>
      )}
      <CardHeader className="px-8">
        <div className="flex flex-col gap-2">
          <CardTitle className="text-2xl">{membership.name}</CardTitle>
          <CardDescription
            className={`${membership.isPopular ? "text-white" : ""} text-base`}
          >
            {membership.description}
          </CardDescription>
          <span
            className={`${membership.isPopular ? "text-white" : ""} text-[40px] font-bold`}
          >
            <span>${membership.price}</span>
            <sub
              className={`text-sm font-normal ${membership.isPopular ? "text-white" : "text-gray-500"}`}
            >
              /{membership.period}
            </sub>
          </span>
        </div>
      </CardHeader>
      <CardContent className="px-8">
        <ul className="space-y-4">
          {membership.features.map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-3"
            >
              <CircleCheckBig
                size={16}
                color={membership.isPopular ? "white" : "#22C55E"}
              />{" "}
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="px-8">
        <Button
          asChild
          className={`${membership.isPopular ? "text-secondary hover:text-secondary" : ""} w-full text-base`}
          variant={"outline"}
        >
          <Link href={membership.button.link}>{membership.button.label}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default MembershipCard;
