import React, { useState } from "react";

const CryptoTaxCalculator = () => {
  // State variables for user inputs
  const [salePrice, setSalePrice] = useState(0);
  const [purchasePrice, setPurchasePrice] = useState(0);
  const [profitLoss, setProfitLoss] = useState(null);
  const [taxPayable, setTaxPayable] = useState(null);

  // Function to calculate profit/loss and tax payable
  const calculateTax = () => {
    const sale = parseFloat(salePrice);
    const purchase = parseFloat(purchasePrice);

    if (isNaN(sale) || isNaN(purchase) || sale < 0 || purchase < 0) {
      alert("Please enter valid values for sale price and purchase price.");
      return;
    }

    // Calculate profit/loss
    const profitLossValue = sale - purchase;
    setProfitLoss(profitLossValue.toFixed(2));

    // Calculate tax payable (30% of profit)
    if (profitLossValue > 0) {
      const tax = profitLossValue * 0.3; // 30% tax rate
      setTaxPayable(tax.toFixed(2));
    } else {
      setTaxPayable(0); // No tax on loss
    }
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
          Crypto Assets Tax Calculator
        </h1>

        {/* Sale Price Input */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Sale Price of Crypto Assets (₹)
          </label>
          <input
            type="number"
            value={salePrice}
            onChange={(e) => setSalePrice(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter sale price"
          />
        </div>

        {/* Purchase Price Input */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Purchase Price of Crypto Assets (₹)
          </label>
          <input
            type="number"
            value={purchasePrice}
            onChange={(e) => setPurchasePrice(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter purchase price"
          />
        </div>

        {/* Calculate Button */}
        <button
          onClick={calculateTax}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors duration-300"
        >
          Calculate Tax
        </button>

        {/* Result Display */}
        {profitLoss !== null && (
          <div className="mt-8 p-6 bg-blue-50 rounded-lg">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Tax Calculation Result
            </h2>
            <p className="text-gray-700">
              Profit/Loss from the transfer of Crypto Assets: ₹{profitLoss}
            </p>
            <p className="text-gray-700">
              The tax you need to pay: ₹{taxPayable}
            </p>
            <p className="text-gray-600 text-sm mt-4">
              *Applicable surcharge and 4% cess payable on the amount of tax.
            </p>
          </div>
        )}

        {/* Additional Information */}
        <div className="mt-8 text-gray-600">
          <p className="mb-2">
            <strong>Note:</strong> The tax is calculated at a flat rate of 30% on the profit earned from the transfer of crypto assets.
          </p>
          <p>
            No deductions are allowed except the cost of acquisition. Losses cannot be adjusted against other income or carried forward.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CryptoTaxCalculator;