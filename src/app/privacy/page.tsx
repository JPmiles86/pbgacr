import Temp from '@/components/layout/Layout'

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
              Your privacy is important to us. This page will be updated with our complete privacy policy.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-600 mb-8">
              This page is currently under development. Our complete privacy policy will be available soon.
            </p>
            
            <p className="text-gray-600 mb-8">
              In the meantime, please contact us directly if you have any questions about how we handle your information.
            </p>

            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">Contact Us</h3>
              <p className="text-blue-800">
                Phone: +506 2220-1302<br />
                Email: info@pbagcr.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default PrivacyPage