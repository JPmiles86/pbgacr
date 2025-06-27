import Layout from '@/components/layout/Layout'
import Link from 'next/link'

export const metadata = {
  title: 'Careers | Pacific Business & Accounting Group',
  description: 'Join the PBAG Costa Rica team. Explore career opportunities in accounting, tax, legal, and business advisory services with Costa Rica\'s leading professional services firm.',
}

const CareersPage = () => {
  const benefits = [
    {
      icon: (
        <svg className="w-8 h-8 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
          <path d="M2 15.5v2a2 2 0 002 2h12a2 2 0 002-2v-2a1 1 0 00-1-1H3a1 1 0 00-1 1z" />
        </svg>
      ),
      title: 'Competitive Compensation',
      description: 'Market-leading salaries plus performance bonuses and annual increases based on merit and company growth.'
    },
    {
      icon: (
        <svg className="w-8 h-8 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
        </svg>
      ),
      title: 'Comprehensive Benefits',
      description: 'Full health insurance, life insurance, paid vacation, sick leave, and contributions to Costa Rican social security.'
    },
    {
      icon: (
        <svg className="w-8 h-8 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
        </svg>
      ),
      title: 'Professional Development',
      description: 'Continuous learning opportunities, certifications, conference attendance, and career advancement programs.'
    },
    {
      icon: (
        <svg className="w-8 h-8 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
        </svg>
      ),
      title: 'Prime Location',
      description: 'Modern office facilities in San José with easy access to transportation, restaurants, and amenities.'
    },
    {
      icon: (
        <svg className="w-8 h-8 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Work-Life Balance',
      description: 'Flexible work arrangements, reasonable hours, and a supportive environment that values personal time.'
    },
    {
      icon: (
        <svg className="w-8 h-8 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
        </svg>
      ),
      title: 'Team Culture',
      description: 'Collaborative, inclusive environment where every team member is valued and their contributions recognized.'
    }
  ]

  const departments = [
    {
      name: 'Accounting & Finance',
      positions: ['Senior Accountant', 'Financial Analyst', 'Bookkeeping Specialist'],
      requirements: 'Bachelor&apos;s degree in Accounting or Finance, 2+ years experience, proficiency in accounting software'
    },
    {
      name: 'Tax & Compliance',
      positions: ['Tax Specialist', 'Compliance Officer', 'VAT Consultant'],
      requirements: 'Tax certification or CPA, knowledge of Costa Rican tax law, attention to detail'
    },
    {
      name: 'Legal Services',
      positions: ['Corporate Lawyer', 'Immigration Specialist', 'Legal Assistant'],
      requirements: 'Law degree, bar admission in Costa Rica, experience in corporate or immigration law'
    },
    {
      name: 'Client Services',
      positions: ['Client Relations Manager', 'Business Consultant', 'Administrative Assistant'],
      requirements: 'Business degree preferred, excellent communication skills, bilingual Spanish/English'
    }
  ]

  const applicationSteps = [
    {
      step: '1',
      title: 'Submit Application',
      description: 'Send your resume and cover letter to our HR team highlighting your relevant experience and interest in PBAG.'
    },
    {
      step: '2',
      title: 'Initial Review',
      description: 'Our HR team reviews applications and conducts initial screening to assess qualifications and fit.'
    },
    {
      step: '3',
      title: 'Interview Process',
      description: 'Selected candidates participate in interviews with department heads and team members.'
    },
    {
      step: '4',
      title: 'Final Decision',
      description: 'We make our decision and extend offers to successful candidates, including negotiation of terms.'
    }
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Build Your Career with PBAG
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Join Costa Rica's leading professional services firm and become part of a team 
              that's shaping the future of business in Central America. We're always looking 
              for talented individuals who share our commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work at PBAG */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Why Choose PBAG?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              At PBAG, we believe our people are our greatest asset. We've created an environment 
              where talented professionals can thrive, grow, and make a meaningful impact on our 
              clients' success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Opportunities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Current Opportunities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're actively seeking qualified professionals to join our growing team. 
              Explore opportunities across our various departments and find your perfect fit.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {departments.map((dept, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <h3 className="text-2xl font-bold text-blue-900 mb-6">{dept.name}</h3>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Available Positions:</h4>
                  <div className="space-y-2">
                    {dept.positions.map((position, posIndex) => (
                      <div key={posIndex} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                        {position}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="border-t border-gray-100 pt-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Typical Requirements:</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{dept.requirements}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-blue-50 rounded-xl p-6 max-w-2xl mx-auto">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Don't See Your Role?</h3>
              <p className="text-blue-700 mb-4">
                We're always interested in hearing from exceptional candidates, even if we don't 
                have a current opening that matches your background.
              </p>
              <Link
                href="/contact"
                className="text-blue-900 hover:text-blue-700 font-medium underline"
              >
                Send us your resume anyway
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">How to Apply</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our application process is designed to be thorough yet efficient, ensuring we find 
              the right fit for both the candidate and our team.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Process line */}
              <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-900 to-yellow-500 hidden md:block"></div>
              
              <div className="space-y-12">
                {applicationSteps.map((step, index) => (
                  <div key={index} className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                  }`}>
                    {/* Step number */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-yellow-500 rounded-full border-4 border-white shadow-lg z-10 flex items-center justify-center hidden md:flex">
                      <span className="text-white font-bold text-lg">{step.step}</span>
                    </div>
                    
                    {/* Content */}
                    <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                        <div className="flex items-center gap-3 mb-3 md:hidden">
                          <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-sm">{step.step}</span>
                          </div>
                          <h3 className="text-xl font-bold text-blue-900">{step.title}</h3>
                        </div>
                        <h3 className="text-xl font-bold text-blue-900 mb-3 hidden md:block">{step.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Employee Testimonial */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 lg:p-12">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-900 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-8">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
              </div>
              
              <blockquote className="text-xl text-blue-900 italic mb-8 leading-relaxed">
                &ldquo;Joining PBAG was the best career decision I've made. The learning opportunities 
                are endless, the team is incredibly supportive, and I feel valued for my contributions. 
                Every day brings new challenges and growth opportunities.&rdquo;
              </blockquote>
              
              <div className="border-t border-blue-200 pt-6">
                <p className="font-semibold text-blue-900 text-lg">Maria Rodriguez</p>
                <p className="text-blue-700">Senior Tax Specialist, 4 years with PBAG</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Apply Now CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Join Our Team?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Take the next step in your career and become part of Costa Rica's premier 
            professional services firm. We're excited to hear from you and discuss how 
            you can contribute to our continued success.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold mb-4">How to Apply:</h3>
            <div className="space-y-3 text-blue-100">
              <div className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>Email: careers@pbagcr.com</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>Phone: +506 2234-5678</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Submit Application
            </Link>
            <Link
              href="/team"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
            >
              Meet Our Team
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
            <h3 className="text-lg font-semibold text-yellow-800">Online Application Portal Coming Soon</h3>
          </div>
          <p className="text-yellow-700 max-w-2xl mx-auto">
            We're developing an online application system to streamline the process. For now, 
            please send your resume and cover letter directly to our HR team using the contact 
            information above.
          </p>
        </div>
      </section>
    </Layout>
  )
}

export default CareersPage