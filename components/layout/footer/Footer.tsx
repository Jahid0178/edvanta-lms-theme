import FooterTop from "./FooterTop";
import FooterBottom from "./FooterBottom";

const Footer = () => {
  return (
    <footer className="bg-linear-300 from-[#865AEF] to-[#331DA8] text-white">
      <div className="container">
        <FooterTop />
        <FooterBottom />
      </div>
    </footer>
  );
};

export default Footer;
