'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function FAQClient() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  const [faqFormData, setFaqFormData] = useState({
    name: '',
    email: '',
    question: '',
    notify: false
  })
  const [faqSubmitting, setFaqSubmitting] = useState(false)
  const [faqSubmitStatus, setFaqSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  const handleFaqFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked
    
    setFaqFormData({
      ...faqFormData,
      [name]: type === 'checkbox' ? checked : value
    })
  }

  const handleFaqSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFaqSubmitting(true)
    setFaqSubmitStatus('idle')

    try {
      const response = await fetch('/api/faq-question', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(faqFormData),
      })

      if (response.ok) {
        setFaqSubmitStatus('success')
        setFaqFormData({
          name: '',
          email: '',
          question: '',
          notify: false
        })
      } else {
        setFaqSubmitStatus('error')
      }
    } catch (error) {
      console.error('FAQ form submission error:', error)
      setFaqSubmitStatus('error')
    } finally {
      setFaqSubmitting(false)
    }
  }

  const businessFAQs = [
    {
      question: 'What are the main requirements for starting a business in Costa Rica?',
      answer: 'To start a business in Costa Rica, you typically need to: register your company with the National Registry, obtain a tax ID (cédula jurídica), register for VAT if applicable, obtain necessary permits and licenses specific to your industry, and comply with labor law requirements if hiring employees. PBAG can guide you through each step of this process.'
    },
    {
      question: 'How long does it take to establish a corporation in Costa Rica?',
      answer: 'The incorporation process typically takes 2-4 weeks, depending on the complexity of your business structure and how quickly required documents are obtained. This includes drafting corporate documents, notarizing them, registering with the National Registry, and obtaining your tax identification. We can expedite this process for urgent cases.'
    },
    {
      question: 'What types of business entities can I establish in Costa Rica?',
      answer: 'Costa Rica offers several business structures including: Sociedad Anónima (S.A.) - similar to a corporation, Sociedad de Responsabilidad Limitada (S.R.L.) - similar to an LLC, sole proprietorships, partnerships, and branches of foreign companies. Each has different requirements, tax implications, and liability protections.'
    },
    {
      question: 'Do I need to be a Costa Rican resident to own a business?',
      answer: 'No, foreign nationals can own 100% of most types of businesses in Costa Rica. However, certain regulated industries may have restrictions. You don\'t need to be a resident, but having local representation and understanding local regulations is crucial for success.'
    },
    {
      question: 'What are the main taxes businesses pay in Costa Rica?',
      answer: 'The main business taxes include: Corporate Income Tax (30% on profits), VAT/Sales Tax (13% on most goods and services), Municipal Tax (varies by location), Payroll Taxes (social security contributions), and various other fees depending on your business type and activities.'
    },
    {
      question: 'How does the Costa Rican social security system work for businesses?',
      answer: 'Employers must register with the Costa Rican Social Security System (CCSS) and make monthly contributions for all employees. This covers healthcare, disability, and pension benefits. Contribution rates vary but typically total around 26% of gross salary (split between employer and employee).'
    }
  ]

  const serviceFAQs = [
    {
      question: 'What accounting services does PBAG provide?',
      answer: 'We offer comprehensive accounting services including: monthly bookkeeping and financial statements, accounts payable and receivable management, bank reconciliations, budget preparation and analysis, cost accounting, financial reporting and analysis, and preparation for audits and tax filings.'
    },
    {
      question: 'Can PBAG help with tax planning and compliance?',
      answer: 'Absolutely. Our tax services include: annual tax return preparation, monthly VAT filings, tax planning strategies to minimize liability, representation before tax authorities, compliance reviews, international tax consulting, and assistance with tax audits and disputes.'
    },
    {
      question: 'Do you provide payroll processing services?',
      answer: 'Yes, we handle complete payroll processing including: salary calculations and payments, social security contributions, vacation and bonus calculations, preparation of payroll reports, compliance with labor law requirements, and assistance with employee benefit administration.'
    },
    {
      question: 'What legal services are available through PBAG?',
      answer: 'Our legal team provides: corporate law services, contract drafting and review, immigration assistance, commercial law support, regulatory compliance guidance, intellectual property basics, and representation in business-related legal matters.'
    },
    {
      question: 'How often should I meet with my PBAG accountant?',
      answer: 'This depends on your business needs. Most clients benefit from monthly meetings to review financial statements and address any issues. Some businesses require weekly or bi-weekly contact, while others may need only quarterly reviews. We customize our service frequency to match your business requirements.'
    },
    {
      question: 'Can PBAG help with business banking in Costa Rica?',
      answer: 'Yes, we assist with: opening business bank accounts, understanding banking requirements and procedures, managing banking relationships, facilitating international transfers, and ensuring compliance with banking regulations. Our relationships with local banks can help streamline the process.'
    },
    {
      question: 'What industries does PBAG specialize in?',
      answer: 'We serve businesses across many industries including: tourism and hospitality, agriculture and export, technology and software, manufacturing, retail and distribution, real estate development, professional services, and non-profit organizations. Our diverse experience allows us to understand sector-specific challenges.'
    },
    {
      question: 'Do you provide services in English?',
      answer: 'Yes, all our services are available in both English and Spanish. Our bilingual team ensures clear communication and understanding of your business needs, regardless of your preferred language. All documents and reports can be prepared in either language.'
    }
  ]

  const generalFAQs = [
    {
      question: 'How do I get started with PBAG services?',
      answer: 'Getting started is easy. Contact us to schedule an initial consultation where we\'ll discuss your needs, explain our services, and provide a customized proposal. This consultation is typically free and helps us understand how we can best serve your business.'
    },
    {
      question: 'What are PBAG\'s typical fees for services?',
      answer: 'Our fees vary depending on the services required and the complexity of your business. We offer competitive, transparent pricing and will provide a detailed proposal outlining all costs before beginning work. Many services can be provided on a fixed monthly fee basis for budget predictability.'
    },
    {
      question: 'How quickly can PBAG respond to urgent matters?',
      answer: 'We understand that business issues can be urgent. Our team is available for emergency consultations and can prioritize urgent matters. We typically respond to urgent requests within a few hours during business days and have procedures for after-hours emergencies.'
    },
    {
      question: 'Does PBAG work with international clients?',
      answer: 'Yes, we regularly work with international clients investing in or operating businesses in Costa Rica. We understand the unique challenges of cross-border business operations and can coordinate with your advisors in other countries when necessary.'
    },
    {
      question: 'What technology platforms does PBAG use?',
      answer: 'We use modern, cloud-based accounting and business management software including QuickBooks, specialized Costa Rican accounting platforms, secure document sharing systems, and digital communication tools. This ensures efficiency, accuracy, and real-time access to your business information.'
    },
    {
      question: 'Can PBAG help if I\'m having problems with existing tax or legal issues?',
      answer: 'Absolutely. We often help businesses resolve existing compliance issues, tax problems, legal disputes, and operational challenges. Our experienced team can assess your situation and develop a plan to address and resolve outstanding issues while preventing future problems.'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto font-medium">
              Find answers to common questions about doing business in Costa Rica, 
              our services, and how PBAG can help your business succeed. Can\\'t find 
              what you\\'re looking for? Contact us directly.
            </p>
          </div>
        </div>
      </section>

      {/* Business in Costa Rica FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Doing Business in Costa Rica</h2>
            <p className="text-xl text-gray-600">
              Essential information about establishing and operating a business in Costa Rica.
            </p>
          </div>

          <div className="space-y-4">
            {businessFAQs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition-colors duration-200 flex justify-between items-center"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-semibold text-blue-900 pr-4">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-blue-900 transform transition-transform duration-200 ${
                      openFAQ === index ? 'rotate-180' : ''
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                {openFAQ === index && (
                  <div className="px-6 py-4 bg-white border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service-Related FAQs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">
              Common questions about PBAG's accounting, tax, legal, and business advisory services.
            </p>
          </div>

          <div className="space-y-4">
            {serviceFAQs.map((faq, index) => (
              <div key={index + businessFAQs.length} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 focus:bg-gray-50 focus:outline-none transition-colors duration-200 flex justify-between items-center"
                  onClick={() => toggleFAQ(index + businessFAQs.length)}
                >
                  <span className="font-semibold text-blue-900 pr-4">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-blue-900 transform transition-transform duration-200 ${
                      openFAQ === index + businessFAQs.length ? 'rotate-180' : ''
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                {openFAQ === index + businessFAQs.length && (
                  <div className="px-6 py-4 bg-white border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* General FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Working with PBAG</h2>
            <p className="text-xl text-gray-600">
              General questions about our processes, fees, and how we work with clients.
            </p>
          </div>

          <div className="space-y-4">
            {generalFAQs.map((faq, index) => (
              <div key={index + businessFAQs.length + serviceFAQs.length} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition-colors duration-200 flex justify-between items-center"
                  onClick={() => toggleFAQ(index + businessFAQs.length + serviceFAQs.length)}
                >
                  <span className="font-semibold text-blue-900 pr-4">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-blue-900 transform transition-transform duration-200 ${
                      openFAQ === index + businessFAQs.length + serviceFAQs.length ? 'rotate-180' : ''
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                {openFAQ === index + businessFAQs.length + serviceFAQs.length && (
                  <div className="px-6 py-4 bg-white border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Need More Information?</h2>
            <p className="text-xl text-gray-600">
              Explore our resources or get in touch for personalized assistance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-blue-800 rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Business Resources</h3>
              <p className="text-gray-600 mb-6">
                Access guides, templates, and tools to help you understand Costa Rican business requirements.
              </p>
              <Link
                href="/resources"
                className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 inline-block"
              >
                View Resources
              </Link>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-1.106-1.106A6.002 6.002 0 004 10c0 .738.134 1.448.378 2.102l1.78-1.78zm2.896-6.283l1.562 1.562a3.997 3.997 0 00-2.183.078l1.525-1.524A5.99 5.99 0 0110 4zM8.47 5.97L7.94 5.44a6.01 6.01 0 012.618-.916l-.132 1.323a4.001 4.001 0 00-1.956.123z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Free Consultation</h3>
              <p className="text-gray-600 mb-6">
                Schedule a complimentary consultation to discuss your specific business needs and questions.
              </p>
              <Link
                href="/contact"
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 inline-block"
              >
                Book Consultation
              </Link>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Direct Contact</h3>
              <p className="text-gray-600 mb-6">
                Speak directly with our team for immediate answers to your questions.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <div>Phone: +506 2234-5678</div>
                <div>Email: info@pbagcr.com</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ask a Question Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              Have a Question Not Listed Here?
            </h2>
            <p className="text-xl text-gray-600">
              Submit your question and we'll get back to you with an answer. Your question may be added to our FAQ to help other businesses.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <form onSubmit={handleFaqSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="faq-name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="faq-name"
                    name="name"
                    required
                    value={faqFormData.name}
                    onChange={handleFaqFormChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-colors"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="faq-email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="faq-email"
                    name="email"
                    required
                    value={faqFormData.email}
                    onChange={handleFaqFormChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="faq-question" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Question *
                </label>
                <textarea
                  id="faq-question"
                  name="question"
                  required
                  rows={4}
                  value={faqFormData.question}
                  onChange={handleFaqFormChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-colors resize-none"
                  placeholder="What would you like to know about doing business in Costa Rica or our services?"
                />
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="faq-notify"
                  name="notify"
                  checked={faqFormData.notify}
                  onChange={handleFaqFormChange}
                  className="w-4 h-4 text-blue-900 bg-gray-100 border-gray-300 rounded focus:ring-blue-900 focus:ring-2"
                />
                <label htmlFor="faq-notify" className="text-sm text-gray-600">
                  Notify me when this question is added to the FAQ
                </label>
              </div>

              <button
                type="submit"
                disabled={faqSubmitting}
                className="w-full bg-yellow-500 hover:bg-yellow-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white py-4 px-6 rounded-lg font-semibold text-lg transition-colors duration-200 transform hover:scale-105 disabled:hover:scale-100"
              >
                {faqSubmitting ? 'Submitting...' : 'Submit Question'}
              </button>

              {faqSubmitStatus === 'success' && (
                <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                  <p className="font-medium">✅ Question submitted successfully!</p>
                  <p className="text-sm">We'll review your question and get back to you soon.</p>
                </div>
              )}

              {faqSubmitStatus === 'error' && (
                <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                  <p className="font-medium">❌ Failed to submit question</p>
                  <p className="text-sm">Please try again or contact us directly at info@pbagcr.com</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Still Have Questions?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Our experienced team is here to help. Whether you need clarification on Costa Rican 
            business regulations, want to understand our services better, or have specific questions 
            about your situation, we're ready to provide personalized answers.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Ask Your Question
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
            >
              Learn About Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Coming Soon Notice */}
      <section className="py-12 bg-yellow-50 border-t border-yellow-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <svg className="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <h3 className="text-lg font-semibold text-yellow-800">Expanding FAQ Database</h3>
          </div>
          <p className="text-yellow-700 max-w-2xl mx-auto">
            We're continuously adding new questions and answers based on client inquiries. 
            If you have a question that's not covered here, please ask us - it may become 
            part of our FAQ to help other businesses.
          </p>
        </div>
      </section>
    </>
  )
}