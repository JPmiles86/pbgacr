import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  const services = [
    { name: 'Accounting & Bookkeeping', href: '/services/accounting' },
    { name: 'Audit & Tax Services', href: '/services/audit-tax' },
    { name: 'Payroll Management', href: '/services/payroll' },
    { name: 'CPA Services', href: '/services/cpa' },
    { name: 'Legal Support', href: '/services/legal' },
  ]

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ]

  const resources = [
    { name: 'Blog', href: '/blog' },
    { name: 'Tax Calendar', href: '/resources/tax-calendar' },
    { name: 'Business Guides', href: '/resources' },
    { name: 'FAQ', href: '/faq' },
  ]

  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex justify-center md:justify-start items-center mb-4">
              <Image
                src="/logo-white.png"
                alt="Pacific Business & Accounting Group"
                width={400}
                height={180}
                className="h-24 md:h-36 w-auto"
              />
            </div>
            <p className="text-blue-100 mb-4 text-sm leading-relaxed text-center md:text-left">
              Serving Costa Rica for over 15 years with comprehensive accounting, 
              tax, and business advisory services.
            </p>
            <div className="text-sm text-blue-100 text-center md:text-left">
              <p className="mb-1">📍 San José & Jaco Offices</p>
              <p className="mb-1">📞 +506 8925-7777</p>
              <p>✉️ info@pbagcr.com</p>
            </div>
          </div>

          {/* Services */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-blue-100 hover:text-white text-sm transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-blue-100 hover:text-white text-sm transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2 mb-6">
              {resources.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-blue-100 hover:text-white text-sm transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Social Media & Language */}
            <div className="border-t border-blue-700 pt-4">
              <p className="text-sm text-blue-100 mb-3">Follow Us:</p>
              <div className="flex space-x-3 mb-4">
                <a 
                  href="https://es-la.facebook.com/PBAGCR/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-blue-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-200"
                  aria-label="Follow us on Facebook"
                >
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
              
              <p className="text-sm text-blue-100 mb-2">Language:</p>
              <div className="flex space-x-2">
                <button className="text-white bg-blue-700 px-3 py-1 rounded text-sm">
                  EN
                </button>
                <button className="text-blue-100 hover:text-white text-sm">
                  ES
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-700 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-blue-100 text-sm">
            © 2025 Pacific Business & Accounting Group. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link href="/privacy" className="text-blue-100 hover:text-white text-sm transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-blue-100 hover:text-white text-sm transition-colors duration-200">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer