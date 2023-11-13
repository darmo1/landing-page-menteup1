'use client'

import { Inter } from 'next/font/google'
import Image from 'next/image';
const inter = Inter({ subsets: ['latin'],
weight: '600'
})

export default function Home() {

  const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }
  return (
    <main className="">
      <div className="grid gap-8 items-start justify-center my-8">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur-xl"></div>
          <button className="relative px-7 py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600">
            <span className="text-gray-100">
              <b>Guía Diaria:</b> El Camino Hacia tu Mejor Versión, desarrollo
              personal con determinación
            </span>
          </button>
        </div>
      </div>

      <div className='flex flex-wrap'>
      <div className="mx-auto w-full md:w-[50%]  flex justify-center">
        <Image 
        src={"/ebook-mindset.png"}
        width={300}
        height={400}
        alt='ebook-mindset'
        className=''
        />
      </div>
      <div className="mx-auto w-full md:w-[50%]"> 

          <form className="flex flex-col text-white p-4" onSubmit={handleSubmit}>
          <h1 className={`text-md md:text-[40px] max-w-[725px] text-center ${inter.className}`}>Descarga la guia de 7 días, para reflexionar y llevar tu vida a un cambio permanente 🚀🚀  </h1>
            <input type="email"  name="email" className="rounded-lg px-3 py-2 mt-4" placeholder="Escribe tu correo electrónico aquí"/>
            <button className="bg-blue-400 rounded-lg my-4 py-2"  type='submit'>Enviamelo</button>
          </form>

      </div>

      </div>
     
    </main>
  );
}
