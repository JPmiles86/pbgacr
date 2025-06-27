import Link from 'next/link'

const CTA = () => {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-blue-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Grow Your Business?
          </h2>
          
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's discuss how our 15+ years of Costa Rican expertise can help your business thrive. 
            Schedule a free consultation today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg border-2 border-yellow-400"
            >
              Get Free Consultation
            </Link>
            
            <div className="flex items-center gap-4 text-blue-100">
              <span className="text-sm">or call us directly:</span>
              <a 
                href="tel:+50622201302" 
                className="text-white font-semibold hover:text-yellow-300 transition-colors duration-200"
              >
                +506 2220-1302
              </a>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-blue-100">
            <div className="flex items-center gap-2">
              <span className="text-yellow-400">✓</span>
              <span className="text-sm">Free Initial Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-yellow-400">✓</span>
              <span className="text-sm">15+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-yellow-400">✓</span>
              <span className="text-sm">Bilingual Service</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-yellow-400">✓</span>
              <span className="text-sm">Local Expertise</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA