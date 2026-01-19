import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const HeaderAction = () => {
  return (
    <div className="flex gap-2">
      <Button
        asChild
        variant="outline"
        className="px-6 py-3 text-base lg:text-lg rounded-4xl h-10 bg-transparent! border-primary text-primary hover:text-primary"
      >
        <Link href="/auth/login">Log In</Link>
      </Button>
      <Button
        asChild
        className="gradient-right-to-left rounded-4xl px-6! py-3 text-base lg:text-lg h-10"
      >
        <Link href="/auth/register">
          Sign Up <ArrowRight />
        </Link>
      </Button>
    </div>
  );
};

export default HeaderAction;
