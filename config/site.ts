export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Almera",
	description: "Corner for publishing things securely",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
		{
			label: "Explore",
			href: "/explore",
		},
    {
      label: "Docs",
      href: "/docs",
    },
    {
      label: "About",
      href: "/about",
    }
	],
	navMenuItems: [
		{
			label: "Profile",
			href: "/profile",
		},
		{
			label: "Dashboard",
			href: "/dashboard",
		},
		{
			label: "Projects",
			href: "/projects",
		},
		{
			label: "Team",
			href: "/team",
		},
		{
			label: "Calendar",
			href: "/calendar",
		},
		{
			label: "Settings",
			href: "/settings",
		},
		{
			label: "Help & Feedback",
			href: "/help-feedback",
		},
		{
			label: "Logout",
			href: "/logout",
		},
	],
	links: {
		github: "https://github.com/almera-wg",
		twitter: "https://twitter.com/Makul_0x",
		docs: "https://almera.xyz/docs",
		discord: "https://discord.gg/9MCg2W6Y",
    sponsor: "https://makul.vercel.app"
	},
};
