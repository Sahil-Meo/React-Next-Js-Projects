import Instructers from "@/components/Instructers"
import FeaturedCourses from "../components/FeaturedCourses"
import HeroSection from "../components/HeroSection"
import { TestimonialCards } from "../components/TestimonialCards"
import UpcomingWebinars from "../components/UpcomingWebinars"
import WhyChoseUs from "../components/WhyChoseUs"
import Footer from "@/components/Footer"
import Botton from "../components/Botton"

function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedCourses />
      <WhyChoseUs />
      <TestimonialCards />
      <UpcomingWebinars />
      <Instructers />
      {/* <Footer /> */}
      {/* <Botton /> */}
    </main>
  )
}

export default Home
