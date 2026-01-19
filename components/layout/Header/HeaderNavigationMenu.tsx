import Link from "next/link";
import { headerNavigationLinks } from "@/data";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

const HeaderNavigationMenu = () => {
  return (
    <NavigationMenu className="hidden lg:block">
      <NavigationMenuList className="flex gap-2">
        {headerNavigationLinks.map((link) => (
          <NavigationMenuItem key={link.href}>
            <NavigationMenuLink asChild>
              <Link
                href={link.href}
                className="text-base lg:text-lg font-medium gradient-left-to-right bg-clip-text text-transparent hover:gradient-left-to-right hover:bg-clip-text hover:text-transparent"
              >
                {link.label}
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default HeaderNavigationMenu;
