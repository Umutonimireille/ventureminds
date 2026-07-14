import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { navLinks, socialLinks } from '../data/site'
import logo from '../assets/logo.png'

export default function Footer() {
  return (
    <footer
      className="border-t"
      style={{
        backgroundColor: "rgba(13, 26, 36, 0.8)",
        borderColor: "rgba(30, 127, 191, 0.2)"
      }}
    >
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-start gap-4">
            <img
              src={logo}
              alt="Venture Minds"
              className="h-16 object-contain"
            />
            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              A student think-tank at African Leadership University, inspiring
              Rwanda&apos;s creativity through entrepreneurship and community
              impact.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-brand-orange mb-4 tracking-wider text-sm">
              NAVIGATION
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/60 hover:text-brand-orange transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-brand-orange mb-4 tracking-wider text-sm">
              CONNECT
            </h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>Kigali, Rwanda</li>
              <li>
                <a
                  href="mailto:ventureminds@gmail.com"
                  className="hover:text-brand-orange transition-colors"
                >
                  ventureminds@gmail.com
                </a>
              </li>
              <li className="flex gap-4 pt-2">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/40 hover:text-brand-orange transition-colors"
                    whileHover={{ scale: 1.1 }}
                  >
                    {social.name}
                  </motion.a>
                ))}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Venture Minds. All rights
            reserved.
          </p>
          <p className="text-2xl text-white/40 tracking-widest">
            INSPIRING RWANDA&apos;S CREATIVITY
          </p>
        </div>
      </div>
    </footer>
  );
}
