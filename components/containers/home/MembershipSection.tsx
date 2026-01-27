import React from "react";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";
import { memberships } from "@/data";
import SectionHeader from "@/components/common/SectionHeader/SectionHeader";
import MembershipCard from "@/components/cards/MembershipCard/MembershipCard";

const MembershipSection = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="flex items-center justify-center flex-col gap-6">
          <Badge
            className="px-4 py-2 flex gap-2 bg-secondary/5 border-none text-secondary"
            variant={"outline"}
          >
            <Sparkles
              size={16}
              style={{ width: 16, height: 16 }}
            />{" "}
            Membership Plans
          </Badge>
          <SectionHeader
            title="Choose Your Learning Path"
            description="The most trusted platform for skill-based learning"
            position="center"
          />
        </div>
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
  );
};

export default MembershipSection;
