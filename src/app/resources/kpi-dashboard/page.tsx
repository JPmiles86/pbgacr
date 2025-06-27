import Layout from '@/components/layout/Layout'
import Link from 'next/link'

export const metadata = {
  title: 'Costa Rica Business KPI Dashboard 2025 | Pacific Business & Accounting Group',
  description: 'Track key performance indicators for Costa Rica businesses. Industry benchmarks, financial KPIs, operational metrics, and customer satisfaction indicators specific to the Costa Rican market.',
  keywords: 'Costa Rica business KPIs, key performance indicators 2025, business benchmarks Costa Rica, financial metrics, operational KPIs, customer satisfaction Costa Rica',
}

const KPIDashboardPage = () => {
  const financialKPIs = [
    {
      category: 'Revenue Growth',
      benchmark: '8-12%',
      description: 'Annual revenue growth rate',
      costaRicaContext: 'Costa Rica businesses averaged 9.2% growth in 2024, driven by tourism recovery and export growth',
      calculation: '(Current Year Revenue - Previous Year Revenue) / Previous Year Revenue × 100',
      industry: {
        'Tourism': '12-15%',
        'Technology': '15-20%',
        'Manufacturing': '6-10%',
        'Agriculture': '4-8%'
      }
    },
    {
      category: 'Gross Profit Margin',
      benchmark: '25-40%',
      description: 'Percentage of revenue remaining after direct costs',
      costaRicaContext: 'Healthy margins despite high import costs for raw materials. Free zone companies often achieve higher margins',
      calculation: '(Revenue - Cost of Goods Sold) / Revenue × 100',
      industry: {
        'Tourism': '35-50%',
        'Technology': '60-75%',
        'Manufacturing': '20-35%',
        'Retail': '15-25%'
      }
    },
    {
      category: 'Operating Cash Flow Ratio',
      benchmark: '0.15-0.25',
      description: 'Ability to generate cash from operations',
      costaRicaContext: 'Critical metric given seasonal business cycles and currency fluctuations affecting imports',
      calculation: 'Operating Cash Flow / Current Liabilities',
      industry: {
        'Tourism': '0.20-0.35',
        'Technology': '0.25-0.40',
        'Manufacturing': '0.12-0.20',
        'Agriculture': '0.10-0.18'
      }
    },
    {
      category: 'Return on Assets (ROA)',
      benchmark: '5-15%',
      description: 'Efficiency in using assets to generate profit',
      costaRicaContext: 'Property values increased 8% in 2024, affecting asset base calculations',
      calculation: 'Net Income / Total Assets × 100',
      industry: {
        'Tourism': '8-18%',
        'Technology': '12-25%',
        'Manufacturing': '6-12%',
        'Banking': '1-3%'
      }
    },
    {
      category: 'Debt-to-Equity Ratio',
      benchmark: '0.3-0.6',
      description: 'Financial leverage and risk assessment',
      costaRicaContext: 'Conservative ratios recommended due to interest rate volatility (current prime rate ~11%)',
      calculation: 'Total Debt / Total Equity',
      industry: {
        'Tourism': '0.4-0.8',
        'Technology': '0.1-0.4',
        'Manufacturing': '0.3-0.7',
        'Real Estate': '0.6-1.2'
      }
    }
  ]

  const operationalKPIs = [
    {
      category: 'Employee Productivity',
      benchmark: '₡12-18M per employee',
      description: 'Annual revenue generated per employee',
      costaRicaContext: 'Higher productivity in free zones due to technology and training investments',
      calculation: 'Total Annual Revenue / Number of Employees',
      factors: [
        'Minimum wage increases (6.8% in 2024)',
        'Social security costs (26.33% of salary)',
        'Mandatory benefits (aguinaldo, vacations)',
        'Training and development investments'
      ]
    },
    {
      category: 'Inventory Turnover',
      benchmark: '6-12 times/year',
      description: 'How quickly inventory is sold and replaced',
      costaRicaContext: 'Import delays and port congestion in Limón affect inventory planning',
      calculation: 'Cost of Goods Sold / Average Inventory',
      factors: [
        'Port of Limón efficiency improvements',
        'Import duty and tax considerations',
        'Seasonal demand fluctuations',
        'Currency exchange impact on costs'
      ]
    },
    {
      category: 'Days Sales Outstanding (DSO)',
      benchmark: '30-45 days',
      description: 'Average time to collect receivables',
      costaRicaContext: 'Extended payment terms common in B2B relationships, especially with government contracts',
      calculation: '(Accounts Receivable / Net Credit Sales) × 365',
      factors: [
        'Government payment delays (60-90 days typical)',
        'Tourism sector seasonality',
        'Currency fluctuation risks',
        'Electronic invoicing requirements'
      ]
    },
    {
      category: 'On-Time Delivery Rate',
      benchmark: '95-98%',
      description: 'Percentage of orders delivered on promised date',
      costaRicaContext: 'Infrastructure improvements in 2024 but still challenges with rural deliveries',
      calculation: 'On-Time Deliveries / Total Deliveries × 100',
      factors: [
        'Route 27 expansion completion',
        'Digital logistics platforms adoption',
        'Weather-related delivery delays',
        'Fuel cost impact on delivery costs'
      ]
    }
  ]

  const customerKPIs = [
    {
      category: 'Net Promoter Score (NPS)',
      benchmark: '30-50',
      description: 'Customer loyalty and satisfaction measure',
      costaRicaContext: 'Costa Rican consumers value personal relationships and service quality over price',
      calculation: '% Promoters - % Detractors',
      insights: [
        'Tourism sector averages NPS of 45-60',
        'Technology services: 35-55',
        'Retail and consumer goods: 25-40',
        'Government services improvement: 15-25'
      ]
    },
    {
      category: 'Customer Acquisition Cost (CAC)',
      benchmark: '₡25,000-₡150,000',
      description: 'Cost to acquire a new customer',
      costaRicaContext: 'Digital marketing costs increased 15% in 2024, but effectiveness improved',
      calculation: 'Total Marketing and Sales Costs / Number of New Customers',
      insights: [
        'Social media advertising most cost-effective',
        'Word-of-mouth referrals still crucial',
        'WhatsApp Business adoption growing',
        'Google Ads costs increased 12%'
      ]
    },
    {
      category: 'Customer Lifetime Value (CLV)',
      benchmark: '3-5x CAC',
      description: 'Total value a customer brings over their lifetime',
      costaRicaContext: 'Strong customer loyalty in Costa Rica leads to higher CLV ratios',
      calculation: '(Average Purchase Value × Purchase Frequency × Customer Lifespan)',
      insights: [
        'Tourism: High CLV due to repeat visits',
        'B2B services: Long-term contracts common',
        'Retail: Loyalty programs effectiveness',
        'Technology: Subscription models growing'
      ]
    },
    {
      category: 'Customer Retention Rate',
      benchmark: '85-95%',
      description: 'Percentage of customers retained over a period',
      costaRicaContext: 'Cultural emphasis on relationships supports high retention rates',
      calculation: '((Customers at End - New Customers) / Customers at Start) × 100',
      insights: [
        'Personal service quality is key',
        'Language preferences (Spanish/English)',
        'Payment method preferences',
        'Local community involvement impact'
      ]
    }
  ]

  const economicIndicators = [
    {
      indicator: 'GDP Growth',
      current: '3.8%',
      forecast: '3.2% (2025)',
      impact: 'Positive business environment, steady consumer spending',
      source: 'Banco Central de Costa Rica'
    },
    {
      indicator: 'Inflation Rate',
      current: '2.1%',
      forecast: '3.0% (2025)',
      impact: 'Stable pricing environment, cost predictability',
      source: 'Instituto Nacional de Estadística y Censos (INEC)'
    },
    {
      indicator: 'Unemployment Rate',
      current: '6.5%',
      forecast: '7.0% (2025)',
      impact: 'Tight labor market, wage pressure, talent retention focus',
      source: 'INEC - Encuesta Continua de Empleo'
    },
    {
      indicator: 'Foreign Exchange Rate',
      current: '₡515-525 per USD',
      forecast: 'Stable with gradual appreciation',
      impact: 'Import cost stability, export competitiveness',
      source: 'Banco Central de Costa Rica'
    },
    {
      indicator: 'Prime Interest Rate',
      current: '11.0%',
      forecast: '10.5% (2025)',
      impact: 'Business loan costs, investment planning',
      source: 'Sistema Financiero Nacional'
    }
  ]

  const industryBenchmarks = [
    {
      industry: 'Tourism & Hospitality',
      metrics: {
        'Average Daily Rate': '$120-180',
        'Occupancy Rate': '65-80%',
        'Revenue per Room': '$78-144',
        'Employee Turnover': '25-35%',
        'Profit Margin': '12-25%'
      },
      trends: [
        'Digital booking platforms dominate (85% of reservations)',
        'Sustainable tourism certifications increase bookings by 15%',
        'Recovery to pre-pandemic levels achieved in 2024',
        'Domestic tourism represents 40% of total revenue'
      ]
    },
    {
      industry: 'Technology Services',
      metrics: {
        'Monthly Recurring Revenue Growth': '8-15%',
        'Customer Churn Rate': '3-7%',
        'Employee Productivity': '₡20-35M per employee',
        'Project Margin': '25-45%',
        'Client Satisfaction': '85-95%'
      },
      trends: [
        'Nearshoring opportunities increasing demand',
        'Bilingual talent commands 40-60% premium',
        'Cloud services adoption accelerating',
        'AI and automation services high growth'
      ]
    },
    {
      industry: 'Manufacturing & Export',
      metrics: {
        'Export Growth Rate': '6-12%',
        'Quality Defect Rate': '<2%',
        'On-Time Delivery': '92-97%',
        'Inventory Days': '45-75 days',
        'Worker Safety Index': '>95%'
      },
      trends: [
        'Free zone companies show 20% higher productivity',
        'Sustainability certifications required for EU exports',
        'Automation investment increasing competitiveness',
        'Supply chain diversification from China'
      ]
    },
    {
      industry: 'Agriculture & Food Processing',
      metrics: {
        'Yield per Hectare': 'Varies by crop',
        'Post-Harvest Loss': '8-15%',
        'Export Quality Grade': 'A-Grade 80%+',
        'Seasonal Labor Efficiency': '85-92%',
        'Sustainability Score': '70-85%'
      },
      trends: [
        'Organic certification premium: 15-25%',
        'Climate-smart agriculture adoption',
        'Traceability systems mandatory for exports',
        'Water conservation technology investment'
      ]
    }
  ]

  const kpiTrackingTips = [
    {
      title: 'Establish Baseline Measurements',
      description: 'Before implementing KPIs, establish current performance levels for accurate comparison',
      tips: [
        'Collect 3-6 months of historical data',
        'Document measurement methods and sources',
        'Identify seasonal variations in performance',
        'Account for Costa Rica-specific factors'
      ]
    },
    {
      title: 'Choose Relevant KPIs',
      description: 'Select 5-10 KPIs that directly impact your business goals and industry performance',
      tips: [
        'Align with business strategy and objectives',
        'Include leading and lagging indicators',
        'Consider local market characteristics',
        'Ensure data is actionable and measurable'
      ]
    },
    {
      title: 'Regular Monitoring and Review',
      description: 'Establish consistent review cycles to track progress and make necessary adjustments',
      tips: [
        'Weekly operational metrics review',
        'Monthly financial KPI analysis',
        'Quarterly strategic performance review',
        'Annual benchmark comparison'
      ]
    },
    {
      title: 'Benchmarking Best Practices',
      description: 'Compare your performance against industry standards and local market leaders',
      tips: [
        'Join industry associations for benchmark data',
        'Participate in CINDE or PROCOMER surveys',
        'Network with local business chambers',
        'Consider hiring local business consultants'
      ]
    }
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Costa Rica Business KPI Dashboard 2025
            </h1>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto mb-8">
              Track key performance indicators with Costa Rica-specific benchmarks. Monitor financial, 
              operational, and customer metrics that drive business success in the Costa Rican market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                Get KPI Analysis
              </Link>
              <Link
                href="/resources/budget-planning"
                className="inline-flex items-center bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200"
              >
                Budget Planning Guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Economic Context */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Costa Rica Economic Context 2025</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key economic indicators affecting business performance and KPI benchmarks
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {economicIndicators.map((indicator, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-bold text-blue-900">{indicator.indicator}</h3>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-bold">
                    {indicator.current}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-2">
                  <span className="font-medium">Forecast:</span> {indicator.forecast}
                </p>
                <p className="text-sm text-gray-700 mb-3">{indicator.impact}</p>
                <p className="text-xs text-gray-500">
                  <span className="font-medium">Source:</span> {indicator.source}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financial KPIs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Financial KPIs & Benchmarks</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Essential financial metrics with Costa Rica market-specific benchmarks and industry comparisons
            </p>
          </div>

          <div className="space-y-8">
            {financialKPIs.map((kpi, index) => (
              <div key={index} className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-8 border border-green-200">
                <div className="flex flex-col lg:flex-row lg:items-start justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <h3 className="text-xl font-bold text-green-900">{kpi.category}</h3>
                      <span className="bg-green-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                        {kpi.benchmark}
                      </span>
                    </div>
                    <p className="text-green-800 mb-3">{kpi.description}</p>
                    <p className="text-gray-700 text-sm mb-4">{kpi.costaRicaContext}</p>
                    <div className="bg-white rounded-lg p-3 border border-green-200">
                      <p className="text-sm font-medium text-gray-700">
                        <span className="text-green-700 font-bold">Calculation:</span> {kpi.calculation}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-6 lg:mt-0 lg:ml-8 bg-white rounded-lg p-4 border border-green-200 min-w-[280px]">
                    <h4 className="font-bold text-green-900 mb-3">Industry Benchmarks</h4>
                    <div className="space-y-2">
                      {Object.entries(kpi.industry).map(([industry, benchmark]) => (
                        <div key={industry} className="flex justify-between text-sm">
                          <span className="text-gray-600">{industry}:</span>
                          <span className="font-medium text-green-700">{benchmark}</span>
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

      {/* Operational KPIs */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Operational KPIs</h2>
            <p className="text-xl text-blue-700 max-w-3xl mx-auto">
              Operational efficiency metrics adapted for Costa Rica's business environment
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {operationalKPIs.map((kpi, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-blue-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-blue-900">{kpi.category}</h3>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-bold">
                    {kpi.benchmark}
                  </span>
                </div>
                
                <p className="text-gray-700 mb-3">{kpi.description}</p>
                <p className="text-blue-700 text-sm mb-4">{kpi.costaRicaContext}</p>
                
                <div className="bg-blue-50 rounded-lg p-3 mb-4 border border-blue-100">
                  <p className="text-sm font-medium text-blue-800">
                    <span className="font-bold">Calculation:</span> {kpi.calculation}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-blue-900 mb-2">Key Factors in Costa Rica:</h4>
                  <ul className="space-y-1">
                    {kpi.factors.map((factor, factorIndex) => (
                      <li key={factorIndex} className="text-sm text-gray-600 flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        {factor}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer KPIs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Customer & Market KPIs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Customer satisfaction and market performance metrics for Costa Rican businesses
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {customerKPIs.map((kpi, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-purple-900">{kpi.category}</h3>
                  <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {kpi.benchmark}
                  </span>
                </div>
                
                <p className="text-gray-700 mb-3">{kpi.description}</p>
                <p className="text-purple-700 text-sm mb-4">{kpi.costaRicaContext}</p>
                
                <div className="bg-white rounded-lg p-3 mb-4 border border-purple-200">
                  <p className="text-sm font-medium text-purple-800">
                    <span className="font-bold">Calculation:</span> {kpi.calculation}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-purple-900 mb-2">Market Insights:</h4>
                  <ul className="space-y-1">
                    {kpi.insights.map((insight, insightIndex) => (
                      <li key={insightIndex} className="text-sm text-gray-600 flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        {insight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Benchmarks */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Industry-Specific Benchmarks</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Detailed performance metrics and trends by industry sector in Costa Rica
            </p>
          </div>

          <div className="space-y-8">
            {industryBenchmarks.map((industry, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <h3 className="text-2xl font-bold text-blue-900 mb-6">{industry.industry}</h3>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-blue-900 mb-4">Key Metrics</h4>
                    <div className="space-y-3">
                      {Object.entries(industry.metrics).map(([metric, value]) => (
                        <div key={metric} className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                          <span className="text-gray-700 font-medium">{metric}:</span>
                          <span className="text-blue-900 font-bold">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-blue-900 mb-4">2024-2025 Trends</h4>
                    <ul className="space-y-2">
                      {industry.trends.map((trend, trendIndex) => (
                        <li key={trendIndex} className="text-gray-700 flex items-start">
                          <span className="text-blue-500 mr-2 mt-1">•</span>
                          {trend}
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

      {/* KPI Tracking Tips */}
      <section className="py-20 bg-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-yellow-900 mb-4">KPI Implementation Best Practices</h2>
            <p className="text-xl text-yellow-700 max-w-3xl mx-auto">
              Proven strategies for successful KPI tracking and performance improvement
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {kpiTrackingTips.map((tip, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-yellow-200">
                <h3 className="text-lg font-bold text-yellow-900 mb-3">{tip.title}</h3>
                <p className="text-gray-700 mb-4">{tip.description}</p>
                
                <ul className="space-y-2">
                  {tip.tips.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-sm text-gray-600 flex items-start">
                      <span className="text-yellow-600 mr-2">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Help CTA */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Optimize Your Business Performance?</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Let our Costa Rican business experts help you implement KPI tracking, analyze performance, 
              and develop strategies to improve your key metrics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200"
              >
                Schedule KPI Consultation
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-4 rounded-lg font-medium transition-all duration-200"
              >
                View Business Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sources and Disclaimer */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-blue-900 mb-6">Sources & Disclaimer</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-blue-900 mb-3">Data Sources</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Banco Central de Costa Rica (BCCR) - Economic indicators</li>
                  <li>• Instituto Nacional de Estadística y Censos (INEC) - Statistical data</li>
                  <li>• CINDE - Investment promotion and industry data</li>
                  <li>• PROCOMER - Export and trade statistics</li>
                  <li>• Cámara de Industrias de Costa Rica - Manufacturing benchmarks</li>
                  <li>• Costa Rican Tourism Board (ICT) - Tourism metrics</li>
                  <li>• Ministry of Finance - Tax and fiscal data</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-blue-900 mb-3">Important Disclaimer</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  KPI benchmarks and economic data are based on available public information and industry 
                  research as of January 2025. Business performance varies significantly by company size, 
                  location, and specific circumstances. These benchmarks should be used as general guidelines 
                  for comparison purposes. Consult with qualified business professionals for specific advice 
                  tailored to your situation.
                </p>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-blue-800">
                <span className="font-medium">Last Updated:</span> January 2025. Data includes latest 
                available statistics from Costa Rican government sources and industry reports through 
                December 2024.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default KPIDashboardPage