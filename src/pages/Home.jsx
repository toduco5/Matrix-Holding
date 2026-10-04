import TopBar from "../components/TopBar.jsx";
import Header from "../components/Header.jsx";
import Banner from "../components/Banner.jsx";
import AudiencePaths from "../components/AudiencePaths.jsx";
import About from "../components/About.jsx";
import EcosystemWheel from "../components/EcosystemWheel.jsx";
import Services from "../components/Services.jsx";
import BusinessGrowth from "../components/BusinessGrowth.jsx";
import Blog from "../components/Blog.jsx";
import HomeFAQ from "../components/HomeFAQ.jsx";
import HomeCareers from "../components/HomeCareers.jsx";
import Footer from "../components/Footer.jsx";
import PageMeta from "../components/PageMeta.jsx";

export default function Home() {
  return <>
    <PageMeta title="Matrix Holding | Hệ sinh thái đầu tư đa ngành" description="Matrix Holding kết nối vốn, dự án và năng lực triển khai trong một hệ sinh thái đa ngành minh bạch." />
    <TopBar /><Header />
    <main>
      <Banner />
      <AudiencePaths />
      <About />
      <EcosystemWheel />
      <Services />
      <BusinessGrowth />
      <Blog />
      <HomeCareers />
      <HomeFAQ />
    </main>
    <Footer />
  </>;
}
