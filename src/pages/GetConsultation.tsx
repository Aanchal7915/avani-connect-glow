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
    <div
      className="flex items-center justify-center bg-gradient-to-r from-blue-50 to-purple-50 py-20 w-full"
      
    >
      {/* Animated gradient blobs */}
      {/* <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 opacity-20 rounded-full mix-blend-multiply filter blur-3xl animate-blob1"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-400 opacity-20 rounded-full mix-blend-multiply filter blur-3xl animate-blob2"></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-400 opacity-10 rounded-full mix-blend-multiply filter blur-3xl animate-blob3"></div> */}
      <div className="mt-3 mb-[20px] w-full max-w-xl mx-auto">
        <div className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl px-8 py-10 md:py-14 md:px-14 animate-fade-in-up border border-gray-100">
          <div className="flex flex-col items-center mb-8">
           
            <h2 className="text-3xl md:text-4xl font-extrabold mb-2 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 drop-shadow-lg">
              Book Your Expert Consultation
            </h2>
            <p className="text-base md:text-lg text-gray-700 text-center font-medium">
              Unlock business growth with a{" "}
              <span className="font-semibold text-purple-600">1:1 session</span> with
              our senior consultants.
              <br />
              <span className="text-gray-500 text-sm">
                Fill in your details and pay securely to reserve your slot.
              </span>
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-7">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <label
                  className="block text-gray-700 mb-2 font-semibold"
                  htmlFor="name"
                >
                  Full Name{" "}
                  <span className="text-pink-500">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition placeholder-gray-400 bg-gray-50"
                  placeholder="Enter your full name"
                  autoComplete="name"
                />
              </div>
              <div className="flex-1">
                <label
                  className="block text-gray-700 mb-2 font-semibold"
                  htmlFor="email"
                >
                  Email{" "}
                  <span className="text-pink-500">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 transition placeholder-gray-400 bg-gray-50"
                  placeholder="Enter your email address"
                  autoComplete="email"
                />
              </div>
            </div>
            <div>
              <label
                className="block text-gray-700 mb-2 font-semibold"
                htmlFor="phone"
              >
                Phone Number{" "}
                <span className="text-pink-500">*</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 transition placeholder-gray-400 bg-gray-50"
                placeholder="Enter your phone number"
                autoComplete="tel"
              />
            </div>
            <button
              type="submit"
              disabled={isPaying}
              className={`w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg flex items-center justify-center transition-all duration-300 ${
                isPaying
                  ? "opacity-60 cursor-not-allowed"
                  : "hover:scale-105 hover:shadow-2xl"
              }`}
            >
              {isPaying ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 mr-2 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8z"
                    ></path>
                  </svg>
                  Redirecting to Payment...
                </>
              ) : (
                
                <>
                  Pay ₹{(amount).toLocaleString("en-IN")} & Book Consultation
                </>
              )}
            </button>
          </form>
          <div className="mt-8 text-center text-gray-600 text-sm animate-fade-in">
            <span className="inline-block bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 px-4 py-2 rounded-lg shadow font-medium">
              100% secure payment via Razorpay. You’ll receive a confirmation email
              after booking.
            </span>
          </div>
          <div className="mt-6 text-center text-xs text-gray-400">
            <span>
              By booking, you agree to our{" "}
              <a
                href="/terms"
                className="underline hover:text-purple-600 transition-colors"
              >
                Terms & Conditions
              </a>
              .
            </span>
          </div>
        </div>
      </div>
      {/* Animation keyframes */}
      <style>
        {`
          .animate-fade-in-up {
            animation: fadeInUp 1s cubic-bezier(.39,.575,.565,1) both;
          }
          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translateY(40px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fade-in {
            animation: fadeIn 1.5s cubic-bezier(.39,.575,.565,1) both;
          }
          @keyframes fadeIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }
          .animate-blob1 {
            animation: blob1 12s infinite ease-in-out alternate;
          }
          .animate-blob2 {
            animation: blob2 14s infinite ease-in-out alternate;
          }
          .animate-blob3 {
            animation: blob3 16s infinite ease-in-out alternate;
          }
          @keyframes blob1 {
            0% { transform: translate(0,0) scale(1);}
            100% { transform: translate(40px, -30px) scale(1.1);}
          }
          @keyframes blob2 {
            0% { transform: translate(0,0) scale(1);}
            100% { transform: translate(-30px, 30px) scale(1.05);}
          }
          @keyframes blob3 {
            0% { transform: translate(-20px,10px) scale(1);}
            100% { transform: translate(20px,-20px) scale(1.15);}
          }
        `}
      </style>
    </div>
  );
};

export default GetConsultation;