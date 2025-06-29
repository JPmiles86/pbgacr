import Layout from '@/components/layout/Layout'
import ContactForm from '@/components/ui/ContactForm'

export const metadata = {
  title: 'Contact Us | Pacific Business & Accounting Group',
  description: 'Contact PBAG for expert accounting, tax, and business advisory services in Costa Rica. Free consultation available.',
}

const ContactPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Let's Discuss Your <br />
              <span className="text-yellow-500">Business Needs</span>
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto font-medium">
              Ready to take your business to the next level? Our team of experts is here to help you succeed in Costa Rica.
            </p>
            <a 
              href="tel:+50689257777"
              className="mt-8 inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-blue-900 px-6 py-3 rounded-lg font-semibold transition-colors duration-200 cursor-pointer"
            >
              <span>📞</span>
              Free Consultation Available - Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Why Choose <span className="text-yellow-500">PBAG</span>?</h2>
            <p className="text-xl text-neutral-700 font-medium">Experience the difference of working with Costa Rica's trusted business partners</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🏆</span>
              </div>
              <h3 className="font-semibold text-blue-900 mb-2">15+ Years Experience</h3>
              <p className="text-neutral-700 text-sm font-medium">Deep expertise in Costa Rican business environment</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">✅</span>
              </div>
              <h3 className="font-semibold text-blue-900 mb-2">CPA Certified</h3>
              <p className="text-neutral-700 text-sm font-medium">Professional certifications you can trust</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🌍</span>
              </div>
              <h3 className="font-semibold text-blue-900 mb-2">Bilingual Service</h3>
              <p className="text-neutral-700 text-sm font-medium">Full support in English and Spanish</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🤝</span>
              </div>
              <h3 className="font-semibold text-blue-900 mb-2">Personal Attention</h3>
              <p className="text-neutral-700 text-sm font-medium">Dedicated support for your success</p>
            </div>
          </div>
        </div>
      </section>

      {/* Map and Location */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Visit Our <span className="text-yellow-500">Offices</span></h2>
              <p className="text-neutral-700 mb-6 font-medium">
                We have two convenient locations to serve you better - in San José and Jaco. Both offices are equipped with modern facilities and staffed with experienced professionals.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">📍</span>
                  </div>
                  <div>
                    <p className="font-medium text-blue-900">San José Office</p>
                    <p className="text-neutral-700 font-medium">Rohromoser, 50 North Centro de Investigacion Franklin Chang, San José, Costa Rica</p>
                    <p className="text-sm text-neutral-600 mt-1 font-medium">Main Office - Full Services</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">🏖️</span>
                  </div>
                  <div>
                    <p className="font-medium text-blue-900">Jaco Office</p>
                    <p className="text-neutral-700 font-medium">Central Pacific Location, Jaco, Costa Rica</p>
                    <p className="text-sm text-neutral-600 mt-1 font-medium">Branch Office - Consultation & Local Services</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">⏰</span>
                  </div>
                  <div>
                    <p className="font-medium text-blue-900">Business Hours</p>
                    <p className="text-neutral-700 font-medium">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className="text-neutral-700 font-medium">Saturday: 9:00 AM - 1:00 PM</p>
                    <p className="text-neutral-700 font-medium">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-blue-900 mb-6">Quick <span className="text-yellow-500">Contact</span></h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Phone Card */}
                <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-blue-900">Phone</p>
                      <a href="tel:+50689257777" className="text-yellow-500 hover:text-yellow-600 font-medium">
                        +506 8925-7777
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email Card */}
                <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-blue-900">Email</p>
                      <a href="mailto:info@pbagcr.com" className="text-yellow-500 hover:text-yellow-600 font-medium">
                        info@pbagcr.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Card */}
                <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.515 3.488"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-blue-900">WhatsApp</p>
                      <a href="https://wa.me/50689257777" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:text-yellow-600 font-medium">
                        Message us directly
                      </a>
                    </div>
                  </div>
                </div>

                {/* Facebook Card */}
                <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-blue-900">Facebook</p>
                      <a href="https://es-la.facebook.com/PBAGCR/" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:text-yellow-600 font-medium">
                        Follow us on Facebook
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-900 font-medium mb-2">Emergency Support</p>
                <p className="text-sm text-neutral-700 font-medium">For urgent matters outside business hours, please email us and we'll respond as soon as possible.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ContactPage