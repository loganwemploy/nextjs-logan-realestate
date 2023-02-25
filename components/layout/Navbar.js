import Link from 'next/link'
import Image from 'next/image'
import menuLinks from '../../config/menus.js'
import siteConfig from '../../config/site.config.js'
import { useRouter } from 'next/router'
import { Fragment } from 'react'
import { Disclosure, Menu } from '@headlessui/react'
import { ChevronDownIcon, SearchIcon } from '@heroicons/react/solid'

export default function Navbar() {
  const router = useRouter();

  return (
    <Disclosure as="header" style={{background: 'rgb(12,12,34)',
    background: 'linear-gradient(137deg, rgba(12,12,34,1) 0%, rgba(40,54,91,1) 100%)'}} className="relative ">
      {({ open }) => (
        <>
          <nav className="flex items-center h-20 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            
            {/* Main navbar for large screens */}
            <div className="flex items-center justify-between w-full">

              {/* Logo */}
              <div className="flex items-center shrink-0">
                <Link href="/">
                  <a className="lg:hidden h-9">
                    <Image 
                      src={siteConfig.favicon} 
                      alt={siteConfig.logoText}
                      width={36}
                      height={36}
                      layout="fixed"
                      className="w-9 h-9"
                    />
                  </a>
                </Link>
                <Link href="/">
                  <a className="hidden lg:block h-9">
                    {/* <img style={{width:'18vw',height: 'auto',marginTop:'-2vh'}} src="https://www.millerchicagorealestate.com/wp-content/uploads/2015/03/imageedit_2_7562794432.png" alt="" /> */}
                    {/* <Image 
                      src={siteConfig.logo} 
                      alt={siteConfig.logoText}
                      width={129.6}
                      height={36}
                      layout="fixed"
                      className="w-auto h-9"
                    /> */}
                  </a>
                </Link>
              </div>

              {/* Navigation for large screens */}
              <div className="ml-6 hidden md:flex justify-between items-center md:space-x-0.5 lg:space-x-2 text-xl md:text-base">

                {menuLinks.mainMenu.map((link, index) =>
                  link.submenu ? (
                    <Menu as="div" className="relative" key={index}>
                      {({ open }) => (
                        <>
                          <Menu.Button
                            className={`flex items-center px-3 py-1 font-medium text-md group ${open ? 'text-gray-50' : 'text-gray-50 hover:text-gray-50 transition duration-300 ease-in-out'}`}
                          >
                            <span>Pages</span>
                            <ChevronDownIcon
                              className={`w-5 h-5 ml-2 transform duration-300 ${open ? 'rotate-180 text-gray-50' : 'text-gray-600 group-hover:text-gray-50'}`}
                              aria-hidden="true"
                            />
                          </Menu.Button>
                          
                          
                          <Menu.Items className="z-20 mt-3 absolute w-52 right-0 rounded-xl bg-blue-50 filter drop-shadow p-2.5 space-y-1">
                            {link.submenu.map((subLink, i) => (
                              <Menu.Item key={i}>
                                <Link href={subLink.link}>
                                  <a 
                                    className={`block rounded-lg py-3.5 px-5 font-medium ${router.pathname == subLink.link ? 'bg-gray-50 text-gray-500' : 'text-gray-500 hover:bg-blue-300 hover:text-gray-50 transition duration-300 ease-in-out'}`}
                                  >
                                    {subLink.name}
                                  </a>
                                </Link>
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                          
                        </>
                      )}
                    </Menu>
                    
                  ) : (
                    <Link key={index} href={link.link}>
                      <a className={`px-3 py-1 font-medium text-md ${router.pathname == link.link ? 'text-gray-50' : 'text-gray-50 transition duration-300 ease-in-out hover:text-gray-50'}`}>
                        {link.name}
                      </a>
                    </Link>
                  )
                )}

              </div>

              {/* Search */}
              <div className="relative w-full h-10 ml-6 max-w-xxs rounded-3xl">
                <form className="transition duration-300 ease-in-out rounded-3xl group">
                  <div className="absolute inset-y-0 flex items-center left-3">
                    <SearchIcon className="w-5 h-5 text-gray-400" />
                  </div>
                  <input 
                    type="email" 
                    className="w-full h-10 px-10 py-3 text-sm leading-5 text-gray-50 transition duration-300 ease-in-out bg-white border border-gray-200 hover:bg-gray-50 rounded-3xl focus:outline-none focus:ring-2 focus:ring-red-100 focus:bg-gray-50" 
                    required 
                    placeholder="Search..."  
                    autoComplete="email" 
                  />
                </form>
              </div>

              {/* Hamburger menu button */}
              <Disclosure.Button className="flex items-center justify-center p-3 ml-6 transition duration-300 ease-in-out cursor-pointer rounded-xl bg-gray-50 hover:bg-gray-100 md:hidden group focus:outline-none">
                <span className={`relative w-4 h-3.5 transition duration-500 ease-in-out transform rotate-0 ${open ? 'js-hamburger-open' : ''}`}>
                  <span className="absolute top-0 left-0 block w-full h-0.5 transition duration-300 ease-in-out transform rotate-0 bg-gray-600 rounded-full opacity-100 group-hover:bg-gray-900" />
                  <span className="absolute left-0 block w-full h-0.5 transition duration-300 ease-in-out transform rotate-0 bg-gray-600 rounded-full opacity-100 top-1.5 group-hover:bg-gray-900" />
                  <span className="absolute left-0 block w-full h-0.5 transition duration-300 ease-in-out transform rotate-0 bg-gray-600 rounded-full opacity-100 top-1.5 group-hover:bg-gray-900" />
                  <span className="absolute left-0 block w-full h-0.5 transition duration-300 ease-in-out transform rotate-0 bg-gray-600 rounded-full opacity-100 top-3 group-hover:bg-gray-900" />
                </span>
              </Disclosure.Button>
      
            </div>
            
          </nav>

          {/* Mobile menu */}
          <Disclosure.Panel>
            <nav className=" md:hidden" aria-label="Global" id="mobile-menu">
              <div className="px-2 pt-2 pb-3 space-y-1">

                {menuLinks.mainMenu.map((link, i) =>
                  !link.submenu && (
                    <Link href={link.link} key={i}>
                      <a 
                        className={`block px-4 py-3 font-medium rounded-lg ${router.pathname == link.link ? 'bg-gray-50 text-gray-50' : 'text-gray-50 hover:bg-gray-50 hover:text-gray-50 transition duration-300 ease-in-out'}`}
                        aria-current="page"
                      >
                        {link.name}
                      </a>
                    </Link>
                  )
                )}
              </div>

              <div className="pt-4 pb-3 border-t border-gray-300/70">
                <div className="px-6 mt-2 text-xs font-medium tracking-widest text-gray-500 uppercase">Pages</div>
                <div className="px-2 mt-3 space-y-1">

                  {menuLinks.mainMenu.map((link, i) =>
                    link.submenu && (
                      <Fragment key={i}>
                        {link.submenu.map((subLink, j) => (
                          <Link href={subLink.link} key={j}>
                            <a 
                              className={`block px-4 py-2 font-medium rounded-lg ${router.pathname == subLink.link ? 'bg-gray-50 text-gray-50' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-50 transition duration-300 ease-in-out'}`}
                              aria-current="page"
                            >
                              {subLink.name}
                            </a>
                          </Link>
                        ))}
                      </Fragment>
                    )
                  )}
                  
                </div>
              </div>
            </nav>
          </Disclosure.Panel> 
        </>
      )}
    </Disclosure>

  )
}