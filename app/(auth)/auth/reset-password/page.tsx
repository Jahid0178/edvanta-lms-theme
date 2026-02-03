import Image from "next/image";
import ResetPasswordForm from "@/components/forms/ResetPasswordForm/ResetPasswordForm";

const ResetPasswordPage = () => {
  return (
    <div className="grid grid-cols-12 h-full overflow-hidden">
      <section className="col-span-12 lg:col-span-7 xl:col-span-8 flex items-center justify-center">
        <ResetPasswordForm />
      </section>
      <section className="hidden col-span-12 lg:col-span-5 xl:col-span-4 bg-indigo-500 lg:flex flex-col justify-center items-center gap-6 text-center text-white p-4 h-screen">
        <Image
          src="/images/illustrations/svg/completing.svg"
          alt="Forgot Password"
          width={430}
          height={346}
        />
      </section>
    </div>
  );
};

export default ResetPasswordPage;
