
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
    <div className=" bg-[#00161d] flex flex-col justify-center px-4 py-12 md:px-16 md:flex-row">
      <h1 className="mb-6 text-4xl font-[300]  font-spaceGrotesk md:text-5xl md:mr-16 text-white md:max-w-[500px] leading-[50px] md:leading-[60px]">Frequently Asked Questions</h1>

      <div className="space-y-8">
        {faqData.map((question, index) => (
          <div key={index} >
            {/* Question Header */}
            <div
              className="flex items-center"
              
            >
            <FaPlus className="mr-4 w-3 text-[#B0F9FF]" />
              <h2 className="text-lg font-semibold text-white ">{question}</h2>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
