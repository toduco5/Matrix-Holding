import TopBar from "../components/TopBar.jsx";
import Header from "../components/Header.jsx";
import Banner from "../components/Banner.jsx";
import Features from "../components/Features.jsx";
import About from "../components/About.jsx";
import EcosystemWheel from "../components/EcosystemWheel.jsx";
import Testimonials from "../components/Testimonials.jsx";
import Services from "../components/Services.jsx";
import BusinessGrowth from "../components/BusinessGrowth.jsx";
import Blog from "../components/Blog.jsx";
import CommunityProjects from "../components/CommunityProjects.jsx";
import Skills from "../components/Skills.jsx";
import DesignGallery from "../components/DesignGallery.jsx";
import Footer from "../components/Footer.jsx";
import PageMeta from "../components/PageMeta.jsx";

export default function Home() {
  return (
    <>
      <PageMeta title="Matrix Holding | Hệ sinh thái cộng đồng kết nối đầu tư" description="Kết nối nhà đầu tư, chủ dự án và đối tác chuyên môn trên nền tảng thông tin rõ ràng và hợp tác có trách nhiệm." />
      <TopBar />
      <Header />
      <main>
        <Banner />
        <Features />
        <About />
        <EcosystemWheel />
        <Testimonials />
        <Services />
        <Skills />
        <DesignGallery />
        <BusinessGrowth />
        <CommunityProjects />
        <Blog />
      </main>
      <Footer />
    </>
  );
}
