import Group from "../assets/Group21.png";
import svg4 from "../assets/Container.png";
import Ai from "../assets/Ai.png";
import portfolio from "../assets/portfolio.png";
import SearchIcon from '../assets/SearchIcon.png';

const Features = () => {
  return (
    <div className="px-4 py-8 font-normal text-center font-spaceGroteskh">
      {/* Main Heading */}
      <h1 className="mb-4 text-[40px] text-white">Our Features</h1>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* Feature 1: Trade Optimizer */}
        <div className="bg-[#0C2B2F] border border-[#0F373C] rounded-[16px] w-full p-6 flex flex-col justify-center items-center text-center">
          <img src={Group} alt="" className="w-[120px] h-[118px] mb-2" />
          <h1 className="mt-4 mb-3 text-3xl text-white">Trade Optimizer</h1>
          <p className="text-[#b0faffb3] text-2xl">
            Find the right moments to buy or sell, with personalized trade
            suggestions designed to help you make the most of every opportunity.
          </p>
        </div>

        {/* Feature 2: Market Insight */}
        <div className="relative bg-[#0C2B2F] border border-[#0F373C] rounded-[16px] w-full p-6 text-left">
          <div
            className="absolute right-0 w-32 top-0 bottom-0 h-[150px]"
            style={{
              backgroundImage: `url(${svg4})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              opacity: 0.7,
            }}
          />
          <h1 className="mb-2 text-3xl font-normal text-white">Market Insight</h1>
          <p className="text-[#b0faffb3] text-2xl mr-12">
            Stay ahead of the market. Get real-time updates on market trends,
            track top traders' movements, and spot signals from key influencers.
          </p>
        </div>

        {/* Feature 3: Risk Guard */}
        <div
          className="bg-[#0C2B2F] border border-[#0F373C] rounded-[16px] w-full p-6 text-center flex flex-col justify-center items-center"
        >
          <h1 className="mb-2 text-3xl font-normal text-white">Risk Guard</h1>
          <p className="text-[#b0faffb3] text-2xl">
            Get alerts on market swings and potential risks before they impact
            your portfolio. This agent helps you navigate volatility and stay
            prepared for anything.
          </p>
          <img src={Ai} alt="Ai img" className="max-w-[350px] mt-4" />
        </div>

        {/* Feature 4: Portfolio Sync */}
        <div className="relative bg-[#0C2B2F] border border-[#0F373C] rounded-[16px] w-full p-6 text-left">
          <h1 className="mb-2 text-3xl text-white">Portfolio Sync</h1>
          <p className="text-[#b0faffb3] text-2xl max-w-[450px]">
            Easily manage your portfolio. You'll always know what you own, how
            it's performing, and where it’s headed.
          </p>
          <img
            src={portfolio}
            alt="Wallet Icon"
            className="absolute h-auto w-[120px] bottom-0 right-0"
          />
        </div>

        {/* Feature 5: Opportunity Scout */}
        <div className="relative bg-[#0C2B2F] border border-[#0F373C] rounded-[16px] w-full p-6 text-left">
          <h1 className="mb-2 text-3xl text-white">Opportunity Scout</h1>
          <p className="text-[#b0faffb3] text-2xl">
            Find exciting new projects, events, and tokens that others might be
            missing. Identifying promising opportunities early, so you never
            miss out on the next big thing.
          </p>
          <div className="flex items-end justify-end mt-5 -mr-5">
            <img
              src={SearchIcon}
              alt="Search Icon"
              className="w-[200px] h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
