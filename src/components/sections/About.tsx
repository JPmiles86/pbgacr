import Link from 'next/link'

const About = () => {
  const values = [
    {
      icon: '🎯',
      title: 'Integrity',
      description: 'We conduct business with the highest ethical standards and transparency.'
    },
    {
      icon: '🤝',
      title: 'Partnership',
      description: 'We build long-term relationships based on trust and mutual success.'
    },
    {
      icon: '⚡',
      title: 'Excellence',
      description: 'We deliver exceptional service and results that exceed expectations.'
    },
    {
      icon: '🌟',
      title: 'Innovation',
      description: 'We embrace modern solutions to solve traditional business challenges.'
    }
  ]

  const stats = [
    { number: '15+', label: 'Years in Costa Rica' },
    { number: '500+', label: 'Businesses Served' },
    { number: '24/7', label: 'Support Available' },
    { number: '100%', label: 'Client Satisfaction' }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl font-bold text-blue-900 mb-6">
              Your Trusted Partner in Costa Rica
            </h2>
            
            <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
              Pacific Business & Accounting Group has been serving the Costa Rican business community 
              for over 15 years. We understand the unique challenges of doing business in Costa Rica 
              and provide the expertise you need to succeed.
            </p>
            
            <p className="text-neutral-600 mb-8 leading-relaxed">
              Our team combines deep local knowledge with international standards, ensuring your 
              business operations are compliant, efficient, and positioned for growth. We're not 
              just service providers – we're your strategic partners in success.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/about"
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 text-center"
              >
                Learn Our Story
              </Link>
              <Link
                href="/contact"
                className="border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 text-center"
              >
                Schedule Consultation
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-blue-900 mb-1">{stat.number}</div>
                  <div className="text-sm text-neutral-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Values */}
          <div>
            <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-8 text-center">Our Core Values</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl mb-3">{value.icon}</div>
                    <h4 className="font-semibold mb-2 text-white">{value.title}</h4>
                    <p className="text-sm text-blue-100 leading-relaxed">{value.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-white bg-opacity-10 rounded-xl backdrop-blur-sm border border-white border-opacity-20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">🇨🇷</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-white">Costa Rican Experts</h4>
                    <p className="text-sm text-blue-100">
                      Deep understanding of local business culture, regulations, and opportunities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About