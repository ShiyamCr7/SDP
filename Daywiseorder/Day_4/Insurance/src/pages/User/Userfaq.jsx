import React, { useState } from 'react';

const faqData = [
  {
    question: 'What types of insurance policies do you offer?',
    answer: 'We offer a range of insurance policies including health insurance, car insurance, home insurance, and travel insurance. Each policy is tailored to meet different needs and coverage requirements.'
  },
  {
    question: 'How can I apply for a policy?',
    answer: 'You can apply for a policy by filling out the application form on our website, or by contacting our customer service team for assistance. Once your application is reviewed, we will get in touch with you to finalize the process.'
  },
  {
    question: 'What is the coverage of a typical policy?',
    answer: 'The coverage of a policy depends on the type of insurance and the specific plan you choose. For example, health insurance typically covers medical expenses, while car insurance covers damage to your vehicle and liability. Detailed coverage information is provided in each policy description.'
  },
  {
    question: 'How can I check the status of my claim?',
    answer: 'You can check the status of your claim by logging into your account on our website and navigating to the claims section. You can also contact our customer service team for updates on your claim status.'
  },
  {
    question: 'What should I do if I need to update my policy details?',
    answer: 'If you need to update your policy details, you can do so by logging into your account and accessing the policy management section. Alternatively, you can contact our customer service team to assist you with the updates.'
  },
  {
    question: 'How can I contact customer support?',
    answer: 'You can contact customer support through our website’s contact form, via email, or by calling our customer service hotline. Our team is available 24/7 to assist you with any questions or issues.'
  },
  {
    question: 'What should I do if I forget my login credentials?',
    answer: 'If you forget your login credentials, you can use the "Forgot Password" feature on the login page to reset your password. If you encounter any issues, please contact our support team for assistance.'
  },
  {
    question: 'Are there any discounts available for new customers?',
    answer: 'We offer various promotions and discounts for new customers. Check our website or contact our sales team to find out about current offers and eligibility criteria.'
  },
  {
    question: 'How do I cancel my policy?',
    answer: 'To cancel your policy, please log into your account and navigate to the policy management section. Follow the cancellation instructions provided. You may also contact our customer support for assistance with policy cancellation.'
  },
  {
    question: 'What are the payment options available?',
    answer: 'We accept various payment methods including credit/debit cards, bank transfers, and online payment services. You can select your preferred payment option during the checkout process.'
  },
  {
    question: 'Can I add additional coverage to my existing policy?',
    answer: 'Yes, you can add additional coverage to your existing policy. Please log into your account or contact our customer service team to discuss your needs and make the necessary adjustments.'
  },
  {
    question: 'How do I file a complaint?',
    answer: 'To file a complaint, please use the contact form on our website or send us an email detailing your issue. Our team will review your complaint and get back to you as soon as possible.'
  },
  {
    question: 'What is the process for renewing my policy?',
    answer: 'Policy renewal can be done through your account on our website. You will receive a renewal notice before your policy expires. Follow the instructions in the notice to complete the renewal process.'
  }
];

const FaqPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-4xl font-extrabold mb-6 text-gray-900">Frequently Asked Questions</h1>
        <div>
          {faqData.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => handleToggle(index)}
                className="w-full text-left py-4 px-6 bg-gray-200 rounded-lg focus:outline-none flex justify-between items-center transition-colors duration-300 hover:bg-gray-300"
              >
                <h2 className="text-xl font-semibold text-gray-800">{faq.question}</h2>
                <svg
                  className={`w-6 h-6 transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-max-height duration-500 ease-in-out ${openIndex === index ? 'max-h-40' : 'max-h-0'}`}
                style={{ maxHeight: openIndex === index ? '10rem' : '0' }}
              >
                <p className="p-6 text-gray-700">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .transition-max-height {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.5s ease-in-out;
        }
        .transition-max-height-max-height-0 {
          max-height: 10rem;
        }
        svg {
          transition: transform 0.3s ease;
        }
      `}</style>
    </div>
  );
};

export default FaqPage;
