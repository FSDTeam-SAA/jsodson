import CTA from "@/components/cta";
import Curriculum from "@/components/curriculum";
import Dashboards from "@/components/dashboards";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import HowItWorks from "@/components/how-it-works";
import Navbar from "@/components/navbar";
import PowerfulTools from "@/components/powerful-tools";
import Testimonials from "@/components/testimonials";


export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <HowItWorks />
      <PowerfulTools />
      <Curriculum/>
      <Dashboards/>
      <Testimonials/>
      <CTA/>
      <Footer/>
    </div>
  )
}
