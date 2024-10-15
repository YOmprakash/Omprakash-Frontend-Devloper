
import { FaPlus } from 'react-icons/fa';

const FAQ = () => {
  // State to manage the open/close status of each question

  // Array of questions
  const faqData = [
    'What is EthAi?',
    'How can EthAi can help me as a Trader?',
    'Who can use EthAi?',
    'How does EthAi track smart money flow?',
    'How does ensure data security?',
  ];

  return (
    <div className="px-4 py-12">
      <h1 className="mb-6 text-4xl text-white">Frequently Asked Questions</h1>

      <div className="space-y-8">
        {faqData.map((question, index) => (
          <div key={index} >
            {/* Question Header */}
            <div
              className="flex items-center"
              
            >
            <FaPlus className="mr-4 text-lg  text-[#0C2B2F]" />
              <h2 className="text-lg font-semibold text-white ">{question}</h2>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
