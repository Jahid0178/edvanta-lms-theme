import RegisterForm from "@/components/forms/RegisterForm/RegisterForm";

const RegisterPage = () => {
  return (
    <div className="grid grid-cols-12 h-full overflow-hidden">
      <section className="hidden col-span-12 lg:col-span-5 xl:col-span-4 bg-indigo-500 lg:flex flex-col justify-center items-center gap-6 text-center text-white p-4 h-screen">
        <h1 className="scroll-m-20 text-center text-4xl font-bold tracking-tight text-balance">
          Join 50,000+ Learners
        </h1>
        <p className="text-xl">
          Get access to 500+ expert-led courses and earn industry-recognized
          certificates
        </p>
      </section>
      <section className="col-span-12 lg:col-span-7 xl:col-span-8 flex items-center justify-center">
        <RegisterForm />
      </section>
    </div>
  );
};

export default RegisterPage;
