import Header from "../components/Header.jsx";
import Banner from "../components/Banner.jsx";
import About from "../components/About.jsx";
import FourEcosystems from "../components/FourEcosystems.jsx";
import HomeNews from "../components/HomeNews.jsx";
import PartnerCTA from "../components/PartnerCTA.jsx";
import Cooperation from "../components/Cooperation.jsx";
import Footer from "../components/Footer.jsx";
import PageMeta from "../components/PageMeta.jsx";
import SectionDivider from "../components/SectionDivider.jsx";
import StrategicPartners from "../components/StrategicPartners.jsx";

// Keep the full cooperation section available to restore later.
const SHOW_COOPERATION = false;

export default function Home() {
  return (
    <div className="page-home">
      <PageMeta title="Matrix Holding | Hệ sinh thái đầu tư đa ngành" description="Matrix Holding kết nối vốn, dự án và năng lực triển khai trong một hệ sinh thái đa ngành minh bạch." />
      <Header />
      <main>
        <Banner />
        <StrategicPartners />
        <SectionDivider />
        <About />
        <SectionDivider />
        <FourEcosystems />
        <SectionDivider />
        <HomeNews />
        {SHOW_COOPERATION && (
          <>
            <SectionDivider />
            <Cooperation />
          </>
        )}
        <SectionDivider />
        <PartnerCTA />
      </main>
      <SectionDivider />
      <Footer />
    </div>
  );
}
