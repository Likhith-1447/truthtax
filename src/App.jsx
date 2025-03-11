import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TaxCalculatorPage from "./TaxCalculator"; // Import the new TaxCalculatorPage component
import { testimonialsData } from "./data/testimonials"; // Import the testimonials data
import InterestCalculator from "./calculators/InterestCalculator"; // Correct import path
import IncomeTaxCalculator from "./calculators/IncomeTaxCalculator"; // Correct import path
import GratuityCalculator from "./calculators/GratuityCalculator"; // Correct import path
import SIPCalculator from "./calculators/SipCalculator"; // Correct import path
import HRACalculator from "./calculators/HRACalculator"; // Correct import path
import FDCalculator from "./calculators/FDCalculator"; // Correct import path
import HomeLoanEMICalculator from "./calculators/HomeLoanCalculator"; // Correct import path
import CryptoTaxCalculator from "./calculators/CryptoCalculator"; // Correct import path
import {
  Home,
  Settings,
  BookOpen,
  Phone,
  ChevronDown,
  FileText,
  Upload,
  PhoneCall,
  BadgeCheck,
  CheckCircle,
  BarChart3,
  Calculator,
  ChevronLeft,
  ChevronRight,
  Building2,
  Award,
  TrendingUp,
  Users,
} from "lucide-react";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-r from-blue-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white animate-fade-in-up">
            <span
              className="inline-block animate-slide-up opacity-0"
              style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
            >
              Tax
            </span>
            <span
              className="inline-block animate-slide-up opacity-0 text-blue-300"
              style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}
            >
              Truth
            </span>
          </h1>
          <div className="mt-4 animate-pulse">
            <div className="w-16 h-1 bg-blue-300 mx-auto rounded-full"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-gray-50">
              {/* Header */}
              <header className="bg-white shadow-sm sticky top-0 z-50">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                  <div className="flex items-center">
                    <span className="text-2xl font-bold text-blue-900">
                      Tax<span className="text-blue-500">Truth</span>
                    </span>
                  </div>
                  <nav className="hidden md:flex space-x-8">
                    <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium flex items-center">
                      <Home className="w-5 h-5 mr-2" />
                      Home
                    </Link>

                    {/* Services Dropdown */}
                    <div
                      className="relative"
                      onMouseLeave={() => setDropdownOpen(false)}
                    >
                      <button
                        onMouseEnter={() => setDropdownOpen(true)}
                        className="text-gray-700 hover:text-blue-600 font-medium flex items-center"
                      >
                        <Settings className="w-5 h-5 mr-2" />
                        Services <ChevronDown className="ml-1" />
                      </button>

                      {dropdownOpen && (
                        <div
                          className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md z-10"
                          onMouseEnter={() => setDropdownOpen(true)}
                        >
                          <div className="py-4">
                            {/* Individual Services */}
                            <h3 className="font-bold text-blue-900 px-6 mb-2">INDIVIDUAL Services</h3>
                            <ul className="mb-4">
                              {[
                                { name: 'GST', link: '/gst' },
                                { name: 'Accounts Payable', link: '/accounts-payable' },
                                { name: 'Vendor Management', link: '/vendor-management' },
                                { name: 'MaxITC', link: '/maxitc' },
                                { name: 'E-Invoicing & E-Way Bill', link: '/e-invoicing-eway-bill' },
                                { name: 'TDS', link: '/tds' },
                              ].map((item) => (
                                <Link
                                  key={item.name}
                                  to={item.link}
                                  className="block px-6 py-2 hover:bg-blue-100 cursor-pointer transition-colors duration-200 text-gray-700 hover:text-blue-600"
                                >
                                  {item.name}
                                </Link>
                              ))}
                            </ul>

                            {/* Business Services */}
                            <h3 className="font-bold text-blue-900 px-6 mb-2 mt-4">Business Services</h3>
                            <ul>
                              {[
                                { name: 'Clear Finance Cloud', link: '/clear-finance-cloud' },
                                { name: 'Clear Compliance Cloud', link: '/clear-compliance-cloud' },
                                { name: 'Clear Supply Chain Cloud', link: '/clear-supply-chain-cloud' },
                              ].map((item) => (
                                <Link
                                  key={item.name}
                                  to={item.link}
                                  className="block px-6 py-2 hover:bg-blue-100 cursor-pointer transition-colors duration-200 text-gray-700 hover:text-blue-600"
                                >
                                  {item.name}
                                </Link>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>

                    <Link to="/blogs" className="text-gray-700 hover:text-blue-600 font-medium flex items-center">
                      <BookOpen className="w-5 h-5 mr-2" />
                      Blogs
                    </Link>

                    <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium flex items-center">
                      <Phone className="w-5 h-5 mr-2" />
                      Contact
                    </Link>
                  </nav>

                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md font-medium transition-colors duration-300">
                    Get started
                  </button>
                </div>
              </header>

              {/* Hero Section */}
              <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-20">
                <div className="container mx-auto px-4 text-center">
                  <div className="animate-fade-in">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 mb-6">
                      Nothing is certain except death and taxes.
                    </h1>
                    <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
                      India's largest tax and financial services software platform
                    </p>
                  </div>

                  {/* Service Cards */}
                  <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto">
                    {/* Card 1 */}
                    <div className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                      <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                        <BarChart3 className="text-blue-600 w-8 h-8" />
                      </div>
                      <h3 className="text-xl font-bold text-blue-900 mb-2">MaxiTC</h3>
                      <p className="text-gray-600 mb-4">
                        Increase Accuracy, Efficiency & Productivity
                      </p>
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md w-full font-medium transition-colors duration-300">
                        Buy product
                      </button>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                      <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Building2 className="text-blue-600 w-8 h-8" />
                      </div>
                      <h3 className="text-xl font-bold text-blue-900 mb-2">
                        Enterprise
                      </h3>
                      <p className="text-gray-600 mb-4">
                        GST & Invoicing, Streamlined compliance & more
                      </p>
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md w-full font-medium transition-colors duration-300">
                        Explore more
                      </button>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                      <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Calculator className="text-blue-600 w-8 h-8" />
                      </div>
                      <h3 className="text-xl font-bold text-blue-900 mb-2">
                        Calculate Tax Liability
                      </h3>
                      <p className="text-gray-600 mb-4">
                        Know your tax liability as per the latest budget 2023 updates
                      </p>
                      <Link
                        to="/tax-calculators"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md w-full font-medium transition-colors duration-300 block text-center"
                      >
                        Calculate Now
                      </Link>
                    </div>
                  </div>
                </div>
              </section>



      {/* Platform Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            India's largest tax and financial services platform
          </h2>
          <p className="text-gray-600 mb-12">
            Explore our wide range of software solutions
          </p>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {/* Solution 1 */}
            <div className="bg-white rounded-xl shadow-md p-6 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-center mb-4">
                <div className="bg-blue-50 p-3 rounded-lg mr-3">
                  <FileText className="text-blue-600 w-6 h-6" />
                </div>
                <h3 className="font-bold text-blue-900">TaxCloud</h3>
              </div>
              <p className="text-sm text-gray-600 mb-2">
                ITR filing software for Tax Experts
              </p>
              <a
                href="#"
                className="text-blue-600 text-sm font-medium hover:underline inline-flex items-center"
              >
                Learn more
                <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>

            {/* Solution 2 */}
            <div className="bg-white rounded-xl shadow-md p-6 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-center mb-4">
                <div className="bg-blue-50 p-3 rounded-lg mr-3">
                  <Building2 className="text-blue-600 w-6 h-6" />
                </div>
                <h3 className="font-bold text-blue-900">Enterprise</h3>
              </div>
              <p className="text-sm text-gray-600 mb-2">
                GST & Invoicing, Max ITC, E-Way bill & more
              </p>
              <a
                href="#"
                className="text-blue-600 text-sm font-medium hover:underline inline-flex items-center"
              >
                Learn more
                <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>

            {/* Solution 3 */}
            <div className="bg-white rounded-xl shadow-md p-6 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-center mb-4">
                <div className="bg-blue-50 p-3 rounded-lg mr-3">
                  <TrendingUp className="text-blue-600 w-6 h-6" />
                </div>
                <h3 className="font-bold text-blue-900">E-Invoicing</h3>
              </div>
              <p className="text-sm text-gray-600 mb-2">
                Bulk invoice in daily or any ERP
              </p>
              <a
                href="#"
                className="text-blue-600 text-sm font-medium hover:underline inline-flex items-center"
              >
                Learn more
                <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>

            {/* Solution 4 */}
            <div className="bg-white rounded-xl shadow-md p-6 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-center mb-4">
                <div className="bg-blue-50 p-3 rounded-lg mr-3">
                  <Calculator className="text-blue-600 w-6 h-6" />
                </div>
                <h3 className="font-bold text-blue-900">GST Software</h3>
              </div>
              <p className="text-sm text-gray-600 mb-2">
                CA GST filing made in India
              </p>
              <a
                href="#"
                className="text-blue-600 text-sm font-medium hover:underline inline-flex items-center"
              >
                Learn more
                <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>



      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12">
            Top Comments
          </h2>

          {/* Marquee Container */}
          <div className="relative overflow-hidden group">
            {/* Marquee Content - Duplicated for seamless loop */}
            <div className="flex animate-marquee-infinite hover:pause-animation space-x-8 whitespace-nowrap">
              {[...testimonialsData, ...testimonialsData].map(
                (testimonial, index) => (
                  <div 
                    key={index}
                    className="inline-block w-[300px] md:w-[400px] bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 shadow-lg flex flex-col min-h-[320px]"
                  >
                    <div className="flex items-start mb-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h3 className="font-bold text-blue-900">
                          {testimonial.author}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4 text-sm leading-relaxed flex-1 overflow-y-auto">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center text-blue-600">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      <span className="text-sm font-medium">
                        {testimonial.company}
                      </span>
                    </div>
                  </div>
                )
              )}
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10"></div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900">
              Trusted by experts and businesses
            </h2>
            <div className="flex space-x-2">
              <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                <ChevronLeft className="w-5 h-5 text-blue-900" />
              </button>
              <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                <ChevronRight className="w-5 h-5 text-blue-900" />
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 shadow-md">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-blue-900 mb-2">
                  More than <span className="text-blue-600">60,000</span> tax
                  experts use our platform
                </h3>
                <p className="text-gray-600 mb-6">
                  My executives could learn it so quickly and we implemented
                  literally in a couple of days. I am impressed with time-saving
                  features embedded in the software like automated
                  reconciliation of 2A data with invoices.
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-300 mr-4 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80"
                      alt="Mr. Anil Chakravorthy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-blue-900">
                      Mr. Anil Chakravorthy
                    </p>
                    <p className="text-sm text-gray-600">Tax Sales Lead</p>
                  </div>
                </div>
              </div>
              <a
                href="#"
                className="text-blue-600 font-medium hover:underline inline-flex items-center"
              >
                Explore products for tax experts
                <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 shadow-md">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-blue-900 mb-2">
                  <span className="text-blue-600">600,000+</span> businesses
                  trust our SMB offerings
                </h3>
                <p className="text-gray-600 mb-6">
                  Earlier I used to call multiple customers, track my bank
                  account or check messages for payments. Now I can send UPI
                  links to customers and customers can pay from home. Compliance
                  is easy.
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-300 mr-4 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80"
                      alt="Shalini Prasad"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-blue-900">Shalini Prasad</p>
                    <p className="text-sm text-gray-600">
                      Business Owner, Printing Goods
                    </p>
                  </div>
                </div>
              </div>
              <a
                href="#"
                className="text-blue-600 font-medium hover:underline inline-flex items-center"
              >
                Explore products for Small Businesses
                <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>


      <section className="py-20 bg-gray-50">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12">
      How Income Tax Filing Process Works
    </h2>

    <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
      {/* Step 1 */}
      <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
          <FileText className="text-blue-600 w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-blue-900 mb-4">Choose your Plan</h3>
        <ul className="text-gray-600 space-y-2">
          {['Salaried', 'Capital Gains (Stock Investor)', 'Foreign Income', 'NRIs', 'Business'].map((item) => (
            <li key={item} className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Step 2 */}
      <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
          <Upload className="text-blue-600 w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-blue-900 mb-4">Upload/Mail Documents</h3>
        <p className="text-gray-600 mb-4">
          You can either upload the documents on our portal or E-mail them to us
        </p>
        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
          Upload Documents
        </button>
      </div>

      {/* Step 3 */}
      <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
          <PhoneCall className="text-blue-600 w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-blue-900 mb-4">Expert Consultation</h3>
        <p className="text-gray-600">
          Our experts will listen to your queries and solve them in no time
        </p>
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <p className="text-sm text-blue-600">
            Average response time: <span className="font-bold">15 minutes</span>
          </p>
        </div>
      </div>

      {/* Step 4 */}
      <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
          <BadgeCheck className="text-blue-600 w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-blue-900 mb-4">Complete e-Filing</h3>
        <p className="text-gray-600 mb-4">
          A Tax Expert will be assigned to process and verify your return
        </p>
        <div className="flex items-center mt-6">
          <div className="flex-1 border-t-2 border-blue-200"></div>
          <span className="px-4 text-blue-600 font-medium">100% Secure</span>
          <div className="flex-1 border-t-2 border-blue-200"></div>
        </div>
      </div>
    </div>
  </div>
</section>
      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trusted by businesses across India
            </h2>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Join thousands of businesses and tax professionals who trust
              TaxTruth for their tax compliance needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">60,000+</div>
              <p className="text-blue-100">Tax Experts</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">
                600,000+
              </div>
              <p className="text-blue-100">Businesses</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">99.9%</div>
              <p className="text-blue-100">Uptime</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              Ready to simplify your tax compliance?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of businesses and tax professionals who trust
              TaxTruth
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium transition-colors duration-300 text-lg">
                Get started for free
              </button>
              <button className="bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-md font-medium transition-colors duration-300 text-lg">
                Schedule a demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">TaxTruth</h3>
              <p className="text-gray-400 mb-4">
                India's largest tax and financial services platform
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Products</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    MaxiTC
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Enterprise
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    TaxCloud
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    E-Invoicing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    GST Software
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Guides
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Webinars
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    API Documentation
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Press
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Partners
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} TaxTruth. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
          }
        
/>
        <Route path="/" element={<App />} />
        <Route path="/tax-calculators" element={<TaxCalculatorPage />} />

{/* Interest Calculator Route */}
<Route
  path="/tax-calculators/interest-calculator"
  element={<InterestCalculator />}
/>
<Route
  path="/tax-calculators/income-tax-calculator"
  element={<IncomeTaxCalculator />}
/>
<Route
  path="/tax-calculators/GratuityCalculator"
  element={<GratuityCalculator />}
/>
<Route path="/tax-calculators/sip-calculator" 
element={<SIPCalculator />} />
<Route path="/tax-calculators/hra-Calculator"
element={<HRACalculator />} />
<Route path="/tax-calculators/fd-calculator" 
element={<FDCalculator />} />
<Route path="/tax-calculators/home-loan-emi-calculator"
element={<HomeLoanEMICalculator />} />
<Route path="/tax-calculators/crypto-tax-calculator"
element={<CryptoTaxCalculator />} />

      </Routes>
</Router>
  );
}

export default App;
