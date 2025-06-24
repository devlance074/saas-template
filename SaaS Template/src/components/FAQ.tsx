import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What is included in the free plan?',
      answer: 'The free plan includes up to 1,000 users, basic analytics, email support, standard templates, and 5GB of storage. Perfect for small teams getting started.',
    },
    {
      question: 'How does the 14-day free trial work?',
      answer: 'You can try any paid plan for 14 days completely free. No credit card required to start. If you decide to continue, you can upgrade to a paid plan at any time.',
    },
    {
      question: 'Can I change plans at any time?',
      answer: 'Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and billing is prorated based on your usage.',
    },
    {
      question: 'What kind of support do you offer?',
      answer: 'We offer email support for free users, priority support for Pro users, and dedicated support for Enterprise customers. Our average response time is under 2 hours.',
    },
    {
      question: 'Is my data secure?',
      answer: 'Absolutely. We use bank-level encryption, are SOC 2 compliant, and follow industry best practices for data security. Your data is encrypted at rest and in transit.',
    },
    {
      question: 'Do you offer refunds?',
      answer: 'Yes, we offer a 30-day money-back guarantee for all paid plans. If you\'re not satisfied, contact us within 30 days for a full refund.',
    },
    {
      question: 'Can I integrate with other tools?',
      answer: 'Yes! We offer extensive API access and pre-built integrations with popular tools like Slack, Salesforce, HubSpot, and many more.',
    },
    {
      question: 'What happens if I exceed my plan limits?',
      answer: 'We\'ll notify you when you\'re approaching your limits. You can either upgrade your plan or we\'ll discuss custom pricing for your specific needs.',
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Everything you need to know about our platform.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Still have questions?
          </p>
          <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;