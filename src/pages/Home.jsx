import Header from "../components/Header.jsx";
import Banner from "../components/Banner.jsx";
import About from "../components/About.jsx";
import FourEcosystems from "../components/FourEcosystems.jsx";
import WorkflowProcess from "../components/WorkflowProcess.jsx";
import Commitments from "../components/Commitments.jsx";
import CompetitiveAdvantages from "../components/CompetitiveAdvantages.jsx";
import HomeNews from "../components/HomeNews.jsx";
import HomeCareers from "../components/HomeCareers.jsx";
import HomeFAQ from "../components/HomeFAQ.jsx";
import Footer from "../components/Footer.jsx";
import PageMeta from "../components/PageMeta.jsx";

export default function Home() {
  return (
    <div className="page-home">
      <PageMeta title="Matrix Holding | Hệ sinh thái đầu tư đa ngành" description="Matrix Holding kết nối vốn, dự án và năng lực triển khai trong một hệ sinh thái đa ngành minh bạch." />
      <Header />
      <main>
        <Banner />
        <About />
        <FourEcosystems />
        <WorkflowProcess />
        <Commitments />
        <CompetitiveAdvantages />
        <HomeNews />
        <HomeCareers />
        <HomeFAQ />
      </main>
      <Footer />
    </div>
  );
}
