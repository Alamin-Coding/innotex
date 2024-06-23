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
import Link from "next/link"
  
const MainNavigation = () => {
  return (
    <header>
        <div className="container px-4 py-3 rounded-full bg-white border">
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuLink>Home</NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>

            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Heat Transfer</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <NavigationMenuLink>Link item</NavigationMenuLink>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>

            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Heat Presses</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <NavigationMenuLink>Link item</NavigationMenuLink>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>

            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuLink>
                        Watch
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>


            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuLink>Blog</NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>


            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <NavigationMenuLink>Link item</NavigationMenuLink>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>

            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuLink>Contact Us</NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
        </div>
    </header>
  )
}

export default MainNavigation