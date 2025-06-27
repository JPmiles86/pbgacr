import Temp from '@/components/layout/Layout'
import Temp from 'next/link'

export const metadata = {
  title: 'Legal Support Services | Business Formation & Immigration Law | Pacific Business & Accounting Group',
  description: 'Comprehensive legal support for Costa Rica business formation, immigration law, commercial contracts, labor compliance, and intellectual property protection. Expert legal consultation services.',
}

const LegalServicesPage = () => {
  const serviceOverview = {
    title: "Comprehensive Legal Support Services",
    subtitle: "Expert Legal Guidance for Costa Rica Business Success",
    description: "Navigate Costa Rica's complex legal landscape with confidence. Our experienced legal team provides comprehensive support for business formation, immigration law, commercial contracts, labor compliance, and intellectual property protection to ensure your business operates within full legal compliance."
  }

  const businessFormationRequirements = [
    {
      title: "Sociedad Anónima (S.A.) - Corporation",
      description: "Most popular business structure for foreign investors",
      details: [
        "Minimum 2 shareholders, no maximum limit",
        "Minimum 4 board directors required",
        "Share capital minimum: 100,000 colones (~$170 USD)",
        "Foreign ownership up to 100% permitted",
        "Annual shareholders meeting mandatory (within 3 months of fiscal year-end)",
        "Corporate tax due within first 30 days of January"
      ],
      source: "Commercial Code of Costa Rica"
    },
    {
      title: "Sociedad de Responsabilidad Limitada (S.R.L.)",
      description: "Limited Liability Company preferred by smaller businesses",
      details: [
        "2-50 members maximum allowed",
        "Members have limited liability to capital invested",
        "Simpler management structure than corporations",
        "No board of directors required",
        "Transfer of participation requires consent of all members",
        "Lower administrative burden and costs"
      ],
      source: "Commercial Code of Costa Rica"
    },
    {
      title: "Free Trade Zone Benefits",
      description: "Special investment incentives for qualifying businesses",
      details: [
        "100% exemption from income tax for 8-12 years",
        "100% exemption from municipal taxes",
        "Duty-free importation of raw materials and equipment",
        "Available to both foreign and domestic investors equally",
        "Must meet minimum investment and employment requirements",
        "Exports focus or specific qualifying activities required"
      ],
      source: "Free Trade Zone Law 7210"
    }
  ]

  const immigrationServices = [
    {
      category: "Business Owner Visas",
      icon: (
        <svg className="w-8 h-8 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A4.987 4.987 0 0016 12c-1.384 0-2.666.56-3.587 1.535A3.001 3.001 0 0110 16v-1a1 1 0 00-2 0v1a3 3 0 00-2.413-1.465A4.987 4.987 0 004 12a4.987 4.987 0 00-1.413 2.535A3.001 3.001 0 000 16v1a1 1 0 002 0v-1a1 1 0 112 0v1a1 1 0 002 0v-1c0-.735.405-1.375 1.013-1.715A4.987 4.987 0 008 12c1.384 0 2.666.56 3.587 1.535A3.001 3.001 0 0014 16v-1a1 1 0 012 0v1a3 3 0 002.413-1.465A4.987 4.987 0 0020 12v-2a2 2 0 00-2-2h-2V6a3 3 0 00-3-3h-2a3 3 0 00-3 3z" clipRule="evenodd" />
        </svg>
      ),
      services: [
        "Inversionista (Investor) Visa - Minimum $150,000 USD investment",
        "Representante (Company Representative) Visa for executives",
        "Rentista Visa for passive income recipients ($2,500/month)",
        "Pensionado Visa for retirees ($1,000/month pension)",
        "Investment documentation and compliance support",
        "Residency renewal and permanent residency applications"
      ]
    },
    {
      category: "Employee Work Permits",
      icon: (
        <svg className="w-8 h-8 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
        </svg>
      ),
      services: [
        "Special Category work permits for foreign employees",
        "Labor certification proving unique skills requirement",
        "Work permit renewals and extensions (annual process)",
        "Digital Nomad Visa applications ($3,000/month minimum)",
        "Family reunification for work permit holders",
        "Compliance with 2024 immigration law changes (Decree 10470)"
      ]
    },
    {
      category: "Compliance & Documentation",
      icon: (
        <svg className="w-8 h-8 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
        </svg>
      ),
      services: [
        "Document authentication and apostille services",
        "Translation services for legal documents",
        "Immigration law compliance audits",
        "CCSS and INS registration for foreign workers",
        "Tax ID (cédula jurídica) applications for businesses",
        "Resident agent services for non-resident business owners"
      ]
    }
  ]

  const commercialLawServices = [
    {
      title: "Contract Drafting & Review",
      description: "Comprehensive contract services ensuring legal compliance and protection of your business interests.",
      services: [
        "Commercial contracts and service agreements",
        "Employment contracts compliant with 2024 labor laws",
        "Vendor and supplier agreements",
        "Distribution and franchise agreements",
        "International trade contracts and terms",
        "Contract dispute resolution and mediation"
      ]
    },
    {
      title: "Business Transactions",
      description: "Legal support for mergers, acquisitions, and complex business transactions.",
      services: [
        "Merger and acquisition legal due diligence",
        "Asset purchase and sale agreements",
        "Joint venture structuring and agreements",
        "Corporate restructuring and reorganization",
        "Foreign investment compliance documentation",
        "Cross-border transaction legal support"
      ]
    },
    {
      title: "Regulatory Compliance",
      description: "Ensure your business meets all Costa Rican regulatory requirements.",
      services: [
        "Corporate governance compliance (2024 requirements)",
        "Ultimate Beneficiary Owner declarations (April deadline)",
        "Annual corporate filings and documentation",
        "Banking and financial services regulation compliance",
        "Environmental law compliance for business operations",
        "Consumer protection law compliance"
      ]
    }
  ]

  const laborLawCompliance = [
    {
      requirement: "Employment Contracts",
      deadline: "Within 30 days of employment start",
      details: [
        "Written contracts mandatory (except 90-day agricultural work)",
        "Must be in Spanish or include Spanish translation",
        "Include job responsibilities, salary, hours, and termination procedures",
        "Proper employee vs. contractor classification required",
        "Compliance with 2024 minimum wage increases"
      ]
    },
    {
      requirement: "Working Hours & Overtime",
      deadline: "Ongoing compliance required",
      details: [
        "Maximum 48 hours per week standard",
        "Daytime work: Maximum 9.5 hours daily (Monday-Friday)",
        "Night shifts: Maximum 6 hours daily or 36 hours weekly",
        "Overtime compensation at 1.5x regular wage rate",
        "Strict record-keeping requirements for all hours worked"
      ]
    },
    {
      requirement: "Employee Benefits",
      deadline: "Various deadlines throughout year",
      details: [
        "Christmas bonus (aguinaldo) - one month salary if employed >1 month",
        "Vacation leave - proportional to service time",
        "Sick leave with social security coverage",
        "Four months maternity leave (2024 standard)",
        "CCSS social security registration and contributions"
      ]
    },
    {
      requirement: "Termination Procedures",
      deadline: "Specific notice periods required",
      details: [
        "Costa Rica does not follow At-Will Employment",
        "Justified termination reasons required by law",
        "1 month notice for employees with >3 years service",
        "Proportional notice for employees with <3 years service",
        "Severance pay calculations based on service length"
      ]
    }
  ]

  const intellectualPropertyServices = [
    {
      category: "Trademark Protection",
      description: "Comprehensive trademark registration and enforcement in Costa Rica",
      services: [
        "Trademark search and clearance analysis",
        "Costa Rica trademark registration (not Madrid System member)",
        "Well-known trademark recognition applications",
        "Trademark opposition proceedings (2-month window)",
        "Trademark renewal and maintenance (10-year terms)",
        "Brand enforcement and anti-counterfeiting measures"
      ],
      lawReference: "Trademark and Other Distinctive Signs Law 7978"
    },
    {
      category: "Copyright Protection",
      description: "Full copyright registration and enforcement services",
      services: [
        "Copyright registration for original works",
        "Literary and artistic works protection",
        "Music, film, and digital content copyright",
        "Software and technology copyright protection",
        "Copyright duration: Life + 70 years protection",
        "Copyright infringement enforcement actions"
      ],
      lawReference: "Copyright Law 6683"
    },
    {
      category: "Patent & Industrial Design",
      description: "Patent filing and industrial design protection services",
      services: [
        "Patent application filing (PCT member country)",
        "Utility model registrations (10-year protection)",
        "Industrial design protection applications",
        "Patent search and prior art analysis",
        "International patent filing coordination",
        "Patent prosecution and examination support"
      ],
      lawReference: "Patent Cooperation Treaty (PCT) compliance"
    }
  ]

  const legalConsultationPricing = [
    {
      name: "Initial Legal Consultation",
      price: "$200",
      period: "/hour",
      description: "Comprehensive legal assessment and advisory session",
      features: [
        "Business formation guidance",
        "Immigration law consultation",
        "Legal compliance review",
        "Risk assessment and mitigation strategies",
        "Written legal opinion and recommendations",
        "Follow-up questions via email for 7 days"
      ],
      popular: false,
      cta: "Schedule Consultation"
    },
    {
      name: "Business Formation Package",
      price: "$2,500",
      period: "complete",
      description: "Full business incorporation with legal compliance setup",
      features: [
        "Corporation or LLC formation",
        "Corporate documentation preparation",
        "Tax ID and permit applications",
        "Resident agent services (1 year included)",
        "Annual compliance calendar setup",
        "Initial employment law consultation",
        "Bank account opening assistance"
      ],
      popular: true,
      cta: "Start Business Formation"
    },
    {
      name: "Immigration Support Package",
      price: "$1,800",
      period: "per application",
      description: "Complete immigration application and documentation support",
      features: [
        "Visa category assessment and recommendation",
        "Complete application preparation and filing",
        "Document authentication and translation",
        "Immigration interview preparation",
        "Application tracking and follow-up",
        "Resident agent services if required",
        "Annual renewal reminders and support"
      ],
      popular: false,
      cta: "Start Immigration Process"
    }
  ]

  const commonLegalIssues = [
    {
      issue: "Business Formation Delays",
      description: "Incomplete documentation or incorrect procedures causing registration delays",
      solution: "We ensure all documentation is complete and properly filed with appropriate government agencies, reducing formation time from months to weeks.",
      prevention: "Proper planning and documentation preparation before starting the incorporation process."
    },
    {
      issue: "Work Permit Denials",
      description: "Immigration applications rejected due to insufficient documentation or incorrect category selection",
      solution: "Comprehensive application review, proper visa category selection, and complete documentation preparation to maximize approval chances.",
      prevention: "Early consultation to determine the most appropriate visa category and document requirements."
    },
    {
      issue: "Labor Law Violations",
      description: "Unintentional violations of Costa Rica's complex labor laws leading to fines and employee disputes",
      solution: "Complete labor law compliance audit, employee handbook creation, and ongoing compliance monitoring.",
      prevention: "Regular legal reviews and staff training on Costa Rican employment law requirements."
    },
    {
      issue: "Contract Disputes",
      description: "Poorly drafted contracts leading to business disputes and legal conflicts",
      solution: "Professional contract review, dispute mediation, and litigation support when necessary.",
      prevention: "All commercial contracts should be reviewed by qualified Costa Rican legal counsel before signing."
    },
    {
      issue: "Intellectual Property Infringement",
      description: "Unauthorized use of trademarks, copyrights, or patents affecting business operations",
      solution: "IP portfolio assessment, infringement investigation, and enforcement actions including civil litigation.",
      prevention: "Proactive IP registration and monitoring services to protect your business assets."
    },
    {
      issue: "Corporate Compliance Failures",
      description: "Missing annual filings, tax deadlines, or corporate governance requirements",
      solution: "Complete compliance audit, immediate filing of delinquent documents, and ongoing compliance calendar management.",
      prevention: "Automated compliance monitoring system with advance deadline notifications and document preparation."
    }
  ]

  const legalUpdates2024 = [
    {
      title: "Immigration Law Changes (Decree 10470)",
      effectiveDate: "May 7, 2024",
      summary: "Significant updates to immigration procedures and requirements",
      keyChanges: [
        "Foreign driving licenses now recognized",
        "Enhanced digital nomad visa benefits and tax exemptions",
        "Elimination of 180-day departure requirement for certain categories",
        "Streamlined residency application processes",
        "New minimum salary requirements for work permits"
      ]
    },
    {
      title: "Labor Law Updates",
      effectiveDate: "January 1, 2024",
      summary: "Minimum wage increases and employment protection enhancements",
      keyChanges: [
        "Minimum wage increase to CRC 403,461 for skilled workers",
        "Enhanced protection for whistleblowers and corruption complainants",
        "Rejection of 12-hour compressed workweek proposal",
        "Strengthened worker classification requirements",
        "Updated employer contribution rates to social security"
      ]
    },
    {
      title: "Corporate Governance Requirements",
      effectiveDate: "Ongoing 2024",
      summary: "Enhanced corporate compliance and reporting obligations",
      keyChanges: [
        "Ultimate Beneficiary Owner declarations due April 1-30 annually",
        "Mandatory General Shareholders Meetings by March 31",
        "Corporation tax due within first 30 days of January",
        "Enhanced board director responsibility requirements",
        "Stricter penalties for non-compliance (3-100 base salaries)"
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
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
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
                Get Legal Consultation
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="#pricing"
                className="inline-flex items-center border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
              >
                View Legal Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Business Formation Legal Requirements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Business Formation Legal Requirements</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the right business structure for your Costa Rica operations with expert legal guidance on compliance and regulatory requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {businessFormationRequirements.map((structure, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-blue-900 mb-3">{structure.title}</h3>
                <p className="text-gray-600 mb-6">{structure.description}</p>
                <ul className="space-y-3 mb-6">
                  {structure.details.map((detail, detailIndex) => (
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
                <p className="text-xs text-gray-500 italic">Source: {structure.source}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Immigration Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Immigration Services for Businesses</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Navigate Costa Rica's immigration system with expert support for business owners, employees, and their families. Updated for 2024 law changes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {immigrationServices.map((category, index) => (
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

      {/* Commercial Law Support */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Commercial Law Support</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive legal support for all your commercial transactions, contracts, and business operations in Costa Rica.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {commercialLawServices.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-blue-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.services.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <div className="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Labor Law Compliance */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Labor Law Compliance</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Stay compliant with Costa Rica's comprehensive labor laws. Updated requirements for 2024 including new minimum wage standards and employment protections.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {laborLawCompliance.map((compliance, index) => (
              <div key={index} className="bg-blue-800 rounded-xl p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">{compliance.requirement}</h3>
                  <div className="bg-yellow-500 text-blue-900 px-3 py-1 rounded-full text-sm font-semibold">
                    {compliance.deadline}
                  </div>
                </div>
                <ul className="space-y-3">
                  {compliance.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start">
                      <div className="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <svg className="w-3 h-3 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-blue-100">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intellectual Property Protection */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Intellectual Property Protection</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Protect your business assets with comprehensive intellectual property registration and enforcement services in Costa Rica.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {intellectualPropertyServices.map((category, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-blue-900 mb-3">{category.category}</h3>
                <p className="text-gray-600 mb-6">{category.description}</p>
                <ul className="space-y-3 mb-6">
                  {category.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="flex items-start">
                      <div className="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700 text-sm">{service}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-gray-500 italic">Legal basis: {category.lawReference}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Consultation Pricing */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Legal Consultation Pricing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transparent pricing for legal services. All consultations include expert analysis and actionable recommendations for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {legalConsultationPricing.map((plan, index) => (
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

      {/* Common Legal Issues */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Common Legal Issues for Businesses</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn about frequent legal challenges businesses face in Costa Rica and how our expert legal team can help resolve and prevent them.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {commonLegalIssues.map((issue, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-blue-900 mb-4">{issue.issue}</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Problem:</h4>
                    <p className="text-gray-600 text-sm">{issue.description}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Our Solution:</h4>
                    <p className="text-gray-600 text-sm">{issue.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Prevention:</h4>
                    <p className="text-gray-600 text-sm">{issue.prevention}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2024 Legal Updates */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">2024 Legal Updates & Changes</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay informed about the latest legal changes affecting businesses in Costa Rica. Our team monitors all regulatory updates to keep your business compliant.
            </p>
          </div>

          <div className="space-y-8">
            {legalUpdates2024.map((update, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-blue-900 mb-2">{update.title}</h3>
                    <p className="text-gray-600">{update.summary}</p>
                  </div>
                  <div className="bg-yellow-500 text-white px-4 py-2 rounded-lg text-sm font-semibold mt-4 lg:mt-0 self-start">
                    Effective: {update.effectiveDate}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Key Changes:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {update.keyChanges.map((change, changeIndex) => (
                      <li key={changeIndex} className="flex items-start">
                        <div className="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-700 text-sm">{change}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Official Sources */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-lg font-bold text-blue-900 mb-6">Official Legal Sources and References</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Government Agencies</h4>
              <ul className="space-y-1 text-gray-600">
                <li>• <a href="https://www.hacienda.go.cr/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-900 transition-colors">Ministry of Finance</a></li>
                <li>• <a href="https://www.mtss.go.cr/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-900 transition-colors">Ministry of Labor</a></li>
                <li>• <a href="https://www.registronacional.go.cr/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-900 transition-colors">National Registry</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Immigration</h4>
              <ul className="space-y-1 text-gray-600">
                <li>• <a href="https://www.migracion.go.cr/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-900 transition-colors">Immigration Department</a></li>
                <li>• <a href="https://www.ccss.sa.cr/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-900 transition-colors">Social Security (CCSS)</a></li>
                <li>• <a href="https://www.ins.cr/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-900 transition-colors">National Insurance (INS)</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Intellectual Property</h4>
              <ul className="space-y-1 text-gray-600">
                <li>• <a href="https://www.registronacional.go.cr/propiedad_intelectual/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-900 transition-colors">IP Registry</a></li>
                <li>• <a href="https://www.wipo.int/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-900 transition-colors">WIPO</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Investment Promotion</h4>
              <ul className="space-y-1 text-gray-600">
                <li>• <a href="https://www.cinde.org/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-900 transition-colors">CINDE</a></li>
                <li>• <a href="https://www.procomer.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-900 transition-colors">PROCOMER</a></li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-6">
            All legal information is current as of December 2024. Laws and regulations are subject to change. Please consult with qualified legal counsel for specific legal advice.
          </p>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Secure Your Business Legally?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Don't navigate Costa Rica's complex legal requirements alone. Our experienced legal team is ready to provide the comprehensive support your business needs to succeed while staying fully compliant.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/contact"
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Schedule Legal Consultation
            </Link>
            <Link
              href="tel:+50622901030"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
            >
              Call (506) 2290-1030
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-blue-100">
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Expert Legal Consultation
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              2024 Law Updates Included
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Full Compliance Support
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default LegalServicesPage