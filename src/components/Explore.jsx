import React from "react";

const Explore = () => {
  return (
    <div className="flex items-center justify-center h-full px-2 py-12 bg-[#011C29]">
      <div className="bg-custom-radial  md:max-w-3xl px-2 py-12 mx-4 text-center text-white border border-[#63F2FF] rounded-[16px]">
        <h1 className="mb-6 text-4xl font-[300]">Explore Our <span className="text-[#62F0FE]">dApp</span></h1>
        <p className="mb-8 text-lg md:mx-12">
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
