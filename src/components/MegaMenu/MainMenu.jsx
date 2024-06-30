"use client";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import Image from "next/image";
import logoText from "@/assets/images/logo-text.png";
import logoMark from "@/assets/images/logomark.png";
import { bars, megaMenuIcon, xmark } from "@/icons/icon";

// Generate Uniq ID
import { v4 as uuidv4 } from "uuid";
import MultiLayerAccordion from "./AccordionMenu";
import SelectOption from "../SelectOption/SelectOption";

const heatTransferMenuData = [
  {
    id: uuidv4(),
    active: true,
    subLinkTitle: "Textile Transfers",
    subLinkDesc: "2-line description about this menu item to give context",
    subitems: [
      {
        id: uuidv4(),
        link: "/",
        icon: megaMenuIcon,
        title: "RapidInk Transfers",
        desc: "1-line description",
      },
      {
        id: uuidv4(),
        link: "/",
        icon: megaMenuIcon,
        title: "EcoResist Transfers",
        desc: "1-line description",
      },
      {
        id: uuidv4(),
        link: "/",
        icon: megaMenuIcon,
        title: "Metallic & Reflective Transfers",
        desc: "1-line description",
      },
      {
        id: uuidv4(),
        link: "/",
        icon: megaMenuIcon,
        title: "Digital Transfers",
        desc: "1-line description",
      },
      {
        id: uuidv4(),
        link: "/",
        icon: megaMenuIcon,
        title: "Subliblock Transfers",
        desc: "1-line description",
      },
      {
        id: uuidv4(),
        link: "/",
        icon: megaMenuIcon,
        title: "3D Transfers",
        desc: "1-line description",
      },
      {
        id: uuidv4(),
        link: "/",
        icon: megaMenuIcon,
        title: "Neck Labels",
        desc: "1-line description",
      },
      {
        id: uuidv4(),
        link: "/",
        icon: megaMenuIcon,
        title: "Sports Patches & Badges",
        desc: "1-line description",
      },
    ],
  },
  {
    id: uuidv4(),
    active: false,
    subLinkTitle: "Textile Transfers",
    subLinkDesc: "2-line description about this menu item to give context",
    subitems: [
      {
        id: uuidv4(),
        link: "/",
        icon: megaMenuIcon,
        title: "Apparel",
        desc: "1-line description",
      },
      {
        id: uuidv4(),
        link: "/",
        icon: megaMenuIcon,
        title: "Sportswear",
        desc: "1-line description",
      },
      {
        id: uuidv4(),
        link: "/",
        icon: megaMenuIcon,
        title: "Workwear",
        desc: "1-line description",
      },
      {
        id: uuidv4(),
        link: "/",
        icon: megaMenuIcon,
        title: "Hospitality",
        desc: "1-line description",
      },
      {
        id: uuidv4(),
        link: "/",
        icon: megaMenuIcon,
        title: "Laundry",
        desc: "1-line description",
      },
      {
        id: uuidv4(),
        link: "/",
        icon: megaMenuIcon,
        title: "Promotional",
        desc: "1-line description",
      },
      {
        id: uuidv4(),
        link: "/",
        icon: megaMenuIcon,
        title: "Healthcare",
        desc: "1-line description",
      },
      {
        id: uuidv4(),
        link: "/",
        icon: megaMenuIcon,
        title: "Footwear",
        desc: "1-line description",
      },
    ],
  },
  {
    id: uuidv4(),
    active: false,
    subLinkTitle: "Textile Transfers",
    subLinkDesc: "2-line description about this menu item to give context",
    subitems: [
      {
        id: uuidv4(),
        link: "/",
        icon: megaMenuIcon,
        title: "Cotton",
        desc: "1-line description",
      },
      {
        id: uuidv4(),
        link: "/",
        icon: megaMenuIcon,
        title: "Polycotton",
        desc: "1-line description",
      },
      {
        id: uuidv4(),
        link: "/",
        icon: megaMenuIcon,
        title: "Polyester",
        desc: "1-line description",
      },
      {
        id: uuidv4(),
        link: "/",
        icon: megaMenuIcon,
        title: "Non-Woven",
        desc: "1-line description",
      }
    ],
  },
];

