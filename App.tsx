import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import VideoPage from './pages/VideoPage';
import NewsPage from './pages/NewsPage';
import NewsArticlePage from './pages/NewsArticlePage';
import TechnologyPage from './pages/TechnologyPage';
import MissionPage from './pages/MissionPage';
import CareersPage from './pages/CareersPage';
import AboutPage from './pages/AboutPage';
import CommunityPage from './pages/CommunityPage';
import ContactPage from './pages/ContactPage';
import DocsPage from './pages/DocsPage';
import EcosystemPage from './pages/EcosystemPage';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="bg-black min-h-screen text-gray-200 font-sans antialiased">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/video/:id" element={<VideoPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/news/:id" element={<NewsArticlePage />} />
            <Route path="/technology" element={<TechnologyPage />} />
            <Route path="/mission" element={<MissionPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/docs" element={<DocsPage />} />
            <Route path="/ecosystem" element={<EcosystemPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;