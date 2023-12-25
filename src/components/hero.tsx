'use client';

import Image from "next/image";

export default function Hero() {
  return (
    <div className="bg-white font-karla">
      <div className="relative px-6 pt-0 lg:px-8">
        <div className="flex mx-auto max-w-3xl py-32 sm:py-48 lg:py-46">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Data to enrich your online business
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
              fugiat veniam occaecat fugiat aliqua.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="pl-24">
            <Image
              src="/twa.png"
              alt="Picture of Peter"
              width="2000"
              height="3000"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
