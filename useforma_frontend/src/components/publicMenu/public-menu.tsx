import { BookOpenIcon, InfoIcon, LifeBuoyIcon, HomeIcon, UsersIcon, GraduationCapIcon } from "lucide-react"
import Link from "next/link"

import Logo from "@/components/navbar-components/logo"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import styles from './public-menu.module.css'
import mobileStyles from './public-menu.mobile.module.css'

// Navigation links array to be used in both desktop and mobile menus
const navigationLinks = [
  { href: "/Bem-Vindo", label: "Home", icon: "HomeIcon" },
  {
    label: "Cursos",
    submenu: true,
    type: "description",
    items: [
      {
        href: "#",
        label: "Cursos Disponíveis",
        description: "Explore nossa biblioteca completa de cursos.",
      },
      {
        href: "#",
        label: "Categorias",
        description: "Cursos organizados por área de conhecimento.",
      },
      {
        href: "#",
        label: "Certificações",
        description: "Programas de certificação profissional.",
      },
    ],
  },
  {
    label: "Recursos",
    submenu: true,
    type: "simple",
    items: [
      { href: "#", label: "Biblioteca Digital" },
      { href: "#", label: "Fórum de Discussão" },
      { href: "#", label: "Mentoria" },
      { href: "#", label: "Projetos Práticos" },
    ],
  },
  {
    label: "Sobre",
    submenu: true,
    type: "icon",
    items: [
      { href: "#", label: "Como Funciona", icon: "BookOpenIcon" },
      { href: "#", label: "Suporte", icon: "LifeBuoyIcon" },
      { href: "#", label: "Sobre Nós", icon: "InfoIcon" },
    ],
  },
]

export default function PublicMenu() {
  return (
    <header className={cn(styles.header, mobileStyles.mobileHeader)}>
      <div className={cn(styles.container, mobileStyles.mobileContainer)}>
        {/* Left side */}
        <div className={cn(styles.leftSection, mobileStyles.mobileLeftSection)}>
          {/* Mobile menu trigger */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                className={cn(styles.mobileMenuButton, "group size-8 md:hidden")}
                variant="ghost"
                size="icon"
              >
                <svg
                  className="pointer-events-none"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 12L20 12"
                    className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
                  />
                </svg>
              </Button>
            </PopoverTrigger>
            <PopoverContent align="start" className={cn(mobileStyles.mobileMenuContent, "w-64 p-1 md:hidden")}>
              <NavigationMenu className="max-w-none *:w-full">
                <NavigationMenuList className={cn(mobileStyles.mobileNavigationList, "flex-col items-start gap-0 md:gap-2")}>
                                      {navigationLinks.map((link, index) => (
                      <NavigationMenuItem key={index} className={mobileStyles.mobileNavigationItem}>
                        {link.submenu ? (
                          <>
                            <div className={mobileStyles.mobileSubmenuLabel}>
                              {link.label}
                            </div>
                                                      <ul className={mobileStyles.mobileSubmenuList}>
                              {link.items.map((item, itemIndex) => (
                                <li key={itemIndex} className={mobileStyles.mobileSubmenuItem}>
                                  <NavigationMenuLink
                                    href={item.href}
                                    className={mobileStyles.mobileSubmenuLink}
                                  >
                                    {item.label}
                                  </NavigationMenuLink>
                                </li>
                              ))}
                            </ul>
                        </>
                                              ) : (
                          <NavigationMenuLink href={link.href} className={mobileStyles.mobileNavigationLink}>
                            {link.label}
                          </NavigationMenuLink>
                        )}
                      {/* Add separator between different types of items */}
                      {index < navigationLinks.length - 1 &&
                        // Show separator if:
                        // 1. One is submenu and one is simple link OR
                        // 2. Both are submenus but with different types
                        ((!link.submenu &&
                          navigationLinks[index + 1].submenu) ||
                          (link.submenu &&
                            !navigationLinks[index + 1].submenu) ||
                          (link.submenu &&
                            navigationLinks[index + 1].submenu &&
                            link.type !== navigationLinks[index + 1].type)) && (
                          <div
                            role="separator"
                            aria-orientation="horizontal"
                            className={mobileStyles.mobileSeparator}
                          />
                        )}
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </PopoverContent>
          </Popover>
          {/* Main nav */}
          <div className={styles.mainNav}>
            <Link href="/Bem-Vindo" className={styles.logo}>
              <Logo />
            </Link>
            {/* Navigation menu */}
            <NavigationMenu viewport={false} className={styles.navigationMenu}>
              <NavigationMenuList className={styles.navigationList}>
                {navigationLinks.map((link, index) => (
                  <NavigationMenuItem key={index} className={styles.navigationItem}>
                    {link.submenu ? (
                      <>
                        <NavigationMenuTrigger className={styles.navigationTrigger}>
                          {link.label}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className={styles.navigationContent}>
                          <ul
                            className={cn(
                              link.type === "description"
                                ? styles.menuListDescription
                                : styles.menuList
                            )}
                          >
                            {link.items.map((item, itemIndex) => (
                              <li key={itemIndex} className={styles.menuItem}>
                                <NavigationMenuLink
                                  href={item.href}
                                  className={cn(
                                    link.type === "icon" ? styles.menuItemWithIcon : 
                                    link.type === "description" ? styles.menuItemWithDescription : 
                                    styles.menuItem
                                  )}
                                >
                                  {/* Display icon if present */}
                                  {link.type === "icon" && "icon" in item && (
                                    <div className="flex items-center gap-2">
                                      {item.icon === "BookOpenIcon" && (
                                        <BookOpenIcon
                                          size={16}
                                          className={styles.mobileSubmenuIcon}
                                          aria-hidden="true"
                                        />
                                      )}
                                      {item.icon === "LifeBuoyIcon" && (
                                        <LifeBuoyIcon
                                          size={16}
                                          className={styles.mobileSubmenuIcon}
                                          aria-hidden="true"
                                        />
                                      )}
                                      {item.icon === "InfoIcon" && (
                                        <InfoIcon
                                          size={16}
                                          className={styles.mobileSubmenuIcon}
                                          aria-hidden="true"
                                        />
                                      )}
                                      <span>{item.label}</span>
                                    </div>
                                  )}

                                  {/* Display label with description if present */}
                                  {link.type === "description" &&
                                  "description" in item ? (
                                    <div className={styles.menuItemWithDescription}>
                                      <div className={styles.menuItemTitle}>
                                        {item.label}
                                      </div>
                                      <p className={styles.menuItemDescription}>
                                        {item.description}
                                      </p>
                                    </div>
                                  ) : (
                                    // Display simple label if not icon or description type
                                    !link.type ||
                                    (link.type !== "icon" &&
                                      link.type !== "description" && (
                                        <span>{item.label}</span>
                                      ))
                                  )}
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <NavigationMenuLink
                        href={link.href}
                        className={styles.navigationLink}
                      >
                        {link.label}
                      </NavigationMenuLink>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
        {/* Right side */}
        <div className={styles.rightSection}>
          <Button asChild variant="ghost" size="sm" className={cn(styles.button, styles.buttonGhost, styles.buttonSmall)}>
            <Link href="/Login-Signup">Entrar</Link>
          </Button>
          <Button asChild size="sm" className={cn(styles.button, styles.buttonPrimary, styles.buttonSmall)}>
            <Link href="/Login-Signup">Começar</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
