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
      <section className="bg-gradient-to-br from-primary to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Let's Discuss Your Business Needs
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Ready to take your business to the next level? Our team of experts is here to help you succeed in Costa Rica.
            </p>
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
            <h2 className="text-3xl font-bold text-primary mb-4">Why Choose PBAG?</h2>
            <p className="text-xl text-neutral-600">Experience the difference of working with Costa Rica's trusted business partners</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🏆</span>
              </div>
              <h3 className="font-semibold text-primary mb-2">15+ Years Experience</h3>
              <p className="text-neutral-600 text-sm">Deep expertise in Costa Rican business environment</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">✅</span>
              </div>
              <h3 className="font-semibold text-primary mb-2">CPA Certified</h3>
              <p className="text-neutral-600 text-sm">Professional certifications you can trust</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🌍</span>
              </div>
              <h3 className="font-semibold text-primary mb-2">Bilingual Service</h3>
              <p className="text-neutral-600 text-sm">Full support in English and Spanish</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🤝</span>
              </div>
              <h3 className="font-semibold text-primary mb-2">Personal Attention</h3>
              <p className="text-neutral-600 text-sm">Dedicated support for your success</p>
            </div>
          </div>
        </div>
      </section>

      {/* Map and Location */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Visit Our Offices</h2>
              <p className="text-neutral-600 mb-6">
                We have two convenient locations to serve you better - in San José and Jaco. Both offices are equipped with modern facilities and staffed with experienced professionals.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">📍</span>
                  </div>
                  <div>
                    <p className="font-medium text-primary">San José Office</p>
                    <p className="text-neutral-600">Rohromoser, 50 North Centro de Investigacion Franklin Chang, San José, Costa Rica</p>
                    <p className="text-sm text-neutral-500 mt-1">Main Office - Full Services</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">🏖️</span>
                  </div>
                  <div>
                    <p className="font-medium text-primary">Jaco Office</p>
                    <p className="text-neutral-600">Central Pacific Location, Jaco, Costa Rica</p>
                    <p className="text-sm text-neutral-500 mt-1">Branch Office - Consultation & Local Services</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">⏰</span>
                  </div>
                  <div>
                    <p className="font-medium text-primary">Business Hours</p>
                    <p className="text-neutral-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className="text-neutral-600">Saturday: 9:00 AM - 1:00 PM</p>
                    <p className="text-neutral-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-primary mb-6">Quick Contact</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <span className="text-white">📞</span>
                  </div>
                  <div>
                    <p className="font-medium text-primary">Phone</p>
                    <a href="tel:+50622201302" className="text-accent hover:text-accent-600">
                      +506 2220-1302
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <span className="text-white">✉️</span>
                  </div>
                  <div>
                    <p className="font-medium text-primary">Email</p>
                    <a href="mailto:info@pbagcr.com" className="text-accent hover:text-accent-600">
                      info@pbagcr.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <span className="text-white">💬</span>
                  </div>
                  <div>
                    <p className="font-medium text-primary">WhatsApp</p>
                    <a href="https://wa.me/50622201302" className="text-accent hover:text-accent-600">
                      Message us directly
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-primary">Facebook</p>
                    <a href="https://es-la.facebook.com/PBAGCR/" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent-600">
                      Follow us on Facebook
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-primary font-medium mb-2">Emergency Support</p>
                <p className="text-sm text-neutral-600">For urgent matters outside business hours, please email us and we'll respond as soon as possible.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ContactPage