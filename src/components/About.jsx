import asset from "../assets/asset.svg";
import Tool from "../assets/tool.svg";
import Future from "../assets/future.svg";
import Graph from "../assets/graph.svg";
const About = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full px-4 py-12 text-center md:px-32 lg:px-64">
      <h1 className="text-[40px] text-white">About EthAi</h1>
      <p className="text-[#b0faffb3] my-6 lg:mx-16">
        At EthAi, we’re all about making crypto trading easier and more
        intuitive. We provide tools that help traders keep up with all new
        market trends, track top traders’ movements.
      </p>
      <button className="bg-[#b0faff] border-2  border-[#19BACD] text-black  py-3 px-8 rounded-[14px] ">
        Read more
      </button>

      {/* Cards Container */}
      <div className="bg-[#0C2B2F] grid grid-cols-1 md:grid-cols-2 text-left space-y-6 mt-8 rounded-[12px] p-6">
        {/* Card 1 */}
        <div className="flex flex-col items-start p-4 rounded-lg ">
          <img src={Graph} alt="Stay Ahead" className="w-8 mb-2" />
          <h1 className="mb-2 text-lg font-semibold text-white">Stay Ahead</h1>
          <p className="text-[#b0faffb3]">
            No more guesswork—get clear, trustable insights.
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-start p-4 rounded-lg ">
          <img src={asset} alt="Know Your Assets" className="w-8 mb-2" />
          <h1 className="mb-2 text-lg font-semibold text-white">
            Know Your Assets
          </h1>
          <p className="text-[#b0faffb3]">
            Always stay on top of how your investments are performing.
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-start p-4 rounded-lg ">
          <img src={Tool} alt="Simple, Not Overwhelming" className="w-8 mb-2" />
          <h1 className="mb-2 text-lg font-semibold text-white">
            Simple, Not Overwhelming
          </h1>
          <p className="text-[#b0faffb3]">
            Our tools are designed to make complex market analysis easy to
            understand and act on.
          </p>
        </div>

        {/* Card 4 */}
        <div className="flex flex-col items-start p-4 rounded-lg ">
          <img src={Future} alt="Future-Proof" className="w-8 mb-2" />
          <h1 className="mb-2 text-lg font-semibold text-white">
            Future-Proof
          </h1>
          <p className="text-[#b0faffb3]">
            We’re constantly improving, adding new features to help you make the
            most informed decisions possible.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
