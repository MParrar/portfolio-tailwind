import HeroImg from '../assets/heroImage.png';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import {Link} from 'react-scroll'

const Home = () => {
    return (
        <div 
        name="home" 
        className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
                <div className='flex flex-col justify-center h-full w-full'>
                    <h2 className='text-4xl sm:text-6xl font-bold text-white'> Matias Parra Here!</h2>
                    <p className='text-gray-500 py-4 max-w-md'>
                    Software developer from Chile with a passion for continuous learning, exploration, and building innovative solutions. I value dedication, reliability, and the pursuit of growth in every aspect of life.                    </p>
                    <p className='text-gray-500 py-4 max-w-md'>
                    To share a bit more about me, two of my dreams are traveling to Japan and experiencing a Premier League match live in the stadium.
                    </p>
                    <div>
                        <Link to="portfolio" smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center 
                        rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                            Portfolio 
                            <span className='group-hover:rotate-90 duration-300'>
                                <MdOutlineKeyboardArrowRight 
                                className='ml-1 mt-1'
                                size={25} />
                            </span>
                        </Link>
                    </div>
                </div>
                <div>
                    <img src={HeroImg} alt="myself" className='rounded-2xl mx-auto w-2/3 md:w-50 mb-4'/>
                </div>
            </div>
        </div>
    )
}

export default Home