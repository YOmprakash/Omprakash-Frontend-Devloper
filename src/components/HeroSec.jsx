const HeroSec = () => {
  return (
    <div className="flex   flex-col items-center justify-center h-full pt-14  pb-16 text-center bg-gradient-to-b from-[#00161D] to-[#00161D]">
      <h1 className="text-5xl md:max-w-[700px] max-w-[300px] leading-snug md:leading-[80px] text-white md:text-6xl">
        When Innovation Meets 
        <span className="inline-block md:inline ml-4 mt-4 bg-[#CDFCFF] text-black px-6 py-2 rounded-full text-[32px] md:text-[40px]">
          Innovation
        </span>
      </h1>
      <p className="text-lg md:text-xl text-[#b0faffb3] mt-8 max-w-[300px] md:max-w-[600px]">
        Empowering Trading Through Advanced Technology
      </p>
      <button className="bg-[#CDFCFF] border-2 font-normal  border-[#4CDDFD] text-black px-6 py-2 rounded-[12px] mt-6 text-[16px] md:text-xl shadow-lg hover:shadow-xl transition-all">
        Open dApp
      </button>
    </div>
  );
};

export default HeroSec;
