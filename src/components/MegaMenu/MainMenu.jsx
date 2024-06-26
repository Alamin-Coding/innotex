"use client"
import { useState } from 'react';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"
import Link from 'next/link';
import Image from 'next/image';
import logoText from "@/assets/images/logo-text.png"
import logoMark from "@/assets/images/logomark.png"
import { megaMenuIcon } from '@/icons/icon';

// Generate Uniq ID
import { v4 as uuidv4 } from 'uuid';




const heatTransferMenuData = [
  {
    id: uuidv4(),
    subLinkTitle: "Textile Transfers", 
    subLinkDesc: "2-line description about this menu item to give context", 
    subitems: [
      {
        id: uuidv4(),
        icon: megaMenuIcon,
        title: "RapidInk Transfers",
        desc: "1-line description"
      },
      {
        id: uuidv4(),
        icon: megaMenuIcon,
        title: "RapidInk Transfers",
        desc: "1-line description"
      },
      {
        id: uuidv4(),
        icon: megaMenuIcon,
        title: "RapidInk Transfers",
        desc: "1-line description"
      },
      {
        id: uuidv4(),
        icon: megaMenuIcon,
        title: "RapidInk Transfers",
        desc: "1-line description"
      },
      {
        id: uuidv4(),
        icon: megaMenuIcon,
        title: "RapidInk Transfers",
        desc: "1-line description"
      },
      {
        id: uuidv4(),
        icon: megaMenuIcon,
        title: "RapidInk Transfers",
        desc: "1-line description"
      },
      {
        id: uuidv4(),
        icon: megaMenuIcon,
        title: "RapidInk Transfers",
        desc: "1-line description"
      },
      {
        id: uuidv4(),
        icon: megaMenuIcon,
        title: "RapidInk Transfers",
        desc: "1-line description"
      },
    ]
  },
  {
    id: uuidv4(),
    subLinkTitle: "Textile Transfers", 
    subLinkDesc: "2-line description about this menu item to give context", 
    subitems: [
      {
        id: uuidv4(),
        icon: megaMenuIcon,
        title: "RapidInk Transfers",
        desc: "1-line description"
      },
      {
        id: uuidv4(),
        icon: megaMenuIcon,
        title: "RapidInk Transfers",
        desc: "1-line description"
      },
      {
        id: uuidv4(),
        icon: megaMenuIcon,
        title: "RapidInk Transfers",
        desc: "1-line description"
      },
      {
        id: uuidv4(),
        icon: megaMenuIcon,
        title: "RapidInk Transfers",
        desc: "1-line description"
      },
      {
        id: uuidv4(),
        icon: megaMenuIcon,
        title: "RapidInk Transfers",
        desc: "1-line description"
      },
      {
        id: uuidv4(),
        icon: megaMenuIcon,
        title: "RapidInk Transfers",
        desc: "1-line description"
      },
      {
        id: uuidv4(),
        icon: megaMenuIcon,
        title: "RapidInk Transfers",
        desc: "1-line description"
      },
      {
        id: uuidv4(),
        icon: megaMenuIcon,
        title: "RapidInk Transfers",
        desc: "1-line description"
      },
    ]
  },
  {
    id: uuidv4(),
    subLinkTitle: "Textile Transfers", 
    subLinkDesc: "2-line description about this menu item to give context", 
    subitems: [
      {
        id: uuidv4(),
        icon: megaMenuIcon,
        title: "RapidInk Transfers",
        desc: "1-line description"
      },
      {
        id: uuidv4(),
        icon: megaMenuIcon,
        title: "RapidInk Transfers",
        desc: "1-line description"
      },
      {
        id: uuidv4(),
        icon: megaMenuIcon,
        title: "RapidInk Transfers",
        desc: "1-line description"
      },
      {
        id: uuidv4(),
        icon: megaMenuIcon,
        title: "RapidInk Transfers",
        desc: "1-line description"
      },
      {
        id: uuidv4(),
        icon: megaMenuIcon,
        title: "RapidInk Transfers",
        desc: "1-line description"
      },
      {
        id: uuidv4(),
        icon: megaMenuIcon,
        title: "RapidInk Transfers",
        desc: "1-line description"
      },
      {
        id: uuidv4(),
        icon: megaMenuIcon,
        title: "RapidInk Transfers",
        desc: "1-line description"
      },
      {
        id: uuidv4(),
        icon: megaMenuIcon,
        title: "RapidInk Transfers",
        desc: "1-line description"
      },
    ]
  },
]


const MegaMenuIcon = ({icon, title, desc}) => {
  return (
    <div className='grid items-center grid-cols-[28px_1fr] gap-4'>
      <div>
        <Image src={icon} alt='icon' />
      </div>
      <div>
        <p className='font-semibold text-base text-primary_text leading-5 mb-[6px]'>{title}</p>
        <p className='font-normal text-sm text-secondary_text leading-4'>{desc}</p>
      </div>
    </div>
  )
}
  

const MainMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent fixed w-full left-0 z-[1000] md:top-10">
        <div className='container'>
            <div className="px-4 py-3 rounded-full bg-white border relative">
                <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                    <Link href="/" className="flex items-center md:gap-2 text-xl font-bold">
                        <Image src={logoMark} alt='logo' />
                        <Image src={logoText} alt='logo text' className='hidden md:inline-block ' />
                    </Link>
                </div>
                <div className="-mr-2 flex md:hidden">
                    <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    >
                    <span className="sr-only">Open main menu</span>
                    {!isOpen ? (
                        <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    ) : (
                        <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    )}
                    </button>
                </div>
                <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-8">
                    <Link href="/" className="text-primary leading-normal font-medium">Home</Link>
                    <NavigationMenu className="static">
                        <NavigationMenuList>
                            <NavigationMenuItem className='hover:bg-transparent'>
                                <NavigationMenuTrigger className="hover:text-primary text-secondary_text text-base leading-normal font-medium rounded-none">Heat Transfer</NavigationMenuTrigger>
                                    <NavigationMenuContent className="bg-[#F0F3F8] rounded-lg p-2 w-full">
                                        <div className="rounded w-full ">
                                        {heatTransferMenuData?.map( (item) => {
                                              return (
                                                <div className='grid grid-cols-[276px_1fr] gap-4' key={item.id}>
                                                  <div className='bg-white p-4 relative after:content-[""]'>
                                                    <h4>{item.subLinkTitle}</h4>
                                                    <p>{item.subLinkDesc}</p>
                                                  </div>
                                                  <div className='relative'>
                                                    <div className='grid grid-cols-2 gap-10 p-6 bg-white absolute w-full'>
                                                      {item.subitems?.map( (subItem) => (
                                                        <NavigationMenuLink key={subItem.id}>
                                                          <MegaMenuIcon key={subItem.id} icon={subItem.icon} title={subItem.title} desc={subItem.desc} />
                                                        </NavigationMenuLink>
                                                      ) )}
                                                    </div>
                                                  </div>
                                                </div>
                                              )
                                            } )}
                                        </div>
                                    </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                    <Link href="/watch" className="text-secondary_text hover:text-primary leading-normal font-medium">Watch</Link>
                    <Link href="/blog" className="text-secondary_text hover:text-primary leading-normal font-medium">Blog</Link>
                    </div>
                </div>
                </div>
            </div>
        </div>

    {/* Small Device */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className=" text-primary block px-3 py-2 rounded-md text-base font-medium">Home</Link>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger onClick={() => setIsOpen(!isOpen)} className=" text-secondary_text block w-full text-left px-3 py-2 rounded-md text-base font-medium">
                  Heat Transfer
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-white text-black rounded-md shadow-lg">
                    <div className="grid grid-cols-1 gap-4 p-4 w-[600px]">
                      <NavigationMenuLink href="#" className="hover:bg-gray-100 p-2 rounded-md">Service 1</NavigationMenuLink>
                      <NavigationMenuLink href="#" className="hover:bg-gray-100 p-2 rounded-md">Service 2</NavigationMenuLink>
                      <NavigationMenuLink href="#" className="hover:bg-gray-100 p-2 rounded-md">Service 3</NavigationMenuLink>
                      <NavigationMenuLink href="#" className="hover:bg-gray-100 p-2 rounded-md">Service 4</NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <Link href="/watch" className=" text-secondary_text block px-3 py-2 rounded-md text-base font-medium">Watch</Link>
            <Link href="/blog" className=" text-secondary_text block px-3 py-2 rounded-md text-base font-medium">Blog</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default MainMenu;