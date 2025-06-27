import Layout from '@/components/layout/Layout'
import Link from 'next/link'

const BlogNotFound = () => {
  return (
    <Layout>
      <div className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <svg className="w-24 h-24 text-gray-400 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <h1 className="text-4xl font-bold text-blue-900 mb-4">Article Not Found</h1>
            <p className="text-xl text-gray-600 mb-8">
              The blog post you're looking for doesn't exist or has been moved.
            </p>
          </div>

          <div className="space-y-4">
            <Link
              href="/blog"
              className="inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              ← Back to Blog
            </Link>
            <div className="text-center">
              <Link
                href="/contact"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Contact us if you need help finding specific content
              </Link>
            </div>
          </div>

          {/* Suggested Articles */}
          <div className="mt-16 text-left">
            <h2 className="text-2xl font-bold text-blue-900 mb-8 text-center">Popular Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link
                href="/blog/2025-tax-changes-costa-rica"
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300"
              >
                <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">
                  Tax Updates
                </span>
                <h3 className="text-lg font-semibold text-blue-900 mt-3 mb-2">
                  2025 Costa Rica Tax Changes: What Businesses Need to Know
                </h3>
                <p className="text-gray-600 text-sm">
                  Comprehensive overview of the latest tax legislation changes affecting Costa Rican businesses.
                </p>
              </Link>

              <Link
                href="/blog/digital-invoice-compliance-2025"
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300"
              >
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                  Legal Changes
                </span>
                <h3 className="text-lg font-semibold text-blue-900 mt-3 mb-2">
                  Digital Invoice Requirements: Compliance Checklist for 2025
                </h3>
                <p className="text-gray-600 text-sm">
                  Step-by-step guide to implementing digital invoicing systems to meet new requirements.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default BlogNotFound