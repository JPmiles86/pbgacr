import Temp from '@/components/layout/Layout'
import Temp from 'next/link'

export const metadata = {
  title: 'Audit & Tax Services | Costa Rica Tax Compliance 2025 | Pacific Business & Accounting Group',
  description: 'Professional audit and tax services in Costa Rica. Expert 2025 tax compliance, corporate income tax, VAT, transfer pricing, free zone benefits, and international tax planning.',
}

const AuditTaxServicesPage = () => {
  const serviceOverview = {
    title: "Complete Audit & Tax Services",
    subtitle: "2025 Costa Rica Tax Compliance & Strategic Tax Planning",
    description: "Navigate Costa Rica's evolving tax landscape with expert guidance. Our certified tax professionals ensure full compliance with 2025 tax regulations, provide strategic tax planning, and deliver comprehensive audit services that protect and optimize your business operations."
  }

  const taxRates2025 = [
    {
      title: "Corporate Income Tax 2025",
      description: "Updated rates per Executive Decree No. 44772-H",
      details: [
        "Progressive rates for companies under ₡120,582,000 gross income",
        "30% standard rate for larger corporations",
        "0% tax for new businesses (first 3 years with conditions)",
        "25% reduction in years 4-5, 50% reduction in year 6"
      ],
      source: "Ministry of Finance - Executive Decree No. 44772-H"
    },
    {
      title: "VAT/IVA Rates 2025",
      description: "Standard and reduced VAT rates across sectors",
      details: [
        "Standard VAT rate: 13% on most goods and services",
        "Private health services: 4%",
        "Medicines and education: 2%",
        "Basic consumption goods: 1%"
      ],
      source: "DGT - General Directorate of Taxation"
    },
    {
      title: "Electronic Invoicing Updates",
      description: "Mandatory Version 4.4 implementation timeline",
      details: [
        "Version 4.4 optional from April 1, 2025",
        "Version 4.4 mandatory from September 1, 2025",
        "Enhanced medication tracking for pharmaceutical sales",
        "Updated CAByS catalog requirements"
      ],
      source: "Ministry of Finance - Electronic Invoicing Platform"
    }
  ]

  const auditServices = [
    {
      category: "Financial Statement Audits",
      icon: (
        <svg className="w-8 h-8 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ),
      services: [
        "IFRS-compliant annual financial statement audits",
        "Statutory audits for regulated entities",
        "Internal control assessments and recommendations",
        "Fraud detection and prevention reviews",
        "Management letter preparation and follow-up"
      ]
    },
    {
      category: "Tax Compliance Services",
      icon: (
        <svg className="w-8 h-8 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
        </svg>
      ),
      services: [
        "Corporate income tax return preparation and filing",
        "Monthly VAT declarations and compliance",
        "Electronic invoicing setup and Version 4.4 migration",
        "Municipal tax filings across all provinces",
        "Quarterly CCSS and INS employer reporting"
      ]
    },
    {
      category: "International Tax Services",
      icon: (
        <svg className="w-8 h-8 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
          <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM14 9a1 1 0 100 2h2a1 1 0 100-2h-2zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM14 14a1 1 0 100 2h2a1 1 0 100-2h-2z" />
        </svg>
      ),
      services: [
        "Transfer pricing documentation and compliance",
        "Tax treaty optimization and planning",
        "Foreign source income reporting",
        "Double taxation relief applications",
        "OECD BEPS compliance and reporting"
      ]
    },
    {
      category: "Tax Planning & Advisory",
      icon: (
        <svg className="w-8 h-8 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
        </svg>
      ),
      services: [
        "Free zone regime qualification and optimization",
        "Corporate restructuring for tax efficiency",
        "Investment incentive maximization",
        "Pre-transaction tax due diligence",
        "Tax risk assessment and mitigation strategies"
      ]
    }
  ]

  const taxCalendar2025 = [
    {
      month: "January 2025",
      deadlines: [
        { date: "15th", task: "December VAT declaration and payment" },
        { date: "15th", task: "Monthly income tax advance payment" },
        { date: "31st", task: "Annual tax planning review" }
      ]
    },
    {
      month: "February 2025",
      deadlines: [
        { date: "15th", task: "January VAT declaration and payment" },
        { date: "15th", task: "Q4 CCSS and INS employer reports" },
        { date: "28th", task: "Transfer pricing documentation review" }
      ]
    },
    {
      month: "March 2025",
      deadlines: [
        { date: "15th", task: "February VAT declaration and payment" },
        { date: "31st", task: "Annual income tax return filing" },
        { date: "31st", task: "Municipal tax declarations" }
      ]
    },
    {
      month: "April 2025",
      deadlines: [
        { date: "1st", task: "Electronic invoicing Version 4.4 optional" },
        { date: "15th", task: "March VAT declaration and payment" },
        { date: "30th", task: "Q1 financial statement preparation" }
      ]
    },
    {
      month: "September 2025",
      deadlines: [
        { date: "1st", task: "Electronic invoicing Version 4.4 mandatory" },
        { date: "15th", task: "August VAT declaration and payment" },
        { date: "30th", task: "Mid-year tax planning review" }
      ]
    }
  ]

  const freeZoneBenefits = [
    {
      title: "Complete Tax Exemptions",
      description: "Comprehensive tax relief for qualifying businesses",
      benefits: [
        "100% exemption from corporate income tax (4-12 years)",
        "Exemption from VAT on purchases and services",
        "No taxes on profit remittances abroad",
        "Municipal tax exemptions for 10 years",
        "Export and re-export tax exemptions"
      ],
      requirements: [
        "Minimum investment: $150,000 in fixed assets",
        "Investment completion within 3 years",
        "Export-oriented business activities",
        "Job creation requirements"
      ]
    }
  ]

  const internationalTreaties = [
    {
      category: "Double Taxation Treaties",
      treaties: ["Germany", "Mexico", "Spain"],
      benefits: [
        "Reduced withholding tax rates",
        "Elimination of double taxation",
        "Mutual agreement procedures",
        "Enhanced certainty for cross-border transactions"
      ]
    },
    {
      category: "Tax Information Exchange Agreements",
      treaties: ["Argentina", "Australia", "Canada", "Denmark", "Ecuador", "Finland", "France", "Norway", "Sweden", "United States"],
      benefits: [
        "Automatic exchange of financial information",
        "Enhanced tax compliance verification",
        "Reduced tax evasion risks",
        "OECD CRS compliance"
      ]
    }
  ]

  const pricingPlans = [
    {
      name: "Basic Tax Compliance",
      price: "$650",
      period: "/month",
      description: "Essential tax services for small businesses",
      features: [
        "Monthly VAT declarations",
        "Quarterly income tax advances",
        "Annual tax return preparation",
        "Electronic invoicing support",
        "Basic tax planning advice",
        "Email support and consultation"
      ],
      popular: false,
      cta: "Start Basic Plan"
    },
    {
      name: "Professional Tax & Audit",
      price: "$1,200",
      period: "/month",
      description: "Comprehensive tax and audit services",
      features: [
        "All Basic Plan features",
        "Annual financial statement audit",
        "Transfer pricing documentation",
        "Tax treaty optimization",
        "Municipal tax compliance",
        "Priority phone support",
        "Quarterly tax planning sessions"
      ],
      popular: true,
      cta: "Start Professional Plan"
    },
    {
      name: "Enterprise Tax Advisory",
      price: "$2,500",
      period: "/month",
      description: "Full-service tax planning and compliance",
      features: [
        "All Professional Plan features",
        "Free zone qualification assistance",
        "International tax structuring",
        "OECD BEPS compliance",
        "Tax audit defense and representation",
        "Dedicated tax advisor",
        "24/7 priority support",
        "Custom tax strategies"
      ],
      popular: false,
      cta: "Contact for Enterprise"
    }
  ]

  const commonTaxIssues = [
    {
      issue: "Electronic Invoicing Non-Compliance",
      description: "Failure to properly implement or maintain electronic invoicing systems",
      solution: "Complete system audit, Version 4.4 migration, staff training, and ongoing compliance monitoring",
      consequences: "Penalties up to ₡500,000, transaction rejections, and business disruption"
    },
    {
      issue: "Transfer Pricing Documentation Gaps",
      description: "Inadequate or missing transfer pricing documentation for related party transactions",
      solution: "Comprehensive transfer pricing study, documentation preparation, and annual updates",
      consequences: "Primary adjustments, penalties up to 100% of tax adjustment, and audit scrutiny"
    },
    {
      issue: "VAT Registration and Reporting Errors",
      description: "Incorrect VAT calculations, late filings, or registration issues",
      solution: "VAT registration review, process optimization, and automated compliance systems",
      consequences: "Interest charges, penalties of 25-100% of tax due, and potential criminal liability"
    },
    {
      issue: "Free Zone Compliance Failures",
      description: "Non-compliance with free zone requirements resulting in benefit loss",
      solution: "Comprehensive compliance audit, corrective action plan, and renewal strategy",
      consequences: "Loss of tax benefits, retroactive tax assessments, and disqualification from regime"
    }
  ]

  const benefits = [
    {
      title: "2025 Tax Expertise",
      description: "Stay current with Costa Rica's latest tax changes including corporate rate updates, electronic invoicing Version 4.4, and new compliance requirements.",
      icon: (
        <svg className="w-10 h-10 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "International Tax Planning",
      description: "Leverage Costa Rica's growing network of tax treaties and OECD membership for optimal international tax structuring and compliance.",
      icon: (
        <svg className="w-10 h-10 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
          <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h8a1 1 0 110 2H4a1 1 0 01-1-1zM3 16a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
        </svg>
      )
    },
    {
      title: "Audit Defense & Representation",
      description: "Professional representation during tax audits with proven track record of successful resolutions and penalty minimization.",
      icon: (
        <svg className="w-10 h-10 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
          <path fillRule="evenodd" d="M4 5a2 2 0 012-2v1a2 2 0 002 2h8a2 2 0 002-2V3a2 2 0 012 2v6h-3a1 1 0 100 2h3v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm8 8a1 1 0 01-1-1V8a1 1 0 112 0v4a1 1 0 01-1 1z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "Free Zone Optimization",
      description: "Maximize tax savings through strategic free zone planning, qualification assistance, and ongoing compliance management.",
      icon: (
        <svg className="w-10 h-10 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
          <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
        </svg>
      )
    }
  ]

  const faqs = [
    {
      question: "What are the key tax changes for 2025 in Costa Rica?",
      answer: "Major 2025 changes include updated corporate income tax brackets per Executive Decree No. 44772-H, mandatory electronic invoicing Version 4.4 from September 1st, enhanced pharmaceutical tracking requirements, and updated CAByS catalog requirements for all electronic invoices."
    },
    {
      question: "How do Costa Rica's tax treaties benefit my business?",
      answer: "Costa Rica's treaties with Germany, Mexico, and Spain provide reduced withholding taxes, elimination of double taxation, and mutual agreement procedures. Additionally, Tax Information Exchange Agreements with 20+ countries ensure compliance and provide certainty for international transactions."
    },
    {
      question: "What are the requirements for free zone tax benefits?",
      answer: "Free zone benefits require a minimum $150,000 investment in fixed assets over 3 years, export-oriented activities, and job creation. Benefits include 100% income tax exemption for 4-12 years, VAT exemptions, and no taxes on profit remittances abroad."
    },
    {
      question: "How does transfer pricing compliance work in Costa Rica?",
      answer: "As an OECD member, Costa Rica requires arm's length pricing for related party transactions. Companies must maintain contemporaneous documentation, file annual returns, and justify pricing methods consistent with OECD guidelines. Non-compliance can result in significant penalties."
    },
    {
      question: "What happens during a tax audit in Costa Rica?",
      answer: "Tax audits typically focus on electronic invoicing compliance, transfer pricing documentation, VAT calculations, and income tax returns. The DGT can audit up to 4 years of records. Professional representation is crucial for managing audit responses and minimizing penalties."
    },
    {
      question: "When must I migrate to electronic invoicing Version 4.4?",
      answer: "Version 4.4 becomes optional from April 1, 2025, and mandatory from September 1, 2025. Pharmaceutical companies must upgrade by January 1, 2025, for medication tracking. We recommend early migration to ensure system stability and compliance."
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
                Get Tax Consultation
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="#pricing"
                className="inline-flex items-center border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
              >
                View Tax Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2025 Tax Rates and Updates */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">2025 Costa Rica Tax Rates & Updates</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay compliant with the latest tax rates, electronic invoicing requirements, and regulatory changes for 2025.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {taxRates2025.map((rate, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-blue-900 mb-3">{rate.title}</h3>
                <p className="text-gray-600 mb-6">{rate.description}</p>
                <ul className="space-y-3 mb-6">
                  {rate.details.map((detail, detailIndex) => (
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
                <p className="text-xs text-gray-500 italic">Source: {rate.source}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audit & Tax Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Comprehensive Tax & Audit Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From financial statement audits to international tax planning, we provide full-spectrum services to optimize your tax position and ensure regulatory compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {auditServices.map((category, index) => (
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

      {/* 2025 Tax Compliance Calendar */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">2025 Tax Compliance Calendar</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay ahead of critical tax deadlines and compliance requirements throughout 2025.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {taxCalendar2025.map((month, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-lg font-bold text-blue-900 mb-4">{month.month}</h3>
                <ul className="space-y-3">
                  {month.deadlines.map((deadline, deadlineIndex) => (
                    <li key={deadlineIndex} className="flex items-start">
                      <div className="bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded mr-3 mt-0.5 flex-shrink-0">
                        {deadline.date}
                      </div>
                      <span className="text-gray-700 text-sm">{deadline.task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Zone Benefits */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Free Zone Tax Benefits</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Maximize your tax savings with Costa Rica's generous free zone regime offering up to 100% tax exemptions.
            </p>
          </div>

          {freeZoneBenefits.map((zone, index) => (
            <div key={index} className="bg-blue-800 rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6">{zone.title}</h3>
              <p className="text-blue-100 mb-8">{zone.description}</p>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-yellow-400">Tax Benefits Include:</h4>
                  <ul className="space-y-3">
                    {zone.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start">
                        <div className="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-blue-100">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-yellow-400">Qualification Requirements:</h4>
                  <ul className="space-y-3">
                    {zone.requirements.map((requirement, reqIndex) => (
                      <li key={reqIndex} className="flex items-start">
                        <div className="w-5 h-5 bg-gray-300 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          <svg className="w-3 h-3 text-gray-800" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-blue-100">{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* International Tax Treaties */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">International Tax Treaties & Agreements</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leverage Costa Rica's expanding network of tax treaties and information exchange agreements for optimal international tax planning.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {internationalTreaties.map((treaty, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-blue-900 mb-4">{treaty.category}</h3>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Treaty Partners:</h4>
                  <p className="text-gray-600">{treaty.treaties.join(", ")}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {treaty.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start">
                        <div className="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Tax Service Pricing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transparent pricing for comprehensive tax and audit services. All plans include 2025 compliance updates and expert guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`rounded-xl border-2 p-8 relative ${plan.popular ? 'border-yellow-500 shadow-2xl scale-105' : 'border-gray-200 shadow-lg'}`}>
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-yellow-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
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
        </div>
      </section>

      {/* Common Tax Issues */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Common Tax Issues & Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Avoid costly mistakes with proactive tax planning and expert guidance on Costa Rica's most common tax compliance challenges.
            </p>
          </div>

          <div className="space-y-8">
            {commonTaxIssues.map((issue, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div>
                    <h3 className="text-xl font-bold text-red-600 mb-3">{issue.issue}</h3>
                    <p className="text-gray-600 mb-4">{issue.description}</p>
                    <div className="bg-red-50 border-l-4 border-red-500 p-4">
                      <h4 className="font-semibold text-red-800 mb-2">Potential Consequences:</h4>
                      <p className="text-red-700 text-sm">{issue.consequences}</p>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2">
                    <h4 className="font-semibold text-green-800 mb-3">Our Solution:</h4>
                    <p className="text-gray-700">{issue.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose PBAG for Tax & Audit Services?</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Experience the confidence that comes with expert tax guidance and comprehensive audit services designed for Costa Rica's business environment.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start p-6 bg-blue-800 rounded-xl">
                <div className="w-16 h-16 bg-yellow-500 rounded-xl flex items-center justify-center mr-6 flex-shrink-0">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-blue-100 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about tax compliance and audit services in Costa Rica.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 shadow-sm">
                <h3 className="text-lg font-bold text-blue-900 mb-4">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sources and References */}
      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-lg font-bold text-blue-900 mb-6">Official Sources and References</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Tax Administration</h4>
              <ul className="space-y-1 text-gray-600">
                <li>• <a href="https://www.hacienda.go.cr/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-900 transition-colors">Ministry of Finance (Hacienda)</a></li>
                <li>• <a href="https://www.hacienda.go.cr/contenido/13047-direccion-general-de-tributacion" target="_blank" rel="noopener noreferrer" className="hover:text-blue-900 transition-colors">General Directorate of Taxation (DGT)</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Electronic Invoicing</h4>
              <ul className="space-y-1 text-gray-600">
                <li>• <a href="https://www.hacienda.go.cr/ATV/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-900 transition-colors">ATV Electronic Invoicing Platform</a></li>
                <li>• <a href="https://www.hacienda.go.cr/contenido/13047-direccion-general-de-tributacion" target="_blank" rel="noopener noreferrer" className="hover:text-blue-900 transition-colors">Version 4.4 Documentation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Free Zone Authority</h4>
              <ul className="space-y-1 text-gray-600">
                <li>• <a href="https://www.procomer.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-900 transition-colors">PROCOMER</a></li>
                <li>• <a href="https://www.procomer.com/en/invest/free-trade-zones/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-900 transition-colors">Free Zone Regime Information</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">International Standards</h4>
              <ul className="space-y-1 text-gray-600">
                <li>• <a href="https://www.oecd.org/tax/beps/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-900 transition-colors">OECD BEPS Guidelines</a></li>
                <li>• <a href="https://www.oecd.org/tax/treaties/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-900 transition-colors">Tax Treaty Network</a></li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-6">
            Tax rates and regulations are current as of January 2025. Executive Decree No. 44772-H establishes corporate tax brackets for 2025. Electronic invoicing Version 4.4 becomes mandatory September 1, 2025. Please consult official sources for the most current requirements.
          </p>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Optimize Your Tax Strategy?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Don't let complex tax regulations hold your business back. Get expert guidance on 2025 tax compliance, 
            audit preparation, and strategic tax planning from Costa Rica's leading tax professionals.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/contact"
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Schedule Tax Consultation
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
              Free Tax Consultation
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              2025 Compliance Ready
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Audit Defense Included
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default AuditTaxServicesPage