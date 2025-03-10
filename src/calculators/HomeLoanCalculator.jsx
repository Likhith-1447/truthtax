import React, { useState } from "react";

const HomeLoanEMICalculator = () => {
  // State variables for user inputs
  const [loanAmount, setLoanAmount] = useState(0);
  const [numberOfMonths, setNumberOfMonths] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [emi, setEmi] = useState(null);
  const [totalInterest, setTotalInterest] = useState(null);
  const [totalPayable, setTotalPayable] = useState(null);

  // Function to calculate EMI, total interest, and total payable amount
  const calculateEMI = () => {
    const principal = parseFloat(loanAmount);
    const months = parseFloat(numberOfMonths);
    const rate = parseFloat(interestRate);

    if (isNaN(principal) || isNaN(months) || isNaN(rate) || principal <= 0 || months <= 0 || rate <= 0) {
      alert("Please enter valid values for all fields.");
      return;
    }

    // Convert annual interest rate to monthly and decimal
    const monthlyRate = rate / 12 / 100;

    // Calculate EMI using the formula: EMI = [P x r x (1+r)^n]/[(1+r)^n-1]
    const emiValue =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);

    // Calculate total payable amount and total interest
    const totalPayableValue = emiValue * months;
    const totalInterestValue = totalPayableValue - principal;

    // Set the results
    setEmi(emiValue.toFixed(2));
    setTotalInterest(totalInterestValue.toFixed(2));
    setTotalPayable(totalPayableValue.toFixed(2));
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
          Home Loan EMI Calculator
        </h1>

        {/* Loan Amount Input */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Loan Amount (₹)
          </label>
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter loan amount"
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
          onClick={calculateEMI}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors duration-300"
        >
          Calculate EMI
        </button>

        {/* Result Display */}
        {emi && (
          <div className="mt-8 p-6 bg-blue-50 rounded-lg">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              EMI Calculation Result
            </h2>
            <p className="text-gray-700">
              EMI Payable: ₹{emi}
            </p>
            <p className="text-gray-700">
              Total Interest: ₹{totalInterest}
            </p>
            <p className="text-gray-700">
              Total Payable Amount: ₹{totalPayable}
            </p>
          </div>
        )}

        {/* Additional Information */}
        <div className="mt-8 text-gray-600">
          <p className="mb-2">
            <strong>Note:</strong> The EMI is calculated using the formula:
          </p>
          <p className="mb-2">
            <strong>EMI = [P x r x (1+r)^n]/[(1+r)^n-1]</strong>
          </p>
          <p>
            Where:
            <br />
            P = Loan Amount,
            <br />
            r = Monthly Interest Rate (annual rate divided by 12),
            <br />
            n = Loan Duration in Months.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeLoanEMICalculator;