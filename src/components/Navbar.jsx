import { Link, useLocation } from "react-router-dom";

const navLinks = [
	{
		label: "Resume",
		href: "https://drive.google.com/file/d/1dutCWoKjZ_n3XdYozZNvu5iDTLdihdAT/view?usp=drive_link",
		external: true,
	},
	{ label: "Experience", href: "/experience", external: false },
	{ label: "Projects", href: "/projects", external: false },
	{ label: "Blog", href: "/blog", external: false },
];

const Navbar = () => {
	const location = useLocation();
	const isHome = location.pathname === "/";

	// Extra Back to Home link (only when NOT on Home)
	const linksToRender = isHome
		? navLinks
		: [
				{ label: "Back to Home", href: "/?lang=english", external: false },
				...navLinks,
			];

	return (
		<nav className="absolute top-4 right-6 flex gap-4 z-20">
			{linksToRender.map((link) =>
				link.external ? (
					<a
						key={link.label}
						href={link.href}
						target="_blank"
						rel="noopener noreferrer"
						className="nav-btn"
					>
						{link.label}
					</a>
				) : (
					<Link key={link.label} to={link.href} className="nav-btn">
						{link.label}
					</Link>
				),
			)}
		</nav>
	);
};

export default Navbar;
