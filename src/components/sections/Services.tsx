'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import ServiceModal from '@/components/ui/ServiceModal'

interface ServiceType {
  icon: React.ReactNode
  title: string
  description: string
  features: string[]
  details: string
  benefits: string[]
  pricing?: string
}

const Services = () => {
  const [selectedService, setSelectedService] = useState<ServiceType | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (service: ServiceType) => {
    console.log('Opening modal for service:', service.title)
    setSelectedService(service)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedService(null)
  }

  const services = [
    {
      icon: (
        <svg className="w-8 h-8 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
        </svg>
      ),
      title: 'Accounting & Bookkeeping',
      description: 'Complete financial record management, from daily transactions to comprehensive financial statements.',
      features: ['Monthly Financial Reports', 'Cash Flow Management', 'Budget Planning', 'Financial Analysis'],
      details: 'Our comprehensive accounting and bookkeeping services ensure your financial records are accurate, compliant, and provide the insights you need to make informed business decisions. We handle everything from daily transaction recording to complex financial statement preparation.',
      benefits: [
        'Save time by outsourcing complex financial tasks',
        'Ensure compliance with Costa Rican accounting standards',
        'Get monthly insights to optimize your cash flow',
        'Professional preparation for tax season and audits',
        'Access to experienced CPAs and accounting professionals'
      ],
      pricing: 'Starting at $500/month depending on transaction volume and complexity'
    },
    {
      icon: (
        <svg className="w-8 h-8 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
        </svg>
      ),
      title: 'Audit & Tax Services',
      description: 'Expert tax preparation and audit services ensuring compliance with Costa Rican regulations.',
      features: ['Tax Return Preparation', 'Tax Planning', 'Audit Support', 'Compliance Review'],
      details: 'Navigate Costa Rica\'s complex tax landscape with confidence. Our expert tax professionals ensure your business meets all regulatory requirements while optimizing your tax position through strategic planning and preparation.',
      benefits: [
        'Minimize tax liability through strategic planning',
        'Ensure 100% compliance with 2025 tax regulations',
        'Avoid costly penalties and interest charges',
        'Professional audit support when needed',
        'Year-round tax consultation and advice'
      ],
      pricing: 'Corporate tax returns starting at $800, planning services from $200/hour'
    },
    {
      icon: (
        <svg className="w-8 h-8 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
        </svg>
      ),
      title: 'Payroll Management',
      description: 'Complete payroll processing and employee benefits administration for your peace of mind.',
      features: ['Payroll Processing', 'Benefits Administration', 'Tax Withholdings', 'Compliance Reporting'],
      details: 'Let us handle the complexity of Costa Rican payroll requirements. From CCSS contributions to labor law compliance, we ensure your employees are paid correctly and on time while keeping you compliant with all regulations.',
      benefits: [
        'Eliminate payroll errors and compliance issues',
        'Save hours each month on administrative tasks',
        'Automatic CCSS and tax calculations (26.67% employer contributions)',
        'Employee self-service portal for pay stubs and tax documents',
        'Direct deposit and payment flexibility'
      ],
      pricing: 'Starting at $25 per employee per month'
    },
    {
      icon: (
        <svg className="w-8 h-8 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
        </svg>
      ),
      title: 'Bank Account Services',
      description: 'Assistance with Costa Rican banking relationships and account management.',
      features: ['Account Opening', 'Banking Relations', 'Transaction Support', 'Documentation'],
      details: 'Navigate the Costa Rican banking system with ease. We help you establish and maintain strong banking relationships, from initial account setup to ongoing transaction support and documentation requirements.',
      benefits: [
        'Expert guidance through complex banking requirements',
        'Established relationships with major Costa Rican banks',
        'Assistance with documentation in Spanish and English',
        'Ongoing support for banking transactions and issues',
        'Help with business loan applications and credit facilities'
      ],
      pricing: 'One-time setup fee of $300, ongoing support at $150/hour'
    },
    {
      icon: (
        <svg className="w-8 h-8 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ),
      title: 'CPA Certifications',
      description: 'Professional CPA services with certified expertise you can trust.',
      features: ['CPA Reviews', 'Financial Certifications', 'Professional Opinions', 'Compliance Verification'],
      details: 'Access the expertise of certified public accountants for complex financial matters. Our CPA services provide the professional certifications and opinions required for legal, banking, and regulatory compliance.',
      benefits: [
        'Certified professional opinions for legal and banking requirements',
        'Financial statement certifications for loans and investments',
        'Expert witness services for legal proceedings',
        'Compliance verification for regulatory requirements',
        'Professional credibility for your financial statements'
      ],
      pricing: 'CPA reviews starting at $1,200, certification services from $300/hour'
    },
    {
      icon: (
        <svg className="w-8 h-8 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ),
      title: 'Legal Support',
      description: 'Immigration and commercial legal support to complement your business needs.',
      features: ['Immigration Law', 'Commercial Law', 'Business Formation', 'Legal Consulting'],
      details: 'Comprehensive legal support for your business and personal needs in Costa Rica. From immigration matters to commercial law, we provide expert legal guidance to ensure your business operates within the legal framework.',
      benefits: [
        'Expert immigration law assistance for residency and work permits',
        'Commercial law support for contracts and business operations',
        'Business formation and corporate structure guidance',
        'Legal document preparation and review',
        'Ongoing legal consultation for business decisions'
      ],
      pricing: 'Legal consultation starting at $200/hour, immigration services from $800'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="text-center lg:text-left">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">
              Comprehensive Business Solutions
            </h2>
            <p className="text-xl text-neutral-600 leading-relaxed">
              From accounting to legal support, we provide all the services your business needs to thrive in Costa Rica. Our experienced team combines local expertise with international standards.
            </p>
          </div>
          
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/stock/PBAG-BW-12.jpg"
                alt="Professional accounting and business services team in Costa Rica"
                width={600}
                height={400}
                className="object-cover w-full h-80"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-xl hover:border-yellow-200 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-yellow-400/10 to-blue-900/10 rounded-bl-full"></div>
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

                <button
                  onClick={() => openModal(service)}
                  className="inline-flex items-center text-blue-900 hover:text-yellow-600 font-semibold transition-colors duration-200 group/link"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose PBAG Section with Single Image */}
        <div className="mt-20 bg-white rounded-3xl p-8 lg:p-12 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-blue-900 mb-6">
                Why Choose <span className="text-yellow-500">PBAG</span>?
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900">15+ Years Local Experience</h4>
                    <p className="text-gray-600">Deep understanding of Costa Rican business environment and regulations</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900">Bilingual Professional Team</h4>
                    <p className="text-gray-600">Full support in English and Spanish with international standards</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900">CPA Certified Services</h4>
                    <p className="text-gray-600">Professional certifications and expertise you can trust</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <Image
                  src="/stock/PBAG--13.jpg"
                  alt="Modern Costa Rica business environment and professional services"
                  width={500}
                  height={400}
                  className="object-cover w-full h-80"
                />
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link
            href="/services"
            className="inline-flex items-center bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            View All Services
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Service Modal */}
      {selectedService && (
        <ServiceModal 
          isOpen={isModalOpen}
          onClose={closeModal}
          service={selectedService}
        />
      )}
    </section>
  )
}

export default Services