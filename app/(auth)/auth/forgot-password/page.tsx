import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import ForgotPasswordForm from "@/components/forms/ForgotPasswordForm/ForgotPasswordForm";

const ForgotPasswordPage = () => {
  return (
    <div className="grid grid-cols-12 h-full overflow-hidden">
      <section className="col-span-12 lg:col-span-7 xl:col-span-8 flex items-center justify-center">
        <div className="flex flex-col gap-4">
          <Button
            asChild
            variant={"link"}
            className="justify-start"
          >
            <Link href="/auth/login">
              <ArrowLeft size={16} /> Back to login
            </Link>
          </Button>
          <ForgotPasswordForm />
        </div>
      </section>
      <section className="hidden col-span-12 lg:col-span-5 xl:col-span-4 bg-indigo-500 lg:flex flex-col justify-center items-center gap-6 text-center text-white p-4 h-screen">
        <Image
          src="/images/illustrations/svg/forgot-password.svg"
          alt="Forgot Password"
          width={430}
          height={346}
        />
      </section>
    </div>
  );
};

export default ForgotPasswordPage;
