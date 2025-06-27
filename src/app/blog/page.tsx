import Layout from '@/components/layout/Layout'
import Link from 'next/link'

export const metadata = {
  title: 'Business Blog | Pacific Business & Accounting Group',
  description: 'Expert insights on Costa Rican business, accounting, tax updates, and legal changes. Stay informed with our professional blog content.',
  keywords: 'Costa Rica business blog, tax updates, accounting tips, legal changes, business insights, PBAG',
  openGraph: {
    title: 'Business Blog | Pacific Business & Accounting Group',
    description: 'Expert insights on Costa Rican business, accounting, tax updates, and legal changes.',
    type: 'website',
  },
}

const BlogPage = () => {
  // Blog categories for navigation
  const categories = [
    { name: 'All Posts', slug: 'all', count: 12, active: true },
    { name: 'Tax Updates', slug: 'tax-updates', count: 4 },
    { name: 'Business Tips', slug: 'business-tips', count: 3 },
    { name: 'Legal Changes', slug: 'legal-changes', count: 2 },
    { name: 'Accounting', slug: 'accounting', count: 2 },
    { name: 'Payroll', slug: 'payroll', count: 1 },
  ]

  // Featured articles (placeholder content)
  const featuredArticles = [
    {
      id: 1,
      title: '2025 Costa Rica Tax Changes: What Businesses Need to Know',
      excerpt: 'Comprehensive overview of the latest tax legislation changes affecting Costa Rican businesses in 2025, including new VAT requirements and corporate tax adjustments.',
      category: 'Tax Updates',
      publishDate: '2025-01-15',
      readTime: '8 min read',
      author: 'PBAG Tax Team',
      image: '/api/placeholder/600/300',
      featured: true,
      slug: '2025-tax-changes-costa-rica'
    },
    {
      id: 2,
      title: 'Digital Invoice Requirements: Compliance Checklist for 2025',
      excerpt: 'Step-by-step guide to implementing digital invoicing systems to meet Costa Rica&apos;s new electronic billing requirements.',
      category: 'Legal Changes',
      publishDate: '2025-01-12',
      readTime: '6 min read',
      author: 'Legal Advisory Team',
      image: '/api/placeholder/600/300',
      featured: true,
      slug: 'digital-invoice-compliance-2025'
    }
  ]

  // Recent blog posts (placeholder content)
  const recentPosts = [
    {
      id: 3,
      title: 'Essential Payroll Tax Changes for Small Businesses',
      excerpt: 'Navigate the updated payroll tax rates and social security contributions affecting Costa Rican employers.',
      category: 'Payroll',
      publishDate: '2025-01-10',
      readTime: '5 min read',
      author: 'Payroll Specialists',
      slug: 'payroll-tax-changes-small-business'
    },
    {
      id: 4,
      title: 'Year-End Financial Planning Strategies',
      excerpt: 'Maximize your tax savings and set your business up for success with these proven year-end strategies.',
      category: 'Business Tips',
      publishDate: '2025-01-08',
      readTime: '7 min read',
      author: 'Financial Advisory Team',
      slug: 'year-end-financial-planning'
    },
    {
      id: 5,
      title: 'Understanding Costa Rica\'s New Labor Law Amendments',
      excerpt: 'Key changes to employment regulations and what they mean for your business operations.',
      category: 'Legal Changes',
      publishDate: '2025-01-05',
      readTime: '6 min read',
      author: 'Legal Advisory Team',
      slug: 'labor-law-amendments-2025'
    },
    {
      id: 6,
      title: 'Monthly Bookkeeping Best Practices for Costa Rican Businesses',
      excerpt: 'Streamline your accounting processes with these essential monthly bookkeeping practices.',
      category: 'Accounting',
      publishDate: '2025-01-03',
      readTime: '4 min read',
      author: 'Accounting Team',
      slug: 'monthly-bookkeeping-best-practices'
    },
    {
      id: 7,
      title: 'Cash Flow Management in Uncertain Economic Times',
      excerpt: 'Practical strategies to maintain healthy cash flow and weather economic uncertainty.',
      category: 'Business Tips',
      publishDate: '2024-12-28',
      readTime: '8 min read',
      author: 'Financial Advisory Team',
      slug: 'cash-flow-management-strategies'
    },
    {
      id: 8,
      title: 'VAT Compliance: Common Mistakes to Avoid',
      excerpt: 'Identify and prevent the most common VAT compliance errors that could cost your business.',
      category: 'Tax Updates',
      publishDate: '2024-12-25',
      readTime: '5 min read',
      author: 'Tax Compliance Team',
      slug: 'vat-compliance-common-mistakes'
    }
  ]

  // Trending topics
  const trendingTopics = [
    'Digital Invoicing',
    'Tax Planning 2025',
    'Business Registration',
    'Payroll Compliance',
    'Foreign Investment',
    'Corporate Structures'
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Business Insights & Updates
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Stay ahead with expert insights on Costa Rican business, tax updates, 
              legal changes, and accounting best practices from our team of professionals.
            </p>
            
            {/* Search functionality placeholder */}
            <div className="max-w-md mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full px-4 py-3 pl-12 rounded-lg text-gray-900 placeholder-gray-500 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
                <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <p className="text-blue-200 text-sm mt-2">
                Search our library of business insights and expert advice
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Integration Notice */}
      <section className="bg-yellow-50 border-b border-yellow-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-center text-center">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="text-yellow-800 font-medium">
                  Enhanced with AI-powered content coming soon! 
                  <span className="font-normal">Our blog will soon feature AI-generated insights alongside our expert analysis.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-1 overflow-x-auto">
              {categories.map((category) => (
                <button
                  key={category.slug}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 whitespace-nowrap ${
                    category.active
                      ? 'bg-blue-900 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                  <span className="ml-2 text-sm opacity-75">({category.count})</span>
                </button>
              ))}
            </div>
            
            <div className="hidden md:flex items-center gap-4">
              <span className="text-gray-600 text-sm">Sort by:</span>
              <select className="border border-gray-300 rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Newest First</option>
                <option>Oldest First</option>
                <option>Most Popular</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-blue-900">Featured Articles</h2>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
              <span className="text-gray-600 text-sm">Updated regularly</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredArticles.map((article) => (
              <article key={article.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                  <div className="text-white text-center">
                    <svg className="w-16 h-16 mx-auto mb-2 opacity-75" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                    </svg>
                    <p className="text-sm opacity-75">Featured Article</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">
                      {article.category}
                    </span>
                    <span className="px-2 py-1 bg-red-100 text-red-800 text-xs font-medium rounded-full">
                      Featured
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-blue-900 mb-3 leading-tight">
                    <Link href={`/blog/${article.slug}`} className="hover:text-yellow-600 transition-colors duration-200">
                      {article.title}
                    </Link>
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-4">
                      <span>By {article.author}</span>
                      <span>{new Date(article.publishDate).toLocaleDateString()}</span>
                    </div>
                    <span className="text-blue-600 font-medium">{article.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Recent Posts */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-blue-900">Recent Posts</h2>
                <Link href="/blog/archive" className="text-yellow-600 hover:text-yellow-700 font-medium text-sm">
                  View All Posts →
                </Link>
              </div>

              <div className="space-y-8">
                {recentPosts.map((post) => (
                  <article key={post.id} className="border-b border-gray-100 pb-8 last:border-0">
                    <div className="flex items-start gap-6">
                      <div className="w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex-shrink-0 flex items-center justify-center">
                        <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                        </svg>
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                            {post.category}
                          </span>
                          <span className="text-gray-400 text-xs">•</span>
                          <span className="text-gray-500 text-xs">{post.readTime}</span>
                        </div>
                        
                        <h3 className="text-lg font-bold text-blue-900 mb-2 leading-tight">
                          <Link href={`/blog/${post.slug}`} className="hover:text-yellow-600 transition-colors duration-200">
                            {post.title}
                          </Link>
                        </h3>
                        
                        <p className="text-gray-600 mb-3 text-sm leading-relaxed">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="text-xs text-gray-500">
                            <span>By {post.author}</span>
                            <span className="mx-2">•</span>
                            <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                          </div>
                          <Link 
                            href={`/blog/${post.slug}`}
                            className="text-yellow-600 hover:text-yellow-700 text-sm font-medium"
                          >
                            Read More →
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              
              {/* Newsletter Signup */}
              <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-white rounded-xl p-6">
                <h3 className="text-lg font-bold mb-3">Stay Informed</h3>
                <p className="text-blue-100 text-sm mb-4">
                  Get the latest business insights, tax updates, and regulatory changes delivered to your inbox.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-3 py-2 rounded-lg text-gray-900 placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                  <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-lg font-medium text-sm transition-colors duration-200">
                    Subscribe to Newsletter
                  </button>
                </div>
                <p className="text-blue-200 text-xs mt-3">
                  Weekly updates • No spam • Unsubscribe anytime
                </p>
              </div>

              {/* Trending Topics */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-blue-900 mb-4">Trending Topics</h3>
                <div className="flex flex-wrap gap-2">
                  {trendingTopics.map((topic, index) => (
                    <button
                      key={index}
                      className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm text-gray-700 hover:border-yellow-500 hover:text-yellow-600 transition-colors duration-200"
                    >
                      {topic}
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact CTA */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-blue-900 mb-3">Need Expert Advice?</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Our team of accounting and legal experts is ready to help with your specific business needs.
                </p>
                <div className="space-y-3">
                  <Link
                    href="/contact"
                    className="block w-full text-center bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-lg font-medium text-sm transition-colors duration-200"
                  >
                    Schedule Consultation
                  </Link>
                  <Link
                    href="/services"
                    className="block w-full text-center border border-gray-300 hover:border-gray-400 text-gray-700 py-2 rounded-lg font-medium text-sm transition-colors duration-200"
                  >
                    View Our Services
                  </Link>
                </div>
              </div>

              {/* Blog Collaboration CTA */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-blue-900 mb-3">Collaborate With Us</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Have expertise to share? We welcome guest contributors and collaboration opportunities.
                </p>
                <Link
                  href="/contact?subject=Blog%20Collaboration"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm"
                >
                  Get in Touch
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Optimize Your Business?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Put our insights into action. Contact PBAG for personalized business solutions 
            and expert guidance tailored to your Costa Rican operations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              Schedule Free Consultation
            </Link>
            <Link
              href="/services"
              className="border border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              Explore Our Services
            </Link>
          </div>
          
          <div className="mt-8 flex items-center justify-center gap-6 text-blue-200 text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>15+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Local Costa Rica Expertise</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Comprehensive Services</span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default BlogPage