const Testimonials = () => {
  const testimonials = [
    {
      quote: "PBAG has been instrumental in helping our restaurant navigate Costa Rican tax regulations. Their expertise and personal service have saved us time and money.",
      author: "María González",
      company: "Café Central",
      location: "San José",
      rating: 5
    },
    {
      quote: "As a foreign investor, I needed reliable accounting support to establish my business in Costa Rica. PBAG made the process seamless and continues to provide excellent service.",
      author: "David Thompson",
      company: "Pacific Properties CR",
      location: "Jaco",
      rating: 5
    },
    {
      quote: "The payroll management service has been a game-changer for our growing team. Professional, accurate, and always on time with compliance requirements.",
      author: "Carlos Rodríguez",
      company: "TechStart Costa Rica",
      location: "San José",
      rating: 5
    },
    {
      quote: "Their CPA services gave us the credibility we needed for international partnerships. The team's bilingual support made communication effortless.",
      author: "Jennifer Williams",
      company: "Eco Tourism Adventures",
      location: "Manuel Antonio",
      rating: 5
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Over 15 years of building trust with Costa Rican businesses - here&apos;s what our clients have to say about working with PBAG.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 relative hover:shadow-lg transition-shadow duration-300">
              {/* Quote marks */}
              <div className="absolute top-4 left-4 text-yellow-500 opacity-60">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4 justify-end">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <blockquote className="text-gray-700 mb-6 leading-relaxed italic">
                &quot;{testimonial.quote}&quot;
              </blockquote>

              <div className="border-t border-gray-100 pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-blue-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.company}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-yellow-600 font-medium">{testimonial.location}</div>
                    <div className="text-xs text-gray-500">Costa Rica</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-6 bg-white rounded-xl shadow-sm border border-gray-100 px-8 py-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-900">500+</div>
              <div className="text-sm text-gray-600">Happy Clients</div>
            </div>
            <div className="w-px h-12 bg-gray-200"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600">4.9/5</div>
              <div className="text-sm text-gray-600">Client Rating</div>
            </div>
            <div className="w-px h-12 bg-gray-200"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-900">15+</div>
              <div className="text-sm text-gray-600">Years Serving CR</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials