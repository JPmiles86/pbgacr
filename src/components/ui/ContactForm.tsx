'use client'

import { useState } from 'react'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    urgency: '',
    preferredContact: 'email',
    budget: '',
    message: ''
  })

  const services = [
    'Accounting & Bookkeeping',
    'Audit & Tax Services', 
    'Payroll Management',
    'CPA Services',
    'Bank Account Services',
    'Legal Support',
    'Business Formation',
    'Tax Planning & Consultation',
    'Financial Advisory',
    'QuickBooks Setup & Training',
    'Other'
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // You can integrate with your backend or email service here
    alert('Thank you for your message! We will contact you soon.')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-blue-900 mb-2">Get Your Free Consultation</h3>
        <p className="text-gray-600">Fill out the form below and we&apos;ll get back to you within 24 hours.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
              placeholder="your@email.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
              placeholder="+506 XXXX-XXXX"
            />
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium text-neutral-700 mb-2">
              Company Name
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
              placeholder="Your company name"
            />
          </div>
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium text-neutral-700 mb-2">
            Service Interested In
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
          >
            <option value="">Select a service...</option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
            placeholder="Tell us about your business needs..."
          />
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="terms"
            required
            className="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary focus:ring-2"
          />
          <label htmlFor="terms" className="text-sm text-neutral-600">
            I agree to be contacted by PBAG regarding my inquiry *
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-accent hover:bg-accent-600 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-colors duration-200 transform hover:scale-105"
        >
          Send Message
        </button>
      </form>

      <div className="mt-8 pt-8 border-t border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-2xl mb-2">📞</div>
            <p className="font-medium text-primary">Call Us</p>
            <p className="text-neutral-600">+506 2220-1302</p>
          </div>
          <div>
            <div className="text-2xl mb-2">✉️</div>
            <p className="font-medium text-primary">Email Us</p>
            <p className="text-neutral-600">info@pbagcr.com</p>
          </div>
          <div>
            <div className="text-2xl mb-2">📍</div>
            <p className="font-medium text-primary">Visit Us</p>
            <p className="text-neutral-600">San José & Jaco</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm