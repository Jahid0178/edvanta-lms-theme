import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";

const VersionOneLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default VersionOneLayout;
