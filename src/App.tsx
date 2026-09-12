import { Footer } from '@/components/layout/Footer';
import { Navigation } from '@/components/layout/Navigation';
import { PageTransition } from '@/components/layout/PageTransition';
import { AboutPage } from '@/pages/AboutPage';
import { ContactPage } from '@/pages/ContactPage';
import { DonatePage } from '@/pages/DonatePage';
import { GalleryPage } from '@/pages/GalleryPage';
import { HomePage } from '@/pages/HomePage';
import { OurWorkPage } from '@/pages/OurWorkPage';
import { PrivacyPage } from '@/pages/PrivacyPage';
import { ReportsPage } from '@/pages/ReportsPage';
import { Route, Routes } from 'react-router-dom';

const routes = (
  <Routes>
    <Route element={<HomePage />} index />
    <Route element={<OurWorkPage />} path="/our-work" />
    <Route element={<AboutPage />} path="/about" />
    <Route element={<ContactPage />} path="/contact" />
    <Route element={<DonatePage />} path="/donate" />
    <Route element={<GalleryPage />} path="/gallery" />
    <Route element={<PrivacyPage />} path="/privacy" />
    <Route element={<ReportsPage />} path="/reports" />
  </Routes>
);

export function App() {
  return (
    <div className="min-h-screen bg-white text-black overflow-x-hidden">
      <Navigation />
      <PageTransition>{routes}</PageTransition>
      <Footer />
    </div>
  );
}