import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

function Project() {

  const navigate = useRouter()


  const handleNavigate = () => {
    navigate.push('#contact')
  }

  const data = [
    {
      location: "Urganch sh, G'oybu Kollej",
      stock: "17/30 Honadon",
      img: "/project-1.1.webp",
      busy: "Jarayonda",
    },
    {
      location: "Urganch sh, G'oybu",
      stock: "29/50 Kvartira",
      img: "/project-2.webp",
      busy: "Yakunlangan",
    },
    {
      location: "Urganch sh, Versal",
      stock: "37/50 kvartira",
      img: "/project-3.webp",
      busy: "Jarayonda",
    }
  ]
  return (
    <section>
      <div className='container'>
        <div className='mt-10'>
          <h1 className="text-2xl lg:text-4xl text-[#FFC045] font-roboto">Bizning loyihalarimiz</h1>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-5 lg:mt-10'>
            {
              data.map(({ location, busy, stock, img }, i) => (
                <div key={i} className='w-full bg-white'>
                  <div className='w-full relative'>
                    <p className='text-xs text-white px-2 absolute top-0 left-0 bg-[#ffc045]'>{busy}</p>
                    <Image className='w-агдд h-[260px] object-cover object-center' src={img} width={700} height={260} loading='lazy' alt="Project image" />
                  </div>
                  <div className='w-full'>
                    <div className='flex justify-between items-center mt-2'>
                      <h3 className='text-lg'>{location}</h3>
                      <p className='text-sm'>{stock}</p>
                    </div>
                    <button onClick={() => handleNavigate()} className='w-full h-10 mt-2 text-white bg-[#ffc045] cursor-pointer border-[1px] border-solid border-[#ffc045] hover:bg-transparent hover:text-[#ffc045] transition-all duration-300 ease-in-out' href={'#contact'}>Ko'proq</button>
                  </div>
                </div>

              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Project