"use client";

import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter, useSearchParams } from "next/navigation";

const HeroSearchBar = () => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const handleSearch = (term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("search", term);
    } else {
      params.delete("search");
    }
    replace(`/courses?${params.toString()}`);
  };
  return (
    <div className="relative max-w-xl">
      <Input
        placeholder="Search: Python, UI/UX, Robotics, Math..."
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get("search")?.toString()}
        className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-base! shadow-none w-full bg-white py-[22px] md:py-7 pl-[30px] pr-[150px] h-auto rounded-full placeholder:text-xs md:placeholder:text-base"
      />
      <Button className="rounded-full px-6! py-[12px] md:py-[16px] gap-2 h-auto text-base absolute top-1/2 right-[15px] translate-y-[-50%] gradient-right-to-left">
        <Search
          size={17}
          style={{ width: 17, height: 17 }}
        />
        Search
      </Button>
    </div>
  );
};

export default HeroSearchBar;
