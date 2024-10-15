import React from "react";

const Explore = () => {
  return (
    <div className="flex items-center justify-center h-full px-2 py-12">
      <div className="max-w-2xl px-2 py-8 mx-4 text-center text-white border rounded-[16px]">
        <h1 className="mb-6 text-4xl font-bold">Explore Our dApp</h1>
        <p className="mb-8 text-lg">
          EthAi is an AI-powered dApp designed to help traders make smarter,
          data-driven decisions. By tracking smart money flows, monitoring key
          wallets, and providing real-time market insights, EthAi empowers users
          to stay ahead of trends. The platform offers intuitive AI Features for
          asset recommendations, market analysis, and personalized crypto Q&A,
          making it the ultimate tool for both novice and experienced traders.
        </p>
        <button className="bg-[#b0faff] border-2  border-[#19BACD] text-black font-semibold py-3 px-8 rounded-[14px] ">
          Open dApp
        </button>
      </div>
    </div>
  );
};

export default Explore;
