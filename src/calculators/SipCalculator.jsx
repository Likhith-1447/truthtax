import React, { useState } from "react";

const SIPCalculator = () => {
  // State variables for user inputs
  const [monthlySIP, setMonthlySIP] = useState(0);
  const [investmentDuration, setInvestmentDuration] = useState(0);
  const [expectedRate, setExpectedRate] = useState(0);
  const [futureValue, setFutureValue] = useState(null);

  // Function to calculate SIP
  const calculateSIP = () => {
    const P = parseFloat(monthlySIP);
    const n = parseFloat(investmentDuration) * 12; // Convert years to months
    const i = parseFloat(expectedRate) / 100 / 12; // Convert annual rate to monthly rate

    if (isNaN(P) || isNaN(n) || isNaN(i) || P <= 0 || n <= 0 || i <= 0) {
      alert("Please enter valid values for all fields.");
      return;
    }

    // SIP formula: FV = P * [ (1 + i)^n - 1 ] * (1 + i) / i
    const FV = P * ((Math.pow(1 + i, n) - 1) * ((1 + i) / i));

    // Round off to 2 decimal places
    setFutureValue(FV.toFixed(2));
  };

  return (
    <div
      className="min-h-screen py-12 flex items-center justify-center"
      style={{
        background: "linear-gradient(to bottom right, #22c1c3, #fdbb2d)",
      }}
    >
      <div className="max-w-4xl w-full bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-blue-900 mb-8 text-center">
          SIP Calculator
        </h1>

        {/* Monthly SIP Input */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Monthly SIP Amount (₹)
          </label>
          <input
            type="number"
            value={monthlySIP}
            onChange={(e) => setMonthlySIP(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter monthly SIP amount"
          />
        </div>

        {/* Investment Duration Input */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Investment Duration (Years)
          </label>
          <input
            type="number"
            value={investmentDuration}
            onChange={(e) => setInvestmentDuration(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter investment duration in years"
          />
        </div>

        {/* Expected Rate of Return Input */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Expected Rate of Return (% per annum)
          </label>
          <input
            type="number"
            value={expectedRate}
            onChange={(e) => setExpectedRate(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter expected rate of return"
          />
        </div>

        {/* Calculate Button */}
        <button
          onClick={calculateSIP}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors duration-300"
        >
          Calculate SIP
        </button>

        {/* Result Display */}
        {futureValue && (
          <div className="mt-8 p-6 bg-blue-50 rounded-lg">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              SIP Calculation Result
            </h2>
            <p className="text-gray-700">
              Future Value of Investment: ₹{futureValue}
            </p>
            <p className="text-gray-700">
              Total Investment: ₹{(monthlySIP * investmentDuration * 12).toLocaleString()}
            </p>
            <p className="text-gray-700">
              Potential Returns: ₹{(futureValue - monthlySIP * investmentDuration * 12).toLocaleString()}
            </p>
          </div>
        )}

       
      </div>
    </div>
  );
};

export default SIPCalculator;