import Temp from '@/components/layout/Layout'
import Temp from 'next/link'

export const metadata = {
  title: 'CPA Services | Certified Public Accountant | Professional Opinions | Pacific Business & Accounting Group',
  description: 'Professional CPA services in Costa Rica. Certified financial statement opinions, attestations, income certifications, audit support, and professional compliance services from licensed CPAs.',
}

const CPAServicesPage = () => {
  const serviceOverview = {
    title: "Professional CPA Services & Certifications",
    subtitle: "Certified Public Accountant Services with Fe Pública Authority",
    description: "When your business needs the highest level of professional assurance, our licensed CPAs (Contadores Públicos Autorizados) provide certified opinions, attestations, and professional certifications backed by Fe Pública (Public Faith) authority. From financial statement certifications to income verification, we deliver the professional credibility your business requires."
  }

  const cpaRequirements = [
    {
      title: "CPA Certification Process",
      description: "Rigorous professional requirements for Costa Rican CPAs",
      details: [
        "University degree in accounting from accredited institution",
        "Minimum 2 years professional accounting experience",
        "Completion of CCPACR deontology seminar",
        "Passing grade on professional ethics examination",
        "Ongoing continuing professional education requirements"
      ],
      source: "Colegio de Contadores Públicos de Costa Rica (CCPACR)"
    },
    {
      title: "Fe Pública Authority",
      description: "Unique legal authority to provide certified professional opinions",
      details: [
        "Legal authority to attest to financial information accuracy",
        "Power to provide binding professional opinions",
        "Exclusive right to certify financial statements",
        "Authority to issue income and asset certifications",
        "Professional liability coverage and bonding requirements"
      ],
      source: "Law No. 1038 of 1947 - Professional Accounting Law"
    },
    {
      title: "Professional Standards Compliance",
      description: "Adherence to international and local professional standards",
      details: [
        "International Financial Reporting Standards (IFRS) compliance",
        "International Standards on Auditing (ISA) adoption",
        "CCPACR Code of Professional Ethics adherence",
        "Minimum fee structure compliance (Decree No. 42223-H)",
        "Quality control and peer review requirements"
      ],
      source: "CCPACR Professional Standards & Regulations"
    }
  ]

  const cpaServicesOffered = [
    {
      category: "Financial Statement Certifications",
      icon: (
        <svg className="w-8 h-8 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ),
      services: [
        "IFRS-compliant financial statement certification",
        "Annual audited financial statement preparation",
        "Quarterly and interim financial statement reviews",
        "Consolidated financial statement certification",
        "Special purpose financial statement attestations"
      ]
    },
    {
      category: "Professional Opinions & Attestations",
      icon: (
        <svg className="w-8 h-8 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
        </svg>
      ),
      services: [
        "Income source certification and verification",
        "Asset valuation and certification opinions",
        "Business valuation professional opinions",
        "Financial capacity attestations for loans",
        "Investment and liquidity certifications"
      ]
    },
    {
      category: "Compliance Certifications",
      icon: (
        <svg className="w-8 h-8 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zm0 3a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zm0 3a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm8-6a3 3 0 116 0 3 3 0 01-6 0z" clipRule="evenodd" />
        </svg>
      ),
      services: [
        "Tax compliance verification certificates",
        "Regulatory compliance attestations",
        "Internal controls assessment certifications",
        "Fraud investigation professional opinions",
        "Due diligence certification services"
      ]
    },
    {
      category: "Specialized CPA Services",
      icon: (
        <svg className="w-8 h-8 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
        </svg>
      ),
      services: [
        "Forensic accounting and litigation support",
        "Expert witness testimony services",
        "Business acquisition due diligence",
        "Insurance claim verification and support",
        "Estate and inheritance valuation certifications"
      ]
    }
  ]

  const businessRequirements = [
    {
      title: "When Your Business MUST Use a CPA",
      requirement: "Legal Requirements",
      scenarios: [
        "Regulated financial sector companies (banks, insurance, securities)",
        "Public companies filing with stock exchange authorities",
        "Companies requiring audited financial statements for loans",
        "Businesses needing income certifications for immigration",
        "Entities involved in legal proceedings requiring expert testimony"
      ]
    },
    {
      title: "When Your Business SHOULD Use a CPA",
      requirement: "Professional Recommendations",
      scenarios: [
        "Annual revenue exceeding $500,000 USD",
        "Complex financial structures or multi-entity operations",
        "International business operations requiring credibility",
        "Seeking significant bank financing or investment",
        "Preparing for business sale or acquisition"
      ]
    },
    {
      title: "Professional Opinion Types",
      requirement: "CPA Opinion Classifications",
      scenarios: [
        "Unqualified Opinion: Clean certification without reservations",
        "Qualified Opinion: Certification with specific limitations noted",
        "Adverse Opinion: Unfavorable certification due to material issues",
        "Disclaimer: Unable to express opinion due to scope limitations",
        "Compilation: Presenting information without verification"
      ]
    }
  ]

  const cpaPricing = [
    {
      name: "Basic CPA Certification",
      price: "$2,500",
      period: "/service",
      description: "Essential CPA services for standard business certifications",
      features: [
        "Financial statement review and certification",
        "Basic income verification certification",
        "Standard compliance attestation",
        "Professional opinion letter",
        "Single-entity certification scope",
        "Standard 10-business-day turnaround"
      ],
      popular: false,
      cta: "Request Basic Certification"
    },
    {
      name: "Professional CPA Opinion",
      price: "$4,500",
      period: "/service",
      description: "Comprehensive CPA opinion with detailed analysis",
      features: [
        "Comprehensive financial statement audit",
        "Detailed professional opinion report",
        "Multiple certification types included",
        "Asset and income verification",
        "7-business-day turnaround",
        "Professional consultation included",
        "Regulatory compliance verification"
      ],
      popular: true,
      cta: "Request Professional Opinion"
    },
    {
      name: "Expert CPA Services",
      price: "$8,500",
      period: "/service",
      description: "Complex CPA services for specialized business needs",
      features: [
        "Multi-entity consolidated certifications",
        "Forensic accounting analysis",
        "Expert witness preparation",
        "Complex business valuation opinions",
        "International standards compliance",
        "Expedited 5-business-day service",
        "Ongoing professional support",
        "Court testimony availability"
      ],
      popular: false,
      cta: "Request Expert Services"
    }
  ]

  const cpaStandards = [
    {
      title: "Professional Ethics & Independence",
      description: "Our CPAs maintain the highest standards of professional ethics and independence, ensuring objective and unbiased professional opinions.",
      icon: (
        <svg className="w-10 h-10 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "International Standards Compliance",
      description: "All CPA services follow International Financial Reporting Standards (IFRS) and International Standards on Auditing (ISA) as adopted by Costa Rica.",
      icon: (
        <svg className="w-10 h-10 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
          <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4z" />
          <path fillRule="evenodd" d="M3 8a1 1 0 011-1h12a1 1 0 011 1v8a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm8 4a3 3 0 11-6 0 3 3 0 016 0z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "Quality Control & Peer Review",
      description: "Our CPA practice undergoes regular quality control reviews and peer assessments to ensure consistent professional service delivery.",
      icon: (
        <svg className="w-10 h-10 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "Professional Liability Protection",
      description: "Full professional liability insurance and bonding protection ensures your business is protected throughout the CPA engagement process.",
      icon: (
        <svg className="w-10 h-10 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-.257-.257A6 6 0 1118 8zM10 2L8.83 3.17A5.97 5.97 0 008 6a1 1 0 102 0c0-.551-.108-1.077-.306-1.562L10 4.126l.306.312A2.99 2.99 0 0010 6a1 1 0 102 0c0-1.035-.263-2.009-.83-2.83L10 2z" clipRule="evenodd" />
        </svg>
      )
    }
  ]

  const cpaProcess = [
    {
      step: "01",
      title: "Initial Consultation & Scope Definition",
      description: "We discuss your specific CPA certification needs, review documentation requirements, and establish the scope of professional services required.",
      timeline: "Day 1-2"
    },
    {
      step: "02", 
      title: "Document Review & Analysis",
      description: "Our CPA team conducts a thorough review of financial records, supporting documentation, and performs necessary analytical procedures.",
      timeline: "Day 3-7"
    },
    {
      step: "03",
      title: "Professional Opinion Development",
      description: "Based on our analysis, we develop the professional opinion, certification, or attestation required, ensuring compliance with all applicable standards.",
      timeline: "Day 8-9"
    },
    {
      step: "04",
      title: "Final Review & Delivery",
      description: "Final quality control review is performed, and the certified professional opinion is delivered with official CPA seal and signature.",
      timeline: "Day 10"
    }
  ]

  const caseStudies = [
    {
      title: "International Loan Facility Certification",
      industry: "Manufacturing",
      challenge: "Multinational manufacturer needed certified financial statements and income verification for $2M USD loan facility from international bank",
      solution: "Provided comprehensive CPA audit of 3-year financial statements, income source certification, and professional solvency opinion",
      results: [
        "Loan approval achieved within 30 days",
        "Bank accepted CPA certification without additional requirements",
        "Established ongoing relationship for quarterly certifications",
        "Reduced loan interest rate due to certified financial credibility"
      ]
    },
    {
      title: "Immigration Income Certification",
      industry: "Professional Services",
      challenge: "Business owner required certified income verification for Costa Rican residency application under inversionista program",
      solution: "Delivered certified income source verification, asset certification, and professional opinion on financial capacity",
      results: [
        "Immigration application approved without additional documentation",
        "Residency status granted in record time",
        "Established template for similar future certifications",
        "Client referred 5 additional immigration cases"
      ]
    }
  ]

  const faqs = [
    {
      question: "What is the difference between a CPA and a regular accountant in Costa Rica?",
      answer: "A CPA (Contador Público Autorizado) is a licensed professional with Fe Pública (Public Faith) authority, meaning they can legally certify financial information and provide binding professional opinions. Regular accountants can prepare financial statements but cannot certify or attest to their accuracy with legal authority."
    },
    {
      question: "When is a CPA certification legally required in Costa Rica?",
      answer: "CPA certifications are legally required for regulated financial sector companies, public companies filing with securities authorities, and businesses requiring audited financial statements. They're also commonly required for immigration applications, loan applications, and legal proceedings."
    },
    {
      question: "How long does a CPA certification process take?",
      answer: "Standard CPA certifications typically take 10 business days. Expedited services can be completed in 5-7 business days for urgent needs. Complex multi-entity or forensic accounting services may require 2-3 weeks depending on scope and documentation availability."
    },
    {
      question: "What types of professional opinions can a CPA provide?",
      answer: "CPAs can issue unqualified (clean), qualified (with limitations), adverse (unfavorable), or disclaimer opinions. They can also provide compilation services where information is presented without verification. The opinion type depends on the evidence available and scope of the engagement."
    },
    {
      question: "Are CPA fees regulated in Costa Rica?",
      answer: "Yes, the CCPACR establishes minimum fee schedules through Executive Decree No. 42223-H to ensure quality and protect professional standards. These minimum fees are not optional but an ethical obligation that helps maintain the profession's integrity and credibility."
    },
    {
      question: "Can a Costa Rican CPA certification be used internationally?",
      answer: "Yes, Costa Rican CPA certifications are generally recognized internationally, especially when they comply with IFRS and ISA standards. However, some countries or institutions may require additional certifications or apostille authentication depending on their specific requirements."
    }
  ]

  const regulatoryFramework = [
    {
      entity: "CCPACR Regulation",
      description: "Primary professional body governing CPA practice",
      requirements: [
        "Professional licensing and membership",
        "Continuing professional education (CPE)",
        "Code of Professional Ethics compliance",
        "Quality control and peer review",
        "Professional liability insurance"
      ]
    },
    {
      entity: "Financial Sector Regulators",
      description: "Additional oversight for regulated entity services",
      requirements: [
        "SUGEVAL (Stock Market Supervisory Authority)",
        "SUGEF (General Superintendence of Financial Entities)",
        "SUPEN (Superintendence of Pensions)",
        "SUGESE (General Superintendence of Insurance)",
        "CONASSIF coordination and oversight"
      ]
    },
    {
      entity: "International Standards",
      description: "Global standards adopted by Costa Rica",
      requirements: [
        "IFRS (International Financial Reporting Standards)",
        "ISA (International Standards on Auditing)",
        "IESBA Code of Ethics for Professional Accountants",
        "ISQC 1 (Quality Control Standards)",
        "IFAC international best practices"
      ]
    }
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold">{serviceOverview.title}</h1>
            </div>
            <h2 className="text-2xl text-yellow-400 font-semibold mb-6">{serviceOverview.subtitle}</h2>
            <p className="text-xl text-blue-100 leading-relaxed mb-8">
              {serviceOverview.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                Get CPA Consultation
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="#pricing"
                className="inline-flex items-center border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
              >
                View CPA Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CPA Requirements & Certification */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Costa Rica CPA Certification & Requirements</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding the rigorous professional standards and legal authority that make CPA services the gold standard for financial certifications in Costa Rica.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {cpaRequirements.map((requirement, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-blue-900 mb-3">{requirement.title}</h3>
                <p className="text-gray-600 mb-6">{requirement.description}</p>
                <ul className="space-y-3 mb-6">
                  {requirement.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start">
                      <div className="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700 text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-gray-500 italic">Source: {requirement.source}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CPA Services Offered */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Comprehensive CPA Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From financial statement certifications to expert witness testimony, our licensed CPAs provide the full spectrum of professional services with legal authority and credibility.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {cpaServicesOffered.map((category, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg flex items-center justify-center mr-4">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-blue-900">{category.category}</h3>
                </div>
                <ul className="space-y-3">
                  {category.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="flex items-start">
                      <div className="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Requirements for CPA Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">When Your Business Needs a CPA</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding the legal requirements and professional recommendations for using certified CPA services in Costa Rica.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {businessRequirements.map((req, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">{req.title}</h3>
                  <div className="bg-yellow-500 text-white px-4 py-2 rounded-lg inline-block">
                    <span className="font-semibold text-sm">{req.requirement}</span>
                  </div>
                </div>
                <ul className="space-y-3">
                  {req.scenarios.map((scenario, scenarioIndex) => (
                    <li key={scenarioIndex} className="flex items-start">
                      <div className="w-5 h-5 bg-blue-900 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700 text-sm">{scenario}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Professional CPA Service Pricing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transparent pricing for professional CPA services. All fees comply with CCPACR minimum professional standards and include full professional liability coverage.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {cpaPricing.map((plan, index) => (
              <div key={index} className={`rounded-xl border-2 p-8 relative ${plan.popular ? 'border-yellow-500 shadow-2xl scale-105' : 'border-gray-200 shadow-lg'}`}>
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-yellow-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Requested
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-blue-900 mb-2">{plan.name}</h3>
                  <div className="flex items-center justify-center mb-4">
                    <span className="text-4xl font-bold text-blue-900">{plan.price}</span>
                    <span className="text-gray-600 ml-2">{plan.period}</span>
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                    plan.popular 
                      ? 'bg-yellow-500 hover:bg-yellow-600 text-white shadow-lg transform hover:scale-105' 
                      : 'bg-blue-900 hover:bg-blue-800 text-white'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Need forensic accounting or expert witness services?</p>
            <Link
              href="/contact"
              className="inline-flex items-center text-blue-900 hover:text-yellow-600 font-semibold transition-colors duration-200"
            >
              Contact us for specialized CPA pricing
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Professional Standards */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Professional Standards & Ethics</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Our CPA practice adheres to the highest professional standards, ensuring credible and reliable professional services that meet international quality requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {cpaStandards.map((standard, index) => (
              <div key={index} className="flex items-start p-6 bg-blue-800 rounded-xl">
                <div className="w-16 h-16 bg-yellow-500 rounded-xl flex items-center justify-center mr-6 flex-shrink-0">
                  {standard.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">{standard.title}</h3>
                  <p className="text-blue-100 leading-relaxed">{standard.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CPA Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Our CPA Certification Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to delivering professional CPA services with the highest standards of quality and professional integrity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cpaProcess.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-3">{step.description}</p>
                <div className="bg-blue-50 text-blue-900 px-3 py-1 rounded-full text-sm font-semibold inline-block">
                  {step.timeline}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regulatory Framework */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Regulatory Framework & Oversight</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple layers of professional oversight ensure our CPA services meet the highest standards of quality and professional integrity.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {regulatoryFramework.map((framework, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-blue-900 mb-3">{framework.entity}</h3>
                <p className="text-gray-600 mb-6">{framework.description}</p>
                <ul className="space-y-3">
                  {framework.requirements.map((requirement, reqIndex) => (
                    <li key={reqIndex} className="flex items-start">
                      <div className="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700 text-sm">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">CPA Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real examples of how our professional CPA services have helped businesses achieve their goals with credible, certified professional opinions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-900 text-white px-3 py-1 rounded-full text-sm font-semibold mr-4">
                    {study.industry}
                  </div>
                  <h3 className="text-xl font-bold text-blue-900">{study.title}</h3>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                  <p className="text-gray-600 mb-4">{study.challenge}</p>
                  
                  <h4 className="font-semibold text-gray-900 mb-2">CPA Solution:</h4>
                  <p className="text-gray-600 mb-4">{study.solution}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Results:</h4>
                  <ul className="space-y-2">
                    {study.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-start">
                        <div className="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-700">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about CPA services and professional certification requirements in Costa Rica.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-lg font-bold text-blue-900 mb-4">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sources and References */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-lg font-bold text-blue-900 mb-6">Official Sources and References</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Professional Bodies</h4>
              <ul className="space-y-1 text-gray-600">
                <li>• <a href="https://www.ccpa.or.cr/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-900 transition-colors">Colegio de Contadores Públicos de Costa Rica</a></li>
                <li>• <a href="https://www.ifac.org/about-ifac/membership/profile/costa-rica" target="_blank" rel="noopener noreferrer" className="hover:text-blue-900 transition-colors">IFAC - Costa Rica Profile</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Legal Framework</h4>
              <ul className="space-y-1 text-gray-600">
                <li>• Law No. 1038 of 1947 - Professional Accounting</li>
                <li>• Executive Decree No. 42223-H - Fee Regulation</li>
                <li>• Law No. 1269 of 1951 - Private Accounting</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Financial Regulators</h4>
              <ul className="space-y-1 text-gray-600">
                <li>• <a href="https://www.sugef.fi.cr/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-900 transition-colors">SUGEF - Banking Supervision</a></li>
                <li>• <a href="https://www.sugeval.fi.cr/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-900 transition-colors">SUGEVAL - Securities Supervision</a></li>
                <li>• <a href="https://www.conassif.fi.cr/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-900 transition-colors">CONASSIF - System Coordination</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">International Standards</h4>
              <ul className="space-y-1 text-gray-600">
                <li>• <a href="https://www.ifrs.org/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-900 transition-colors">IFRS Foundation</a></li>
                <li>• <a href="https://www.iaasb.org/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-900 transition-colors">IAASB - Auditing Standards</a></li>
                <li>• <a href="https://www.iesba.org/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-900 transition-colors">IESBA - Ethics Code</a></li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-6">
            All regulatory and professional information is current as of the page creation date. Please consult official sources for the most up-to-date requirements. CPA services provided by PBAG are performed by licensed professionals in compliance with all applicable laws and professional standards.
          </p>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Need Professional CPA Certification?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Get the professional credibility your business deserves with certified CPA services from licensed professionals. 
            Contact us today for a consultation about your specific certification needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/contact"
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Schedule CPA Consultation
            </Link>
            <Link
              href="tel:+50622901030"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
            >
              Call (506) 2290-1030
            </Link>
          </div>

          <div className="flex items-center justify-center space-x-8 text-blue-100">
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Licensed CPAs
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Fe Pública Authority
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Professional Guarantee
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default CPAServicesPage