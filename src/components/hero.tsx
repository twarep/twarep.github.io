'use client';

import Image from "next/image";
import Modal from "./modal";

export default function Hero() {
  return (
    <div className="bg-white font-karla">
      <div className="relative px-6 lg:px-8 overflow-hidden h-[90vh]">
        <div className="flex flex-col sm:flex-row mx-auto pt-24">
          <div className="basis-1/2 items-center text-center justify-center order-2 sm:order-1">
            <h1 className="sm:text-3xl lg:text-6xl font-bold">
              Hey, I'm Peter.<br/> Nice to see you!
            </h1>
            <div className="flex justify-center pt-6 gap-x-6">
            </div>
            <p className="text-lg leading-8 text-gray-600">
              I create solutions for your business needs with code. Need an enhanced user experience? Elevated engagement?
              Streamlined data analytics and insights? Let's talk. 

            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-purple px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-purple-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                More About Me <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="px-20 md:pl-20 basis-1/2 pointer-events-none order-1 sm:order-2">
            <Image
              src="/twa.png"
              alt="Picture of Peter"
              width="500"
              height="2000"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
