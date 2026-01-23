import React from 'react'
import Profile from '../images/Profile.jpg'

function SectionAboutMe() {
  return (
    <section className='py-20 bg-white dark:bg-zinc-800'>
        <div className='max-w-6xl mx-auto px-6'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
                {/* Left side - Image */}
                <div className='flex justify-center lg:justify-start'>
                    <img className='w-64 h-64 rounded-full object-cover shadow-lg' src={Profile} alt="Profile" />
                </div>

                {/* Right side - Text */}
                <div className='flex flex-col gap-4'>
                    <h2 className='text-4xl font-bold dark:text-white'>About Me</h2>
                    <p className='text-lg font-semibold dark:text-gray-200'>This is me</p>
                    <p className='text-gray-700 dark:text-gray-300 leading-relaxed'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate accusantium ea quibusdam non nihil. Error doloremque dolore assumenda minus veritatis architecto maiores itaque voluptatibus explicabo ex, nisi mollitia ipsum ea quam totam sapiente doloribus adipisci atque vitae neque ad laboriosam alias. Optio itaque quidem possimus dolores deleniti dolorum doloremque in?
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default SectionAboutMe
