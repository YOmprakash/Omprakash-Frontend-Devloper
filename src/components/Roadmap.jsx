import React from 'react';
import Check from '../assets/check.svg';
import Preview from '../assets/preview.png';

const Roadmap = () => {
  return (
    <div className='h-full font-spaceGrotesk  px-4 py-12 text-center bg-[#00161D]'>
      {/* Roadmap Heading */}
      <h1 className='text-[40px] font-[500] text-white mb-10'>Roadmap</h1>

      {/* Cards Container */}
      <div className='flex flex-col space-y-8'>
        
        {/* Phase 1 Card */}
        <div className='flex flex-col items-start md:items-center md:flex-row md:justify-between'>
          <div className='text-left md:ml-12'>
            <button className='bg-[#F7F7F7] text-[#0B2A2D] text-[12px] px-2 py-1 rounded-sm mb-4'>
              PHASE 1
            </button>
            <h1 className='mb-8 text-4xl text-white font-[300]'>
              Kicking Off
            </h1>
            <div className='space-y-6 text-[#EFEFE8]'>
              <div className='flex items-center'>
                <img src={Check} alt='check' className='w-6 h-6 mr-2' />
                <p>Launch of EthAi: Officially</p>
              </div>
              <div className='flex items-center'>
                <img src={Check} alt='check' className='w-6 h-6 mr-2' />
                <p>Development of Core AI Agents</p>
              </div>
              <div className='flex items-center'>
                <img src={Check} alt='check' className='w-6 h-6 mr-2' />
                <p>User Onboarding Campaign</p>
              </div>
              <div className='flex items-center'>
                <img src={Check} alt='check' className='w-6 h-6 mr-2' />
                <p>Community Engagement Initiatives</p>
              </div>
            </div>
          </div>
          <img src={Preview} alt='preview' className='w-full md:max-w-[500px] mt-8' />
        </div>

        {/* Phase 2 Card */}
        <div className='flex flex-col items-start md:items-center md:flex-row-reverse md:justify-between'>
          <div className='text-left md:mr-12'>
            <button className='bg-[#F7F7F7] text-[#0B2A2D] text-[12px] px-2 py-1 rounded-sm mb-4'>
              PHASE 2
            </button>
            <h1 className='mb-4  text-4xl font-[300] text-white '>
            Bigger Insights
            </h1>
            <div className='space-y-6 text-[#EFEFE8]'>
              <div className='flex items-center'>
                <img src={Check} alt='check' className='w-6 h-6 mr-2' />
                <p>Introduction of Advanced AI Agents</p>
              </div>
              <div className='flex items-center'>
                <img src={Check} alt='check' className='w-6 h-6 mr-2' />
                <p>Strategic Partnerships</p>
              </div>
              <div className='flex items-center'>
                <img src={Check} alt='check' className='w-6 h-6 mr-2' />
                <p>User Interface Optimization</p>
              </div>
              <div className='flex items-center'>
                <img src={Check} alt='check' className='w-6 h-6 mr-2' />
                <p>Comprehensive Marketing Campaign</p>
              </div>
            </div>
          </div>
          <img src={Preview} alt='preview' className='w-full md:max-w-[500px] mt-8' />
        </div>

        {/* Phase 3 Card */}
        <div className='flex flex-col items-start md:items-center md:flex-row md:justify-between'>
          <div className='text-left md:ml-12'>
            <button className='bg-white text-[#0B2A2D] px-2 py-1 text-[12px] rounded-sm mb-4'>
              PHASE 3
            </button>
            <h1 className='mb-4 text-4xl font-[300] text-white'>
              Full Power
            </h1>
            <div className='space-y-6 text-[#EFEFE8]'>
              <div className='flex items-center'>
                <img src={Check} alt='check' className='w-6 h-6 mr-2' />
                <p>Introduction of Enhanced Features</p>
              </div>
              <div className='flex items-center'>
                <img src={Check} alt='check' className='w-6 h-6 mr-2' />
                <p>API Integration for Data Access</p>
              </div>
              <div className='flex items-center'>
                <img src={Check} alt='check' className='w-6 h-6 mr-2' />
                <p>Launch of Community-Driven Initiatives</p>
              </div>
              <div className='flex items-center'>
                <img src={Check} alt='check' className='w-6 h-6 mr-2' />
                <p>Continuous Improvement and Updates</p>
              </div>
              
            </div>
          </div>
          <img src={Preview} alt='preview' className='w-full md:max-w-[500px] mt-8' />
        </div>

        
        
      </div>
    </div>
  );
};

export default Roadmap;
