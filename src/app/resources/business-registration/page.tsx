import Layout from '@/components/layout/Layout'
import Link from 'next/link'

export const metadata = {
  title: 'Costa Rica Business Registration Guide 2025 | Pacific Business & Accounting Group',
  description: 'Complete step-by-step guide to registering your business in Costa Rica 2025. SA vs SRL comparison, costs, timeline, required documents, and common pitfalls to avoid.',
  keywords: 'Costa Rica business registration 2025, SA vs SRL, company formation Costa Rica, business structure comparison, digital signature certificate, UBO declaration, business registration costs timeline',
}

const BusinessRegistrationGuidePage = () => {
  const businessStructureComparison = [
    {
      structure: 'Sociedad Anónima (SA)',
      type: 'Corporation',
      minimumCapital: '₡25,000 (25% paid up required)',
      shareholders: 'Minimum 2 shareholders',
      liability: 'Limited to capital contribution',
      management: 'Board of Directors required',
      flexibility: 'More formal structure',
      bestFor: 'Larger businesses, foreign investment, public offerings',
      advantages: [
        'Professional image and credibility',
        'Easier to transfer ownership',
        'Can issue different share classes',
        'Better for seeking investment',
        'More attractive to international partners'
      ],
      disadvantages: [
        'Higher setup costs',
        'More complex administration',
        'Required capital contribution',
        'Board meetings required',
        'More regulatory requirements'
      ]
    },
    {
      structure: 'Sociedad de Responsabilidad Limitada (SRL)',
      type: 'Limited Liability Company',
      minimumCapital: 'No minimum capital requirement',
      shareholders: 'Minimum 2 partners (socios)',
      liability: 'Limited to capital contribution',
      management: 'Manager appointed by partners',
      flexibility: 'More flexible management',
      bestFor: 'Small to medium businesses, family businesses, simple operations',
      advantages: [
        'No minimum capital requirement',
        'Lower setup and maintenance costs',
        'Simpler administration',
        'Flexible profit distribution',
        'Less formal requirements'
      ],
      disadvantages: [
        'More difficult to transfer ownership',
        'Limited growth potential',
        'Less attractive to investors',
        'Cannot issue shares publicly',
        'May have credibility limitations'
      ]
    }
  ]

  const registrationSteps = [
    {
      step: 1,
      title: 'Choose and Reserve Company Name',
      duration: '1-2 days',
      description: 'Select and verify availability of your company name with the National Registry',
      requirements: [
        'Check name availability online at Registro Nacional website',
        'Ensure name complies with Costa Rican naming conventions',
        'Reserve name for 30 days (₡2,000 fee)',
        'Name must include SA or SRL designation'
      ],
      tips: [
        'Have 2-3 backup names ready',
        'Avoid names too similar to existing companies',
        'Consider trademark implications',
        'Name should reflect your business activity'
      ],
      commonMistakes: [
        'Not checking trademark conflicts',
        'Using prohibited words without authorization',
        'Forgetting to include legal designation (SA/SRL)'
      ]
    },
    {
      step: 2,
      title: 'Obtain Digital Signature Certificate',
      duration: '1-2 days',
      description: 'Get digital signature certificate for company representatives',
      requirements: [
        'Visit authorized Certification Authority (Firma Digital)',
        'Bring original passport or cédula',
        'Complete identity verification process',
        'Pay certification fee (~$50)',
        'Download digital certificate to secure device'
      ],
      tips: [
        'All company directors/managers need digital signatures',
        'Keep backup copies of certificates',
        'Note expiration dates (typically 2 years)',
        'Use strong passwords for certificate protection'
      ],
      commonMistakes: [
        'Not getting certificates for all required parties',
        'Losing certificate passwords',
        'Not backing up certificates properly'
      ]
    },
    {
      step: 3,
      title: 'Prepare Corporate Documents',
      duration: '2-3 days',
      description: 'Draft and prepare all required corporate formation documents',
      requirements: [
        'Articles of Incorporation (constitutional documents)',
        'Corporate bylaws defining company operations',
        'Shareholder agreements (if applicable)',
        'Manager/Director appointment documents',
        'Share capital structure documentation'
      ],
      tips: [
        'Use experienced lawyer for document preparation',
        'Include clear dispute resolution mechanisms',
        'Define management roles and responsibilities',
        'Consider future business needs in structure'
      ],
      commonMistakes: [
        'Generic templates without customization',
        'Unclear management structure',
        'Missing important operational clauses',
        'Not considering tax implications'
      ]
    },
    {
      step: 4,
      title: 'File with National Registry',
      duration: '3-5 business days',
      description: 'Submit incorporation documents to the Registro Nacional',
      requirements: [
        'Completed incorporation documents',
        'Digital signatures of all parties',
        'Payment of registration fees (₡10,000-₡15,000)',
        'Attorney authorization for filing',
        'Proof of name reservation'
      ],
      tips: [
        'Double-check all document signatures',
        'Ensure all fees are paid correctly',
        'Track application status online',
        'Have lawyer review final documents'
      ],
      commonMistakes: [
        'Missing required signatures',
        'Incorrect fee payments',
        'Incomplete documentation',
        'Not following up on application status'
      ]
    },
    {
      step: 5,
      title: 'Obtain Tax Identification',
      duration: '1-2 days',
      description: 'Register with tax authorities and obtain tax ID number',
      requirements: [
        'Company registration certificate',
        'Visit DGT (tax authority) office or online',
        'Complete tax registration forms',
        'Declare business activity codes',
        'Appoint tax representative if needed'
      ],
      tips: [
        'Choose correct tax activity codes',
        'Understand your tax obligations from start',
        'Register for VAT if applicable',
        'Set up proper accounting system'
      ],
      commonMistakes: [
        'Incorrect activity code selection',
        'Not understanding tax obligations',
        'Delaying VAT registration when required'
      ]
    },
    {
      step: 6,
      title: 'Complete UBO Declaration',
      duration: '1 day',
      description: 'File Ultimate Beneficial Owner declaration for ownership transparency',
      requirements: [
        'Identify all individuals with 15%+ ownership or control',
        'Complete UBO forms with personal information',
        'Provide identification documents for UBOs',
        'File electronically with supporting documents',
        'Pay filing fee (₡5,000-₡10,000)'
      ],
      tips: [
        'Include all beneficial owners, even if indirect',
        'Update whenever ownership changes',
        'Keep UBO information current and accurate',
        'Understand penalties for non-compliance'
      ],
      commonMistakes: [
        'Not identifying all beneficial owners',
        'Failing to update when ownership changes',
        'Missing filing deadlines',
        'Incomplete beneficial ownership disclosure'
      ]
    },
    {
      step: 7,
      title: 'Obtain Business Permits',
      duration: '5-15 days (varies by industry)',
      description: 'Apply for industry-specific licenses and permits',
      requirements: [
        'Municipal business license (patente)',
        'Health permits (if applicable)',
        'Environmental permits (if required)',
        'Professional licenses (for regulated activities)',
        'Fire department approval (for physical locations)'
      ],
      tips: [
        'Research all required permits for your industry',
        'Apply early as some permits take weeks',
        'Ensure compliance with zoning regulations',
        'Maintain all permits current'
      ],
      commonMistakes: [
        'Operating without required permits',
        'Not renewing permits on time',
        'Missing industry-specific requirements'
      ]
    },
    {
      step: 8,
      title: 'Open Corporate Bank Account',
      duration: '1-3 days',
      description: 'Open business bank account for company operations',
      requirements: [
        'Company registration certificate',
        'Tax identification documents',
        'Corporate resolution for bank account opening',
        'Identification of authorized signatories',
        'Initial deposit (varies by bank)'
      ],
      tips: [
        'Compare different banks and services',
        'Understand account fees and requirements',
        'Set up online banking and payment systems',
        'Consider international banking needs'
      ],
      commonMistakes: [
        'Not shopping around for best banking terms',
        'Insufficient authorized signatories',
        'Not understanding banking fees'
      ]
    }
  ]

  const requiredDocuments = [
    {
      category: 'Identity Documents',
      documents: [
        'Passport copies for all shareholders/directors (notarized)',
        'Apostilled birth certificates',
        'Criminal background checks (apostilled)',
        'Proof of address for all parties',
        'Marriage certificates (if applicable, apostilled)'
      ]
    },
    {
      category: 'Corporate Documents',
      documents: [
        'Articles of Incorporation',
        'Corporate bylaws',
        'Share certificate templates',
        'Corporate resolution templates',
        'Power of attorney (if using representatives)'
      ]
    },
    {
      category: 'Financial Documents',
      documents: [
        'Bank reference letters for shareholders',
        'Proof of capital contribution (if applicable)',
        'Source of funds documentation',
        'Financial statements (for existing businesses)',
        'Investment justification letter'
      ]
    },
    {
      category: 'Legal Documents',
      documents: [
        'Attorney authorization for company formation',
        'Legal representation agreements',
        'Compliance declarations',
        'Corporate compliance certificates',
        'Digital signature certificates'
      ]
    }
  ]

  const costBreakdown = [
    {
      category: 'Government Fees',
      description: 'Mandatory fees paid to Costa Rican authorities',
      items: [
        { item: 'Name reservation', cost: '₡2,000', required: true },
        { item: 'National Registry filing', cost: '₡10,000 - ₡15,000', required: true },
        { item: 'UBO declaration filing', cost: '₡5,000 - ₡10,000', required: true },
        { item: 'Tax registration', cost: 'Free', required: true },
        { item: 'Municipal business license', cost: '₡50,000 - ₡200,000', required: true }
      ],
      total: '₡67,000 - ₡227,000',
      note: 'Varies by company type and municipality'
    },
    {
      category: 'Professional Services',
      description: 'Legal and administrative services for company formation',
      items: [
        { item: 'Attorney fees for incorporation', cost: '$800 - $1,200', required: true },
        { item: 'Document preparation and review', cost: '$200 - $400', required: true },
        { item: 'Digital signature certificates', cost: '$50 per person', required: true },
        { item: 'Ongoing legal representation', cost: '$100 - $200/month', required: false },
        { item: 'Accounting setup and consultation', cost: '$300 - $500', required: false }
      ],
      total: '$1,050 - $2,350',
      note: 'Costs vary by complexity and service provider'
    },
    {
      category: 'Additional Costs',
      description: 'Optional but recommended expenses',
      items: [
        { item: 'Apostille and document authentication', cost: '$50 - $100 per document', required: false },
        { item: 'Translation services', cost: '$20 - $30 per page', required: false },
        { item: 'Corporate bank account opening', cost: '$100 - $500', required: false },
        { item: 'Business address/virtual office', cost: '$50 - $200/month', required: false },
        { item: 'Industry-specific permits', cost: '$100 - $1,000', required: false }
      ],
      total: '$320 - $1,830',
      note: 'Depends on specific business needs'
    }
  ]

  const timeline = [
    { phase: 'Preparation Phase', duration: '1-2 weeks', description: 'Document gathering, name selection, professional consultation' },
    { phase: 'Registration Phase', duration: '2-3 weeks', description: 'Filing incorporation documents, obtaining approvals' },
    { phase: 'Completion Phase', duration: '1-2 weeks', description: 'Tax registration, permits, bank account opening' },
    { phase: 'Total Timeline', duration: '4-7 weeks', description: 'Complete business registration process' }
  ]

  const commonPitfalls = [
    {
      pitfall: 'Inadequate Document Preparation',
      description: 'Rushing through document preparation without proper legal review',
      consequences: ['Registration delays', 'Additional legal costs', 'Compliance issues'],
      solution: 'Work with experienced Costa Rican attorney from the beginning'
    },
    {
      pitfall: 'Incorrect Business Structure Choice',
      description: 'Choosing SA vs SRL without understanding implications',
      consequences: ['Higher ongoing costs', 'Tax inefficiency', 'Operational limitations'],
      solution: 'Analyze business needs and consult with professionals before deciding'
    },
    {
      pitfall: 'Incomplete UBO Disclosure',
      description: 'Failing to properly identify and declare all beneficial owners',
      consequences: ['Regulatory penalties', 'Banking difficulties', 'Legal complications'],
      solution: 'Thoroughly analyze ownership structure and get professional help'
    },
    {
      pitfall: 'Missing Required Permits',
      description: 'Starting operations without obtaining necessary industry permits',
      consequences: ['Business shutdown', 'Fines and penalties', 'Legal liability'],
      solution: 'Research all permit requirements before starting operations'
    },
    {
      pitfall: 'Poor Ongoing Compliance Planning',
      description: 'Not setting up systems for ongoing legal and tax compliance',
      consequences: ['Accumulated penalties', 'Loss of good standing', 'Operational disruption'],
      solution: 'Establish compliance calendar and professional support systems'
    },
    {
      pitfall: 'Inadequate Capitalization',
      description: 'Not properly funding the business for operations and compliance',
      consequences: ['Cash flow problems', 'Inability to meet obligations', 'Business failure'],
      solution: 'Create realistic business plan with adequate working capital'
    }
  ]

  const postRegistrationRequirements = [
    {
      category: 'Annual Obligations',
      frequency: 'Yearly',
      requirements: [
        'Annual corporate tax return filing (March 15)',
        'Municipal business license renewal (~$300)',
        'Corporate registry maintenance fee (~$300)',
        'Annual shareholder/partner meetings',
        'Financial statement preparation (audited if required)'
      ]
    },
    {
      category: 'Monthly Obligations',
      frequency: 'Monthly',
      requirements: [
        'VAT return filing (if applicable)',
        'Employee payroll taxes and social security',
        'Municipal tax payments',
        'Bookkeeping and accounting records',
        'Compliance monitoring and updates'
      ]
    },
    {
      category: 'Ongoing Compliance',
      frequency: 'As needed',
      requirements: [
        'Update UBO declarations when ownership changes',
        'Notify registry of address or management changes',
        'Renew permits and licenses before expiration',
        'Maintain corporate books and records',
        'File required regulatory reports'
      ]
    }
  ]

  const professionalHelpIndicators = [
    {
      situation: 'International Shareholders',
      description: 'Foreign ownership requires additional documentation and compliance considerations'
    },
    {
      situation: 'Complex Business Structure',
      description: 'Multiple entities, partnerships, or sophisticated ownership structures'
    },
    {
      situation: 'Regulated Industries',
      description: 'Businesses in finance, healthcare, tourism, or other regulated sectors'
    },
    {
      situation: 'Significant Investment',
      description: 'Large capital investments or businesses seeking future funding'
    },
    {
      situation: 'Tax Optimization Needs',
      description: 'Complex tax planning or international tax considerations'
    },
    {
      situation: 'Time Constraints',
      description: 'Need to complete registration quickly for business opportunities'
    }
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Costa Rica Business Registration Guide 2025
            </h1>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto mb-8">
              Complete step-by-step guide to registering your business in Costa Rica. From choosing 
              the right structure to avoiding common pitfalls, get everything you need for successful 
              business formation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                Get Professional Help
              </Link>
              <Link
                href="#business-structures"
                className="inline-flex items-center bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200"
              >
                Compare Business Structures
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Business Registration Overview</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key facts about business registration in Costa Rica 2025
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-50 to-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-2">2 Weeks</h3>
              <p className="text-gray-600 font-medium">Typical Timeline</p>
              <p className="text-sm text-gray-500 mt-2">From application to completion</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-2">$1,350</h3>
              <p className="text-gray-600 font-medium">Total Package Cost</p>
              <p className="text-sm text-gray-500 mt-2">Including professional services</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-2">25%</h3>
              <p className="text-gray-600 font-medium">SA Capital Requirement</p>
              <p className="text-sm text-gray-500 mt-2">Of total share capital</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-2">15%+</h3>
              <p className="text-gray-600 font-medium">UBO Threshold</p>
              <p className="text-sm text-gray-500 mt-2">Beneficial ownership reporting</p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Structure Comparison */}
      <section id="business-structures" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Choosing Your Business Structure</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding the differences between SA (Corporation) and SRL (Limited Liability Company) 
              is crucial for your business success
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {businessStructureComparison.map((structure, index) => (
              <div key={index} className={`rounded-xl p-8 border-2 ${
                structure.structure.includes('SA') 
                  ? 'bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200' 
                  : 'bg-gradient-to-br from-green-50 to-green-100 border-green-200'
              }`}>
                <div className="text-center mb-6">
                  <h3 className={`text-2xl font-bold mb-2 ${
                    structure.structure.includes('SA') ? 'text-blue-900' : 'text-green-900'
                  }`}>
                    {structure.structure}
                  </h3>
                  <p className={`text-lg font-medium ${
                    structure.structure.includes('SA') ? 'text-blue-700' : 'text-green-700'
                  }`}>
                    {structure.type}
                  </p>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features</h4>
                    <div className="space-y-2 text-sm">
                      <div><span className="font-medium">Capital:</span> {structure.minimumCapital}</div>
                      <div><span className="font-medium">Owners:</span> {structure.shareholders}</div>
                      <div><span className="font-medium">Liability:</span> {structure.liability}</div>
                      <div><span className="font-medium">Management:</span> {structure.management}</div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <h4 className="font-semibold text-green-900 mb-2">Advantages</h4>
                    <ul className="space-y-1">
                      {structure.advantages.map((advantage, advIndex) => (
                        <li key={advIndex} className="text-sm text-gray-700 flex items-start">
                          <span className="text-green-500 mr-2 mt-1">•</span>
                          {advantage}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <h4 className="font-semibold text-red-900 mb-2">Disadvantages</h4>
                    <ul className="space-y-1">
                      {structure.disadvantages.map((disadvantage, disIndex) => (
                        <li key={disIndex} className="text-sm text-gray-700 flex items-start">
                          <span className="text-red-500 mr-2 mt-1">•</span>
                          {disadvantage}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className={`rounded-lg p-4 ${
                  structure.structure.includes('SA') 
                    ? 'bg-blue-100 border border-blue-200' 
                    : 'bg-green-100 border border-green-200'
                }`}>
                  <h4 className={`font-semibold mb-2 ${
                    structure.structure.includes('SA') ? 'text-blue-900' : 'text-green-900'
                  }`}>
                    Best For
                  </h4>
                  <p className={`text-sm ${
                    structure.structure.includes('SA') ? 'text-blue-800' : 'text-green-800'
                  }`}>
                    {structure.bestFor}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-yellow-50 rounded-xl p-8 border border-yellow-200">
            <div className="text-center">
              <h3 className="text-xl font-bold text-yellow-900 mb-4">Need Help Choosing?</h3>
              <p className="text-yellow-800 mb-6">
                The choice between SA and SRL depends on your specific business needs, growth plans, 
                and operational requirements. Our experts can help you make the right decision.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                Get Structure Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Step-by-Step Registration Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow this comprehensive guide to register your business successfully in Costa Rica
            </p>
          </div>

          <div className="space-y-8">
            {registrationSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white text-2xl font-bold">
                    {step.step}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <h3 className="text-xl font-bold text-blue-900 mb-2 lg:mb-0">{step.title}</h3>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                        {step.duration}
                      </span>
                    </div>
                    
                    <p className="text-gray-700 mb-6">{step.description}</p>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      {/* Requirements */}
                      <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                        <h4 className="font-semibold text-blue-900 mb-3">Requirements</h4>
                        <ul className="space-y-2">
                          {step.requirements.map((req, reqIndex) => (
                            <li key={reqIndex} className="text-sm text-blue-800 flex items-start">
                              <span className="text-blue-500 mr-2">•</span>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tips */}
                      <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                        <h4 className="font-semibold text-green-900 mb-3">Pro Tips</h4>
                        <ul className="space-y-2">
                          {step.tips.map((tip, tipIndex) => (
                            <li key={tipIndex} className="text-sm text-green-800 flex items-start">
                              <span className="text-green-500 mr-2">✓</span>
                              {tip}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Common Mistakes */}
                      <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                        <h4 className="font-semibold text-red-900 mb-3">Avoid These Mistakes</h4>
                        <ul className="space-y-2">
                          {step.commonMistakes.map((mistake, mistakeIndex) => (
                            <li key={mistakeIndex} className="text-sm text-red-800 flex items-start">
                              <span className="text-red-500 mr-2">⚠</span>
                              {mistake}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Required Documentation Checklist</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ensure you have all necessary documents prepared before starting the registration process
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {requiredDocuments.map((category, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-blue-900 mb-6">{category.category}</h3>
                <div className="space-y-3">
                  {category.documents.map((doc, docIndex) => (
                    <div key={docIndex} className="flex items-start space-x-3 bg-white rounded-lg p-3 border border-gray-100">
                      <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                        <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-gray-700 text-sm">{doc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-yellow-50 rounded-xl p-8 border border-yellow-200">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-yellow-900 mb-2">Document Preparation Tips</h3>
                <ul className="text-yellow-800 space-y-1">
                  <li>• All foreign documents must be apostilled or legalized</li>
                  <li>• Documents in languages other than Spanish must be officially translated</li>
                  <li>• Keep both physical and digital copies of all documents</li>
                  <li>• Ensure all signatures are notarized where required</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline and Costs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Timeline & Cost Breakdown</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Plan your budget and timeline for business registration
            </p>
          </div>

          {/* Timeline */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-blue-900 mb-8 text-center">Registration Timeline</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {timeline.map((phase, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                    {index + 1}
                  </div>
                  <h4 className="text-lg font-bold text-blue-900 mb-2">{phase.phase}</h4>
                  <p className="text-2xl font-bold text-green-600 mb-2">{phase.duration}</p>
                  <p className="text-sm text-gray-600">{phase.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Cost Breakdown */}
          <div>
            <h3 className="text-2xl font-bold text-blue-900 mb-8 text-center">Cost Breakdown</h3>
            <div className="space-y-8">
              {costBreakdown.map((category, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div>
                      <h4 className="text-xl font-bold text-blue-900 mb-2">{category.category}</h4>
                      <p className="text-gray-600">{category.description}</p>
                    </div>
                    <div className="bg-blue-100 text-blue-900 px-4 py-2 rounded-lg font-bold text-center mt-4 lg:mt-0">
                      {category.total}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center">
                          <span className={`w-3 h-3 rounded-full mr-3 ${item.required ? 'bg-red-500' : 'bg-gray-400'}`}></span>
                          <span className="text-gray-700 text-sm">{item.item}</span>
                        </div>
                        <span className="font-medium text-blue-900">{item.cost}</span>
                      </div>
                    ))}
                  </div>

                  <p className="text-sm text-gray-500 mt-4 italic">{category.note}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-blue-900 rounded-xl p-8 text-white text-center">
              <h4 className="text-2xl font-bold mb-4">Total Estimated Cost Range</h4>
              <p className="text-4xl font-bold text-yellow-400 mb-4">$1,200 - $1,500</p>
              <p className="text-blue-100">
                This includes all mandatory fees and basic professional services. 
                Additional costs may apply based on specific business requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Pitfalls */}
      <section className="py-20 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-red-900 mb-4">Common Pitfalls to Avoid</h2>
            <p className="text-xl text-red-700 max-w-3xl mx-auto">
              Learn from others' mistakes and avoid these common registration pitfalls
            </p>
          </div>

          <div className="space-y-8">
            {commonPitfalls.map((pitfall, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-red-200">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-red-900 mb-3">{pitfall.pitfall}</h3>
                    <p className="text-gray-700 mb-4">{pitfall.description}</p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                        <h4 className="font-semibold text-red-900 mb-2">Potential Consequences</h4>
                        <ul className="space-y-1">
                          {pitfall.consequences.map((consequence, consIndex) => (
                            <li key={consIndex} className="text-sm text-red-800 flex items-start">
                              <span className="text-red-500 mr-2">•</span>
                              {consequence}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                        <h4 className="font-semibold text-green-900 mb-2">Solution</h4>
                        <p className="text-sm text-green-800">{pitfall.solution}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Post-Registration Requirements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Post-Registration Requirements</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay compliant with ongoing obligations after your business is registered
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {postRegistrationRequirements.map((requirement, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 border border-blue-200">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">{requirement.category}</h3>
                  <span className="bg-blue-900 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {requirement.frequency}
                  </span>
                </div>

                <div className="space-y-3">
                  {requirement.requirements.map((req, reqIndex) => (
                    <div key={reqIndex} className="flex items-start space-x-3 bg-white rounded-lg p-3 border border-blue-200">
                      <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                        <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-gray-700 text-sm">{req}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-yellow-50 rounded-xl p-8 border border-yellow-200 text-center">
            <h3 className="text-xl font-bold text-yellow-900 mb-4">Annual Compliance Cost</h3>
            <p className="text-3xl font-bold text-yellow-800 mb-4">~$600</p>
            <p className="text-yellow-800">
              This includes mandatory tax filings (~$300) and registry maintenance fees (~$300). 
              Additional costs may apply for professional services and industry-specific requirements.
            </p>
          </div>
        </div>
      </section>

      {/* When to Get Professional Help */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">When to Get Professional Help</h2>
            <p className="text-xl text-blue-700 max-w-3xl mx-auto">
              While some businesses can handle registration independently, these situations require expert guidance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {professionalHelpIndicators.map((indicator, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-blue-200 hover:shadow-lg transition-shadow duration-200">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-blue-900 mb-2">{indicator.situation}</h3>
                    <p className="text-gray-700 text-sm">{indicator.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-blue-900 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Expert Business Formation Services</h3>
              <p className="text-blue-100 mb-6 max-w-3xl mx-auto">
                Our experienced team has helped hundreds of businesses successfully register in Costa Rica. 
                We handle the entire process from structure selection to final compliance setup.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
                >
                  Get Formation Help
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200"
                >
                  View Our Services
                </Link>
              </div>

              {/* Service Benefits */}
              <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-yellow-400 text-2xl mb-2">✓</div>
                  <p className="text-blue-100 text-sm">Complete Package</p>
                </div>
                <div>
                  <div className="text-yellow-400 text-2xl mb-2">⚡</div>
                  <p className="text-blue-100 text-sm">Fast Processing</p>
                </div>
                <div>
                  <div className="text-yellow-400 text-2xl mb-2">🛡️</div>
                  <p className="text-blue-100 text-sm">Full Compliance</p>
                </div>
                <div>
                  <div className="text-yellow-400 text-2xl mb-2">💬</div>
                  <p className="text-blue-100 text-sm">Ongoing Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Additional Resources</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore related resources to help with your business formation and operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link
              href="/resources/corporate-tax-guide"
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-yellow-200 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-2 group-hover:text-yellow-600 transition-colors duration-200">
                Corporate Tax Guide
              </h3>
              <p className="text-gray-600 text-sm">
                Understand your tax obligations after business registration
              </p>
            </Link>

            <Link
              href="/resources/payroll-rates"
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-yellow-200 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-green-50 to-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-2 group-hover:text-yellow-600 transition-colors duration-200">
                Payroll Tax Rates
              </h3>
              <p className="text-gray-600 text-sm">
                Current payroll tax rates and employer obligations
              </p>
            </Link>

            <Link
              href="/resources/tax-calendar"
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-yellow-200 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-2 group-hover:text-yellow-600 transition-colors duration-200">
                Tax Calendar 2025
              </h3>
              <p className="text-gray-600 text-sm">
                Important tax deadlines and filing dates
              </p>
            </Link>

            <Link
              href="/services"
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-yellow-200 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-2 group-hover:text-yellow-600 transition-colors duration-200">
                Our Services
              </h3>
              <p className="text-gray-600 text-sm">
                Complete business services for Costa Rican companies
              </p>
            </Link>

            <Link
              href="/contact"
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-yellow-200 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-red-50 to-red-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-2 group-hover:text-yellow-600 transition-colors duration-200">
                Free Consultation
              </h3>
              <p className="text-gray-600 text-sm">
                Get personalized advice for your business formation
              </p>
            </Link>

            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Download PDF Guide</h3>
              <p className="text-blue-100 text-sm mb-4">
                Get the complete business registration guide as a PDF
              </p>
              <button className="text-white hover:text-yellow-300 transition-colors duration-200 text-sm font-medium">
                Coming Soon →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Sources and Disclaimer */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
            <h3 className="text-xl font-bold text-blue-900 mb-6">Sources & Disclaimer</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-blue-900 mb-3">Legal Sources</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Registro Nacional de Costa Rica</li>
                  <li>• Dirección General de Tributación (DGT)</li>
                  <li>• Código de Comercio de Costa Rica</li>
                  <li>• Ley de Sociedades Comerciales</li>
                  <li>• UIF (Unidad de Inteligencia Financiera)</li>
                  <li>• SUGEF (Superintendencia General de Entidades Financieras)</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-blue-900 mb-3">Important Disclaimer</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  This guide provides general information about Costa Rican business registration as of 2025. 
                  Business laws and procedures can change frequently. This information should not be considered 
                  legal advice. Always consult with qualified Costa Rican legal and business professionals for 
                  specific guidance regarding your business formation needs.
                </p>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-blue-800">
                <span className="font-medium">Last Updated:</span> January 2025. We regularly update this guide 
                to reflect the latest changes in Costa Rican business registration laws and procedures.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default BusinessRegistrationGuidePage