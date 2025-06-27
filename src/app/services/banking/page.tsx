import Temp from '@/components/layout/Layout'
import Temp from 'next/link'

export const metadata = {
  title: 'Bank Account Services | Business Banking Setup & Compliance | Pacific Business & Accounting Group',
  description: 'Expert assistance with Costa Rica business bank account opening, documentation, compliance, and banking relationships. Full support for corporate banking requirements and international transfers.',
}

const BankingServicesPage = () => {
  const serviceOverview = {
    title: "Comprehensive Bank Account Services",
    subtitle: "Expert Banking Solutions for Costa Rica Business Success",
    description: "Navigate Costa Rica's sophisticated banking system with confidence. Our experienced team provides comprehensive support for business bank account opening, regulatory compliance, international banking, and credit facilities to establish strong banking relationships for your business operations."
  }

  const costaRicaBankingSystem = {
    title: "Costa Rica Banking System Overview",
    description: "Costa Rica maintains a robust and regulated banking sector supervised by SUGEF (General Superintendency of Financial Entities) under CONASSIF. The system includes both state-owned and private banks, offering comprehensive services for business and international operations.",
    keyFeatures: [
      "Dual currency operations (USD and CRC) standard across major banks",
      "Full deposit insurance coverage for state-owned banks",
      "SUGEF regulatory oversight ensuring financial stability",
      "International banking capabilities with correspondent bank networks",
      "Advanced digital banking platforms and online services",
      "Comprehensive AML/CFT compliance framework (UIF reporting)"
    ],
    regulatory: "All banking operations are regulated under SUGEF supervision with strict compliance requirements including SUGEF 12-21 (AML/CFT) and SUGEF 8-24 (Banking Authorizations)"
  }

  const businessBankAccountProcess = [
    {
      step: 1,
      title: "Pre-Application Documentation Review",
      description: "Comprehensive review of corporate documentation and compliance requirements",
      details: [
        "Corporate structure analysis and documentation verification",
        "Cédula jurídica (corporate ID) confirmation and validation",
        "Ultimate Beneficiary Owner (UBO) documentation preparation",
        "AML/CFT compliance assessment and documentation",
        "Banking relationship strategy development",
        "Initial deposit amount planning and source documentation"
      ],
      timeframe: "3-5 business days"
    },
    {
      step: 2,
      title: "Bank Selection & Application Preparation",
      description: "Strategic bank selection based on business needs and application preparation",
      details: [
        "Bank selection based on business requirements and services needed",
        "Complete application package preparation and review",
        "Document authentication and translation services",
        "Banking officer introduction and relationship establishment",
        "Initial meeting coordination and scheduling",
        "Pre-application compliance verification with bank requirements"
      ],
      timeframe: "5-7 business days"
    },
    {
      step: 3,
      title: "Account Opening & Activation",
      description: "Final account opening process with bank compliance verification",
      details: [
        "In-person account opening meeting facilitation",
        "Final documentation submission and verification",
        "Initial deposit processing and account funding",
        "Online banking setup and digital access configuration",
        "Debit card and check book ordering",
        "Account activation confirmation and testing"
      ],
      timeframe: "10-15 business days"
    },
    {
      step: 4,
      title: "Banking Relationship Management Setup",
      description: "Ongoing banking relationship management and compliance monitoring",
      details: [
        "Banking compliance calendar setup and monitoring",
        "Regular banking relationship review meetings",
        "Annual AML/CFT compliance updates and filings",
        "Banking service optimization and expansion as needed",
        "International banking services activation",
        "Credit facility pre-qualification and application support"
      ],
      timeframe: "Ongoing support"
    }
  ]

  const documentationRequirements = [
    {
      businessType: "Sociedad Anónima (S.A.) Corporation",
      description: "Most common business structure for foreign investment",
      requiredDocuments: [
        "Cédula jurídica (corporate tax ID) certified copy",
        "Articles of incorporation and corporate bylaws",
        "Corporate book (libro de actas) with board resolutions",
        "Valid identification of all board directors and shareholders",
        "Ultimate Beneficiary Owner (UBO) declarations (required annually)",
        "Proof of registered office address and operations",
        "Financial projections and business plan documentation",
        "Source of funds documentation for initial deposits"
      ],
      additionalRequirements: [
        "Board resolution authorizing bank account opening",
        "Designated banking officer appointment documentation",
        "Annual shareholders meeting minutes (within 3 months of fiscal year-end)",
        "Current fiscal obligations certificate from Hacienda"
      ]
    },
    {
      businessType: "Sociedad de Responsabilidad Limitada (S.R.L.)",
      description: "Limited liability company structure for smaller operations",
      requiredDocuments: [
        "Cédula jurídica (corporate tax ID) certified copy",
        "Operating agreement and company formation documents",
        "Member identification and participation certificates",
        "Ultimate Beneficiary Owner (UBO) declarations for all members",
        "Proof of business address and operational activities",
        "Financial statements or projections for business operations",
        "Source of funds documentation for account funding",
        "Member consent for banking operations and signatories"
      ],
      additionalRequirements: [
        "All member consent for account opening (required by law)",
        "Designated member appointment for banking operations",
        "Current tax compliance certificate from Ministerio de Hacienda",
        "Municipal business license and operational permits"
      ]
    },
    {
      businessType: "Foreign Corporation Branch",
      description: "Branch operations of foreign corporations",
      requiredDocuments: [
        "Branch registration certificate and cédula jurídica",
        "Parent company articles of incorporation (apostilled)",
        "Board resolution authorizing Costa Rica branch operations",
        "Branch manager identification and appointment documentation",
        "Ultimate Beneficiary Owner declarations for parent company",
        "Parent company financial statements (last 2 years)",
        "Branch operational plan and financial projections",
        "Proof of initial capital investment and funding source"
      ],
      additionalRequirements: [
        "Parent company good standing certificate (apostilled)",
        "Branch manager residency status documentation",
        "Tax treaty benefits documentation if applicable",
        "Correspondent banking arrangements if required"
      ]
    }
  ]

  const majorBanks = [
    {
      name: "Banco de Costa Rica (BCR)",
      type: "State-Owned",
      description: "Leading state-owned commercial bank with comprehensive business services",
      services: [
        "Multi-currency accounts (USD, CRC, EUR) with full deposit insurance",
        "International wire transfers and correspondent banking network",
        "Business credit lines and term loans up to $5 million USD",
        "Trade finance and letters of credit services",
        "Advanced digital banking platform with business features",
        "Payroll processing and employee banking services"
      ],
      advantages: [
        "Full government deposit insurance guarantee",
        "Extensive ATM and branch network nationwide",
        "Competitive fees and non-profit operational structure",
        "Strong international banking relationships",
        "Preferred lender for government contractors and suppliers"
      ],
      businessFocus: "Ideal for established businesses requiring comprehensive banking services with maximum security"
    },
    {
      name: "Banco Nacional de Costa Rica (BNCR)",
      type: "State-Owned",
      description: "Largest commercial bank in Costa Rica and second largest in Central America",
      services: [
        "Complete business banking suite with dual currency operations",
        "International trade finance and export/import services",
        "Business loans and credit facilities up to $10 million USD",
        "Cash management and treasury services for corporations",
        "Investment services through BN-Securities subsidiary",
        "Insurance services through BN-Vital pension fund operations"
      ],
      advantages: [
        "Largest branch and ATM network in Central America",
        "Full-service financial group with insurance and investment arms",
        "Government-backed security with deposit insurance",
        "Specialized business banking officers",
        "Strong relationships with international correspondent banks"
      ],
      businessFocus: "Best choice for large corporations and businesses requiring full financial services"
    },
    {
      name: "BAC Credomatic",
      type: "Private",
      description: "Leading private bank recognized for digital innovation and customer service",
      services: [
        "Premium business banking with personalized service",
        "Advanced digital banking and mobile applications",
        "Commercial lending and equipment financing",
        "International banking and foreign exchange services",
        "Cash management and automated clearing house (ACH) services",
        "Credit card processing and merchant services"
      ],
      advantages: [
        "Superior customer service with English-speaking staff",
        "Shorter wait times and premium banking experience",
        "Advanced technology and digital banking capabilities",
        "Flexible lending criteria and faster approval processes",
        "Regional presence throughout Central America"
      ],
      businessFocus: "Preferred by international businesses and companies requiring premium service"
    }
  ]

  const internationalBankingServices = [
    {
      service: "Wire Transfers & International Payments",
      description: "Comprehensive international transfer services with competitive rates",
      features: [
        "SWIFT network access for worldwide transfers",
        "Same-day processing for urgent international payments",
        "Multi-currency transfer capabilities (USD, EUR, GBP, JPY)",
        "Competitive exchange rates and transparent fee structure",
        "Online banking integration for transfer initiation",
        "Beneficiary management and recurring payment setup"
      ],
      compliance: "All transfers subject to UIF reporting requirements for amounts exceeding $10,000 USD monthly"
    },
    {
      service: "Foreign Exchange Services",
      description: "Professional foreign exchange services for business operations",
      features: [
        "Spot foreign exchange transactions at competitive rates",
        "Forward contracts for exchange rate risk management",
        "Multi-currency account management and optimization",
        "Real-time exchange rate monitoring and alerts",
        "Bulk currency exchange for large transactions",
        "Currency hedging strategies for international businesses"
      ],
      compliance: "FX transactions over $10,000 USD require enhanced due diligence documentation"
    },
    {
      service: "Trade Finance & Letters of Credit",
      description: "Complete trade finance solutions for import/export operations",
      features: [
        "Import and export letters of credit issuance and confirmation",
        "Documentary collections and trade document processing",
        "Standby letters of credit for contract performance guarantees",
        "Trade finance lines of credit and working capital solutions",
        "Export credit insurance and risk mitigation products",
        "Supply chain finance and vendor financing programs"
      ],
      compliance: "Trade finance subject to enhanced KYC requirements and transaction monitoring"
    }
  ]

  const businessCreditFacilities = [
    {
      facilityType: "Business Term Loans",
      description: "Fixed-term financing for business expansion and capital investments",
      details: {
        amounts: "From $25,000 to $5,000,000 USD",
        terms: "1 to 10 years depending on purpose and collateral",
        rates: "Prime + 2.5% to 8.5% depending on creditworthiness",
        collateral: "Real estate, equipment, or business assets"
      },
      requirements: [
        "Minimum 2 years business operation history",
        "Audited financial statements for last 2 years",
        "Business plan and cash flow projections",
        "Personal guarantees from major shareholders (>25%)",
        "Collateral valuation and insurance requirements",
        "Debt service coverage ratio minimum 1.25x"
      ]
    },
    {
      facilityType: "Lines of Credit & Working Capital",
      description: "Flexible credit facilities for operational cash flow management",
      details: {
        amounts: "From $10,000 to $2,000,000 USD",
        terms: "12-month renewable facilities",
        rates: "Prime + 1.5% to 6.5% on outstanding balances",
        collateral: "Accounts receivable, inventory, or cash collateral"
      },
      requirements: [
        "Strong cash flow and accounts receivable management",
        "Monthly financial reporting and covenant compliance",
        "Annual facility renewal and credit review process",
        "Minimum annual sales of $250,000 USD",
        "Current ratio minimum 1.5x and working capital adequacy",
        "Professional management team and operational controls"
      ]
    },
    {
      facilityType: "Equipment & Vehicle Financing",
      description: "Specialized financing for business equipment and vehicle purchases",
      details: {
        amounts: "From $15,000 to $1,500,000 USD",
        terms: "2 to 7 years based on asset useful life",
        rates: "Prime + 2.0% to 7.0% depending on asset type",
        collateral: "Financed equipment serves as primary collateral"
      },
      requirements: [
        "Equipment appraisal and useful life assessment",
        "Vendor quotes and equipment specifications",
        "Business justification and ROI analysis",
        "Comprehensive insurance coverage on financed assets",
        "Down payment typically 20-30% of purchase price",
        "Strong operational cash flow to service debt"
      ]
    }
  ]

  const bankingCompliance = [
    {
      requirement: "Anti-Money Laundering (AML) Compliance",
      authority: "UIF (Unidad de Inteligencia Financiera) under ICD",
      obligations: [
        "Monthly reporting of cash transactions exceeding $10,000 USD",
        "Suspicious transaction reporting (STR) within 24 hours",
        "Customer due diligence (CDD) and enhanced due diligence (EDD)",
        "Ongoing transaction monitoring and risk assessment",
        "AML compliance officer appointment and training",
        "Annual AML policy review and update requirements"
      ],
      penalties: "Non-compliance fines from $5,000 to $500,000 USD plus potential criminal charges"
    },
    {
      requirement: "Ultimate Beneficiary Owner (UBO) Reporting",
      authority: "SUGEF under CONASSIF regulatory framework",
      obligations: [
        "Annual UBO declarations due April 1-30 each year",
        "Identification of all persons owning >25% beneficial interest",
        "Corporate structure documentation and ownership charts",
        "Changes in ownership reported within 30 days",
        "Enhanced documentation for complex ownership structures",
        "Ongoing monitoring of ownership changes and updates"
      ],
      penalties: "Base salary fines from 3-100 times minimum wage for non-compliance"
    },
    {
      requirement: "FATCA and CRS Reporting",
      authority: "Ministerio de Hacienda and international tax authorities",
      obligations: [
        "Foreign Account Tax Compliance Act (FATCA) documentation",
        "Common Reporting Standard (CRS) information exchange",
        "US person identification and reporting requirements",
        "Annual reporting to Costa Rican and foreign tax authorities",
        "Enhanced documentation for high-value accounts (>$250,000)",
        "Ongoing monitoring of account holder tax residency status"
      ],
      penalties: "Account closure and penalties up to 30% of account balance for non-compliance"
    }
  ]

  const bankingServicesPricing = [
    {
      name: "Basic Banking Setup",
      price: "$1,200",
      period: "one-time",
      description: "Essential bank account opening assistance for straightforward business needs",
      features: [
        "Corporate documentation review and preparation",
        "Bank selection consultation and recommendation",
        "Account opening meeting coordination and attendance",
        "Initial compliance setup and documentation",
        "Online banking activation and setup",
        "Basic banking relationship establishment",
        "30-day follow-up support for banking issues"
      ],
      popular: false,
      cta: "Start Banking Setup"
    },
    {
      name: "Comprehensive Banking Package",
      price: "$2,500",
      period: "complete",
      description: "Full-service banking setup with compliance and relationship management",
      features: [
        "Complete documentation preparation and authentication",
        "Multi-bank evaluation and optimal selection process",
        "UBO documentation and compliance filing",
        "International banking services activation",
        "Credit facility pre-qualification and consultation",
        "Ongoing banking compliance monitoring (first year)",
        "Quarterly banking relationship reviews",
        "Priority support for banking issues and changes"
      ],
      popular: true,
      cta: "Get Full Banking Support"
    },
    {
      name: "Enterprise Banking Solution",
      price: "$4,500",
      period: "complete",
      description: "Premium banking services for complex business structures and requirements",
      features: [
        "Multi-entity banking structure planning and setup",
        "International banking network establishment",
        "Trade finance and credit facility arrangement",
        "Comprehensive compliance program implementation",
        "Banking relationship optimization and management",
        "Annual compliance monitoring and reporting",
        "Dedicated banking relationship manager assignment",
        "24/7 priority support for urgent banking matters"
      ],
      popular: false,
      cta: "Contact for Enterprise Banking"
    }
  ]

  const commonBankingChallenges = [
    {
      challenge: "Documentation Incomplete or Incorrect",
      description: "Missing or improperly prepared corporate documentation causing account opening delays",
      solution: "Comprehensive documentation review and preparation service ensuring all requirements are met before bank submission, reducing approval time from months to weeks.",
      prevention: "Pre-submission documentation audit and compliance verification with bank-specific requirements and SUGEF regulations."
    },
    {
      challenge: "UBO Compliance Failures",
      description: "Inadequate Ultimate Beneficiary Owner documentation leading to account freezes or closure",
      solution: "Complete UBO documentation preparation, filing, and ongoing compliance monitoring to ensure continuous account access and regulatory compliance.",
      prevention: "Annual UBO review and update service with advance notifications for filing deadlines and requirements changes."
    },
    {
      challenge: "AML/CFT Compliance Violations",
      description: "Inadequate anti-money laundering procedures resulting in UIF reporting violations and penalties",
      solution: "Implementation of comprehensive AML compliance program including transaction monitoring, reporting procedures, and staff training.",
      prevention: "Ongoing AML compliance monitoring with automated reporting systems and regular policy updates for regulatory changes."
    },
    {
      challenge: "International Transfer Restrictions",
      description: "Blocked international transfers due to insufficient documentation or compliance issues",
      solution: "Enhanced documentation preparation for international transfers including source of funds verification and beneficiary compliance checks.",
      prevention: "Pre-transfer compliance verification and maintenance of proper documentation for all international banking activities."
    },
    {
      challenge: "Credit Facility Denials",
      description: "Business loan applications rejected due to inadequate financial documentation or structure",
      solution: "Comprehensive credit preparation service including financial statement optimization, business plan development, and bank presentation.",
      prevention: "Regular financial health assessments and banking relationship management to maintain optimal credit standing."
    },
    {
      challenge: "Banking Relationship Deterioration",
      description: "Loss of banking privileges due to poor account management or compliance issues",
      solution: "Banking relationship rehabilitation service including compliance remediation and account restructuring to restore full banking privileges.",
      prevention: "Ongoing banking relationship management with regular compliance reviews and proactive issue resolution."
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
                  <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"/>
                  <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd"/>
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
                Get Banking Consultation
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="#pricing"
                className="inline-flex items-center border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
              >
                View Banking Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Costa Rica Banking System Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">{costaRicaBankingSystem.title}</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              {costaRicaBankingSystem.description}
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">Key Banking System Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {costaRicaBankingSystem.keyFeatures.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Regulatory Framework:</strong> {costaRicaBankingSystem.regulatory}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bank Account Opening Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Bank Account Opening Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive 4-step process ensures efficient bank account opening with full regulatory compliance and optimal banking relationship establishment.
            </p>
          </div>

          <div className="space-y-8">
            {businessBankAccountProcess.map((step, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                    <span className="text-white font-bold text-lg">{step.step}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <h3 className="text-2xl font-bold text-blue-900 mb-2 lg:mb-0">{step.title}</h3>
                      <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg text-sm font-semibold">
                        {step.timeframe}
                      </div>
                    </div>
                    <p className="text-gray-600 mb-6">{step.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-start">
                          <div className="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                            <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-gray-700 text-sm">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Requirements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Documentation Requirements by Business Type</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specific documentation requirements vary by business structure. Our comprehensive preparation ensures all requirements are met for efficient account opening.
            </p>
          </div>

          <div className="space-y-8">
            {documentationRequirements.map((businessType, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-blue-900 mb-3">{businessType.businessType}</h3>
                <p className="text-gray-600 mb-6">{businessType.description}</p>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Required Documents</h4>
                    <ul className="space-y-3">
                      {businessType.requiredDocuments.map((doc, docIndex) => (
                        <li key={docIndex} className="flex items-start">
                          <div className="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-gray-700 text-sm">{doc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Additional Requirements</h4>
                    <ul className="space-y-3">
                      {businessType.additionalRequirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-start">
                          <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-gray-700 text-sm">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Major Banks Overview */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Major Costa Rican Banks for Business</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Costa Rica's banking sector offers both state-owned and private options, each with distinct advantages for business banking and international operations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {majorBanks.map((bank, index) => (
              <div key={index} className="bg-blue-800 rounded-xl p-8">
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-2">{bank.name}</h3>
                  <div className="inline-block bg-yellow-500 text-blue-900 px-3 py-1 rounded-full text-sm font-semibold">
                    {bank.type}
                  </div>
                </div>
                
                <p className="text-blue-100 mb-6">{bank.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-3">Services Offered:</h4>
                  <ul className="space-y-2">
                    {bank.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="flex items-start">
                        <div className="w-4 h-4 bg-yellow-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          <svg className="w-2 h-2 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-blue-100 text-sm">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-3">Key Advantages:</h4>
                  <ul className="space-y-2">
                    {bank.advantages.map((advantage, advantageIndex) => (
                      <li key={advantageIndex} className="flex items-start">
                        <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          <svg className="w-2 h-2 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-blue-100 text-sm">{advantage}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-blue-700 p-4 rounded-lg">
                  <p className="text-blue-100 text-sm">
                    <strong>Best For:</strong> {bank.businessFocus}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* International Banking Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">International Banking Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive international banking solutions for global business operations with full compliance support and competitive rates.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {internationalBankingServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-blue-900 mb-4">{service.service}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Features & Capabilities:</h4>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-blue-800 text-sm">
                    <strong>Compliance Note:</strong> {service.compliance}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Credit Facilities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Business Credit Facilities & Loans</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive credit solutions for business growth and working capital needs with competitive rates and flexible terms.
            </p>
          </div>

          <div className="space-y-8">
            {businessCreditFacilities.map((facility, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">{facility.facilityType}</h3>
                <p className="text-gray-600 mb-6">{facility.description}</p>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Facility Details</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                        <span className="text-gray-600">Amounts:</span>
                        <span className="font-semibold text-blue-900">{facility.details.amounts}</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                        <span className="text-gray-600">Terms:</span>
                        <span className="font-semibold text-blue-900">{facility.details.terms}</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                        <span className="text-gray-600">Rates:</span>
                        <span className="font-semibold text-blue-900">{facility.details.rates}</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                        <span className="text-gray-600">Collateral:</span>
                        <span className="font-semibold text-blue-900">{facility.details.collateral}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Requirements & Qualifications</h4>
                    <ul className="space-y-3">
                      {facility.requirements.map((requirement, reqIndex) => (
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Banking Compliance */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Banking Compliance & Reporting</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive compliance support for all Costa Rican banking regulations including AML, UBO reporting, and international tax compliance.
            </p>
          </div>

          <div className="space-y-8">
            {bankingCompliance.map((compliance, index) => (
              <div key={index} className="bg-blue-800 rounded-xl p-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <h3 className="text-2xl font-bold mb-2 lg:mb-0">{compliance.requirement}</h3>
                  <div className="bg-yellow-500 text-blue-900 px-4 py-2 rounded-lg text-sm font-semibold">
                    {compliance.authority}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-white mb-4">Compliance Obligations:</h4>
                    <ul className="space-y-3">
                      {compliance.obligations.map((obligation, obligationIndex) => (
                        <li key={obligationIndex} className="flex items-start">
                          <div className="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                            <svg className="w-3 h-3 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-blue-100 text-sm">{obligation}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <div className="bg-red-600 p-6 rounded-lg">
                      <h4 className="font-semibold text-white mb-3">Non-Compliance Penalties:</h4>
                      <p className="text-red-100 text-sm">{compliance.penalties}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Banking Services Pricing */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Banking Services Pricing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transparent pricing for comprehensive banking services. All packages include expert guidance and regulatory compliance support.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {bankingServicesPricing.map((plan, index) => (
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

      {/* Common Banking Challenges */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Common Banking Challenges & Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn about frequent banking challenges businesses face in Costa Rica and how our expert team prevents and resolves these issues.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {commonBankingChallenges.map((issue, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-blue-900 mb-4">{issue.challenge}</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
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

      {/* Official Sources */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-lg font-bold text-blue-900 mb-6">Official Banking Sources and References</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Banking Regulation</h4>
              <ul className="space-y-1 text-gray-600">
                <li>• <a href="https://www.sugef.fi.cr/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-900 transition-colors">SUGEF - Financial Supervisor</a></li>
                <li>• <a href="https://www.conassif.fi.cr/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-900 transition-colors">CONASSIF - Financial Council</a></li>
                <li>• <a href="https://www.bccr.fi.cr/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-900 transition-colors">Central Bank of Costa Rica</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Major Banks</h4>
              <ul className="space-y-1 text-gray-600">
                <li>• <a href="https://www.bancobcr.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-900 transition-colors">Banco de Costa Rica</a></li>
                <li>• <a href="https://www.bncr.fi.cr/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-900 transition-colors">Banco Nacional</a></li>
                <li>• <a href="https://www.baccredomatic.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-900 transition-colors">BAC Credomatic</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">AML/CFT Compliance</h4>
              <ul className="space-y-1 text-gray-600">
                <li>• <a href="https://www.icd.go.cr/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-900 transition-colors">ICD - Drug Institute</a></li>
                <li>• <a href="https://www.fatf-gafi.org/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-900 transition-colors">FATF-GAFI</a></li>
                <li>• <a href="https://www.gafilat.org/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-900 transition-colors">GAFILAT</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Tax & Corporate</h4>
              <ul className="space-y-1 text-gray-600">
                <li>• <a href="https://www.hacienda.go.cr/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-900 transition-colors">Ministry of Finance</a></li>
                <li>• <a href="https://www.registronacional.go.cr/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-900 transition-colors">National Registry</a></li>
                <li>• <a href="https://www.procomer.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-900 transition-colors">PROCOMER</a></li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-6">
            All banking information is current as of December 2024. Banking regulations and requirements are subject to change. Please consult with qualified banking and legal counsel for specific banking advice.
          </p>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Establish Your Costa Rica Banking Relationship?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Don't navigate Costa Rica's banking requirements alone. Our experienced banking specialists are ready to provide comprehensive support for account opening, compliance, and ongoing banking relationship management.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/contact"
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Schedule Banking Consultation
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
              Expert Banking Guidance
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Full Compliance Support
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Ongoing Relationship Management
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default BankingServicesPage