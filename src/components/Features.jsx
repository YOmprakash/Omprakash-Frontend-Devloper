
import svg3 from "../assets/svg3.svg";
import svg4 from "../assets/svg4.svg";
import ai from "../assets/ai.svg";
import portfolio from "../assets/portfolio.svg";
import SearchIcon from '../assets/SearchIcon.svg';
const Features = () => {
  return (
    <div className="h-full px-4 py-8 text-center">
      {/* Main Heading */}
      <h1 className="mb-4 text-[40px] text-white">Our Features</h1>

      <div className="space-y-3">
        {/* Feature 1: Trade Optimizer */}
        <div className="bg-[#0C2B2F] border border-[#0F373C] rounded-[16px] w-full p-4 flex flex-col justify-center items-center text-center">
          <img src={svg3} alt="" className="w-20 mb-2" />
          <h1 className="mb-2 text-2xl text-white">Trade Optimizer</h1>
          <p className="text-[#b0faffb3]">
            Find the right moments to buy or sell, with personalized trade
            suggestions designed to help you make the most of every opportunity.
          </p>
        </div>

        {/* Feature 2: Market Insight */}
        <div className="relative bg-[#0C2B2F] border border-[#0F373C] rounded-[16px] w-full p-4 text-left">
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

          <h1 className="mb-2 text-2xl text-white">Market Insight</h1>
          <p className="text-[#b0faffb3]">
            Stay ahead of the market. Get real-time updates on market trends,
            track top traders' movements, and spot signals from key influencers.
          </p>
        </div>

        {/* Feature 3: Risk Guard */}
        <div
          className="bg-[#0C2B2F] border border-[#0F373C] rounded-[16px] w-full p-4 text-center flex flex-col justify-center items-center
        "
        >
          <h1 className="mb-2 text-2xl text-white">Risk Guard</h1>
          <p className="text-[#b0faffb3]">
            Get alerts on market swings and potential risks before they impact
            your portfolio. This agent helps you navigate volatility and stay
            prepared for anything.
          </p>
          <img src={ai} alt="" className="w-[200px] mt-4" />
        </div>

        {/* Feature 4: Portfolio Sync */}
        <div className="relative bg-[#0C2B2F] border border-[#0F373C] rounded-[16px] w-full p-4 text-left">
          <h1 className="mb-2 text-2xl text-white">Portfolio Sync</h1>
          <p className="text-[#b0faffb3]">
            Easily manage your portfolio. You'll always know what you own, how
            it's performing, and where it’s headed.
          </p>
          <img
        src={portfolio}
        alt='Wallet Icon'
        className='absolute w-20 h-auto bottom-2 right-2'
      />
        </div>

        {/* Feature 5: Opportunity Scout */}
        <div className="relative bg-[#0C2B2F] border border-[#0F373C] rounded-[16px] h-56  w-80 p-4 text-left">
          <h1 className="mb-2 text-2xl text-white">Opportunity Scout</h1>
          <p className="text-[#b0faffb3]">
            Find exciting new projects, events, and tokens that others might be
            missing. Identifying promising opportunities early, so you never
            miss out on the next big thing.
          </p>
          <img
        src={SearchIcon}
        alt='Search Icon'
        className='absolute w-16 h-auto right-4 bottom-4'
      />
        </div>
      </div>
    </div>
  );
};

export default Features;
