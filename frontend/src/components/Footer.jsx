import React, { useState } from 'react';
import { ChevronDown, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqData = [
    {
      question: "What is 1base and how can it help my business?",
      answer: "1base is a comprehensive business solution that helps streamline your operations and grow your business efficiently."
    },
    {
      question: "How long does it take to launch my CRM?",
      answer: "Our CRM can be set up and launched within 24-48 hours, depending on your specific requirements and customizations."
    },
    {
      question: "Do you offer training?",
      answer: "Yes, we provide comprehensive training programs to ensure your team can effectively use all features of our platform."
    },
    {
      question: "Can I add more features beyond what's in the pricing table?",
      answer: "Absolutely! We offer custom features and integrations based on your specific business needs. Contact us to discuss your requirements."
    },
    {
      question: "Will the CRM support multiple companies?",
      answer: "Yes, our CRM is designed to handle multiple companies and can be configured for multi-tenant usage with proper data separation."
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <footer className="bg-[#4227EA] text-white">
      {/* FAQ Section */}
      <div className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left side - FAQ Header */}
            <div>
              <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                FREQUENTLY ASKED QUESTIONS
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                What you need to know. Clear answers for smart decisions.
              </h2>
            </div>

            {/* Right side - FAQ Items */}
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <div key={index} className="bg-gray-800 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-700 transition-colors duration-200"
                  >
                    <span className="font-medium text-white pr-4">{faq.question}</span>
                    <ChevronDown 
                      className={`w-5 h-5 text-gray-400 transition-transform duration-200 flex-shrink-0 ${
                        openFaq === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-4 text-gray-300 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-purple-900 via-blue-800 to-blue-950 rounded-3xl p-12 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-800 rounded-full -translate-y-32 translate-x-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500 rounded-full translate-y-24 -translate-x-24"></div>
              <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16"></div>
            </div>
            
            <div className="relative z-10 text-center">
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-8">
                Set up starts here. Talk to us today.
              </h3>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8 text-shadow-white">
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  <span>connect@1base.io</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  <span>+971 54 233 6430</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <span>Axiom Building, 66 Street, Dubai, Silicon Oasis</span>
                </div>
              </div>
              
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="px-6 py-8 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
                <span className="text-gray-900 font-bold text-sm">1b</span>
              </div>
              <span className="text-xl font-bold">1base</span>
            </div>

            {/* Navigation Links */}
            <div className="flex items-center gap-8">
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                What We Do
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                Pricing
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                FAQ
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors duration-200">
                <span className="text-sm font-bold">f</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors duration-200">
                <span className="text-sm font-bold">ig</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors duration-200">
                <span className="text-sm font-bold">in</span>
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-6 border-t border-gray-800 text-center">
            <p className="text-gray-400 text-sm">
              © 2025 OneBase. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;