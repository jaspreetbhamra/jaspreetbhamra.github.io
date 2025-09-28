import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6"
import { FaGoogleScholar } from "react-icons/fa" // Scholar is only in the older FA package
import { HiOutlineMail, HiPhone } from "react-icons/hi"

const socials = [
  { label: "GitHub", href: "https://github.com/yourusername", icon: FaGithub },
  { label: "LinkedIn", href: "https://linkedin.com/in/yourusername", icon: FaLinkedin },
  { label: "Twitter", href: "https://twitter.com/yourhandle", icon: FaTwitter },
  { label: "Scholar", href: "https://scholar.google.com/citations?user=XXXXXX", icon: FaGoogleScholar },
]

const Sidebar = ({ textColorClass, headingFontClass }) => {
  return (
    <aside
      className={`fantasy-page relative flex flex-col items-center gap-6 p-8
        lg:w-1/4 lg:sticky lg:top-0 lg:h-screen
      `}
    >
      {/* Binding divider (book spine illusion) */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-6 bg-gradient-to-l from-black/30 to-transparent opacity-50" />

      {/* Profile Image */}
      <img
        src="src/assets/images/profile.jpeg"
        alt="Profile"
        className="h-36 w-36 rounded-full border-4 border-slate-300 object-cover shadow-lg"
      />

      {/* Name */}
      <h1 className={`text-2xl font-bold ${textColorClass} ${headingFontClass}`}>
        Jaspreet Kaur Bhamra
      </h1>

      {/* Short Blurb */}
      <p className={`text-center text-sm italic ${textColorClass}`}>
        Data Scientist • ML Engineer • Storyteller
      </p>

      {/* Contact Info */}
      <div className="flex w-full flex-col items-center gap-2 border-t border-slate-400/30 pt-4 text-sm">
        <a
          href="mailto:dummy.email@example.com"
          className={`flex items-center gap-2 ${textColorClass} hover:text-sky-500 transition-colors`}
        >
          <HiOutlineMail className="h-4 w-4" />
          dummy.email@example.com
        </a>
        <a
          href="tel:+1234567890"
          className={`flex items-center gap-2 ${textColorClass} hover:text-sky-500 transition-colors`}
        >
          <HiPhone className="h-4 w-4" />
          +1 (234) 567-890
        </a>
      </div>

      {/* Social Links */}
      <div className="flex flex-col items-center gap-3 pt-4 text-center">
        {socials.map(({ label, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 transition-colors hover:text-sky-500 ${textColorClass}`}
          >
            <Icon className="h-5 w-5" />
            <span>{label}</span>
          </a>
        ))}
      </div>

      {/* Motto / Engraving */}
      <div className="mt-auto w-full pt-4 text-center">
        <p className="engraving text-xs uppercase tracking-[0.4em]">
          Beyond the Binary
        </p>
      </div>
    </aside>
  )
}

export default Sidebar
