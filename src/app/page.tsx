import Layout from '@/components/layout/Layout'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Services from '@/components/sections/Services'
import Testimonials from '@/components/sections/Testimonials'
import CTA from '@/components/sections/CTA'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <CTA />
    </Layout>
  )
}
