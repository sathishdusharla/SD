import React from 'react';

const CareersPage: React.FC = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

  return (
    <div className="container mx-auto px-4 sm:px-8 py-16 sm:py-24 min-h-[60vh] flex items-center justify-center">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold uppercase text-white font-heading tracking-wide">
          Careers
        </h1>
        <p className="mt-8 text-lg text-gray-300 leading-relaxed border-t border-gray-800 pt-8">
          We are always looking for talented individuals to join our team. Information about open positions and our company culture will be available here shortly.
        </p>
      </div>
    </div>
  );
};

export default CareersPage;