import Image from 'next/image'
import React from 'react'

function Project() {
  return (
    <section>
      <div className='container'>
        <div className='mt-10'>
          <h1 className="text-2xl lg:text-4xl text-[#FFC045] font-roboto">Bizning loyihalarimiz</h1>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mt-5 lg:mt-10'>
            <div className='w-full h-full'>
              <Image src={'/apartment.jpg'} width={380} height={300} alt='/apartment.jpg' />
              <div>

              </div>
            </div>
            <div className='w-full h-full'>
              <Image src={'/apartment.jpg'} width={380} height={100} alt='/apartment.jpg' />
            </div>
            <div className='w-full h-full'>
              <Image src={'/apartment.jpg'} width={380} height={100} alt='/apartment.jpg' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Project