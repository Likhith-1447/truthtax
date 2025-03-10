import React, { useState } from "react";

const GratuityCalculator = () => {
  // State variables for user inputs
  const [lastDrawnSalary, setLastDrawnSalary] = useState(0);
  const [yearsOfService, setYearsOfService] = useState(0);
  const [gratuityAmount, setGratuityAmount] = useState(null);

  // Function to calculate gratuity
  const calculateGratuity = () => {
    const salary = parseFloat(lastDrawnSalary);
    const years = parseFloat(yearsOfService);

    // Validate inputs
    if (isNaN(salary)) {
      alert("Please enter a valid salary.");
      return;
    }
    if (isNaN(years)) {
      alert("Please enter valid years of service.");
      return;
    }
    if (years < 5) {
      alert("Years of service must be at least 5 to be eligible for gratuity.");
      return;
    }

    // Gratuity formula: (15 * last drawn salary * years of service) / 26
    const gratuity = (15 * salary * years) / 26;

    // Round off to 2 decimal places
    setGratuityAmount(gratuity.toFixed(2));
  };

  return (
    <div
      className="min-h-screen py-12 flex items-center justify-center"
      style={{
        background: "linear-gradient(to bottom right, #000000, #FFD700)",
      }}
    >
      <div className="max-w-4xl w-full bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-blue-900 mb-8 text-center">
          Gratuity Calculator
        </h1>

        {/* Last Drawn Salary Input */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Last Drawn Salary (₹)
          </label>
          <input
            type="number"
            value={lastDrawnSalary}
            onChange={(e) => setLastDrawnSalary(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your last drawn salary"
          />
        </div>

        {/* Years of Service Input */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Years of Service
          </label>
          <input
            type="number"
            value={yearsOfService}
            onChange={(e) => setYearsOfService(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter years of service"
          />
        </div>

        {/* Calculate Button */}
        <button
          onClick={calculateGratuity}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors duration-300"
        >
          Calculate Gratuity
        </button>

        {/* Result Display */}
        {gratuityAmount && (
          <div className="mt-8 p-6 bg-blue-50 rounded-lg">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Gratuity Calculation Result
            </h2>
            <p className="text-gray-700">
              Gratuity Amount: ₹{gratuityAmount}
            </p>
          </div>
        )}

        {/* Additional Information */}
        <div className="mt-8 text-gray-600">
          <p className="mb-2">
            <strong>Note:</strong> The gratuity amount is calculated using the formula:
          </p>
          <p className="mb-2">
            <strong>Gratuity = (15 × Last Drawn Salary × Years of Service) / 26</strong>
          </p>
          <p>
            This calculator assumes that the employer is covered under the Payment of Gratuity Act, 1972.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GratuityCalculator;