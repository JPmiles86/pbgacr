'use client'

import React from 'react'
import Link from 'next/link'

interface ServiceModalProps {
  isOpen: boolean
  onClose: () => void
  service: {
    icon: React.ReactNode
    title: string
    description: string
    features: string[]
    details: string
    benefits: string[]
    pricing?: string
  }
}

const ServiceModal = ({ isOpen, onClose, service }: ServiceModalProps) => {
  console.log('ServiceModal render - isOpen:', isOpen, 'service:', service?.title)
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" style={{zIndex: 9999}}>
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        {/* Background overlay */}
        <div 
          className="fixed inset-0 transition-opacity bg-gray-900 bg-opacity-75"
          onClick={onClose}
        />

        {/* Modal panel */}
        <div className="inline-block w-full max-w-4xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl sm:align-middle">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center">
                {service.icon}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-blue-900">{service.title}</h2>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Details */}
            <div>
              <h3 className="text-lg font-semibold text-blue-900 mb-4">Service Overview</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.details}</p>

              <h3 className="text-lg font-semibold text-blue-900 mb-4">What's Included</h3>
              <ul className="space-y-3">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <div className="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column - Benefits */}
            <div>
              <h3 className="text-lg font-semibold text-blue-900 mb-4">Key Benefits</h3>
              <ul className="space-y-3 mb-6">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start text-gray-600">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    {benefit}
                  </li>
                ))}
              </ul>

              {service.pricing && (
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <h4 className="font-semibold text-blue-900 mb-2">Investment</h4>
                  <p className="text-gray-600">{service.pricing}</p>
                </div>
              )}

              {/* CTA */}
              <div className="bg-gradient-to-br from-blue-50 to-yellow-50 rounded-lg p-6">
                <h4 className="font-semibold text-blue-900 mb-3">Ready to Get Started?</h4>
                <p className="text-gray-600 mb-4">
                  Let's discuss how our {service.title.toLowerCase()} can help your business grow.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/contact"
                    className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-blue-900 px-4 py-3 rounded-lg font-medium text-center transition-colors duration-200"
                    onClick={onClose}
                  >
                    Get Free Consultation
                  </Link>
                  <Link
                    href="tel:+50622201302"
                    className="flex-1 border-2 border-yellow-500 text-yellow-600 hover:bg-yellow-50 px-4 py-3 rounded-lg font-medium text-center transition-colors duration-200"
                  >
                    Call Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceModal