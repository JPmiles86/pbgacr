import Temp from '@/components/layout/Layout'
import Temp from 'next/link'

export const metadata = {
  title: 'Payroll Management Services | Pacific Business & Accounting Group',
  description: 'Complete payroll management services for Costa Rica businesses. CCSS compliance, tax withholdings, benefits administration, and more. Expert payroll solutions.',
}

const PayrollManagementPage = () => {
  const payrollFeatures = [
    {
      icon: (
        <svg className="w-8 h-8 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
        </svg>
      ),
      title: "CCSS Compliance",
      description: "Complete CCSS registration, contributions, and compliance management"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
        </svg>
      ),
      title: "Tax Withholdings",
      description: "Accurate income tax calculations and monthly reporting to the Ministry of Finance"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
        </svg>
      ),
      title: "Benefits Administration",
      description: "13th month salary, vacation pay, and mandatory benefits calculation"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
      ),
      title: "Digital Payroll System",
      description: "Modern payroll software with employee self-service portals"
    }
  ]

  const complianceCalendar = [
    {
      date: "15th of each month",
      task: "CCSS Contributions Payment",
      description: "Social security contributions must be paid by the 15th of the following month"
    },
    {
      date: "15th of each month",
      task: "Income Tax Withholdings (EDDI-7)",
      description: "Monthly income tax withholdings report to Ministry of Finance"
    },
    {
      date: "December 20th",
      task: "13th Month Salary (Aguinaldo)",
      description: "Mandatory Christmas bonus payment equal to average monthly salary"
    },
    {
      date: "Within 15 days of hiring",
      task: "Employment Contract Filing",
      description: "Submit employment contracts to Ministry of Labor (MTSS)"
    },
    {
      date: "Within 8 days of hiring",
      task: "CCSS Employee Registration",
      description: "Register new employees with Costa Rican Social Security"
    },
    {
      date: "January 31st",
      task: "Annual Salary Statements",
      description: "Provide employees with annual salary statements (comprobante de salario)"
    }
  ]

  const ccssRates = [
    {
      category: "Health Insurance (SEM)",
      employerRate: "9.25%",
      employeeRate: "5.50%",
      description: "Covers medical services and healthcare benefits"
    },
    {
      category: "Pension (IVM)",
      employerRate: "5.08%",
      employeeRate: "4.17%",
      description: "Retirement and disability insurance"
    },
    {
      category: "Worker Protection Law",
      employerRate: "4.75%",
      employeeRate: "1.00%",
      description: "Banco Popular, Labor Capitalization, Complementary Pension, INS"
    },
    {
      category: "Family Allowances",
      employerRate: "5.00%",
      employeeRate: "0.00%",
      description: "Family support benefits"
    },
    {
      category: "INA (Vocational Training)",
      employerRate: "1.50%",
      employeeRate: "0.00%",
      description: "National Learning Institute contributions"
    },
    {
      category: "Labor Risk Insurance (INS)",
      employerRate: "Variable*",
      employeeRate: "0.00%",
      description: "Workplace accident and occupational disease coverage"
    }
  ]

  const costBreakdown = [
    {
      service: "Basic Payroll (1-10 employees)",
      monthlyPrice: "$150 - $300",
      includes: ["Payroll processing", "CCSS compliance", "Basic reporting"]
    },
    {
      service: "Standard Payroll (11-25 employees)",
      monthlyPrice: "$300 - $600",
      includes: ["Full payroll processing", "All compliance", "Employee portal", "Monthly reports"]
    },
    {
      service: "Premium Payroll (25+ employees)",
      monthlyPrice: "$600+",
      includes: ["Complete payroll management", "Advanced reporting", "HR support", "Custom integrations"]
    },
    {
      service: "Setup & Implementation",
      monthlyPrice: "$200 - $500",
      includes: ["System setup", "Employee data migration", "Training", "Documentation"]
    }
  ]

  const commonMistakes = [
    {
      mistake: "Incorrect CCSS Contribution Calculations",
      consequence: "Penalties up to 23 base salaries per employee",
      solution: "Professional payroll service with automated calculations"
    },
    {
      mistake: "Late Payment of Contributions",
      consequence: "1% monthly interest charges on overdue amounts",
      solution: "Automated payment scheduling and compliance calendar"
    },
    {
      mistake: "Missing Employee Registration",
      consequence: "Severe fines and legal complications",
      solution: "Systematic employee onboarding process"
    },
    {
      mistake: "Incorrect 13th Month Calculation",
      consequence: "Labor Ministry penalties and employee disputes",
      solution: "Accurate calculation based on 12-month average"
    },
    {
      mistake: "Improper Record Keeping",
      consequence: "Audit issues and compliance violations",
      solution: "Digital record management with 3-year retention"
    }
  ]

  const outsourcingBenefits = [
    {
      benefit: "Cost Reduction",
      description: "Reduce payroll processing costs by up to 40% compared to in-house processing"
    },
    {
      benefit: "Compliance Guarantee",
      description: "Stay current with changing regulations and avoid costly penalties"
    },
    {
      benefit: "Time Savings",
      description: "Free up 20+ hours per month for core business activities"
    },
    {
      benefit: "Accuracy",
      description: "Eliminate human errors with automated calculations and validations"
    },
    {
      benefit: "Scalability",
      description: "Easily scale payroll operations as your business grows"
    },
    {
      benefit: "Expert Support",
      description: "Access to payroll specialists and HR professionals"
    }
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Payroll Management Services
            </h1>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto mb-8">
              Complete payroll processing and compliance management for Costa Rica businesses. 
              From CCSS contributions to tax withholdings, we handle it all so you can focus on growing your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                Get Free Payroll Consultation
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/tools"
                className="inline-flex items-center border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
              >
                Try Payroll Calculator
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Complete Payroll Solution</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our comprehensive payroll management service ensures 100% compliance with Costa Rican labor laws 
              while providing modern, efficient payroll processing for businesses of all sizes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {payrollFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CCSS Contribution Rates */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">CCSS Contribution Rates 2025</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Current social security contribution rates as mandated by the Costa Rican Social Security Administration (CCSS).
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-blue-900 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Contribution Category</th>
                    <th className="px-6 py-4 text-center font-semibold">Employer Rate</th>
                    <th className="px-6 py-4 text-center font-semibold">Employee Rate</th>
                    <th className="px-6 py-4 text-left font-semibold">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {ccssRates.map((rate, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-blue-900">{rate.category}</td>
                      <td className="px-6 py-4 text-center font-semibold text-red-600">{rate.employerRate}</td>
                      <td className="px-6 py-4 text-center font-semibold text-green-600">{rate.employeeRate}</td>
                      <td className="px-6 py-4 text-gray-600">{rate.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-6 py-4 bg-yellow-50 border-t">
              <p className="text-sm text-gray-600">
                <strong>*Labor Risk Insurance rates vary by industry:</strong> Low risk (0.67%), Medium risk (1.23%), High risk (2.19%)
              </p>
              <p className="text-sm text-gray-600 mt-2">
                <strong>Total Employer Contributions:</strong> Approximately 26.67% of gross salary
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Calendar */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Payroll Compliance Calendar</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Key deadlines and compliance requirements for Costa Rican payroll management. Never miss a deadline again.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {complianceCalendar.map((item, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-bold text-blue-900 mb-2">{item.task}</h3>
                    <p className="text-yellow-600 font-semibold mb-3">{item.date}</p>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Breakdown */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Transparent Pricing</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our payroll service pricing is transparent and scales with your business needs. No hidden fees, just professional service.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {costBreakdown.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-xl font-bold text-blue-900">{service.service}</h3>
                  <span className="text-2xl font-bold text-yellow-600">{service.monthlyPrice}</span>
                </div>
                <ul className="space-y-3">
                  {service.includes.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-gray-600">
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits of Outsourcing */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Why Outsource Your Payroll?</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Discover the significant advantages of outsourcing your payroll to experienced professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {outsourcingBenefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">{benefit.benefit}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="py-20 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-red-900 mb-6">Common Payroll Mistakes to Avoid</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Learn about the most costly payroll mistakes Costa Rican businesses make and how professional payroll services prevent them.
            </p>
          </div>

          <div className="space-y-8">
            {commonMistakes.map((mistake, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg border-l-4 border-red-500 p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div>
                    <h3 className="text-lg font-bold text-red-900 mb-3">Common Mistake</h3>
                    <p className="text-gray-700">{mistake.mistake}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-red-900 mb-3">Consequence</h3>
                    <p className="text-gray-700">{mistake.consequence}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-green-900 mb-3">Our Solution</h3>
                    <p className="text-gray-700">{mistake.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Employee Self-Service */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Employee Self-Service Portal</h2>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto">
              Empower your employees with 24/7 access to their payroll information, reducing HR workload and improving satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-3">Pay Stubs</h3>
              <p className="text-blue-100">Access current and historical pay stubs anytime</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-3">Time Off</h3>
              <p className="text-blue-100">Request vacation days and view accrued balances</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-3">Personal Info</h3>
              <p className="text-blue-100">Update personal information and direct deposit details</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-3">Tax Documents</h3>
              <p className="text-blue-100">Download tax forms and annual salary statements</p>
            </div>
          </div>
        </div>
      </section>

      {/* Official Sources */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Official Sources & References</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our payroll services are based on current Costa Rican labor laws and regulations from official government sources.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-lg font-bold text-blue-900 mb-4">CCSS - Caja Costarricense de Seguro Social</h3>
              <p className="text-gray-600 mb-4">Official social security administration and contribution rates</p>
              <a 
                href="https://www.ccss.sa.cr" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
              >
                Visit CCSS Website
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-lg font-bold text-blue-900 mb-4">MTSS - Ministry of Labor</h3>
              <p className="text-gray-600 mb-4">Employment contracts, labor law compliance, and minimum wage rates</p>
              <a 
                href="https://www.mtss.go.cr" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
              >
                Visit MTSS Website
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-lg font-bold text-blue-900 mb-4">Ministry of Finance</h3>
              <p className="text-gray-600 mb-4">Income tax withholdings, EDDI-7 forms, and tax compliance</p>
              <a 
                href="https://www.hacienda.go.cr" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
              >
                Visit Ministry Website
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

          <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-lg font-bold text-blue-900 mb-4">Current Legal Framework</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Labor Code of Costa Rica</h4>
                <p className="text-sm text-gray-600">Comprehensive labor law covering employment relationships, working conditions, and employee rights</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Social Security Law</h4>
                <p className="text-sm text-gray-600">CCSS regulations governing social security contributions and benefits</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Income Tax Law</h4>
                <p className="text-sm text-gray-600">Tax withholding requirements and reporting obligations for employers</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Worker Protection Law</h4>
                <p className="text-sm text-gray-600">Additional employee benefits and protections including severance and capitalization funds</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Simplify Your Payroll?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join hundreds of Costa Rican businesses who trust PBAG for their payroll management. 
            Get started with a free consultation and discover how we can save you time, money, and stress.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Schedule Free Consultation
            </Link>
            <Link
              href="/tools"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
            >
              Use Payroll Calculator
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-yellow-500 mb-2">100%</div>
              <div className="text-blue-100">Compliance Guarantee</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-500 mb-2">500+</div>
              <div className="text-blue-100">Satisfied Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-500 mb-2">24/7</div>
              <div className="text-blue-100">Employee Portal Access</div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default PayrollManagementPage