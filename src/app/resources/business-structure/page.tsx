import Layout from '@/components/layout/Layout'
import Link from 'next/link'

export const metadata = {
  title: 'Costa Rica Business Structure Comparison 2025 | Pacific Business & Accounting Group',
  description: 'Complete guide to Costa Rica business structures 2025. Compare SA vs SRL corporations, branch offices, free zone entities, partnerships, and sole proprietorships. Tax implications, liability differences, capital requirements.',
  keywords: 'Costa Rica business structures 2025, SA vs SRL comparison, branch office requirements, free zone benefits, partnership structures, sole proprietorship, corporate tax, liability protection, business formation',
}

const BusinessStructureComparison = () => {
  const businessStructures = [
    {
      type: 'Sociedad Anónima (S.A.)',
      description: 'Costa Rican corporation with shares',
      liability: 'Limited to capital contribution',
      minCapital: 'No minimum required',
      taxation: '5-30% progressive or 30% flat rate',
      governance: 'Board of Directors (President, Secretary, Treasurer + Comptroller)',
      bestFor: 'Large companies, multiple shareholders, stock market aspirations',
      foreignOwnership: '100% allowed',
      timeToForm: '2-4 weeks',
      pros: ['Strong liability protection', 'Flexible share transfers', 'International recognition', 'Can issue different share classes'],
      cons: ['Complex governance structure', 'More regulatory requirements', 'Higher administrative costs', 'Multiple mandatory positions']
    },
    {
      type: 'Sociedad de Responsabilidad Limitada (S.R.L.)',
      description: 'Limited liability company with quotas',
      liability: 'Limited to capital contribution',
      minCapital: 'No minimum required',
      taxation: '5-30% progressive or 30% flat rate',
      governance: 'General Manager(s) - no board required',
      bestFor: 'Small to medium businesses, close-knit ownership',
      foreignOwnership: '100% allowed',
      timeToForm: '2-4 weeks',
      pros: ['Simpler management structure', 'Lower administrative burden', 'Restricted ownership transfers', 'Flexible operations'],
      cons: ['Right of first refusal on transfers', 'Cannot issue public shares', 'Less suitable for investors', 'Limited growth flexibility']
    },
    {
      type: 'Branch Office',
      description: 'Extension of foreign parent company',
      liability: 'Parent company fully liable',
      minCapital: 'No minimum required',
      taxation: '30% on Costa Rican-source income',
      governance: 'Local legal representative required',
      bestFor: 'Foreign companies testing market, distribution activities',
      foreignOwnership: '100% (by definition)',
      timeToForm: '2 weeks',
      pros: ['Quick setup', 'No separate incorporation', 'Territorial tax benefits', 'Simple structure'],
      cons: ['Full parent company liability', 'Limited to distribution activities', 'No separate legal entity', 'Transfer pricing scrutiny']
    },
    {
      type: 'Free Zone Entity',
      description: 'Special regime corporation with tax benefits',
      liability: 'Limited (S.A. or S.R.L. structure)',
      minCapital: 'US$150,000 investment in 3 years',
      taxation: '0% corporate tax (8-18 years depending on location)',
      governance: 'Based on underlying structure (S.A. or S.R.L.)',
      bestFor: 'Export businesses, manufacturers, service exporters',
      foreignOwnership: '100% allowed',
      timeToForm: '4-8 weeks including approvals',
      pros: ['Exceptional tax benefits', '100% VAT exemption', 'Import duty exemptions', 'Territorial benefits'],
      cons: ['Strict compliance requirements', 'Investment commitments', 'Export/service requirements', 'Complex application process']
    },
    {
      type: 'Sociedad en Comandita Simple',
      description: 'Partnership with general and limited partners',
      liability: 'General partners: unlimited; Limited partners: limited',
      minCapital: 'No minimum required',
      taxation: 'Flow-through to partners (individual rates)',
      governance: 'General partners manage; limited partners invest only',
      bestFor: 'Investment partnerships, professional services',
      foreignOwnership: '100% allowed',
      timeToForm: '3-4 weeks',
      pros: ['Flexible management', 'Pass-through taxation', 'Different partner classes', 'Capital and management separation'],
      cons: ['Unlimited liability for general partners', 'Limited partner restrictions', 'Complex partnership agreements', 'Less commonly used']
    },
    {
      type: 'Sociedad en Nombre Colectivo',
      description: 'General partnership with joint liability',
      liability: 'All partners have unlimited joint liability',
      minCapital: 'No minimum required',
      taxation: 'Flow-through to partners (individual rates)',
      governance: 'All partners can manage unless restricted',
      bestFor: 'Small professional partnerships, family businesses',
      foreignOwnership: '100% allowed',
      timeToForm: '2-3 weeks',
      pros: ['Simple structure', 'Equal partner rights', 'Pass-through taxation', 'Low formation costs'],
      cons: ['Unlimited personal liability', 'Joint liability for all debts', 'Partner disputes can be problematic', 'Rarely used in practice']
    },
    {
      type: 'Física con Actividad Lucrativa',
      description: 'Individual with commercial activity (sole proprietorship)',
      liability: 'Unlimited personal liability',
      minCapital: 'No minimum required',
      taxation: 'Progressive individual tax rates (5-25%)',
      governance: 'Individual owner-operator',
      bestFor: 'Freelancers, consultants, small service businesses',
      foreignOwnership: 'Requires legal residency',
      timeToForm: '1-2 weeks',
      pros: ['Simplest structure', 'Lowest costs', 'Direct tax benefits', 'Full control'],
      cons: ['Unlimited personal liability', 'Limited growth potential', 'Residency requirement', 'No asset protection']
    },
    {
      type: 'E.I.R.L. (Empresa Individual)',
      description: 'Individual limited liability company',
      liability: 'Limited to company assets',
      minCapital: 'Minimum capital required',
      taxation: 'Corporate rates on company income',
      governance: 'Single owner-manager',
      bestFor: 'Solo entrepreneurs wanting liability protection',
      foreignOwnership: 'May require residency',
      timeToForm: '2-3 weeks',
      pros: ['Liability protection', 'Single owner', 'Corporate benefits', 'Asset separation'],
      cons: ['More complex than sole proprietorship', 'Higher costs', 'Corporate tax obligations', 'Less commonly used']
    }
  ]

  const taxComparison = [
    {
      structure: 'S.A. (Small Company)',
      corporateRate: '5-20% progressive',
      conditions: 'Gross income ≤ ₡119M',
      withholdingTax: '15% on dividends to non-residents',
      vatApplicable: 'Yes - 13%',
      specialIncentives: 'R&D deductions (150%), Training (200%)'
    },
    {
      structure: 'S.A. (Large Company)',
      corporateRate: '30% flat rate',
      conditions: 'Gross income > ₡119M',
      withholdingTax: '15% on dividends to non-residents',
      vatApplicable: 'Yes - 13%',
      specialIncentives: 'R&D deductions (150%), Training (200%)'
    },
    {
      structure: 'S.R.L.',
      corporateRate: '5-30% (same as S.A.)',
      conditions: 'Based on gross income',
      withholdingTax: '15% on distributions to non-residents',
      vatApplicable: 'Yes - 13%',
      specialIncentives: 'Same as S.A. structures'
    },
    {
      structure: 'Branch Office',
      corporateRate: '30% on Costa Rican source',
      conditions: 'Territorial taxation applies',
      withholdingTax: '15% on remittances abroad',
      vatApplicable: 'Yes - 13%',
      specialIncentives: 'Limited - territorial benefits'
    },
    {
      structure: 'Free Zone Entity',
      corporateRate: '0% (8-18 years)',
      conditions: 'Must meet investment/export requirements',
      withholdingTax: '0% on profit remittances',
      vatApplicable: '0% on qualifying transactions',
      specialIncentives: 'Most comprehensive benefits available'
    },
    {
      structure: 'Partnerships',
      corporateRate: 'Pass-through to partners',
      conditions: 'Partners taxed at individual rates',
      withholdingTax: 'Based on partner residency',
      vatApplicable: 'Partnership level - 13%',
      specialIncentives: 'Limited partnership-level incentives'
    },
    {
      structure: 'Sole Proprietorship',
      corporateRate: '5-25% individual rates',
      conditions: 'Progressive based on income level',
      withholdingTax: 'Not applicable',
      vatApplicable: 'Yes - 13% if required to register',
      specialIncentives: 'Individual deductions and credits'
    }
  ]

  const decisionFactors = [
    {
      factor: 'Liability Protection',
      high: ['S.A.', 'S.R.L.', 'Free Zone Entity', 'E.I.R.L.'],
      medium: ['Comandita Simple (Limited Partners)'],
      low: ['Branch Office', 'Sole Proprietorship', 'General Partnership']
    },
    {
      factor: 'Tax Benefits',
      high: ['Free Zone Entity'],
      medium: ['S.A.', 'S.R.L.', 'Branch Office (territorial)'],
      low: ['Partnerships', 'Sole Proprietorship']
    },
    {
      factor: 'Management Flexibility',
      high: ['S.R.L.', 'Partnerships', 'Sole Proprietorship'],
      medium: ['Branch Office', 'E.I.R.L.'],
      low: ['S.A.', 'Free Zone Entity']
    },
    {
      factor: 'Capital Requirements',
      high: ['Free Zone Entity (US$150K)'],
      medium: ['E.I.R.L.'],
      low: ['All others (no minimum)']
    },
    {
      factor: 'Administrative Complexity',
      high: ['S.A.', 'Free Zone Entity'],
      medium: ['S.R.L.', 'Branch Office', 'Partnerships'],
      low: ['Sole Proprietorship', 'E.I.R.L.']
    },
    {
      factor: 'Foreign Ownership',
      high: ['S.A.', 'S.R.L.', 'Branch Office', 'Free Zone', 'Partnerships'],
      medium: ['E.I.R.L. (may require residency)'],
      low: ['Sole Proprietorship (requires residency)']
    }
  ]

  const conversionOptions = [
    {
      from: 'Sole Proprietorship',
      to: 'S.R.L. or S.A.',
      process: 'Asset transfer to new corporation, dissolution of sole proprietorship',
      timeframe: '4-6 weeks',
      considerations: 'Tax implications on asset transfer, liability protection gained'
    },
    {
      from: 'S.R.L.',
      to: 'S.A.',
      process: 'Amendment of articles, conversion of quotas to shares, establish board',
      timeframe: '3-4 weeks',
      considerations: 'More complex governance, greater flexibility for investors'
    },
    {
      from: 'Partnership',
      to: 'Corporation',
      process: 'Incorporation, asset contribution, partnership dissolution',
      timeframe: '4-6 weeks',
      considerations: 'Loss of pass-through taxation, gain of liability protection'
    },
    {
      from: 'Branch Office',
      to: 'Subsidiary',
      process: 'Incorporate S.A./S.R.L., transfer operations, close branch',
      timeframe: '6-8 weeks',
      considerations: 'Separate legal entity, potential tax benefits, local presence'
    },
    {
      from: 'Regular Entity',
      to: 'Free Zone',
      process: 'Apply for free zone status, meet investment requirements',
      timeframe: '8-12 weeks',
      considerations: 'Significant tax benefits, strict compliance requirements'
    }
  ]

  const legalSources = [
    {
      source: 'Código de Comercio de Costa Rica',
      description: 'Commercial Code - primary legislation governing business entities',
      articles: 'Articles 10-564 covering all commercial entities'
    },
    {
      source: 'Ley del Impuesto sobre la Renta',
      description: 'Income Tax Law - corporate and individual tax obligations',
      reference: 'Law No. 7092 and amendments'
    },
    {
      source: 'Ley de Régimen de Zonas Francas',
      description: 'Free Zone Regime Law - special tax incentives',
      reference: 'Law No. 7210 and Decree No. 34739-COMEX-H'
    },
    {
      source: 'Registro Nacional',
      description: 'National Registry - entity registration requirements',
      reference: 'Decree No. 34120-J and related regulations'
    },
    {
      source: 'Dirección General de Tributación',
      description: 'Tax Authority - tax compliance and procedures',
      reference: 'Various tax decrees and circulars'
    }
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Costa Rica Business Structure Comparison 2025
            </h1>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto mb-8">
              Choose the right business structure for your Costa Rican venture. Compare corporations (S.A. vs S.R.L.), 
              branch offices, free zone entities, partnerships, and sole proprietorships with detailed analysis of 
              tax implications, liability protection, and compliance requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                Get Professional Guidance
              </Link>
              <Link
                href="#decision-tool"
                className="inline-flex items-center bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200"
              >
                Use Decision Tool
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Popular Business Structures 2025</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Most commonly chosen structures and their key characteristics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm0 2h12v8H4V6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">S.R.L.</h3>
              <p className="text-gray-600 font-medium">Most Popular</p>
              <p className="text-sm text-gray-500 mt-2">Simple management, liability protection</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-50 to-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h2zm-2 4a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">S.A.</h3>
              <p className="text-gray-600 font-medium">Traditional Corp</p>
              <p className="text-sm text-gray-500 mt-2">Multiple shareholders, formal structure</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">Free Zone</h3>
              <p className="text-gray-600 font-medium">Tax Incentives</p>
              <p className="text-sm text-gray-500 mt-2">0% tax, export focus</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zM8 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H8z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">Branch Office</h3>
              <p className="text-gray-600 font-medium">Foreign Extension</p>
              <p className="text-sm text-gray-500 mt-2">Quick setup, limited activities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Comparison Table */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Complete Structure Comparison</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Detailed comparison of all available business structures in Costa Rica
            </p>
          </div>

          <div className="space-y-8">
            {businessStructures.map((structure, index) => (
              <div key={index} className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-8 border border-blue-200">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-1">
                    <h3 className="text-2xl font-bold text-blue-900 mb-3">{structure.type}</h3>
                    <p className="text-blue-700 mb-4">{structure.description}</p>
                    <div className="space-y-2 text-sm">
                      <div><strong>Formation Time:</strong> {structure.timeToForm}</div>
                      <div><strong>Foreign Ownership:</strong> {structure.foreignOwnership}</div>
                      <div><strong>Best For:</strong> {structure.bestFor}</div>
                    </div>
                  </div>

                  <div className="lg:col-span-1">
                    <div className="space-y-4">
                      <div className="bg-white rounded-lg p-4">
                        <h4 className="font-semibold text-blue-900 mb-2">Key Details</h4>
                        <div className="space-y-2 text-sm">
                          <div><strong>Liability:</strong> {structure.liability}</div>
                          <div><strong>Min. Capital:</strong> {structure.minCapital}</div>
                          <div><strong>Tax Rate:</strong> {structure.taxation}</div>
                          <div><strong>Governance:</strong> {structure.governance}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-1">
                    <div className="space-y-4">
                      <div className="bg-green-50 rounded-lg p-4">
                        <h4 className="font-semibold text-green-900 mb-2">Advantages</h4>
                        <ul className="text-sm space-y-1">
                          {structure.pros.map((pro, proIndex) => (
                            <li key={proIndex} className="flex items-start">
                              <span className="text-green-500 mr-2">•</span>
                              {pro}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-red-50 rounded-lg p-4">
                        <h4 className="font-semibold text-red-900 mb-2">Disadvantages</h4>
                        <ul className="text-sm space-y-1">
                          {structure.cons.map((con, conIndex) => (
                            <li key={conIndex} className="flex items-start">
                              <span className="text-red-500 mr-2">•</span>
                              {con}
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

      {/* Tax Implications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Tax Implications by Structure</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding tax obligations for each business structure type
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm border border-gray-100">
              <thead className="bg-blue-900 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Structure</th>
                  <th className="px-6 py-4 text-left font-semibold">Corporate Rate</th>
                  <th className="px-6 py-4 text-left font-semibold">Conditions</th>
                  <th className="px-6 py-4 text-left font-semibold">Withholding Tax</th>
                  <th className="px-6 py-4 text-left font-semibold">VAT</th>
                  <th className="px-6 py-4 text-left font-semibold">Special Incentives</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {taxComparison.map((tax, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-blue-900">{tax.structure}</td>
                    <td className="px-6 py-4">{tax.corporateRate}</td>
                    <td className="px-6 py-4 text-sm">{tax.conditions}</td>
                    <td className="px-6 py-4">{tax.withholdingTax}</td>
                    <td className="px-6 py-4">{tax.vatApplicable}</td>
                    <td className="px-6 py-4 text-sm">{tax.specialIncentives}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Decision Making Tool */}
      <section id="decision-tool" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Decision Factors Matrix</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Compare structures across key decision factors to find the best fit
            </p>
          </div>

          <div className="space-y-8">
            {decisionFactors.map((factor, index) => (
              <div key={index} className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-8 border border-green-200">
                <h3 className="text-xl font-bold text-green-900 mb-6">{factor.factor}</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-semibold text-green-700 mb-3 flex items-center">
                      <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                      High
                    </h4>
                    <ul className="space-y-1 text-sm">
                      {factor.high.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-gray-700">{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-semibold text-yellow-700 mb-3 flex items-center">
                      <span className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
                      Medium
                    </h4>
                    <ul className="space-y-1 text-sm">
                      {factor.medium.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-gray-700">{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-semibold text-red-700 mb-3 flex items-center">
                      <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
                      Low
                    </h4>
                    <ul className="space-y-1 text-sm">
                      {factor.low.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-gray-700">{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Structure Conversion */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Converting Between Structures</h2>
            <p className="text-xl text-blue-700 max-w-3xl mx-auto">
              Business needs change - understand your options for converting between entity types
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {conversionOptions.map((conversion, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-blue-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-blue-900">
                    {conversion.from} → {conversion.to}
                  </h3>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {conversion.timeframe}
                  </span>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Process:</h4>
                    <p className="text-gray-700 text-sm">{conversion.process}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Key Considerations:</h4>
                    <p className="text-gray-700 text-sm">{conversion.considerations}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-yellow-50 rounded-xl p-8 border border-yellow-200">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-yellow-900 mb-2">Professional Guidance Recommended</h3>
                <p className="text-yellow-800">
                  Converting between business structures involves complex legal and tax implications. 
                  Always consult with qualified Costa Rican legal and tax professionals before making changes 
                  to ensure compliance and optimize your business outcome.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* When to Choose Each Structure */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">When to Choose Each Structure</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specific scenarios and business situations that favor each structure type
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
                <h3 className="text-lg font-bold text-blue-900 mb-3">Choose S.R.L. When:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start"><span className="text-blue-500 mr-2">•</span>You want simple management structure</li>
                  <li className="flex items-start"><span className="text-blue-500 mr-2">•</span>Close-knit ownership group</li>
                  <li className="flex items-start"><span className="text-blue-500 mr-2">•</span>Lower administrative burden desired</li>
                  <li className="flex items-start"><span className="text-blue-500 mr-2">•</span>Restricted ownership transfers acceptable</li>
                  <li className="flex items-start"><span className="text-blue-500 mr-2">•</span>Small to medium-sized business</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
                <h3 className="text-lg font-bold text-green-900 mb-3">Choose S.A. When:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start"><span className="text-green-500 mr-2">•</span>Multiple shareholders expected</li>
                  <li className="flex items-start"><span className="text-green-500 mr-2">•</span>Future investment rounds planned</li>
                  <li className="flex items-start"><span className="text-green-500 mr-2">•</span>International recognition important</li>
                  <li className="flex items-start"><span className="text-green-500 mr-2">•</span>Complex ownership structures needed</li>
                  <li className="flex items-start"><span className="text-green-500 mr-2">•</span>Potential public listing consideration</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-6 border border-yellow-200">
                <h3 className="text-lg font-bold text-yellow-900 mb-3">Choose Free Zone When:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start"><span className="text-yellow-500 mr-2">•</span>Export-oriented business model</li>
                  <li className="flex items-start"><span className="text-yellow-500 mr-2">•</span>Can meet US$150K investment requirement</li>
                  <li className="flex items-start"><span className="text-yellow-500 mr-2">•</span>Manufacturing or service exports</li>
                  <li className="flex items-start"><span className="text-yellow-500 mr-2">•</span>Long-term tax optimization priority</li>
                  <li className="flex items-start"><span className="text-yellow-500 mr-2">•</span>Willing to comply with strict requirements</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
                <h3 className="text-lg font-bold text-purple-900 mb-3">Choose Branch Office When:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start"><span className="text-purple-500 mr-2">•</span>Testing Costa Rican market</li>
                  <li className="flex items-start"><span className="text-purple-500 mr-2">•</span>Distribution activities only</li>
                  <li className="flex items-start"><span className="text-purple-500 mr-2">•</span>Quick market entry needed</li>
                  <li className="flex items-start"><span className="text-purple-500 mr-2">•</span>Parent company liability acceptable</li>
                  <li className="flex items-start"><span className="text-purple-500 mr-2">•</span>Temporary or limited presence</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 border border-red-200">
                <h3 className="text-lg font-bold text-red-900 mb-3">Choose Sole Proprietorship When:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start"><span className="text-red-500 mr-2">•</span>Individual consultant or freelancer</li>
                  <li className="flex items-start"><span className="text-red-500 mr-2">•</span>Simple business activities</li>
                  <li className="flex items-start"><span className="text-red-500 mr-2">•</span>Low startup costs critical</li>
                  <li className="flex items-start"><span className="text-red-500 mr-2">•</span>Personal liability acceptable</li>
                  <li className="flex items-start"><span className="text-red-500 mr-2">•</span>Costa Rican legal residency held</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-6 border border-indigo-200">
                <h3 className="text-lg font-bold text-indigo-900 mb-3">Choose Partnership When:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start"><span className="text-indigo-500 mr-2">•</span>Multiple partners with different roles</li>
                  <li className="flex items-start"><span className="text-indigo-500 mr-2">•</span>Pass-through taxation desired</li>
                  <li className="flex items-start"><span className="text-indigo-500 mr-2">•</span>Investment partnership structure</li>
                  <li className="flex items-start"><span className="text-indigo-500 mr-2">•</span>Professional service collaboration</li>
                  <li className="flex items-start"><span className="text-indigo-500 mr-2">•</span>Flexible management arrangements needed</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Help CTA */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Need Help Choosing the Right Structure?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Our experienced Costa Rican business formation specialists can analyze your specific situation 
              and recommend the optimal structure for your goals, tax situation, and operational requirements.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                href="/contact"
                className="inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200"
              >
                Schedule Free Consultation
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-4 rounded-lg font-medium transition-all duration-200"
              >
                View Formation Services
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-500 bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Expert Analysis</h3>
                <p className="text-blue-100 text-sm">Comprehensive review of your business goals and requirements</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-500 bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Tax Optimization</h3>
                <p className="text-blue-100 text-sm">Structure recommendations for maximum tax efficiency</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-500 bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Complete Setup</h3>
                <p className="text-blue-100 text-sm">Full formation and registration services</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Sources and Disclaimer */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-blue-900 mb-6">Legal Sources & References</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="font-semibold text-blue-900 mb-4">Primary Legal Sources</h4>
                <div className="space-y-3">
                  {legalSources.map((source, index) => (
                    <div key={index} className="border-l-4 border-blue-200 pl-4">
                      <h5 className="font-medium text-blue-800">{source.source}</h5>
                      <p className="text-sm text-gray-600 mb-1">{source.description}</p>
                      <p className="text-xs text-gray-500">{source.reference || source.articles}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-blue-900 mb-4">Government Agencies</h4>
                <div className="space-y-3">
                  <div className="border-l-4 border-green-200 pl-4">
                    <h5 className="font-medium text-green-800">Registro Nacional</h5>
                    <p className="text-sm text-gray-600">Entity registration and corporate record keeping</p>
                  </div>
                  <div className="border-l-4 border-green-200 pl-4">
                    <h5 className="font-medium text-green-800">Dirección General de Tributación</h5>
                    <p className="text-sm text-gray-600">Tax authority - compliance and procedures</p>
                  </div>
                  <div className="border-l-4 border-green-200 pl-4">
                    <h5 className="font-medium text-green-800">PROCOMER</h5>
                    <p className="text-sm text-gray-600">Free zone applications and export promotion</p>
                  </div>
                  <div className="border-l-4 border-green-200 pl-4">
                    <h5 className="font-medium text-green-800">Ministerio de Hacienda</h5>
                    <p className="text-sm text-gray-600">Tax policy and regulatory framework</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-8">
              <h4 className="font-semibold text-blue-900 mb-4">Important Disclaimer</h4>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <p className="text-sm text-gray-700 leading-relaxed mb-4">
                  This comprehensive guide provides general information about Costa Rican business structures 
                  and tax implications as of 2025. Business formation and tax laws are complex and subject to 
                  frequent changes. The information presented should not be considered legal, tax, or business advice.
                </p>
                <p className="text-sm text-gray-700 leading-relaxed mb-4">
                  <strong>Professional Consultation Required:</strong> Always consult with qualified Costa Rican 
                  attorneys, certified public accountants, and business advisors before making entity selection 
                  decisions. Individual circumstances, business goals, tax situations, and regulatory requirements 
                  vary significantly and require personalized professional analysis.
                </p>
                <p className="text-sm text-blue-800">
                  <strong>Last Updated:</strong> January 2025. We regularly update this guide to reflect the 
                  latest changes in Costa Rican commercial law, tax regulations, and business formation requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default BusinessStructureComparison