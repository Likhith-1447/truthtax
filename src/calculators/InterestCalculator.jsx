import React, { useState } from "react";

const InterestCalculator = () => {
  const [principal, setPrincipal] = useState(0);
  const [rate, setRate] = useState(0);
  const [time, setTime] = useState(0);
  const [timeUnit, setTimeUnit] = useState("months");
  const [interestType, setInterestType] = useState("simple");
  const [result, setResult] = useState(null);

  const calculateInterest = () => {
    let calculatedInterest = 0;
    const timeInYears = timeUnit === "months" ? time / 12 : time;

    if (interestType === "simple") {
      calculatedInterest = (principal * rate * timeInYears) / 100;
    } else if (interestType === "compound") {
      calculatedInterest =
        principal * Math.pow(1 + rate / 100, timeInYears) - principal;
    }

    setResult(calculatedInterest.toFixed(2));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-blue-900 mb-8 text-center">
          Interest Calculator
        </h1>

        {/* Interest Type Selection */}
        <div className="mb-8">
          <label className="block text-gray-700 font-medium mb-2">
            Interest Type
          </label>
          <div className="flex space-x-4">
            <button
              onClick={() => setInterestType("simple")}
              className={`px-6 py-2 rounded-md font-medium transition-colors duration-300 ${
                interestType === "simple"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Simple Interest
            </button>
            <button
              onClick={() => setInterestType("compound")}
              className={`px-6 py-2 rounded-md font-medium transition-colors duration-300 ${
                interestType === "compound"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Compound Interest
            </button>
          </div>
        </div>

        {/* Principal Amount */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Principal Amount (₹)
          </label>
          <input
            type="number"
            value={principal}
            onChange={(e) => setPrincipal(parseFloat(e.target.value))}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter principal amount"
          />
        </div>

        {/* Annual Rate */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Annual Rate (%)
          </label>
          <input
            type="number"
            value={rate}
            onChange={(e) => setRate(parseFloat(e.target.value))}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter annual rate"
          />
        </div>

        {/* Period Unit */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Period Unit
          </label>
          <select
            value={timeUnit}
            onChange={(e) => setTimeUnit(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="months">Months</option>
            <option value="years">Years</option>
          </select>
        </div>

        {/* Period Value */}
        <div className="mb-8">
          <label className="block text-gray-700 font-medium mb-2">
            Period Value
          </label>
          <input
            type="number"
            value={time}
            onChange={(e) => setTime(parseFloat(e.target.value))}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter period value"
          />
        </div>

        {/* Calculate Button */}
        <button
          onClick={calculateInterest}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors duration-300"
        >
          Calculate Interest
        </button>

        {/* Result Display */}
        {result !== null && (
          <div className="mt-8 p-6 bg-blue-50 rounded-lg">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Calculation Result
            </h2>
            <p className="text-gray-700">
              {interestType === "simple" ? "Simple Interest" : "Compound Interest"}: ₹
              <span className="font-bold">{result}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

// Export the component
export default InterestCalculator;