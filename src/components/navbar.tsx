'use client';

import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'About', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Contact', href: '#', current: false },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function NavBar() {
  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="mx-auto px-2 sm:px-6 lg:px-8 font-karla bg-purple lg:rounded-b-xl sm:rounded-none">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-1 flex items-center sm:hidden">
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <a
                    key="Homepage"
                    href="/"
                  >
                    <p className="font-karla font-bold text-2xl text-white">Peter Twarecki</p>
                  </a>
                  
                </div>
                {/* <div className="flex-grow sm:hidden"></div> */}
                <div className="hidden sm:ml-6 sm:block justify-self-stretch">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-purple-extra-dark text-white' : 'text-white hover:bg-purple-dark',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden bg-purple rounded-b-xl">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-black text-white' : 'text-white hover:bg-black hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
