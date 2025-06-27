import Temp from '@/components/layout/Layout'
import Temp from 'next/link'
import Temp from './CalculatorClient'

export const metadata = {
  title: 'Costa Rica Startup Cost Calculator 2025 | Pacific Business & Accounting Group',
  description: 'Calculate startup costs for Costa Rica businesses. Interactive calculator for company formation, operational costs, tax planning, and compliance expenses specific to Costa Rica.',
  keywords: 'Costa Rica startup costs 2025, business formation calculator, company registration costs, operational expenses Costa Rica, startup budget planning',
}

const StartupCalculatorPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Costa Rica Startup Cost Calculator 2025
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Calculate accurate startup costs for your Costa Rica business with our comprehensive calculator. 
              Get instant estimates for formation, licensing, operational expenses, and compliance costs.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Calculator */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Interactive Startup Cost Calculator</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get a personalized estimate for your Costa Rica business startup costs based on your specific requirements.
            </p>
          </div>

          <CalculatorClient />
        </div>
      </section>

      {/* Cost Breakdown Information */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Understanding Startup Costs in Costa Rica</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn about the different cost categories and what they include for your business formation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-blue-900 mb-3">Company Formation</h3>
              <p className="text-gray-600 text-sm mb-4">
                Legal incorporation costs including registration fees, notary services, and corporate documentation.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• S.A. formation: $450-$800</li>
                <li>• S.R.L. formation: $350-$600</li>
                <li>• Branch office: $600-$1,000</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-blue-900 mb-3">Licenses & Permits</h3>
              <p className="text-gray-600 text-sm mb-4">
                Required business licenses, permits, and regulatory compliance costs for your industry.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Business license: $200-$500</li>
                <li>• Municipal permits: $100-$300</li>
                <li>• Industry-specific permits vary</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-blue-900 mb-3">Initial Operations</h3>
              <p className="text-gray-600 text-sm mb-4">
                First 3 months of operational expenses including rent, utilities, and basic business costs.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Office rent: $500-$2,000/month</li>
                <li>• Utilities: $200-$500/month</li>
                <li>• Basic supplies: $300-$800</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-blue-900 mb-3">Working Capital</h3>
              <p className="text-gray-600 text-sm mb-4">
                Cash reserves for daily operations, inventory, and unexpected expenses during the first months.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 3-6 months operating expenses</li>
                <li>• Initial inventory (if applicable)</li>
                <li>• Emergency fund: 10-20% of total</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-blue-900 mb-3">Professional Services</h3>
              <p className="text-gray-600 text-sm mb-4">
                Legal, accounting, and consulting services required for proper business setup and compliance.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Legal services: $800-$2,500</li>
                <li>• Accounting setup: $500-$1,200</li>
                <li>• Business consulting: $300-$800</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm5 2a1 1 0 100 2h4a1 1 0 100-2H8z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-blue-900 mb-3">Technology & Equipment</h3>
              <p className="text-gray-600 text-sm mb-4">
                Essential technology infrastructure, equipment, and software required for business operations.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Computer equipment: $1,000-$3,000</li>
                <li>• Software licenses: $200-$800/year</li>
                <li>• Office furniture: $500-$2,000</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Professional Startup Assistance?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Our calculator provides estimates, but every business situation is unique. 
            Get personalized guidance from our Costa Rica business formation experts.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Get Professional Help
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a
              href="tel:+50622201302"
              className="inline-flex items-center border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
            >
              Call +506 2220-1302
            </a>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default StartupCalculatorPage