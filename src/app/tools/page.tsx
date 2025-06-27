import Layout from '@/components/layout/Layout'
import TaxCalculator from '@/components/ui/TaxCalculator'
import PayrollCalculator from '@/components/ui/PayrollCalculator'
import ToolSuggestion from '@/components/ui/ToolSuggestion'
import Link from 'next/link'

export const metadata = {
  title: 'Business Tools & Calculators | Pacific Business & Accounting Group',
  description: 'Free tax and payroll calculators for Costa Rican businesses. Get quick estimates for your business planning.',
}

const ToolsPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Business Tools & Calculators
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Free tools to help you estimate costs and plan your business finances in Costa Rica. 
              Get quick estimates before speaking with our experts.
            </p>
          </div>
        </div>
      </section>

      {/* Calculators */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <TaxCalculator />
            <PayrollCalculator />
          </div>
          
          {/* Tool Suggestion */}
          <div className="max-w-2xl mx-auto">
            <ToolSuggestion />
          </div>
        </div>
      </section>

      {/* Additional Tools Coming Soon */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">More Tools Coming Soon</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're constantly developing new tools to help Costa Rican businesses succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-6 text-center border-2 border-dashed border-gray-300">
              <div className="w-16 h-16 bg-gray-200 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-600 mb-2">Business Loan Calculator</h3>
              <p className="text-gray-500 text-sm">Calculate loan payments and interest for business financing</p>
              <p className="text-xs text-gray-400 mt-2">Coming Soon</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 text-center border-2 border-dashed border-gray-300">
              <div className="w-16 h-16 bg-gray-200 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-600 mb-2">ROI Calculator</h3>
              <p className="text-gray-500 text-sm">Measure return on investment for business decisions</p>
              <p className="text-xs text-gray-400 mt-2">Coming Soon</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 text-center border-2 border-dashed border-gray-300">
              <div className="w-16 h-16 bg-gray-200 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-600 mb-2">Cash Flow Projector</h3>
              <p className="text-gray-500 text-sm">Project future cash flow based on current trends</p>
              <p className="text-xs text-gray-400 mt-2">Coming Soon</p>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer & CTA */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Need Accurate Calculations?</h2>
            <p className="text-xl text-blue-100 mb-8">
              These tools provide helpful estimates, but every business situation is unique. 
              For precise calculations and personalized advice, speak with our experts.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
              <p className="text-blue-100 text-sm leading-relaxed">
                <strong>Important Disclaimer:</strong> All calculations are estimates based on standard rates and should not be considered as professional advice. 
                Actual tax obligations, payroll costs, and other financial calculations may vary based on specific circumstances, 
                current regulations, and individual business factors. Always consult with qualified professionals for accurate financial planning.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                Get Professional Consultation
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ToolsPage