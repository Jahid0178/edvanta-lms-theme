import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 px-4 text-white bg-linear-280 from-[#865AEF] to-[#331DA8]">
      <Image
        src="/images/not-found.png"
        alt="Not Found"
        width={700}
        height={700}
        className="w-full max-w-[620px] max-h-[620px] object-contain"
        priority
      />

      <h1 className="text-4xl font-bold">404 Not Found</h1>

      <p className="text-lg text-white/90 text-center">
        The page you are looking for does not exist.
      </p>

      <Button
        asChild
        variant="outline"
        className="bg-transparent px-6 py-3 h-auto rounded-full text-base text-white border-white hover:bg-white hover:text-[#331DA8]"
      >
        <Link
          href="/"
          className="flex items-center gap-2"
        >
          <ArrowLeft size={14} />
          Back to Home
        </Link>
      </Button>
    </div>
  );
}
