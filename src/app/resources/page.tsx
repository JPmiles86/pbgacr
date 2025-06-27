import Layout from '@/components/layout/Layout'
import Link from 'next/link'

export const metadata = {
  title: 'Business Resources | Pacific Business & Accounting Group',
  description: 'Helpful business resources, guides, and tools for Costa Rican businesses. Tax calendar, business guides, and expert insights.',
}

const ResourcesPage = () => {
  const resourceCategories = [
    {
      title: 'Tax & Compliance',
      description: 'Stay compliant with Costa Rican tax regulations',
      icon: (
        <svg className="w-8 h-8 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
        </svg>
      ),
      resources: [
        {
          title: '2025 Tax Calendar',
          description: 'Important tax deadlines and filing dates for Costa Rican businesses',
          type: 'Calendar',
          href: '/resources/tax-calendar'
        },
        {
          title: 'Corporate Tax Guide',
          description: 'Complete guide to corporate tax obligations in Costa Rica',
          type: 'Guide',
          href: '/resources/corporate-tax-guide'
        },
        {
          title: 'VAT Compliance Checklist',
          description: 'Ensure your business meets all VAT requirements',
          type: 'Checklist',
          href: '/resources/vat-checklist'
        }
      ]
    },
    {
      title: 'Business Formation',
      description: 'Everything you need to start and grow your business',
      icon: (
        <svg className="w-8 h-8 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
        </svg>
      ),
      resources: [
        {
          title: 'Business Registration Guide',
          description: 'Step-by-step process for registering your business in Costa Rica',
          type: 'Guide',
          href: '/resources/business-registration'
        },
        {
          title: 'Choosing Business Structure',
          description: 'Understand different business entities and choose the right one',
          type: 'Guide',
          href: '/resources/business-structure'
        },
        {
          title: 'Startup Costs Calculator',
          description: 'Estimate the costs involved in starting your business',
          type: 'Tool',
          href: '/resources/startup-calculator'
        }
      ]
    },
    {
      title: 'Payroll & HR',
      description: 'Manage your employees and payroll efficiently',
      icon: (
        <svg className="w-8 h-8 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
        </svg>
      ),
      resources: [
        {
          title: 'Payroll Tax Rates 2025',
          description: 'Current payroll tax rates and social security contributions (26.67% employer contributions)',
          type: 'Reference',
          href: '/resources/payroll-rates'
        },
        {
          title: 'Employee Benefits Guide',
          description: 'Mandatory and optional employee benefits in Costa Rica',
          type: 'Guide',
          href: '/resources/employee-benefits'
        },
        {
          title: 'Labor Law Updates',
          description: 'Recent changes to Costa Rican labor regulations',
          type: 'Update',
          href: '/resources/labor-law-updates'
        }
      ]
    },
    {
      title: 'Financial Management',
      description: 'Tools and guides for better financial control',
      icon: (
        <svg className="w-8 h-8 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
        </svg>
      ),
      resources: [
        {
          title: 'Cash Flow Template',
          description: 'Excel template for tracking your business cash flow',
          type: 'Template',
          href: '/resources/cash-flow-template'
        },
        {
          title: 'Financial KPIs Dashboard',
          description: 'Key performance indicators every business should track',
          type: 'Template',
          href: '/resources/kpi-dashboard'
        },
        {
          title: 'Budget Planning Guide',
          description: 'How to create and manage your business budget effectively',
          type: 'Guide',
          href: '/resources/budget-planning'
        }
      ]
    }
  ]

  const quickLinks = [
    {
      title: 'Contact Our Experts',
      description: 'Get personalized advice for your specific situation',
      icon: '📞',
      href: '/contact',
      cta: 'Get Help Now'
    },
    {
      title: 'Schedule Consultation',
      description: 'Book a free 30-minute consultation with our team',
      icon: '📅',
      href: '/contact',
      cta: 'Book Now'
    },
    {
      title: 'Download Tax Calendar',
      description: 'Never miss an important tax deadline again',
      icon: '📅',
      href: '/resources/tax-calendar',
      cta: 'Download PDF'
    },
    {
      title: 'View Our Services',
      description: 'Explore our full range of business services',
      icon: '💼',
      href: '/services',
      cta: 'Learn More'
    }
  ]

  const faqs = [
    {
      question: 'What are the key tax deadlines for Costa Rican businesses?',
      answer: 'The main deadlines include Corporate Income Tax (March 15), VAT declarations (monthly by the 15th), and Annual Tax Returns (March 15). Specific dates may vary based on your business type and fiscal year.'
    },
    {
      question: 'How do I register a business in Costa Rica?',
      answer: 'Business registration involves several steps: choosing a business name, registering with the National Registry, obtaining tax identification, and getting necessary permits. The process typically takes 2-4 weeks with proper documentation.'
    },
    {
      question: 'What payroll taxes am I required to pay in Costa Rica?',
      answer: 'Employers must contribute to social security (CCSS), workers\' compensation (INS), and other mandatory contributions. The total employer contribution is approximately 26.17% of gross salary.'
    },
    {
      question: 'Do I need a CPA for my small business?',
      answer: 'While not always legally required, a CPA provides valuable expertise in tax planning, compliance, and financial management. For businesses with complex transactions or growth plans, CPA services are highly recommended.'
    },
    {
      question: 'How often should I review my financial statements?',
      answer: 'We recommend monthly financial statement reviews for most businesses. This allows for timely decision-making and early identification of financial trends or issues.'
    },
    {
      question: 'What records do I need to keep for tax purposes?',
      answer: 'You should maintain all invoices, receipts, bank statements, payroll records, and supporting documents for at least 4 years. Digital copies are acceptable if properly backed up.'
    }
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Business Resources & Guides
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Access our comprehensive library of business resources, tools, and guides 
              designed to help your Costa Rican business succeed and stay compliant.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-yellow-200 transition-all duration-300 group text-center"
              >
                <div className="text-4xl mb-4">{link.icon}</div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">{link.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{link.description}</p>
                <span className="inline-flex items-center text-yellow-600 font-medium group-hover:text-yellow-700">
                  {link.cta}
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Resource Categories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find the resources you need organized by business area
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {resourceCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-blue-900">{category.title}</h3>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {category.resources.map((resource, resourceIndex) => (
                    <Link
                      key={resourceIndex}
                      href={resource.href}
                      className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors duration-200 group"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h4 className="font-semibold text-blue-900 group-hover:text-yellow-600 transition-colors duration-200">
                              {resource.title}
                            </h4>
                            <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">
                              {resource.type}
                            </span>
                          </div>
                          <p className="text-gray-600 text-sm">{resource.description}</p>
                        </div>
                        <svg className="w-5 h-5 text-gray-400 group-hover:text-yellow-600 group-hover:translate-x-1 transition-all duration-200 flex-shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get quick answers to common business questions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              Have More Questions?
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.418 8-9 8a9.013 9.013 0 01-5.314-1.662L3 21l1.662-3.686A9.013 9.013 0 013 12C3 7.582 7.582 3 12 3s9 4.582 9 9z" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Subscribe to our newsletter for the latest business resources, tax updates, 
            and regulatory changes in Costa Rica.
          </p>
          
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200">
              Subscribe
            </button>
          </div>
          
          <p className="text-blue-200 text-sm mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>
    </Layout>
  )
}

export default ResourcesPage