const heatPresses = [
    {
      id: uuidv4(),
      link: "/",
      icon: megaMenuIcon,
      title: "InnoPrinter MK1",
      desc: "1-line description",
    },
    {
      id: uuidv4(),
      link: "/",
      icon: megaMenuIcon,
      title: "InnoPrinter MK3",
      desc: "1-line description",
    },
    {
      id: uuidv4(),
      link: "/",
      icon: megaMenuIcon,
      title: "InnoPrinter MK1 for Caps",
      desc: "1-line description",
    },
    {
      id: uuidv4(),
      link: "/",
      icon: megaMenuIcon,
      title: "InnoPrinter MK4",
      desc: "1-line description",
    },
    {
      id: uuidv4(),
      link: "/",
      icon: megaMenuIcon,
      title: "InnoPrinter MK2",
      desc: "1-line description",
    }
];



const afterStyle = `
  bg-white
  after:content-[""]
  after:w-0
  after:h-0
  after:border-t-[8px]
  after:border-r-[8px]
  after:border-b-[8px]
  after:border-l-[8px]
  after:border-t-white
  after:border-r-white
  after:border-b-white
  after:border-l-white
  after:rounded-[3px]
  after:rotate-45
  after:absolute
  after:-right-[6px]
  after:top-1/2
  after:-translate-y-1/2
  after:z-40
  before:content-[""]
  before:w-0
  before:h-0
  before:border-t-[10px]
  before:border-r-[10px]
  before:border-b-[10px]
  before:border-l-[10px]
  before:border-t-[#F0F3F8]
  before:border-r-[#F0F3F8]
  before:border-b-[#F0F3F8]
  before:border-l-[#F0F3F8]
  before:rounded-[3px]
  before:rotate-45
  before:absolute
  before:-right-[14px]
  before:top-1/2
  before:-translate-y-1/2
  before:z-40
`



const MegaMenuIcon = ({ link, icon, title, desc }) => {
  return (
    <Link href={link} className="grid items-center grid-cols-[28px_1fr] gap-4">
      <div>
        <Image src={icon} alt="icon" />
      </div>
      <div>
        <p className="font-semibold text-base text-primary_text leading-5 mb-[6px]">
          {title}
        </p>
        <p className="font-normal text-sm text-secondary_text leading-4">
          {desc}
        </p>
      </div>
    </Link>
  );
};

const MainMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menu, setMenu] = useState(heatTransferMenuData);

  const handleToggleActive = (index) => {
    setMenu(prevMenuData => prevMenuData.map((item, i) => (
      { ...item, active: i === index }
    )));
  };

  const shadow = {
    boxShadow: "0 4px 4px rgba(0, 0, 0, 0.25)"
  }

  return (
    <>
      <nav className="bg-transparent absolute w-full left-0 z-[1000] top-5 md:top-10">
        <div className="container">
          <div className="px-4 py-2 rounded-full bg-white relative lg:py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Link
                  href="/"
                  className="flex items-center md:gap-2 text-xl font-bold"
                >
                  <Image src={logoMark} alt="logo" className="w-[41px] h-[32px] lg:w-auto lg:h-auto" />
                  <Image
                    src={logoText}
                    alt="logo text"
                    className="hidden md:inline-block "
                    />
                </Link>
              </div>
              <div className="-mr-2 flex lg:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="py-2 px-1 cursor-pointer"
                >
                  <span className="sr-only">Open main menu</span>
                  <Image src={bars} alt="menu" />
                </button>
              </div>
              <div className="hidden lg:flex items-baseline justify-center space-x-8">
                    <Link
                      href="/"
                      className="text-primary leading-normal font-medium"
                      >
                      Home
                    </Link>
                    <NavigationMenu className="static">
                      <NavigationMenuList>
                        <NavigationMenuItem className="hover:bg-transparent">
                          <NavigationMenuTrigger className="hover:text-primary focus:bg-transparent focus:text-primary hover:bg-transparent text-secondary_text text-base leading-normal font-medium rounded-none">
                            Heat Transfer
                          </NavigationMenuTrigger>
                          <NavigationMenuContent className="bg-[#F0F3F8] rounded-lg p-2 w-full">
                            <div className="rounded w-full ">
                              <div className="grid grid-cols-[276px_1fr] gap-[9px]">
                                <div>
                                  {menu?.map((item, index) => {
                                    return (
                                      <div className="grid grid-cols-[276px_1fr] gap-[9px] cursor-pointer" key={item.id} >
                                        <div className={`p-4 relative ${ item.active ? afterStyle :null} `} onClick={() => handleToggleActive(index)} >
                                          <h4>{item.subLinkTitle}</h4>
                                          <p>{item.subLinkDesc}</p>
                                        </div>
                                      </div>
                                    );
                                  })}
                                </div>
                                <div>
                                {menu.map((item) => {
                                  return (
                                    item.active &&
                                    <div key={item.id} className="h-full grid grid-cols-2 content-baseline gap-10 p-6 bg-white rounded-sm">
                                      {item.subitems?.map((subItem) => (
                                        <NavigationMenuLink key={subItem.id}>
                                          <MegaMenuIcon
                                            key={subItem.id}
                                            link={subItem.link}
                                            icon={subItem.icon}
                                            title={subItem.title}
                                            desc={subItem.desc}
                                            />
                                        </NavigationMenuLink>
                                      ))}
                                    </div>
                                  )
                                } )} 
                                </div>
                              </div>
                            </div>
                          </NavigationMenuContent>
                        </NavigationMenuItem>
                      </NavigationMenuList>

                      <NavigationMenuList className="relative">
                        <NavigationMenuItem className="hover:bg-transparent">
                          <NavigationMenuTrigger className="hover:text-primary focus:bg-transparent focus:text-primary hover:bg-transparent text-secondary_text text-base leading-normal font-medium rounded-none">
                            Heat Presses
                          </NavigationMenuTrigger>
                          <NavigationMenuContent className="bg-[#F0F3F8] rounded-md p-2 w-[516px]" style={shadow}>
                            <div className="rounded w-[516px]">
                              <div className="h-full grid grid-cols-2 content-baseline gap-10 p-6 bg-white rounded-sm">
                              {heatPresses.map( item => (
                                  <NavigationMenuLink key={item.id}>
                                      <MegaMenuIcon
                                        link={item.link}
                                        icon={item.icon}
                                        title={item.title}
                                        desc={item.desc}
                                        />
                                    </NavigationMenuLink>
                              ))} 
                              </div>
                            </div>
                          </NavigationMenuContent>
                        </NavigationMenuItem>
                      </NavigationMenuList>
                    </NavigationMenu>
                    <Link
                      href="/watch"
                      className="text-secondary_text hover:text-primary leading-normal font-medium"
                      >
                      Watch
                    </Link>
                    <Link
                      href="/blog"
                      className="text-secondary_text hover:text-primary leading-normal font-medium"
                      >
                      Blog
                    </Link>
                    <Link
                        href="/about"
                        className="text-secondary_text hover:text-primary leading-normal font-medium"
                    >
                      About Us
                    </Link>
                    <Link
                        href="/contact"
                        className="text-secondary_text hover:text-primary leading-normal font-medium"
                    >
                      Contact Us
                    </Link>
              </div>
              <div className="hidden lg:block text-secondary_text">
                <SelectOption/>
              </div>
            </div>
          </div>
        </div>

        {/* Small Device */}
        {isOpen && (
          <div className="md:hidden bg-black/15 duration-200 w-screen h-screen fixed top-0 left-0 z-40" onClick={() => setIsOpen( state => state=false)}></div>
        )}

        {isOpen && (
          <div className="md:hidden bg-white pb-5 w-[285px] h-screen fixed top-0 right-0 z-50">
          <div className="flex justify-end p-5">
            <button className="px-1 py-2 bg-white cursor-pointer" onClick={() => setIsOpen( state => state=false)}>
              <Image src={xmark} alt="menu" />
            </button>
          </div>
          <div className="px-6 space-y-3">
            <Link
              href="/"
              className="text-primary block"
              >
              Home
            </Link>
            <MultiLayerAccordion />
            <Link
              href="/watch"
              className="text-secondary_text block"
            >
              Watch
            </Link>
            <Link
              href="/blog"
              className=" text-secondary_text block"
              >
              Blog
            </Link>
          </div>
        </div>
        )}
      </nav>
    </>
  );
};

export default MainMenu;
