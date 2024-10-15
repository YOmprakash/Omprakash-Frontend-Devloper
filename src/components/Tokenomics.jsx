
import PieChart from '../assets/pie_chart.svg';
import svg1 from '../assets/svg-1.svg';
import svg2 from '../assets/svg-2.svg';
const Tokenomics = () => {
  return (
    <div className='flex flex-col items-center justify-center h-full px-4 py-12 '>
      <h1 className='mb-8 text-4xl text-center text-white'>Tokenomics</h1>
      <div className='flex flex-col items-center justify-center md:flex-row'>
        <img src={PieChart} alt='chart' className='w-full md:w-[500px]' />  
        <div className='ml-8'>
        <img src={svg1} alt='chart' className='w-full mb-3' /> 
        <img src={svg2} alt='chart w-full' /> 
        </div>
      </div>
    </div>
  )
}

export default Tokenomics