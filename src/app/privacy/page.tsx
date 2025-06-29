import Layout from '@/components/layout/Layout'

export const metadata = {
  title: 'Privacy Policy | Pacific Business & Accounting Group',
  description: 'Privacy policy for Pacific Business & Accounting Group services.',
}

const PrivacyPage = () => {
  return (
    <Layout>
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Your privacy is important to us. Learn how we collect, use, and protect your personal information.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-sm text-gray-500 mb-8">
              <strong>Effective Date:</strong> January 1, 2025 | <strong>Last Updated:</strong> January 1, 2025
            </p>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-blue-900 mb-4">1. Introduction</h2>
                <p className="text-gray-700 leading-relaxed">
                  Pacific Business & Accounting Group ("PBAG," "we," "us," or "our") is committed to protecting your privacy. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit 
                  our website, use our services, or interact with us in any way.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-blue-900 mb-4">2. Information We Collect</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-blue-800 mb-2">Personal Information</h3>
                    <p className="text-gray-700 leading-relaxed mb-2">We may collect the following personal information:</p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                      <li>Name, email address, phone number, and business address</li>
                      <li>Company information and business details</li>
                      <li>Financial information necessary for accounting and tax services</li>
                      <li>Communication preferences and service requirements</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-800 mb-2">Automatically Collected Information</h3>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                      <li>IP address, browser type, and device information</li>
                      <li>Website usage data and analytics</li>
                      <li>Cookies and similar tracking technologies</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-blue-900 mb-4">3. How We Use Your Information</h2>
                <p className="text-gray-700 leading-relaxed mb-3">We use your information to:</p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Provide accounting, tax, legal, and business advisory services</li>
                  <li>Communicate with you about our services and your account</li>
                  <li>Process payments and manage billing</li>
                  <li>Comply with legal and regulatory requirements</li>
                  <li>Improve our services and website functionality</li>
                  <li>Send important updates and notifications</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-blue-900 mb-4">4. Information Sharing and Disclosure</h2>
                <p className="text-gray-700 leading-relaxed mb-3">We may share your information in the following circumstances:</p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li><strong>Professional Obligations:</strong> With government agencies as required by Costa Rican law</li>
                  <li><strong>Service Providers:</strong> With trusted third parties who assist in providing our services</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect our legal rights</li>
                  <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-3">
                  <strong>We never sell your personal information to third parties.</strong>
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-blue-900 mb-4">5. Data Security</h2>
                <p className="text-gray-700 leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your personal information 
                  against unauthorized access, alteration, disclosure, or destruction. This includes encryption, secure servers, 
                  access controls, and regular security assessments.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-blue-900 mb-4">6. Data Retention</h2>
                <p className="text-gray-700 leading-relaxed">
                  We retain your personal information for as long as necessary to provide our services and comply with legal 
                  obligations. For accounting and tax services, we typically retain records for 7 years as required by Costa Rican law.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-blue-900 mb-4">7. Your Rights</h2>
                <p className="text-gray-700 leading-relaxed mb-3">You have the right to:</p>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>Access and receive a copy of your personal information</li>
                  <li>Correct inaccurate or incomplete information</li>
                  <li>Request deletion of your personal information (subject to legal requirements)</li>
                  <li>Object to processing of your personal information</li>
                  <li>Withdraw consent where applicable</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-blue-900 mb-4">8. Cookies and Tracking</h2>
                <p className="text-gray-700 leading-relaxed">
                  Our website uses cookies to improve user experience and analyze website traffic. You can manage cookie 
                  preferences through your browser settings. Some features may not function properly if cookies are disabled.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-blue-900 mb-4">9. Changes to This Policy</h2>
                <p className="text-gray-700 leading-relaxed">
                  We may update this Privacy Policy periodically. We will notify you of any material changes by posting 
                  the updated policy on our website and updating the "Last Updated" date.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-blue-900 mb-4">10. Contact Information</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you have questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-blue-900 mb-3">Pacific Business & Accounting Group</h3>
                  <div className="text-blue-800 space-y-1">
                    <p><strong>Email:</strong> info@pbagcr.com</p>
                    <p><strong>Phone:</strong> +506 8925-7777</p>
                    <p><strong>Address:</strong> Rohromoser, 50 North Centro de Investigacion Franklin Chang, San José, Costa Rica</p>
                    <p><strong>Business Hours:</strong> Monday - Friday: 8:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default PrivacyPage