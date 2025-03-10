import React, { useState } from "react";

const FDCalculator = () => {
  // State variables for user inputs
  const [depositAmount, setDepositAmount] = useState(0);
  const [numberOfMonths, setNumberOfMonths] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [totalInterest, setTotalInterest] = useState(null);
  const [maturityAmount, setMaturityAmount] = useState(null);

  // Function to calculate FD maturity amount and interest
  const calculateFD = () => {
    const principal = parseFloat(depositAmount);
    const months = parseFloat(numberOfMonths);
    const rate = parseFloat(interestRate);

    if (isNaN(principal) || isNaN(months) || isNaN(rate) || principal <= 0 || months <= 0 || rate <= 0) {
      alert("Please enter valid values for all fields.");
      return;
    }

    // Convert months to years
    const years = months / 12;

    // Calculate maturity amount using the formula: A = P * (1 + r/n)^(n*t)
    // For quarterly compounding, n = 4
    const n = 4; // Quarterly compounding
    const r = rate / 100; // Convert interest rate to decimal
    const maturity = principal * Math.pow(1 + r / n, n * years);

    // Calculate total interest earned
    const interest = maturity - principal;

    // Set the results
    setTotalInterest(interest.toFixed(2));
    setMaturityAmount(maturity.toFixed(2));
  };

  return (
    <div
      className="min-h-screen py-12 flex items-center justify-center"
      style={{
        background: "linear-gradient(to bottom right, #0099f7, #f11712)",
      }}
    >
      <div className="max-w-4xl w-full bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-blue-900 mb-8 text-center">
          Fixed Deposit (FD) Calculator
        </h1>

        {/* Deposit Amount Input */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Deposit Amount (₹)
          </label>
          <input
            type="number"
            value={depositAmount}
            onChange={(e) => setDepositAmount(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter deposit amount"
          />
        </div>

        {/* Number of Months Input */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Number of Months
          </label>
          <input
            type="number"
            value={numberOfMonths}
            onChange={(e) => setNumberOfMonths(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter number of months"
          />
        </div>

        {/* Interest Rate Input */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Interest Rate (% per annum)
          </label>
          <input
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter interest rate"
          />
        </div>

        {/* Calculate Button */}
        <button
          onClick={calculateFD}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors duration-300"
        >
          Calculate FD
        </button>

        {/* Result Display */}
        {maturityAmount && (
          <div className="mt-8 p-6 bg-blue-50 rounded-lg">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              FD Calculation Result
            </h2>
            <p className="text-gray-700">
              Deposit Amount: ₹{depositAmount.toLocaleString()}
            </p>
            <p className="text-gray-700">
              Total Interest: ₹{totalInterest.toLocaleString()}
            </p>
            <p className="text-gray-700">
              Maturity Amount: ₹{maturityAmount.toLocaleString()}
            </p>
          </div>
        )}

        {/* Additional Information */}
        <div className="mt-8 text-gray-600">
          <p className="mb-2">
            <strong>Note:</strong> The FD maturity amount is calculated using the formula:
          </p>
          <p className="mb-2">
            <strong>A = P * (1 + r/n)^(n*t)</strong>
          </p>
          <p>
            Where:
            <br />
            A = Maturity Amount,
            <br />
            P = Principal Amount,
            <br />
            r = Annual Interest Rate (in decimal),
            <br />
            n = Number of compounding periods per year (4 for quarterly),
            <br />
            t = Time in years.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FDCalculator;