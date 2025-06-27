'use client'

import React, { useState } from 'react'

interface CalculatorResult {
  formationCosts: number
  setupCosts: number
  operatingCosts: number
  workingCapital: number
  professionalServices: number
  technology: number
  total: number
  freeZoneOption?: {
    investment: number
    savings: number
    netCost: number
  }
}

const CalculatorClient = () => {
  const [businessType, setBusinessType] = useState('')
  const [industry, setIndustry] = useState('')
  const [location, setLocation] = useState('')
  const [employees, setEmployees] = useState('')
  const [result, setResult] = useState<CalculatorResult | null>(null)

  const calculateStartupCosts = () => {
    // Basic calculation logic based on inputs
    const formationCosts = 450 // Base formation cost
    const setupCosts = businessType === 'corporation' ? 800 : 600
    const operatingCosts = parseInt(employees) * 150 || 500
    const workingCapital = operatingCosts * 3
    const professionalServices = 1500
    const technology = industry === 'technology' ? 2000 : 800
    
    const total = formationCosts + setupCosts + operatingCosts + workingCapital + professionalServices + technology
    
    // Free zone calculation if applicable
    let freeZoneOption
    if (industry === 'manufacturing' || industry === 'technology') {
      freeZoneOption = {
        investment: 150000, // Minimum free zone investment
        savings: total * 0.3, // Estimated 30% tax savings
        netCost: total + 5000 // Additional setup costs
      }
    }

    setResult({
      formationCosts,
      setupCosts,
      operatingCosts,
      workingCapital,
      professionalServices,
      technology,
      total,
      freeZoneOption
    })
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Business Type
          </label>
          <select
            value={businessType}
            onChange={(e) => setBusinessType(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
          >
            <option value="">Select business type</option>
            <option value="corporation">Corporation (S.A.)</option>
            <option value="llc">Limited Liability (S.R.L.)</option>
            <option value="branch">Branch Office</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Industry
          </label>
          <select
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
          >
            <option value="">Select industry</option>
            <option value="technology">Technology</option>
            <option value="manufacturing">Manufacturing</option>
            <option value="tourism">Tourism</option>
            <option value="services">Professional Services</option>
            <option value="agriculture">Agriculture</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Location
          </label>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
          >
            <option value="">Select location</option>
            <option value="san-jose">San José (Central Valley)</option>
            <option value="coastal">Coastal Areas</option>
            <option value="free-zone">Free Zone</option>
            <option value="rural">Rural Areas</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Initial Employees
          </label>
          <select
            value={employees}
            onChange={(e) => setEmployees(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
          >
            <option value="">Select employee count</option>
            <option value="1">1-5 employees</option>
            <option value="6">6-15 employees</option>
            <option value="16">16-25 employees</option>
            <option value="26">25+ employees</option>
          </select>
        </div>
      </div>

      <button
        onClick={calculateStartupCosts}
        className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3 px-6 rounded-lg font-medium transition-colors duration-200 mb-6"
      >
        Calculate Startup Costs
      </button>

      {result && (
        <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
          <h4 className="font-semibold text-blue-900 mb-4">Estimated Startup Costs</h4>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Company Formation:</span>
              <span className="font-medium">${result.formationCosts.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Setup & Registration:</span>
              <span className="font-medium">${result.setupCosts.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Initial Operating Costs:</span>
              <span className="font-medium">${result.operatingCosts.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Working Capital:</span>
              <span className="font-medium">${result.workingCapital.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Professional Services:</span>
              <span className="font-medium">${result.professionalServices.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Technology & Equipment:</span>
              <span className="font-medium">${result.technology.toLocaleString()}</span>
            </div>
            <div className="border-t border-blue-200 pt-3 mt-3">
              <div className="flex justify-between">
                <span className="font-semibold text-blue-900">Total Estimated Cost:</span>
                <span className="font-bold text-blue-900 text-lg">${result.total.toLocaleString()}</span>
              </div>
            </div>
          </div>

          {result.freeZoneOption && (
            <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <h5 className="font-semibold text-yellow-800 mb-2">Free Zone Option Available</h5>
              <div className="text-sm text-yellow-700">
                <p>Minimum investment: ${result.freeZoneOption.investment.toLocaleString()}</p>
                <p>Estimated tax savings: ${result.freeZoneOption.savings.toLocaleString()}</p>
                <p>Net startup cost: ${result.freeZoneOption.netCost.toLocaleString()}</p>
              </div>
            </div>
          )}

          <div className="mt-4 p-3 bg-gray-50 border border-gray-200 rounded-lg">
            <p className="text-xs text-gray-600">
              <strong>Disclaimer:</strong> These are estimated costs for planning purposes. 
              Actual costs may vary based on specific circumstances. Contact PBAG for accurate quotes.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default CalculatorClient