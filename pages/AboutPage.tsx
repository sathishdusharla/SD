import React from 'react';

const AboutPage: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto px-4 sm:px-8 py-16 sm:py-24 min-h-[60vh] flex items-center justify-center">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold uppercase text-white font-heading tracking-wide">
          About Us
        </h1>
        <div className="mt-8 text-lg text-gray-300 leading-relaxed border-t border-gray-800 pt-8">
          <p>We are strategic designers.</p>
          <p className="mt-4">We think strategically and design solutions.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;