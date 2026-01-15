import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Process from '@/components/Process';
import Requirements from '@/components/Requirements';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Clients from '@/components/Clients';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <Process />
      <Requirements />
      <Testimonials />
      <FAQ />
      <Clients />
      <Footer />
    </main>
  );
}
