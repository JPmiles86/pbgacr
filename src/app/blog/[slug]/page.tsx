import Layout from '@/components/layout/Layout'
import Link from 'next/link'
import { notFound } from 'next/navigation'

// This would typically come from a CMS or database
const getBlogPost = (slug: string) => {
  const posts: Record<string, {
    id: number;
    title: string;
    content: string;
    excerpt: string;
    category: string;
    publishDate: string;
    readTime: string;
    author: string;
    tags: string[];
    relatedPosts: string[];
  }> = {
    '2025-tax-changes-costa-rica': {
      id: 1,
      title: '2025 Costa Rica Tax Changes: What Businesses Need to Know',
      content: `
        <p>Costa Rica has introduced significant tax legislation changes for 2025 that will impact businesses across all sectors. Understanding these changes is crucial for maintaining compliance and optimizing your tax strategy.</p>

        <h2>Key Changes Overview</h2>
        <p>The most significant changes include:</p>
        <ul>
          <li>Updated VAT rates for certain service categories</li>
          <li>New digital service tax requirements</li>
          <li>Enhanced electronic invoicing mandates</li>
          <li>Modified corporate tax deduction limits</li>
        </ul>

        <h2>VAT Rate Updates</h2>
        <p>Starting January 1, 2025, several service categories have seen VAT rate adjustments. Professional services, including accounting and legal services, maintain the standard 13% rate, while certain digital services now fall under a new 15% rate structure.</p>

        <h2>Digital Service Tax</h2>
        <p>Businesses providing digital services to Costa Rican consumers must now register for and collect digital service tax, regardless of their physical presence in the country. This affects:</p>
        <ul>
          <li>Software as a Service (SaaS) providers</li>
          <li>Digital marketing services</li>
          <li>Online consulting services</li>
          <li>Digital content streaming</li>
        </ul>

        <h2>Electronic Invoicing Requirements</h2>
        <p>The government has expanded electronic invoicing requirements to include all businesses with annual revenues exceeding ₡3 million colones (approximately $5,000 USD). This represents a significant reduction from the previous threshold.</p>

        <h2>Action Items for Your Business</h2>
        <ol>
          <li>Review your current invoicing system for compliance</li>
          <li>Update accounting software to handle new tax rates</li>
          <li>Register for digital service tax if applicable</li>
          <li>Train staff on new compliance requirements</li>
          <li>Schedule a tax planning review with your CPA</li>
        </ol>

        <p><strong>Important:</strong> These changes are complex and the penalties for non-compliance can be substantial. We recommend consulting with a qualified tax professional to ensure your business remains compliant.</p>
      `,
      excerpt: 'Comprehensive overview of the latest tax legislation changes affecting Costa Rican businesses in 2025, including new VAT requirements and corporate tax adjustments.',
      category: 'Tax Updates',
      publishDate: '2025-01-15',
      readTime: '8 min read',
      author: 'PBAG Tax Team',
      tags: ['Tax Law', 'VAT', 'Digital Services', 'Compliance', '2025'],
      relatedPosts: ['digital-invoice-compliance-2025', 'vat-compliance-common-mistakes']
    },
    'digital-invoice-compliance-2025': {
      id: 2,
      title: 'Digital Invoice Requirements: Compliance Checklist for 2025',
      content: `
        <p>Costa Rica's digital invoicing requirements have been expanded for 2025, affecting more businesses than ever before. This comprehensive guide will help you understand and implement the necessary changes.</p>

        <h2>Who Must Comply?</h2>
        <p>As of January 2025, digital invoicing is mandatory for:</p>
        <ul>
          <li>All businesses with annual revenue exceeding ₡3 million colones</li>
          <li>All VAT-registered entities</li>
          <li>Government contractors (regardless of size)</li>
          <li>Businesses in designated high-risk sectors</li>
        </ul>

        <h2>Technical Requirements</h2>
        <p>Your digital invoicing system must meet these specifications:</p>
        <ul>
          <li>XML format compliance with Costa Rican standards</li>
          <li>Digital signature capability</li>
          <li>Real-time transmission to tax authorities</li>
          <li>Secure backup and retrieval systems</li>
        </ul>

        <h2>Implementation Timeline</h2>
        <p>The rollout follows this schedule:</p>
        <ul>
          <li><strong>Phase 1 (Completed):</strong> Large corporations and public companies</li>
          <li><strong>Phase 2 (January 2025):</strong> Medium enterprises (₡50M+ revenue)</li>
          <li><strong>Phase 3 (July 2025):</strong> Small businesses (₡3M+ revenue)</li>
          <li><strong>Phase 4 (January 2026):</strong> Micro-enterprises and independents</li>
        </ul>

        <h2>Compliance Checklist</h2>
        <h3>✓ System Setup</h3>
        <ul>
          <li>Choose certified invoicing software</li>
          <li>Obtain digital certificates</li>
          <li>Configure tax authority connections</li>
          <li>Test system functionality</li>
        </ul>

        <h3>✓ Staff Training</h3>
        <ul>
          <li>Train accounting staff on new procedures</li>
          <li>Update customer service protocols</li>
          <li>Establish error handling procedures</li>
        </ul>

        <h3>✓ Legal Compliance</h3>
        <ul>
          <li>Update terms and conditions</li>
          <li>Modify customer contracts</li>
          <li>Ensure data protection compliance</li>
        </ul>

        <p><strong>Note:</strong> Failure to comply with digital invoicing requirements can result in fines up to 1% of annual revenue. Early implementation is strongly recommended.</p>
      `,
      excerpt: 'Step-by-step guide to implementing digital invoicing systems to meet Costa Rica&apos;s new electronic billing requirements.',
      category: 'Legal Changes',
      publishDate: '2025-01-12',
      readTime: '6 min read',
      author: 'Legal Advisory Team',
      tags: ['Digital Invoicing', 'Compliance', 'Technology', 'Legal Requirements'],
      relatedPosts: ['2025-tax-changes-costa-rica', 'monthly-bookkeeping-best-practices']
    }
  }

  return posts[slug] || null
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found | PBAG Blog',
      description: 'The requested blog post could not be found.'
    }
  }

  return {
    title: `${post.title} | PBAG Blog`,
    description: post.excerpt,
    keywords: post.tags.join(', '),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishDate,
      authors: [post.author],
    },
  }
}

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

const BlogPostPage = ({ params }: BlogPostPageProps) => {
  const post = getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <Layout>
      {/* Article Header */}
      <article className="bg-white">
        <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 mb-4">
              <Link href="/blog" className="text-blue-200 hover:text-white text-sm">
                ← Back to Blog
              </Link>
            </div>
            
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-yellow-500 text-yellow-900 text-sm font-medium rounded-full">
                {post.category}
              </span>
              <span className="text-blue-200 text-sm">{post.readTime}</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              {post.title}
            </h1>
            
            <div className="flex items-center justify-between text-blue-200">
              <div className="flex items-center gap-4">
                <span>By {post.author}</span>
                <span>•</span>
                <span>{new Date(post.publishDate).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div 
                className="prose prose-lg max-w-none
                  prose-headings:text-blue-900 
                  prose-headings:font-bold
                  prose-h2:text-2xl
                  prose-h2:mt-8
                  prose-h2:mb-4
                  prose-h3:text-xl
                  prose-h3:mt-6
                  prose-h3:mb-3
                  prose-p:text-gray-700
                  prose-p:leading-relaxed
                  prose-p:mb-6
                  prose-ul:my-6
                  prose-ol:my-6
                  prose-li:text-gray-700
                  prose-li:mb-2
                  prose-strong:text-blue-900
                  prose-a:text-yellow-600
                  prose-a:hover:text-yellow-700"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-blue-900 mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag: string, index: number) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Author Bio */}
              <div className="mt-12 p-6 bg-blue-50 rounded-xl">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">About the Author</h3>
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900">{post.author}</h4>
                    <p className="text-gray-600 text-sm">
                      Our expert team provides insights based on over 15 years of experience 
                      serving Costa Rican businesses. Stay connected for the latest updates 
                      in accounting, tax, and business advisory services.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Share Buttons */}
              <div className="bg-gray-50 rounded-xl p-6 mb-8">
                <h3 className="text-lg font-semibold text-blue-900 mb-4">Share This Article</h3>
                <div className="space-y-3">
                  <button className="w-full flex items-center gap-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    <span className="text-sm">Share on Facebook</span>
                  </button>
                  <button className="w-full flex items-center gap-3 px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition-colors duration-200">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                    <span className="text-sm">Share on Twitter</span>
                  </button>
                  <button className="w-full flex items-center gap-3 px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors duration-200">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    <span className="text-sm">Share on LinkedIn</span>
                  </button>
                </div>
              </div>

              {/* Table of Contents */}
              <div className="bg-gray-50 rounded-xl p-6 mb-8">
                <h3 className="text-lg font-semibold text-blue-900 mb-4">Table of Contents</h3>
                <nav className="space-y-2">
                  <a href="#key-changes" className="block text-sm text-gray-600 hover:text-blue-600">Key Changes Overview</a>
                  <a href="#vat-updates" className="block text-sm text-gray-600 hover:text-blue-600">VAT Rate Updates</a>
                  <a href="#digital-tax" className="block text-sm text-gray-600 hover:text-blue-600">Digital Service Tax</a>
                  <a href="#electronic-invoicing" className="block text-sm text-gray-600 hover:text-blue-600">Electronic Invoicing</a>
                  <a href="#action-items" className="block text-sm text-gray-600 hover:text-blue-600">Action Items</a>
                </nav>
              </div>

              {/* Contact CTA */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">Need Help?</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Our tax experts can help you navigate these changes and ensure compliance.
                </p>
                <Link
                  href="/contact"
                  className="block w-full text-center bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-lg font-medium text-sm transition-colors duration-200"
                >
                  Get Expert Help
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {post.relatedPosts.map((slug: string, index: number) => {
                const relatedPost = getBlogPost(slug)
                if (!relatedPost) return null
                
                return (
                  <Link
                    key={index}
                    href={`/blog/${slug}`}
                    className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300"
                  >
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                      {relatedPost.category}
                    </span>
                    <h3 className="text-lg font-semibold text-blue-900 mt-3 mb-2">{relatedPost.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{relatedPost.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{relatedPost.author}</span>
                      <span>{relatedPost.readTime}</span>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-blue-900 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Stay Informed with PBAG</h2>
            <p className="text-xl text-blue-100 mb-8">
              Subscribe to our newsletter for the latest business insights and regulatory updates.
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  )
}

export default BlogPostPage