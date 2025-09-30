import { Link } from "react-router-dom"

const navLinks = [
  { label: "Resume", href: "/resume.pdf", external: true },
  { label: "Projects", href: "/projects", external: false },
  { label: "Contact", href: "#contact", external: false }, // can later route to /contact
]

// const Navbar = () => {
//   return (
//     <nav className="sticky top-0 right-0 z-30 flex justify-end gap-4 bg-transparent backdrop-blur-sm p-4">
//       {navLinks.map((link) =>
//         link.external ? (
//           <a
//             key={link.label}
//             href={link.href}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="nav-btn"
//           >
//             {link.label}
//           </a>
//         ) : (
//           <Link key={link.label} to={link.href} className="nav-btn">
//             {link.label}
//           </Link>
//         )
//       )}
//     </nav>
//   )
// }


const Navbar = () => {
  return (
    <nav className="absolute top-4 right-6 flex gap-4 z-20">
      {navLinks.map((link) =>
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
        )
      )}
    </nav>
  )
}

export default Navbar


