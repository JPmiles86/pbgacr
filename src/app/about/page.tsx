import Layout from '@/components/layout/Layout'
import Link from 'next/link'

export const metadata = {
  title: 'About Us | Pacific Business & Accounting Group',
  description: 'Learn about PBAG\'s 15+ years of experience providing accounting, tax, and business advisory services in Costa Rica.',
}

const AboutPage = () => {
  const timeline = [
    {
      year: '2008',
      title: 'Company Founded',
      description: 'Pacific Business & Accounting Group was established in Costa Rica with a vision to provide world-class financial services to businesses in Central America.'
    },
    {
      year: '2012',
      title: 'CPA Certification',
      description: 'Achieved CPA certification, enhancing our credibility and expanding our service capabilities to meet international standards.'
    },
    {
      year: '2016',
      title: 'Legal Services Added',
      description: 'Expanded our offerings to include immigration and commercial legal support, becoming a one-stop solution for business needs.'
    },
    {
      year: '2020',
      title: 'Digital Transformation',
      description: 'Modernized our operations with cutting-edge technology to better serve clients during challenging times.'
    },
    {
      year: '2025',
      title: 'Continued Growth',
      description: 'Today we serve 500+ businesses across Costa Rica with comprehensive financial and legal solutions.'
    }
  ]

  const values = [
    {
      icon: (
        <svg className="w-8 h-8 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ),
      title: 'Integrity',
      description: 'We conduct business with the highest ethical standards and complete transparency in all our operations.'
    },
    {
      icon: (
        <svg className="w-8 h-8 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
        </svg>
      ),
      title: 'Partnership',
      description: 'We build long-term relationships based on trust, collaboration, and mutual success with every client.'
    },
    {
      icon: (
        <svg className="w-8 h-8 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
        </svg>
      ),
      title: 'Excellence',
      description: 'We deliver exceptional service quality and results that consistently exceed our clients\' expectations.'
    },
    {
      icon: (
        <svg className="w-8 h-8 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
      ),
      title: 'Innovation',
      description: 'We embrace modern solutions and technologies to solve traditional business challenges effectively.'
    }
  ]

  const stats = [
    { number: '15+', label: 'Years of Experience', description: 'Serving Costa Rica since 2008' },
    { number: '500+', label: 'Happy Clients', description: 'Businesses we\'ve helped grow' },
    { number: '24/7', label: 'Support Available', description: 'Always here when you need us' },
    { number: '100%', label: 'Client Satisfaction', description: 'Commitment to excellence' }
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              About Pacific Business & Accounting Group
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              For over 15 years, we've been Costa Rica's trusted partner for comprehensive 
              business solutions, helping companies navigate the complexities of financial 
              management and regulatory compliance.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Pacific Business & Accounting Group was founded in 2008 with a simple yet powerful mission: 
                  to provide Costa Rican businesses with world-class financial and legal services that would 
                  enable them to thrive in an increasingly complex business environment.
                </p>
                <p>
                  What started as a small accounting practice has evolved into a comprehensive business 
                  solutions provider, serving over 500 clients across Costa Rica. Our team combines deep 
                  local knowledge with international best practices to deliver exceptional results.
                </p>
                <p>
                  We understand that every business is unique, which is why we take a personalized approach 
                  to each client relationship. Whether you're a startup looking to establish proper financial 
                  foundations or an established company seeking to optimize operations, we're here to help 
                  you succeed.
                </p>
              </div>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/services"
                  className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 text-center"
                >
                  Our Services
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 text-center"
                >
                  Get in Touch
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold text-blue-900 mb-1">{stat.number}</div>
                      <div className="font-medium text-blue-800 mb-1">{stat.label}</div>
                      <div className="text-sm text-blue-600">{stat.description}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-500 rounded-full opacity-80"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-900 rounded-full opacity-60"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Our Core Values</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              These fundamental principles guide everything we do and shape our relationships with clients and partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to becoming Costa Rica's trusted business partner - here's our story.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-900 to-yellow-500"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`relative flex items-center ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}>
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-yellow-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                      <div className="text-2xl font-bold text-yellow-600 mb-2">{item.year}</div>
                      <h3 className="text-xl font-bold text-blue-900 mb-3">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Partner with Us?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join the 500+ businesses that trust PBAG for their financial and legal needs. 
            Let's discuss how we can help your business thrive in Costa Rica.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Schedule Consultation
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default AboutPage