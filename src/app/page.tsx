import HeroSection from "@/components/HeroSection";
import ProcessSection from "@/components/ProcessSection";
import ProjectSection from "@/components/ProjectSection";
import ServicesSection from "@/components/ServicesSection";
import BlogSection from "@/components/BlogSection";
import ProductsSection from "@/components/ProductsSection";
// import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="flex flex-col">
        <div className="order-2 md:order-1">
          <ProcessSection />
        </div>
        <div className="order-1 md:order-2">
          <ProjectSection />
        </div>
      </div>
      <ServicesSection />
      <BlogSection />
      <ProductsSection />
    </>
  );
}
