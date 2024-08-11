import WordPullUp from '@/components/magicui/word-pull-up';
import { useState } from 'react';
import { FaCar, FaComments, FaHeartbeat, FaHome } from 'react-icons/fa';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([{ sender: 'bot', text: 'Hello! How can I help you today?' }]);
  const [userInput, setUserInput] = useState('');

  const handleViewPolicies = () => {
    navigate('/policies');
  };

  const predefinedResponses = {
    hi: "Hello! How can I assist you today?",
    policies: "We offer various insurance policies including health, auto, and home insurance.",
    health: "Our health insurance covers medical expenses, routine check-ups, and emergency care.",
    auto: "Our auto insurance covers vehicle damages, accidents, and liability.",
    home: "Our home insurance protects your home, belongings, and liability against accidents.",
    claims: "To file a claim, please visit our claims page or contact our support team.",
    support: "You can reach our support team at support@policychunk.com or call us at (123) 456-7890.",
    contact: "You can contact us at contact@policychunk.com or call us at (123) 456-7890.",
    office: "Our office is located at 123 Insurance St, Policy City, PC 12345.",
    hours: "Our office hours are Monday to Friday, 9 AM to 5 PM."
  };

  const handleSendMessage = () => {
    if (userInput.trim()) {
      setMessages([...messages, { sender: 'user', text: userInput }]);
      const userMessage = userInput.toLowerCase().trim();
      const botResponse = predefinedResponses[userMessage] || "I'm sorry, I didn't understand that. Can you please rephrase?";
      setTimeout(() => {
        setMessages((prevMessages) => [...prevMessages, { sender: 'bot', text: botResponse }]);
      }, 1000);
      setUserInput('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const reviews = [
    {
      name: 'John Doe',
      review: 'PolicyChunk Insurance provides excellent service and support. Their health insurance plan saved me a lot of money! I highly recommend their services to anyone looking for comprehensive coverage and excellent customer support. Their team is always ready to assist with any queries and the claims process is seamless.',
      rating: '★★★★★',
      backgroundColor: '#f0f4f8'
    },
    {
      name: 'Jane Smith',
      review: 'I have my auto insurance with PolicyChunk and I am very satisfied. Quick and easy claims process. The coverage options are extensive and affordable. I feel secure knowing that PolicyChunk has my back in case of any incidents on the road.',
      rating: '★★★★☆',
      backgroundColor: '#f9f7f7'
    },
    {
      name: 'Michael Johnson',
      review: 'Great home insurance options. The coverage is comprehensive and the premiums are affordable. I appreciate the detailed explanations provided by their representatives, making it easier to choose the right policy for my needs.',
      rating: '★★★★★',
      backgroundColor: '#eef6f9'
    },
    {
      name: 'Emily Davis',
      review: 'Customer service is top-notch. They were very helpful in explaining the different policies available. I never felt rushed or pressured, and they took the time to ensure I understood everything. Their professionalism is commendable.',
      rating: '★★★★★',
      backgroundColor: '#f6f8fa'
    },
    {
      name: 'David Brown',
      review: 'I highly recommend PolicyChunk Insurance for their professionalism and quality service. The policies are well-structured, and the customer service team is always ready to assist with any concerns. I have never experienced such a smooth and reassuring process before.',
      rating: '★★★★☆',
      backgroundColor: '#f0f4f8'
    }
  ];

  return (
    <div className='w-full flex flex-col'>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-300 text-black text-center py-20 w-full">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold mt-8">
            <WordPullUp
              className="text-4xl font-bold tracking-[-0.02em] text-black dark:text-white md:text-7xl md:leading-[5rem]"
              words="Insure You With PolicyChunk Insurance"
            />
          </h1>
          <p className="text-xl mt-4">Find the best policies tailored just for you.</p>
          <button
            onClick={handleViewPolicies}
            className="mt-8 px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded hover:from-blue-600 hover:to-indigo-600 transition duration-300 shadow-lg"
          >
            View Policies
          </button>
        </div>
      </section>

      {/* Cards Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105 hover:shadow-xl border-l-4 border-b-4 border-blue-500">
              <FaHeartbeat className="text-5xl text-blue-500 mx-auto mb-4 animate-bounce" />
              <h3 className="text-3xl font-semibold mb-4">Health Insurance</h3>
              <p className="text-gray-700">Comprehensive coverage for medical expenses, routine check-ups, and emergency care. Protect your health and well-being.</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105 hover:shadow-xl border-l-4 border-b-4 border-green-500">
              <FaCar className="text-5xl text-green-500 mx-auto mb-4 animate-bounce" />
              <h3 className="text-3xl font-semibold mb-4">Auto Insurance</h3>
              <p className="text-gray-700">Coverage for vehicle damages, accidents, and liability. Ensure peace of mind while driving with our auto insurance plans.</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105 hover:shadow-xl border-l-4 border-b-4 border-red-500">
              <FaHome className="text-5xl text-red-500 mx-auto mb-4 animate-bounce" />
              <h3 className="text-3xl font-semibold mb-4">House Insurance</h3>
              <p className="text-gray-700">Protection for your home, belongings, and liability against accidents. Secure your living space with our comprehensive home insurance options.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">What Our Customers Say</h2>
          <Carousel
            showArrows={true}
            showThumbs={false}
            autoPlay
            infiniteLoop
            interval={2000}
            transitionTime={500}
            className="carousel-container"
          >
            {reviews.map((review, index) => (
              <div key={index} className="p-6 text-center" style={{ backgroundColor: review.backgroundColor }}>
                <p className="text-2xl font-semibold mb-2">{review.name}</p>
                <p className="text-lg text-gray-700 mb-4">{review.review}</p>
                <p className="text-yellow-500 text-xl">{review.rating}</p>
              </div>
            ))}
          </Carousel>
        </div>
      </section>

      {/* Chatbot Button */}
      <button
        onClick={() => setChatOpen(!chatOpen)}
        className="fixed bottom-4 right-4 p-4 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
      >
        <FaComments className="text-2xl" />
      </button>

      {/* Chatbot Window */}
      {chatOpen && (
        <div className="fixed bottom-16 right-4 w-80 h-96 bg-white shadow-lg rounded-lg flex flex-col">
          <div className="flex justify-between items-center p-4 bg-blue-500 text-white rounded-t-lg">
            <h2 className="text-lg font-semibold">Chat with us</h2>
            <button onClick={() => setChatOpen(false)} className="text-2xl">&times;</button>
          </div>
          <div className="flex-1 p-4 overflow-y-auto">
            {messages.map((message, index) => (
              <div key={index} className={`mb-2 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
                <p className={`inline-block p-2 rounded-lg ${message.sender === 'user' ? 'bg-blue-100' : 'bg-gray-100'}`}>
                  {message.text}
                </p>
              </div>
            ))}
          </div>
          <div className="p-4 border-t border-gray-200">
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="Type your message..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyPress={handleKeyPress}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
