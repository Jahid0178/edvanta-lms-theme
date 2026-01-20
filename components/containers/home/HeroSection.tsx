import { Suspense } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { CircleCheckBig, Sparkle } from "lucide-react";
import HeroSearchBar from "./HeroSearchBar";
import HeroSearchBarSkeleton from "@/components/skeletons/HeroSearchBarSkeleton";

const HeroSection = () => {
  return (
    <section className="relative h-[calc(100vh-200px)] xl:h-[calc(100vh-100px)] overflow-hidden">
      <Image
        src="/images/bg/hero-bg.png"
        alt="Hero Background"
        fill
        className="object-cover -z-10"
        priority
      />
      <div className="container h-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center pt-24 h-full">
          {/* LEFT CONTENT */}
          <div className="space-y-8">
            <div className="space-y-6">
              <Badge
                variant={"default"}
                className="py-2 px-4 gap-2 border border-white/30 bg-white/5 backdrop-blur-xl shadow-lg"
              >
                <Sparkle
                  size={16}
                  style={{ width: 16, height: 16 }}
                />
                #1 Skills Learning Platform
              </Badge>

              <h1 className="text-3xl md:text-4xl xl:text-6xl leading-tight font-bold text-white">
                From Learning to Mastery All in One Place
              </h1>

              <p className="text-white text-sm">
                A complete learning experience designed to turn knowledge into
                expertise.
              </p>

              <Suspense fallback={<HeroSearchBarSkeleton />}>
                <HeroSearchBar />
              </Suspense>
            </div>
            <ul className="flex items-center gap-6">
              <li className="flex items-center gap-2">
                <CircleCheckBig
                  size={16}
                  color={"#22C55E"}
                />
                <span className="text-white">50+ Skills</span>
              </li>
              <li className="flex items-center gap-2">
                <CircleCheckBig
                  size={16}
                  color={"#22C55E"}
                />
                <span className="text-white">95% Success Rate</span>
              </li>
            </ul>
          </div>
          {/* RIGHT IMAGE */}
          <div className="relative h-full hidden lg:block">
            <Image
              src="/images/home/hero-image.png"
              alt="Hero Image"
              width={800}
              height={900}
              priority
              className="absolute bottom-0 right-0 xl:right-[-60px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
