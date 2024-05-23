import React from 'react'
import HomeHeader from './HomeHeader'
import Logo from '../assets/google-logo.png'
import SearchInput from './SearchInput'

const Home = () => {
  return (
    <div className='flex h-[100vh] flex-col'>
        <HomeHeader/>
        <main className='grow flex justify-center'> 
        <div className='w-full px-5 flex flex-col items-center mt-44'>
            <img src={Logo} className='w-[172px] md:w-[272px] mb-8'/>
            <SearchInput/>
        </div>
        </main>
    </div>
  )
}

export default Home