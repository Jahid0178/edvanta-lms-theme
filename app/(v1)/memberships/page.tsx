import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { memberships, premiumBenefits } from "@/data";
import { DynamicIcon } from "lucide-react/dynamic";
import SectionHeader from "@/components/common/SectionHeader/SectionHeader";
import MembershipCard from "@/components/cards/MembershipCard/MembershipCard";

const MembershipsPage = () => {
  return (
    <React.Fragment>
      <section className="section bg-linear-to-t from-white to-blue-200/50">
        <div className="container">
          <div className="flex flex-col justify-center items-center gap-4 mt-11 text-center">
            <h1 className="text-5xl font-semibold">
              Membership{" "}
              <span className="gradient-left-to-right bg-clip-text text-transparent">
                Plans
              </span>
            </h1>
            <p className="text-lg text-gray-500">
              Choose the perfect plan for your learning journey
            </p>
          </div>
          <div className="mt-[52px] space-y-6 w-full max-w-[797px] mx-auto">
            <h4 className="text-2xl font-bold text-center">Premium Benefits</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {premiumBenefits.map((benefit, idx) => (
                <PremiumBenefitCard
                  key={idx}
                  benefit={benefit}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeader
            title="Choose Your Learning Path"
            description="The most trusted platform for skill-based learning"
            position="center"
          />
          <div className="mt-[52px] grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-8 w-full max-w-[1024px] mx-auto">
            {memberships.map((membership) => (
              <MembershipCard
                key={membership.id}
                membership={membership}
              />
            ))}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

const PremiumBenefitCard = ({ benefit }: { benefit: string }) => {
  return (
    <Card className="border-none flex-row items-center gap-4 shadow-md">
      <CardHeader className="pr-0 pl-6 py-0 gap-0">
        <DynamicIcon
          name="circle-check-big"
          size={20}
          color="#22C55E"
        />
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{benefit}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default MembershipsPage;
