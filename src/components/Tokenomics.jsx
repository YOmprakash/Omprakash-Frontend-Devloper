
import PieChart from '../assets/pie_chart.svg';
import svg1 from '../assets/svg-1.svg';
import svg2 from '../assets/svg-2.svg';
const Tokenomics = () => {
  return (
    <div className='flex flex-col items-center justify-center h-full px-2 py-12 '>
      <h1 className='mb-10 text-5xl font-semibold text-center text-white'>Tokenomics</h1>
      <div className='flex flex-col items-center justify-center md:flex-row'>
        <img src={PieChart} alt='chart' className=' w-[500px] md:max-w-[600px]' />  
        <div className='ml-8'>
        <img src={svg1} alt='chart' className=' mb-3 w-[500px]' /> 
        <img src={svg2} alt='chart w-full ' className=' w-[500px]' /> 
        </div>
      </div>
    </div>
  )
}

export default Tokenomics