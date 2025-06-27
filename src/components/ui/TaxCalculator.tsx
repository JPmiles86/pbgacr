'use client'

import { useState } from 'react'

const TaxCalculator = () => {
  const [income, setIncome] = useState('')
  const [expenses, setExpenses] = useState('')
  const [result, setResult] = useState<{taxableIncome: number, estimatedTax: number} | null>(null)

  const calculateTax = () => {
    const grossIncome = parseFloat(income) || 0
    const totalExpenses = parseFloat(expenses) || 0
    const taxableIncome = Math.max(0, grossIncome - totalExpenses)
    
    // 2025 Costa Rican corporate tax rates (updated December 2024)
    let estimatedTax = 0
    if (taxableIncome > 0) {
      // Check if company qualifies for large company flat rate
      if (grossIncome > 119629000) {
        // Large companies: 30% flat rate
        estimatedTax = taxableIncome * 0.30
      } else {
        // Progressive rates for smaller companies
        if (taxableIncome <= 5642000) {
          estimatedTax = taxableIncome * 0.05 // 5%
        } else if (taxableIncome <= 8465000) {
          estimatedTax = (5642000 * 0.05) + ((taxableIncome - 5642000) * 0.10) // 5% + 10%
        } else if (taxableIncome <= 11286000) {
          estimatedTax = (5642000 * 0.05) + (2823000 * 0.10) + ((taxableIncome - 8465000) * 0.15) // 5% + 10% + 15%
        } else {
          estimatedTax = (5642000 * 0.05) + (2823000 * 0.10) + (2821000 * 0.15) + ((taxableIncome - 11286000) * 0.20) // 5% + 10% + 15% + 20%
        }
      }
    }
    
    setResult({
      taxableIncome,
      estimatedTax
    })
  }

  const reset = () => {
    setIncome('')
    setExpenses('')
    setResult(null)
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-blue-900 rounded-lg flex items-center justify-center">
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
          </svg>
        </div>
        <div>
          <h3 className="text-xl font-bold text-blue-900">2025 Tax Estimator</h3>
          <p className="text-gray-600 text-sm">Estimate your Costa Rican corporate tax using current 2025 rates</p>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label htmlFor="income" className="block text-sm font-medium text-gray-700 mb-2">
            Annual Gross Income (₡)
          </label>
          <input
            type="number"
            id="income"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-colors"
            placeholder="0"
          />
        </div>

        <div>
          <label htmlFor="expenses" className="block text-sm font-medium text-gray-700 mb-2">
            Annual Deductible Expenses (₡)
          </label>
          <input
            type="number"
            id="expenses"
            value={expenses}
            onChange={(e) => setExpenses(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-colors"
            placeholder="0"
          />
        </div>

        <div className="flex gap-3">
          <button
            onClick={calculateTax}
            className="flex-1 bg-blue-900 hover:bg-blue-800 text-white py-3 px-6 rounded-lg font-medium transition-colors duration-200"
          >
            Calculate Tax
          </button>
          <button
            onClick={reset}
            className="px-6 py-3 border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg font-medium transition-colors duration-200"
          >
            Reset
          </button>
        </div>

        {result && (
          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
            <h4 className="font-semibold text-blue-900 mb-3">Estimated Results:</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Taxable Income:</span>
                <span className="font-medium">₡{result.taxableIncome.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Estimated Tax (2025 rates):</span>
                <span className="font-bold text-blue-900">₡{result.estimatedTax.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-xs text-gray-500">
                <span>Effective rate:</span>
                <span>{result.taxableIncome > 0 ? ((result.estimatedTax / result.taxableIncome) * 100).toFixed(1) : 0}%</span>
              </div>
            </div>
            <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-xs text-yellow-800">
                <strong>Disclaimer:</strong> Based on 2025 tax rates (Executive Decree No. 44772-H, Dec 2024). 
                This is for planning purposes only. Actual calculations may include additional factors, deductions, 
                and special incentives. Contact PBAG for professional tax planning and compliance.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default TaxCalculator