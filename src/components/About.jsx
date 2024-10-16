import asset from "../assets/asset.svg";
import Tools from "../assets/Tools.png";

import Graph from "../assets/graph.png";
import Future from '../assets/Future.png';
const About = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full px-4 py-12 text-center font-spaceGrotesk md:px-32 lg:px-64">
      <h1 className="text-[45px] font-semibold text-white">About EthAi</h1>
      <p className="text-[#B0FAFF]  font-normal my-6 mx-14">
        At EthAi, we’re all about making crypto trading easier and more
        intuitive. We provide tools that help traders keep up with all new
        market trends, track top traders’ movements.
      </p>
      <button className="bg-[#CDFCFF] border-2  border-[#4CDDFD] text-black  py-3 px-8 rounded-[14px] ">
        Read more
      </button>

      {/* Cards Container */}
      <div className="bg-[#0C2B2F] font-spaceGrotesk grid grid-cols-1 md:grid-cols-2 text-left space-y-6 mt-8 rounded-[12px] p-6">
        {/* Card 1 */}
        <div className="flex flex-col items-start p-4 rounded-lg ">
          <img src={Graph} alt="Stay Ahead" className="w-10 mb-2" />
          <h1 className="mb-2 text-[22px] font-[500] text-white">Stay Ahead</h1>
          <p className="text-[#B0FAFF] text-lg">
            No more guesswork—get clear, trustable insights.
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-start p-4 rounded-lg ">
          <img src={asset} alt="Know Your Assets" className="w-10 mb-2" />
          <h1 className="mb-2 font-[500] text-white text-[22px]">
            Know Your Assets
          </h1>
          <p className="text-[#B0FAFF] text-lg">
            Always stay on top of how your investments are performing.
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-start p-4 rounded-lg ">
          <img src={Tools} alt="Simple, Not Overwhelming" className="w-10 mb-2" />
          <h1 className="mb-2 text-[22px] font-[500] text-white">
            Simple, Not Overwhelming
          </h1>
          <p className="text-[#B0FAFF] text-lg">
            Our tools are designed to make complex market analysis easy to
            understand and act on.
          </p>
        </div>

        {/* Card 4 */}
        <div className="flex flex-col items-start p-4 rounded-lg ">
          <img src={Future} alt="Future-Proof" className="w-10 mb-2" />
          <h1 className="mb-2 text-lg text-[22px] text-white font-[500]">
            Future-Proof
          </h1>
          <p className="text-[#B0FAFF] text-lg">
            We’re constantly improving, adding new features to help you make the
            most informed decisions possible.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
