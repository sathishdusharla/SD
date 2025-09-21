import React from 'react';

const ContactPage: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto px-4 sm:px-8 py-16 sm:py-24 min-h-[60vh] flex items-center justify-center">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold uppercase text-white font-heading tracking-wide">
          Contact Us
        </h1>
        <p className="mt-8 text-lg text-gray-300 leading-relaxed border-t border-gray-800 pt-8">
          Get in touch with us. You can reach us at <a href="mailto:contact@strategicdesigners.com" className="text-red-400 hover:underline">contact@strategicdesigners.com</a>.
        </p>
      </div>
    </div>
  );
};

export default ContactPage;
