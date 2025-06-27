import Temp from '@/components/layout/Layout'
import Temp from 'next/link'

export const metadata = {
  title: 'Accounting & Bookkeeping Services | IFRS Compliant | Pacific Business & Accounting Group',
  description: 'Professional accounting and bookkeeping services in Costa Rica. IFRS compliant, electronic invoicing, monthly reporting, and comprehensive financial management for businesses.',
}

const AccountingServicesPage = () => {
  const serviceOverview = {
    title: "Complete Accounting & Bookkeeping Solutions",
    subtitle: "IFRS-Compliant Financial Management for Costa Rican Businesses",
    description: "Navigate Costa Rica's complex accounting requirements with confidence. Our certified professionals ensure full compliance with International Financial Reporting Standards (IFRS), electronic invoicing regulations, and local tax obligations while providing strategic financial insights to grow your business."
  }

  const complianceRequirements = [
    {
      title: "IFRS Standards Compliance",
      description: "Mandatory since 2001 for all Costa Rican businesses",
      details: [
        "Full IFRS for public companies and regulated entities",
        "IFRS for SMEs for small and medium enterprises",
        "Automatic adoption of new IFRS updates",
        "Spanish-language financial statements required"
      ],
      source: "Colegio de Contadores Públicos de Costa Rica"
    },
    {
      title: "Electronic Invoicing (Factura Electrónica)",
      description: "Mandatory digital invoicing system for all taxpayers",
      details: [
        "XML format invoices validated by Ministry of Finance",
        "Version 4.4 mandatory from September 2025",
        "Multiple document types: invoices, credit/debit notes, receipts",
        "5-year digital backup requirement"
      ],
      source: "Ministry of Finance - Hacienda"
    },
    {
      title: "Tax Integration Requirements",
      description: "Taxable income must conform to IFRS standards",
      details: [
        "Resolution No. DGT-R-029-2018 compliance",
        "Decree No. 43198-H requirements",
        "Integration with CCPACR accounting standards",
        "Monthly and quarterly tax reporting"
      ],
      source: "Directorate General of Tax Administration"
    }
  ]

  const servicesIncluded = [
    {
      category: "Daily Bookkeeping",
      icon: (
        <svg className="w-8 h-8 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
          <path fillRule="evenodd" d="M4 5a2 2 0 012-2v1a2 2 0 002 2h8a2 2 0 002-2V3a2 2 0 012 2v6h-3a1 1 0 100 2h3v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm8 8a1 1 0 01-1-1V8a1 1 0 112 0v4a1 1 0 01-1 1z" clipRule="evenodd" />
        </svg>
      ),
      services: [
        "Accounts payable and receivable management",
        "Bank reconciliation and cash flow monitoring",
        "Transaction recording and categorization",
        "Expense tracking and vendor management",
        "Digital document management system"
      ]
    },
    {
      category: "Financial Reporting",
      icon: (
        <svg className="w-8 h-8 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
        </svg>
      ),
      services: [
        "Monthly IFRS-compliant financial statements",
        "Quarterly management reports and analysis",
        "Annual audited financial statements preparation",
        "Cash flow forecasting and budgeting",
        "Key performance indicator (KPI) dashboards"
      ]
    },
    {
      category: "Tax Compliance",
      icon: (
        <svg className="w-8 h-8 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
        </svg>
      ),
      services: [
        "Electronic invoicing setup and management",
        "VAT and income tax return preparation",
        "Monthly tax declarations and payments",
        "Quarterly employer reporting (CCSS, INS)",
        "Annual tax planning and strategy"
      ]
    },
    {
      category: "Advisory Services",
      icon: (
        <svg className="w-8 h-8 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
        </svg>
      ),
      services: [
        "Financial analysis and business insights",
        "Cost accounting and profit optimization",
        "Internal controls and risk assessment",
        "Software selection and implementation",
        "Strategic financial planning"
      ]
    }
  ]

  const pricingPlans = [
    {
      name: "Essential",
      price: "$450",
      period: "/month",
      description: "Perfect for small businesses with basic accounting needs",
      features: [
        "Up to 50 monthly transactions",
        "Monthly financial statements",
        "Electronic invoicing setup",
        "Basic tax compliance",
        "Email support",
        "QuickBooks setup included"
      ],
      popular: false,
      cta: "Start Essential Plan"
    },
    {
      name: "Professional",
      price: "$850",
      period: "/month",
      description: "Comprehensive solution for growing businesses",
      features: [
        "Up to 200 monthly transactions",
        "Monthly financial statements & analysis",
        "Full tax compliance & planning",
        "Quarterly business reviews",
        "Priority phone & email support",
        "Advanced reporting & KPIs",
        "CCSS & INS reporting included"
      ],
      popular: true,
      cta: "Start Professional Plan"
    },
    {
      name: "Enterprise",
      price: "$1,500",
      period: "/month",
      description: "Full-service accounting for established companies",
      features: [
        "Unlimited monthly transactions",
        "Weekly financial reporting",
        "Dedicated accounting team",
        "CFO-level advisory services",
        "Custom reporting & dashboards",
        "Audit preparation & support",
        "24/7 priority support",
        "Multi-entity consolidation"
      ],
      popular: false,
      cta: "Contact for Enterprise"
    }
  ]

  const benefits = [
    {
      title: "IFRS Expertise",
      description: "Our certified CPAs ensure full compliance with Costa Rica's mandatory IFRS standards, providing accurate financial reporting that meets both local and international requirements.",
      icon: (
        <svg className="w-10 h-10 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "Electronic Invoicing Mastery",
      description: "Complete setup and management of Costa Rica's mandatory electronic invoicing system, ensuring compliance with current and upcoming Version 4.4 requirements.",
      icon: (
        <svg className="w-10 h-10 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zm0 3a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zm0 3a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm8-6a3 3 0 116 0 3 3 0 01-6 0z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "Time & Cost Savings",
      description: "Reduce your administrative burden by up to 70% while ensuring accuracy and compliance. Focus on growing your business while we handle the numbers.",
      icon: (
        <svg className="w-10 h-10 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "Strategic Insights",
      description: "Monthly financial analysis and quarterly business reviews provide actionable insights to improve profitability and cash flow management.",
      icon: (
        <svg className="w-10 h-10 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
          <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
        </svg>
      )
    }
  ]

  const caseStudies = [
    {
      title: "Manufacturing Company Transformation",
      industry: "Manufacturing",
      challenge: "Struggling with IFRS compliance and electronic invoicing implementation",
      solution: "Implemented comprehensive accounting system with IFRS-compliant reporting and electronic invoicing automation",
      results: [
        "100% IFRS compliance achieved within 3 months",
        "50% reduction in invoice processing time",
        "25% improvement in cash flow management",
        "Zero tax compliance issues over 2 years"
      ]
    },
    {
      title: "Tourism Business Growth Support",
      industry: "Tourism & Hospitality",
      challenge: "Rapid growth requiring scalable accounting systems and better financial controls",
      solution: "Established robust bookkeeping processes, implemented QuickBooks Enterprise, and created custom KPI dashboards",
      results: [
        "Revenue tracking improved by 300%",
        "Monthly close process reduced from 2 weeks to 3 days",
        "Secured $500K business loan with clean financials",
        "15% cost reduction through better expense management"
      ]
    }
  ]

  const faqs = [
    {
      question: "What are the IFRS requirements for my business in Costa Rica?",
      answer: "All Costa Rican businesses must comply with IFRS standards since 2001. Public companies and regulated entities must use full IFRS, while SMEs can use IFRS for SMEs. Financial statements must be in Spanish and follow current IFRS standards automatically adopted by the Colegio de Contadores Públicos."
    },
    {
      question: "How does electronic invoicing work in Costa Rica?",
      answer: "Electronic invoicing (Factura Electrónica) is mandatory for all taxpayers except those in the Simplified Tax Regime. Invoices must be in XML format, validated by the Ministry of Finance before approval. Starting September 2025, Version 4.4 becomes mandatory with enhanced features and international compliance."
    },
    {
      question: "What monthly and quarterly reports are required?",
      answer: "Monthly requirements include VAT declarations, income tax advances, and IFRS-compliant financial statements. Quarterly obligations include employer reports to CCSS and INS, while annual requirements include audited financial statements for certain entities and comprehensive tax returns."
    },
    {
      question: "Do I need a Costa Rican CPA for my business?",
      answer: "While not always legally required, having a Contador Público Autorizado (CPA) is highly recommended for IFRS compliance, tax planning, and financial statement attestation. CPAs are regulated by the Colegio de Contadores Públicos and provide professional assurance for your financial reporting."
    },
    {
      question: "How long does it take to set up accounting systems?",
      answer: "Basic setup typically takes 2-4 weeks, including chart of accounts creation, software implementation, and electronic invoicing setup. Full IFRS compliance implementation may take 1-3 months depending on business complexity and historical records quality."
    },
    {
      question: "What accounting software do you recommend?",
      answer: "We recommend QuickBooks for most SMEs due to its IFRS compatibility and local tax features. For larger enterprises, we may suggest SAP or Oracle with Costa Rican localization. We handle setup, training, and ongoing support for all recommended platforms."
    }
  ]

  const reportingCalendar = [
    {
      period: "Monthly",
      deadline: "15th of following month",
      requirements: [
        "VAT declaration and payment",
        "Income tax advance payment",
        "IFRS financial statements",
        "Electronic invoicing reconciliation"
      ]
    },
    {
      period: "Quarterly", 
      deadline: "15th of following month",
      requirements: [
        "CCSS employer contributions",
        "INS workplace risk reports",
        "Quarterly financial analysis",
        "Tax planning review"
      ]
    },
    {
      period: "Annually",
      deadline: "March 31st",
      requirements: [
        "Income tax return filing",
        "Audited financial statements (if required)",
        "Municipal tax declarations",
        "Transparency registry updates"
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
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
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
                Get Free Consultation
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="#pricing"
                className="inline-flex items-center border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Requirements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Costa Rica Compliance Requirements</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Navigate complex regulatory requirements with expert guidance and ensure full compliance with Costa Rican accounting and tax laws.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {complianceRequirements.map((requirement, index) => (
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

      {/* Services Included */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Complete Accounting Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From daily bookkeeping to strategic financial planning, we provide comprehensive accounting services tailored to your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {servicesIncluded.map((category, index) => (
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

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Transparent Pricing Plans</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the accounting solution that fits your business size and needs. All plans include IFRS compliance and electronic invoicing support.
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

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Need a custom solution for your business?</p>
            <Link
              href="/contact"
              className="inline-flex items-center text-blue-900 hover:text-yellow-600 font-semibold transition-colors duration-200"
            >
              Contact us for enterprise pricing
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose PBAG for Your Accounting Needs?</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Experience the peace of mind that comes with professional accounting services designed specifically for Costa Rican businesses.
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

      {/* Reporting Calendar */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Costa Rica Reporting Calendar</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay compliant with Costa Rica's reporting requirements. We handle all deadlines and submissions for you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {reportingCalendar.map((period, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-blue-900 mb-2">{period.period}</h3>
                  <div className="bg-yellow-500 text-white px-4 py-2 rounded-lg inline-block">
                    <span className="font-semibold">{period.deadline}</span>
                  </div>
                </div>
                <ul className="space-y-3">
                  {period.requirements.map((requirement, reqIndex) => (
                    <li key={reqIndex} className="flex items-start">
                      <div className="w-5 h-5 bg-blue-900 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{requirement}</span>
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
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our accounting services have helped businesses like yours achieve compliance and growth.
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
                  
                  <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
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
              Get answers to common questions about accounting and compliance in Costa Rica.
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">IFRS Standards</h4>
              <ul className="space-y-1 text-gray-600">
                <li>• <a href="https://www.ccpa.or.cr/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-900 transition-colors">Colegio de Contadores Públicos de Costa Rica</a></li>
                <li>• <a href="https://www.ifrs.org/use-around-the-world/use-of-ifrs-standards-by-jurisdiction/view-jurisdiction/costa-rica/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-900 transition-colors">IFRS Foundation - Costa Rica</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Tax Administration</h4>
              <ul className="space-y-1 text-gray-600">
                <li>• <a href="https://www.hacienda.go.cr/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-900 transition-colors">Ministry of Finance (Hacienda)</a></li>
                <li>• <a href="https://www.hacienda.go.cr/ATV/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-900 transition-colors">Electronic Invoicing Platform</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Social Security</h4>
              <ul className="space-y-1 text-gray-600">
                <li>• <a href="https://www.ccss.sa.cr/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-900 transition-colors">Caja Costarricense de Seguro Social</a></li>
                <li>• <a href="https://www.ins.cr/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-900 transition-colors">Instituto Nacional de Seguros</a></li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-6">
            All regulatory information is current as of the page creation date. Please consult official sources for the most up-to-date requirements.
          </p>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Streamline Your Accounting?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join over 200 businesses that trust PBAG for their accounting and compliance needs. 
            Get started with a free consultation and discover how we can help your business thrive.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/contact"
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Schedule Free Consultation
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
              Free Consultation
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              No Setup Fees
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              IFRS Certified
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default AccountingServicesPage