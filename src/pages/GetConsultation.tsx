import React, { useState } from "react";

const GetConsultation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });
  const [isPaying, setIsPaying] = useState(false);

  // Safely get Razorpay key and amount, handling cases where process might be undefined
  const getEnv = (key, defaultValue) => {
    if (typeof process !== 'undefined' && process.env) {
      return process.env[key] || defaultValue;
    }
    return defaultValue;
  };

  const razorpayKey = getEnv('REACT_APP_RAZORPAY_KEY', '');
  const amount = Number(getEnv('REACT_APP_RAZORPAY_CONSULTATION_AMOUNT_', 4999)) || 4999;

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPaying(true);

    // Redirect to payment link
    // Using a short timeout to ensure the UI has a chance to update
    setTimeout(() => {
      window.location.href = 'https://razorpay.com/payment-link/plink_Qj3KCQT62VWolN';
    }, 500);

    // We do not reset form or state here because the page will unload.
    // If the user clicks 'Back', the component remounts anyway.
  };

  //   const options = {
  //     key: razorpayKey,
  //     amount: amount,
  //     currency: "INR",
  //     name: "Avani Enterprises",
  //     description: "Consultation Fee",
  //     image: "/logo192.png",
  //     handler: function (response) {
  //       setIsPaying(false);
  //       alert("Payment successful! Payment ID: " + response.razorpay_payment_id);
  //     },
  //     prefill: {
  //       name: formData.name,
  //       email: formData.email,
  //       contact: formData.phone
  //     },
  //     theme: {
  //       color: "#7c3aed"
  //     },
  //     modal: {
  //       ondismiss: () => setIsPaying(false)
  //     }
  //   };

  //   const rzp = new window.Razorpay(options);
  //   rzp.open();
  // };

  // // Load Razorpay script
  // React.useEffect(() => {
  //   const script = document.createElement("script");
  //   script.src = "https://checkout.razorpay.com/v1/checkout.js";
  //   script.async = true;
  //   document.body.appendChild(script);
  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-gray-100 py-20 px-4">
      <div className="w-full max-w-xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Book Your Expert Consultation
            </h2>
            <p className="text-gray-600">
              Unlock business growth with a <span className="font-semibold text-blue-600">1:1 session</span> with our senior consultants.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2 font-semibold text-sm" htmlFor="name">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                  placeholder="Your name"
                  autoComplete="name"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2 font-semibold text-sm" htmlFor="email">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                  placeholder="Email address"
                  autoComplete="email"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-2 font-semibold text-sm" htmlFor="phone">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                placeholder="+91"
                autoComplete="tel"
              />
            </div>

            {/* Price Display */}
            <div className="bg-blue-50 rounded-xl p-6 text-center border border-blue-100">
              <div className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-1">Consultation Fee</div>
              <div className="text-3xl font-bold text-gray-900">₹{(amount).toLocaleString("en-IN")}</div>
              <div className="text-xs text-gray-500 mt-1">One-time payment • 60 min session</div>
            </div>

            <button
              type="submit"
              disabled={isPaying}
              className={`w-full py-4 bg-blue-600 text-white rounded-xl font-bold text-base shadow-lg flex items-center justify-center transition-all duration-300 ${isPaying ? "opacity-60 cursor-not-allowed" : "hover:bg-blue-700 hover:shadow-xl"
                }`}
            >
              {isPaying ? (
                <>
                  <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                  </svg>
                  Redirecting to Payment...
                </>
              ) : (
                <>Pay ₹{(amount).toLocaleString("en-IN")} & Book</>
              )}
            </button>
          </form>

          <div className="mt-6 text-center text-gray-500 text-sm">
            100% secure payment via Razorpay. You'll receive a confirmation email after booking.
          </div>

          <div className="mt-4 text-center text-xs text-gray-400">
            By booking, you agree to our <a href="/terms" className="underline hover:text-blue-600 transition-colors">Terms & Conditions</a>.
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetConsultation;
