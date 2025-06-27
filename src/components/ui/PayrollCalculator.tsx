'use client'

import { useState } from 'react'

const PayrollCalculator = () => {
  const [salary, setSalary] = useState('')
  const [employees, setEmployees] = useState('1')
  const [result, setResult] = useState<{
    grossPayroll: number,
    employerContributions: number,
    totalCost: number,
    employeeDeductions: number,
    netPay: number
  } | null>(null)

  const calculatePayroll = () => {
    const monthlySalary = parseFloat(salary) || 0
    const numEmployees = parseInt(employees) || 1
    
    const grossPayroll = monthlySalary * numEmployees
    
    // Costa Rican employer contributions (approximate rates)
    const ccssEmployer = grossPayroll * 0.0925 // 9.25% CCSS employer
    const insEmployer = grossPayroll * 0.0167 // 1.67% INS employer
    const inaEmployer = grossPayroll * 0.015 // 1.5% INA employer
    const otherContributions = grossPayroll * 0.045 // Other contributions (~4.5%)
    
    const employerContributions = ccssEmployer + insEmployer + inaEmployer + otherContributions
    const totalCost = grossPayroll + employerContributions
    
    // Employee deductions (approximate)
    const ccssEmployee = grossPayroll * 0.055 // 5.5% CCSS employee
    const insEmployee = grossPayroll * 0.01 // 1% INS employee
    const employeeDeductions = ccssEmployee + insEmployee
    
    const netPay = grossPayroll - employeeDeductions
    
    setResult({
      grossPayroll,
      employerContributions,
      totalCost,
      employeeDeductions,
      netPay
    })
  }

  const reset = () => {
    setSalary('')
    setEmployees('1')
    setResult(null)
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center">
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
          </svg>
        </div>
        <div>
          <h3 className="text-xl font-bold text-blue-900">Payroll Calculator</h3>
          <p className="text-gray-600 text-sm">Estimate your monthly payroll costs in Costa Rica</p>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label htmlFor="salary" className="block text-sm font-medium text-gray-700 mb-2">
            Monthly Salary per Employee (₡)
          </label>
          <input
            type="number"
            id="salary"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors"
            placeholder="500000"
          />
        </div>

        <div>
          <label htmlFor="employees" className="block text-sm font-medium text-gray-700 mb-2">
            Number of Employees
          </label>
          <input
            type="number"
            id="employees"
            value={employees}
            onChange={(e) => setEmployees(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors"
            placeholder="1"
            min="1"
          />
        </div>

        <div className="flex gap-3">
          <button
            onClick={calculatePayroll}
            className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-6 rounded-lg font-medium transition-colors duration-200"
          >
            Calculate Payroll
          </button>
          <button
            onClick={reset}
            className="px-6 py-3 border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg font-medium transition-colors duration-200"
          >
            Reset
          </button>
        </div>

        {result && (
          <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-100">
            <h4 className="font-semibold text-blue-900 mb-3">Monthly Payroll Breakdown:</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Gross Payroll:</span>
                <span className="font-medium">₡{result.grossPayroll.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Employer Contributions:</span>
                <span className="font-medium">₡{result.employerContributions.toLocaleString()}</span>
              </div>
              <div className="border-t border-yellow-200 pt-2 flex justify-between">
                <span className="text-gray-600 font-medium">Total Employer Cost:</span>
                <span className="font-bold text-blue-900">₡{result.totalCost.toLocaleString()}</span>
              </div>
              <div className="mt-3 pt-2 border-t border-yellow-200">
                <div className="flex justify-between">
                  <span className="text-gray-600">Employee Deductions:</span>
                  <span className="font-medium">₡{result.employeeDeductions.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Employee Net Pay:</span>
                  <span className="font-medium">₡{result.netPay.toLocaleString()}</span>
                </div>
              </div>
            </div>
            <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-xs text-blue-800">
                <strong>Note:</strong> These calculations use approximate rates for CCSS, INS, INA, and other mandatory contributions. 
                Actual rates may vary based on specific circumstances. Contact PBAG for precise payroll calculations.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default PayrollCalculator