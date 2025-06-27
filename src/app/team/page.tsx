import Temp from '@/components/layout/Layout'
import Temp from 'next/link'

export const metadata = {
  title: 'Our Team | Pacific Business & Accounting Group',
  description: 'Meet the experienced professionals at PBAG Costa Rica. Our team combines local expertise with international standards to deliver exceptional business solutions.',
}

const TeamPage = () => {
  const values = [
    {
      icon: (
        <svg className="w-8 h-8 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3.0 0 013.75-2.906z" />
        </svg>
      ),
      title: 'Collaborative Excellence',
      description: 'We work as one unified team, combining diverse expertise to deliver comprehensive solutions for our clients.'
    },
    {
      icon: (
        <svg className="w-8 h-8 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
        </svg>
      ),
      title: 'Client-Centered Approach',
      description: 'Every team member is dedicated to understanding and exceeding our clients&apos; expectations with personalized service.'
    },
    {
      icon: (
        <svg className="w-8 h-8 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
        </svg>
      ),
      title: 'Continuous Learning',
      description: 'Our team stays current with evolving regulations and best practices to provide cutting-edge solutions.'
    },
    {
      icon: (
        <svg className="w-8 h-8 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ),
      title: 'Integrity & Trust',
      description: 'We build lasting relationships based on transparency, reliability, and unwavering ethical standards.'
    }
  ]

  const departments = [
    {
      name: 'Accounting & Finance',
      description: 'Expert accountants and financial analysts ensuring accurate bookkeeping, financial reporting, and strategic financial planning.',
      teamSize: '8+ professionals',
      expertise: ['Financial Reporting', 'Bookkeeping', 'Budget Analysis', 'Cost Management']
    },
    {
      name: 'Tax & Compliance',
      description: 'Certified tax professionals specializing in Costa Rican tax law and international compliance requirements.',
      teamSize: '6+ professionals',
      expertise: ['Tax Planning', 'VAT Compliance', 'International Tax', 'Audit Support']
    },
    {
      name: 'Legal & Immigration',
      description: 'Licensed attorneys providing comprehensive legal support for business operations and immigration matters.',
      teamSize: '4+ professionals',
      expertise: ['Corporate Law', 'Immigration Law', 'Contract Review', 'Regulatory Compliance']
    },
    {
      name: 'Payroll & HR',
      description: 'HR specialists managing payroll processing, employee benefits, and compliance with Costa Rican labor laws.',
      teamSize: '5+ professionals',
      expertise: ['Payroll Processing', 'Benefits Administration', 'Labor Law Compliance', 'HR Consulting']
    }
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Meet Our Expert Team
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Our experienced professionals combine deep local knowledge with international 
              standards to deliver exceptional service. With over 25 dedicated team members, 
              we're committed to your business success in Costa Rica.
            </p>
          </div>
        </div>
      </section>

      {/* Team Culture */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Culture & Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              At PBAG, we've built a culture of excellence, collaboration, and client dedication. 
              Our team members share core values that drive everything we do.
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

      {/* Team Structure */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Team Structure</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our multidisciplinary team is organized into specialized departments, ensuring 
              you receive expert attention across all aspects of your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {departments.map((dept, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start justify-between mb-6">
                  <h3 className="text-2xl font-bold text-blue-900">{dept.name}</h3>
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                    {dept.teamSize}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {dept.description}
                </p>
                
                <div>
                  <h4 className="font-semibold text-blue-900 mb-3">Key Expertise:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {dept.expertise.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Message */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 lg:p-12">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-900 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-8">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
              </div>
              
              <blockquote className="text-xl text-blue-900 italic mb-8 leading-relaxed">
                &ldquo;Our team is our greatest asset. Each member brings unique expertise and unwavering 
                commitment to client success. Together, we've built something special – a firm that 
                truly understands the Costa Rican business landscape and delivers results that matter.&rdquo;
              </blockquote>
              
              <div className="border-t border-blue-200 pt-6">
                <p className="font-semibold text-blue-900 text-lg">PBAG Leadership Team</p>
                <p className="text-blue-700">Committed to Excellence Since 2008</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to Meet Our Team?</h2>
            <p className="text-xl text-blue-100 mb-8">
              We'd love to introduce you to the professionals who will be supporting your business. 
              Schedule a consultation to meet your dedicated team members and discuss how we can 
              help you achieve your goals in Costa Rica.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-blue-100">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span>+506 2234-5678</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span>hello@pbagcr.com</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                Schedule Team Introduction
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
              >
                Explore Our Services
              </Link>
            </div>
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
            <h3 className="text-lg font-semibold text-yellow-800">Individual Team Profiles Coming Soon</h3>
          </div>
          <p className="text-yellow-700 max-w-2xl mx-auto">
            We're working on detailed profiles for each team member, including their backgrounds, 
            certifications, and specializations. Check back soon to learn more about the individuals 
            who make PBAG Costa Rica exceptional.
          </p>
        </div>
      </section>
    </Layout>
  )
}

export default TeamPage