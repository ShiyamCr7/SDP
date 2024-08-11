import React from 'react';
import { FaCheckCircle, FaShieldAlt, FaHome, FaUmbrella } from 'react-icons/fa';

const HomeInsurance = () => {
  return (
    <div className="container mx-auto p-8 bg-gray-50 shadow-lg rounded-lg">
      <div className="bg-gradient-to-r from-green-500 to-green-700 text-white p-6 rounded-lg mb-6">
        <h1 className="text-4xl font-bold mb-4">Home Insurance</h1>
        <p className="text-xl">
          Our Home Insurance plans provide protection for your home, belongings, and liability against accidents. Secure your living space with our comprehensive plans.
        </p>
      </div>

      <div className="mb-6">
        <img src={homeInsuranceImage} alt="Home Insurance" className="w-full h-64 object-cover rounded-lg shadow-md" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Coverage Highlights</h2>
          <ul className="list-disc list-inside text-lg mb-4 space-y-2">
            <li>Comprehensive home coverage</li>
            <li>Protection for personal belongings</li>
            <li>Liability coverage</li>
            <li>Coverage against natural disasters</li>
            <li>Loss of use coverage</li>
            <li>Optional add-ons for enhanced protection</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
          <p className="text-lg mb-4">
            Our Home Insurance plans are tailored to provide maximum protection for your home and peace of mind for you. Here's why you should choose us:
          </p>
          <ul className="list-disc list-inside text-lg mb-4 space-y-2">
            <li>24/7 customer support</li>
            <li>Easy and fast claims process</li>
            <li>Competitive and affordable premiums</li>
            <li>Customizable plans to suit your needs</li>
            <li>Discounts for bundled policies</li>
            <li>Expert advice and support</li>
          </ul>
        </div>
      </div>

      <div className="bg-green-100 p-6 rounded-lg mt-6">
        <h2 className="text-2xl font-semibold mb-4">Testimonials</h2>
        <div className="flex space-x-4 overflow-x-auto">
          <div className="w-1/3 min-w-max p-4 bg-white rounded-lg shadow-md">
            <p className="text-lg mb-2">"I feel much safer knowing my home is protected. The claims process was quick and easy!"</p>
            <p className="text-gray-700">- Sarah Thompson</p>
          </div>
          <div className="w-1/3 min-w-max p-4 bg-white rounded-lg shadow-md">
            <p className="text-lg mb-2">"Excellent coverage options and great customer service. Highly recommend!"</p>
            <p className="text-gray-700">- Mark Johnson</p>
          </div>
          <div className="w-1/3 min-w-max p-4 bg-white rounded-lg shadow-md">
            <p className="text-lg mb-2">"Affordable premiums and comprehensive coverage. Very satisfied with my plan."</p>
            <p className="text-gray-700">- Emily Davis</p>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <button className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-700 text-white font-semibold rounded-lg shadow-md hover:from-green-600 hover:to-green-800 transition duration-300">
          Get a Quote
        </button>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">What does home insurance cover?</h3>
            <p className="text-lg">
              Home insurance typically covers the structure of your home, personal belongings, liability for injuries, and additional living expenses if your home is uninhabitable due to a covered event.
            </p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">How do I file a claim?</h3>
            <p className="text-lg">
              You can file a claim online, over the phone, or through our mobile app. Our team is available 24/7 to assist you with the claims process and ensure a smooth experience.
            </p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Are there any discounts available?</h3>
            <p className="text-lg">
              Yes, we offer discounts for bundling multiple policies, having a security system, being claims-free, and more. Contact us to learn about the discounts you may be eligible for.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Additional Resources</h2>
        <div className="flex space-x-4">
          <div className="w-1/3 p-4 bg-green-50 rounded-lg shadow-md text-center">
            <FaCheckCircle className="text-green-500 text-3xl mb-2" />
            <h3 className="text-lg font-semibold mb-2">Home Safety Tips</h3>
            <p className="text-gray-700">
              Learn how to protect your home from common hazards and keep your family safe.
            </p>
          </div>
          <div className="w-1/3 p-4 bg-green-50 rounded-lg shadow-md text-center">
            <FaShieldAlt className="text-green-500 text-3xl mb-2" />
            <h3 className="text-lg font-semibold mb-2">Insurance Guide</h3>
            <p className="text-gray-700">
              Understand the basics of home insurance and how to choose the right policy for your needs.
            </p>
          </div>
          <div className="w-1/3 p-4 bg-green-50 rounded-lg shadow-md text-center">
            <FaUmbrella className="text-green-500 text-3xl mb-2" />
            <h3 className="text-lg font-semibold mb-2">Policy Benefits</h3>
            <p className="text-gray-700">
              Discover the benefits and features of our home insurance plans.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeInsurance;
