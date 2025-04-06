import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "How does VESTI work?",
    answer: "Our AI-powered virtual try-on technology lets you see exactly how clothes will look on you before buying. Simply upload a photo, select the clothing item you want to try, and get an instant preview of how it fits your body."
  },
  {
    question: "How long does it take to set up?",
    answer: "Setup is quick and easy! Just install our Chrome extension, and you're ready to start virtual try-ons immediately. No complicated configuration needed."
  },
  {
    question: "What about size and fit?",
    answer: "Our advanced AI technology provides accurate size recommendations based on your measurements and preferences. This helps ensure you always get the perfect fit when shopping online."
  },
  {
    question: "Help! I'm on a fashion site and I don't see anything.",
    answer: "Make sure the VESTI extension is properly installed and enabled in your Chrome browser. If you're still having issues, try refreshing the page or reinstalling the extension."
  },
  {
    question: "What happens to my photo?",
    answer: "Your privacy and security are our top priority. All photos are processed locally on your device and are never stored on our servers. We use state-of-the-art encryption to ensure your data remains private and secure."
  },
  {
    question: "What are best practices for uploading a try-on photo?",
    answer: "For best results, use a well-lit photo taken against a plain background. Wear fitted clothing, stand straight, and ensure your full body is visible. This helps our AI create the most accurate virtual try-on experience."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-pink-50"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-2/3 h-2/3 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full filter blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-2/3 h-2/3 bg-gradient-to-br from-pink-200/20 to-purple-200/20 rounded-full filter blur-3xl"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Want to submit a brand, give feedback, or otherwise get in touch? Reach out to us at{' '}
            <a 
              href="mailto:contact@getvesti.com" 
              className="text-purple-600 hover:text-purple-700 transition-colors"
            >
              contact@getvesti.com
            </a>
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full text-left px-6 py-4 flex items-center justify-between"
              >
                <h3 className="text-lg font-bold text-gray-900">{item.question}</h3>
                <ChevronDown
                  className={`w-5 h-5 text-purple-600 transition-transform duration-300 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-600">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 