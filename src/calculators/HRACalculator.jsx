import React, { useState } from "react";

const HRACalculator = () => {
  // State variables for user inputs
  const [basicSalary, setBasicSalary] = useState(0);
  const [hraReceived, setHraReceived] = useState(0);
  const [rentPaid, setRentPaid] = useState(0);
  const [isMetro, setIsMetro] = useState(false);
  const [hraExemption, setHraExemption] = useState(null);
  const [hraChargeable, setHraChargeable] = useState(null);

  // Function to calculate HRA exemption
  const calculateHRAExemption = () => {
    const basic = parseFloat(basicSalary);
    const hra = parseFloat(hraReceived);
    const rent = parseFloat(rentPaid);

    if (isNaN(basic) || isNaN(hra) || isNaN(rent) || basic <= 0 || hra <= 0 || rent <= 0) {
      alert("Please enter valid values for all fields.");
      return;
    }

    // Calculate the three components for HRA exemption
    const actualHRAReceived = hra; // Annual HRA received
    const rentMinus10PercentSalary = Math.max(0, rent - 0.1 * basic); // Rent minus 10% of basic salary, but not less than 0
    const percentageOfBasicSalary = isMetro ? 0.5 * basic : 0.4 * basic; // 50% or 40% of basic salary

    // Find the least of the three values
    const exemption = Math.max(0, Math.min(
      actualHRAReceived,
      percentageOfBasicSalary,
      rentMinus10PercentSalary
    )); // Ensure exemption is not less than 0

    // Calculate HRA chargeable to tax
    const chargeable = Math.max(0, actualHRAReceived - exemption); // Ensure chargeable is not less than 0

    // Set the results
    setHraExemption(exemption.toFixed(2));
    setHraChargeable(chargeable.toFixed(2));
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
          HRA Exemption Calculator
        </h1>

        {/* Basic Salary Input */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Basic Salary (₹ per year)
          </label>
          <input
            type="number"
            value={basicSalary}
            onChange={(e) => setBasicSalary(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your basic salary"
          />
        </div>

        {/* HRA Received Input */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            HRA Received (₹ per year)
          </label>
          <input
            type="number"
            value={hraReceived}
            onChange={(e) => setHraReceived(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter HRA received"
          />
        </div>

        {/* Rent Paid Input */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Rent Paid (₹ per year)
          </label>
          <input
            type="number"
            value={rentPaid}
            onChange={(e) => setRentPaid(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter rent paid"
          />
        </div>

        {/* Metro City Checkbox */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Do you live in a metro city?
          </label>
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={isMetro}
              onChange={(e) => setIsMetro(e.target.checked)}
              className="w-4 h-4 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
            />
            <span className="ml-2 text-gray-700">Yes, I live in a metro city</span>
          </div>
        </div>

        {/* Calculate Button */}
        <button
          onClick={calculateHRAExemption}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors duration-300"
        >
          Calculate HRA Exemption
        </button>

        {/* Result Display */}
        {hraExemption && (
          <div className="mt-8 p-6 bg-blue-50 rounded-lg">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              HRA Exemption Result
            </h2>

            {/* Display the three components */}
            <div className="mb-6">
              <p className="text-gray-700">
                <strong>Actual HRA Received:</strong> ₹{hraReceived.toLocaleString()}
              </p>
              <p className="text-gray-700">
                <strong>{isMetro ? "50%" : "40%"} of Basic Salary:</strong> ₹{(isMetro ? 0.5 * basicSalary : 0.4 * basicSalary).toLocaleString()}
              </p>
              <p className="text-gray-700">
                <strong>Rent Paid minus 10% of Salary:</strong> ₹{Math.max(0, rentPaid - 0.1 * basicSalary).toLocaleString()}
              </p>
            </div>

            {/* Exempted HRA and Chargeable HRA */}
            <div className="mb-6">
              <p className="text-gray-700">
                <strong>Amount of Exempted HRA:</strong> ₹{Math.max(0, hraExemption).toLocaleString()}
              </p>
              <p className="text-gray-700">
                <strong>HRA Chargeable to Tax:</strong> ₹{Math.max(0, hraChargeable).toLocaleString()}
              </p>
            </div>

            {/* Additional Information */}
            <div className="text-gray-600">
              <p className="mb-2">
                <strong>Note:</strong> The HRA exemption is calculated as the least of the following:
              </p>
              <ul className="list-disc list-inside">
                <li>Actual HRA received from your employer.</li>
                <li>{isMetro ? "50%" : "40%"} of basic salary.</li>
                <li>Rent paid minus 10% of basic salary.</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HRACalculator;