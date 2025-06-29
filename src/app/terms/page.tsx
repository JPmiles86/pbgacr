import Layout from '@/components/layout/Layout'

export const metadata = {
  title: 'Terms of Service | Pacific Business & Accounting Group',
  description: 'Terms of service for Pacific Business & Accounting Group.',
}

const TermsPage = () => {
  return (
    <Layout>
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Please read these terms and conditions carefully before using our services.
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
                <h2 className="text-2xl font-bold text-blue-900 mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-700 leading-relaxed">
                  By accessing our website, engaging our services, or entering into a service agreement with Pacific Business & 
                  Accounting Group ("PBAG," "we," "us," or "our"), you agree to be bound by these Terms of Service and all 
                  applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using 
                  our services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-blue-900 mb-4">2. Description of Services</h2>
                <p className="text-gray-700 leading-relaxed mb-3">PBAG provides professional services including:</p>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>Accounting and bookkeeping services</li>
                  <li>Tax preparation and planning</li>
                  <li>Audit and assurance services</li>
                  <li>Payroll management</li>
                  <li>Business formation and legal support</li>
                  <li>Immigration assistance</li>
                  <li>Banking and financial advisory services</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-3">
                  Specific services will be detailed in individual service agreements or engagement letters.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-blue-900 mb-4">3. Professional Relationship</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-blue-800 mb-2">Client Responsibilities</h3>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                      <li>Provide accurate, complete, and timely information</li>
                      <li>Maintain organized financial records</li>
                      <li>Respond promptly to requests for information</li>
                      <li>Pay fees according to agreed terms</li>
                      <li>Comply with all applicable laws and regulations</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-800 mb-2">Our Responsibilities</h3>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                      <li>Provide professional services with due care and competence</li>
                      <li>Maintain confidentiality of client information</li>
                      <li>Comply with professional standards and regulations</li>
                      <li>Communicate clearly about scope of services and fees</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-blue-900 mb-4">4. Fees and Payment Terms</h2>
                <div className="space-y-3">
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Fee Structure:</strong> Fees are based on time, complexity, and scope of services as outlined in service agreements.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Payment Terms:</strong> Invoices are typically due within 30 days of receipt unless otherwise specified.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Late Payment:</strong> Late payments may incur interest charges at 1.5% per month or the maximum allowed by law.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Scope Changes:</strong> Additional work outside the original scope may result in additional fees.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-blue-900 mb-4">5. Confidentiality</h2>
                <p className="text-gray-700 leading-relaxed">
                  We maintain strict confidentiality regarding all client information in accordance with professional standards 
                  and Costa Rican law. Client information will not be disclosed to third parties except as required by law, 
                  regulation, or with explicit client consent.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-blue-900 mb-4">6. Limitation of Liability</h2>
                <div className="space-y-3">
                  <p className="text-gray-700 leading-relaxed">
                    Our liability for any claim arising from our services is limited to the fees paid for the specific 
                    service that gave rise to the claim.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    We are not liable for consequential, indirect, or punitive damages, including but not limited to 
                    lost profits, business interruption, or loss of data.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Note:</strong> Some jurisdictions do not allow limitation of liability, so these limitations 
                    may not apply to you.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-blue-900 mb-4">7. Professional Standards</h2>
                <p className="text-gray-700 leading-relaxed">
                  Our services are provided in accordance with generally accepted accounting principles (GAAP), 
                  Costa Rican accounting standards, and applicable professional standards. We are bound by the 
                  ethical requirements of our professional certifications.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-blue-900 mb-4">8. Termination</h2>
                <div className="space-y-3">
                  <p className="text-gray-700 leading-relaxed">
                    Either party may terminate the service relationship with 30 days' written notice.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Upon termination, you are responsible for all fees for services performed up to the termination date.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    We will provide client files and records in accordance with professional standards and applicable law.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-blue-900 mb-4">9. Intellectual Property</h2>
                <p className="text-gray-700 leading-relaxed">
                  Our methodologies, templates, and proprietary tools remain our intellectual property. Client data and 
                  information remain the property of the client. We may retain copies of work product for professional 
                  and legal compliance purposes.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-blue-900 mb-4">10. Governing Law</h2>
                <p className="text-gray-700 leading-relaxed">
                  These terms are governed by the laws of Costa Rica. Any disputes will be resolved through the 
                  appropriate courts in Costa Rica or through mutually agreed alternative dispute resolution methods.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-blue-900 mb-4">11. Changes to Terms</h2>
                <p className="text-gray-700 leading-relaxed">
                  We reserve the right to modify these terms at any time. Updated terms will be posted on our website 
                  and communicated to existing clients. Continued use of our services constitutes acceptance of updated terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-blue-900 mb-4">12. Contact Information</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you have questions about these Terms of Service, please contact us:
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

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mt-8">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-yellow-700">
                      <strong>Important Notice:</strong> These terms supplement but do not replace individual service 
                      agreements or engagement letters. In case of conflict, specific service agreements take precedence.
                    </p>
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

export default TermsPage