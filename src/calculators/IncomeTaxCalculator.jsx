import React, { useState } from "react";

const IncomeTaxCalculator = () => {
  // State variables for user inputs
  const [income, setIncome] = useState(0);
  const [ageGroup, setAgeGroup] = useState("<60");
  const [otherIncome, setOtherIncome] = useState(0);
  const [deductions, setDeductions] = useState({
    section80C: 0,
    section80D: 0,
    section80TTA: 0,
  });
  const [taxRegime, setTaxRegime] = useState("new"); 
  const [taxResult, setTaxResult] = useState(null);

  // Tax slabs for the new regime (Budget 2025)
  const newRegimeSlabs = [
    { min: 0, max: 300000, rate: 0 },
    { min: 300001, max: 700000, rate: 5 },
    { min: 700001, max: 1000000, rate: 10 },
    { min: 1000001, max: 1200000, rate: 15 },
    { min: 1200001, max: 1500000, rate: 20 },
    { min: 1500001, max: Infinity, rate: 30 },
  ];

  // Tax slabs for the old regime based on age groups
  const oldRegimeSlabs = {
    "<60": [
      { min: 0, max: 250000, rate: 0 },
      { min: 250001, max: 300000, rate: 5 },
      { min: 300001, max: 500000, rate: 5 },
      { min: 500001, max: 1000000, rate: 20 },
      { min: 1000001, max: Infinity, rate: 30 },
    ],
    "60-80": [
      { min: 0, max: 250000, rate: 0 },
      { min: 250001, max: 300000, rate: 0 },
      { min: 300001, max: 500000, rate: 5 },
      { min: 500001, max: 1000000, rate: 20 },
      { min: 1000001, max: Infinity, rate: 30 },
    ],
    ">80": [
      { min: 0, max: 250000, rate: 0 },
      { min: 250001, max: 300000, rate: 0 },
      { min: 300001, max: 500000, rate: 0 },
      { min: 500001, max: 1000000, rate: 20 },
      { min: 1000001, max: Infinity, rate: 30 },
    ],
  };

  // Standard deductions
  const standardDeduction = {
    old: 50000,
    new: 75000,
  };

  // Rebate under new regime
  const rebateNewRegime = 60000;

  // Calculate tax based on the selected regime
  const calculateTax = () => {
    const totalIncome = parseFloat(income) + parseFloat(otherIncome);
    const deductionsTotal =
      parseFloat(deductions.section80C) +
      parseFloat(deductions.section80D) +
      parseFloat(deductions.section80TTA);

    let taxableIncome, tax;

    if (taxRegime === "old") {
      // Old regime calculation
      taxableIncome = totalIncome - standardDeduction.old - deductionsTotal;
      tax = calculateTaxBySlabs(taxableIncome, oldRegimeSlabs[ageGroup]);
    } else {
      // New regime calculation
      taxableIncome = totalIncome - standardDeduction.new;
      tax = calculateTaxBySlabs(taxableIncome, newRegimeSlabs);

      // Apply rebate for new regime
      if (taxableIncome <= 1200000) {
        tax = Math.max(tax - rebateNewRegime, 0);
      }
    }

    // Add 4% health and education cess
    tax += tax * 0.04;

    setTaxResult({
      taxableIncome,
      tax,
      regime: taxRegime,
    });
  };

  const calculateTaxBySlabs = (income, slabs) => {
    let tax = 0;
    for (const slab of slabs) {
      if (income > slab.min) {
        const taxableAmount = Math.min(income, slab.max) - slab.min;
        tax += (taxableAmount * slab.rate) / 100;
      }
    }
    return tax;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-blue-900 mb-8 text-center">
          Income Tax Calculator
        </h1>

        {/* Income Input */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Annual Income (₹)
          </label>
          <input
            type="number"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your annual income"
          />
        </div>

        {/* Other Income Input */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Other Income (₹)
          </label>
          <input
            type="number"
            value={otherIncome}
            onChange={(e) => setOtherIncome(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter other income (e.g., interest, rental)"
          />
        </div>

        {/* Age Group Selection */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Age Group
          </label>
          <select
            value={ageGroup}
            onChange={(e) => setAgeGroup(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="<60">Below 60</option>
            <option value="60-80">60 to 80</option>
            <option value=">80">Above 80</option>
          </select>
        </div>

        {/* Deductions Input */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Deductions (₹)
          </label>
          <div className="space-y-4">
            <input
              type="number"
              value={deductions.section80C}
              onChange={(e) =>
                setDeductions({ ...deductions, section80C: e.target.value })
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Section 80C (e.g., PPF, ELSS)"
            />
            <input
              type="number"
              value={deductions.section80D}
              onChange={(e) =>
                setDeductions({ ...deductions, section80D: e.target.value })
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Section 80D (e.g., Medical Insurance)"
            />
            <input
              type="number"
              value={deductions.section80TTA}
              onChange={(e) =>
                setDeductions({ ...deductions, section80TTA: e.target.value })
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Section 80TTA (e.g., Savings Interest)"
            />
          </div>
        </div>

        {/* Tax Regime Selection */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Tax Regime
          </label>
          <div className="flex space-x-4">
            <button
              onClick={() => setTaxRegime("old")}
              className={`px-6 py-2 rounded-md font-medium transition-colors duration-300 ${
                taxRegime === "old"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Old Regime
            </button>
            <button
              onClick={() => setTaxRegime("new")}
              className={`px-6 py-2 rounded-md font-medium transition-colors duration-300 ${
                taxRegime === "new"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              New Regime
            </button>
          </div>
        </div>

        {/* Calculate Button */}
        <button
          onClick={calculateTax}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors duration-300"
        >
          Calculate Tax
        </button>

        {/* Result Display */}
        {taxResult && (
          <div className="mt-8 p-6 bg-blue-50 rounded-lg">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Tax Calculation Result
            </h2>
            <p className="text-gray-700">
              Taxable Income: ₹{taxResult.taxableIncome.toLocaleString()}
            </p>
            <p className="text-gray-700">
              Tax Liability ({taxResult.regime === "old" ? "Old" : "New"} Regime): ₹
              {taxResult.tax.toLocaleString()}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default IncomeTaxCalculator;