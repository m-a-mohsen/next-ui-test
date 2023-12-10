export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Open Tech Camp",
  description:
    "Deliver personalized educational content, and leave no one behind.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    // {
    //   label: "Docs",
    //   href: "/docs",
    // },
    // {
    //   label: "Pricing",
    //   href: "/pricing",
    // },
    // {
    //   label: "Blog",
    //   href: "/blog",
    // },
    {
      label: "About",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/",
    },
    // {
    //   label: "Team",
    //   href: "/team",
    // },
    // {
    //   label: "Calendar",
    //   href: "/calendar",
    // },
    {
      label: "Settings",
      href: "/",
    },
    {
      label: "Help & Feedback",
      href: "/",
    },
    {
      label: "Logout",
      href: "/api/auth/logout",
    },
  ],
  links: {
    github: "https://github.com/m-a-mohsen",
    twitter: "",
    docs: "",
    discord: "",
    sponsor: "",
  },
};
