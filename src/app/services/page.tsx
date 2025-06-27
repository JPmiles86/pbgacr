import Layout from '@/components/layout/Layout'
import Link from 'next/link'

export const metadata = {
  title: 'Our Services | Pacific Business & Accounting Group',
  description: 'Comprehensive accounting, tax, payroll, CPA, and legal services for businesses in Costa Rica. Expert solutions tailored to your needs.',
}

const ServicesPage = () => {
  const serviceCategories = [
    {
      category: 'Financial Services',
      description: 'Complete financial management solutions for your business',
      services: [
        {
          icon: (
            <svg className="w-10 h-10 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
            </svg>
          ),
          title: 'Accounting & Bookkeeping',
          description: 'Complete financial record management from daily transactions to comprehensive financial statements.',
          features: ['Monthly Financial Reports', 'Cash Flow Management', 'Budget Planning', 'Financial Analysis', 'QuickBooks Setup & Training'],
          href: '/services/accounting',
          popular: true
        },
        {
          icon: (
            <svg className="w-10 h-10 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
            </svg>
          ),
          title: 'Audit & Tax Services',
          description: 'Expert tax preparation and audit services ensuring compliance with Costa Rican regulations.',
          features: ['Tax Return Preparation', 'Tax Planning & Strategy', 'Audit Support', 'Compliance Review', 'Tax Dispute Resolution'],
          href: '/services/audit-tax'
        },
        {
          icon: (
            <svg className="w-10 h-10 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
            </svg>
          ),
          title: 'Payroll Management',
          description: 'Complete payroll processing and employee benefits administration for your peace of mind.',
          features: ['Payroll Processing', 'Benefits Administration', 'Tax Withholdings', 'Compliance Reporting', 'Employee Self-Service Portal'],
          href: '/services/payroll'
        }
      ]
    },
    {
      category: 'Professional Services',
      description: 'Certified professional services you can trust',
      services: [
        {
          icon: (
            <svg className="w-10 h-10 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          ),
          title: 'CPA Services',
          description: 'Professional CPA services with certified expertise you can trust.',
          features: ['CPA Reviews', 'Financial Certifications', 'Professional Opinions', 'Compliance Verification', 'Forensic Accounting'],
          href: '/services/cpa',
          popular: true
        },
        {
          icon: (
            <svg className="w-10 h-10 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
          ),
          title: 'Banking Services',
          description: 'Assistance with Costa Rican banking relationships and account management.',
          features: ['Account Opening Assistance', 'Banking Relations', 'Transaction Support', 'Documentation Help', 'Credit Facilitation'],
          href: '/services/banking'
        },
        {
          icon: (
            <svg className="w-10 h-10 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          ),
          title: 'Legal Support',
          description: 'Immigration and commercial legal support to complement your business needs.',
          features: ['Immigration Law', 'Commercial Law', 'Business Formation', 'Contract Review', 'Legal Consulting'],
          href: '/services/legal'
        }
      ]
    }
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Initial Consultation',
      description: 'We discuss your business needs and challenges to understand how we can best serve you.'
    },
    {
      step: '02',
      title: 'Custom Proposal',
      description: 'We create a tailored service proposal based on your specific requirements and budget.'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Our expert team begins implementing solutions with regular communication and updates.'
    },
    {
      step: '04',
      title: 'Ongoing Support',
      description: 'We provide continuous support and adjust our services as your business evolves.'
    }
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Comprehensive Business Solutions
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              From accounting to legal support, we provide all the services your business 
              needs to thrive in Costa Rica. Expert solutions tailored to your unique needs.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Get Free Consultation
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Categories */}
      {serviceCategories.map((category, categoryIndex) => (
        <section key={categoryIndex} className={`py-20 ${categoryIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">{category.category}</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">{category.description}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {category.services.map((service, serviceIndex) => (
                <div key={serviceIndex} className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-xl hover:border-yellow-200 transition-all duration-300 group relative overflow-hidden">
                  {service.popular && (
                    <div className="absolute top-0 right-0 bg-yellow-500 text-white px-3 py-1 text-sm font-medium rounded-bl-lg">
                      Popular
                    </div>
                  )}
                  
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    
                    <h3 className="text-xl font-bold text-blue-900 mb-3 group-hover:text-yellow-600 transition-colors duration-200">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={service.href}
                      className="inline-flex items-center text-blue-900 hover:text-yellow-600 font-semibold transition-colors duration-200 group/link"
                    >
                      Learn More
                      <svg className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Process Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Process</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We follow a proven process to ensure you get the best service and results for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-blue-100 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join hundreds of satisfied clients who trust PBAG for their business needs. 
            Let's discuss how our services can help your business grow and succeed.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Schedule Free Consultation
            </Link>
            <Link
              href="/about"
              className="border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ServicesPage