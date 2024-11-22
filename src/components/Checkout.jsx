

const CheckoutPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Checkout
        </h1>
        <form className="space-y-6">
          {/* Personal Information */}
          <div>
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Personal Information
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-sky-600 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-sky-600 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-sky-600 focus:outline-none col-span-full"
              />
              <input
                type="text"
                placeholder="Phone"
                className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-sky-600 focus:outline-none col-span-full"
              />
            </div>
          </div>

          {/* Shipping Information */}
          <div>
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Shipping Address
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Address Line 1"
                className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-sky-600 focus:outline-none col-span-full"
              />
              <input
                type="text"
                placeholder="Address Line 2 (Optional)"
                className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-sky-600 focus:outline-none col-span-full"
              />
              <input
                type="text"
                placeholder="City"
                className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-sky-600 focus:outline-none"
              />
              <input
                type="text"
                placeholder="State"
                className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-sky-600 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Zip Code"
                className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-sky-600 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Country"
                className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-sky-600 focus:outline-none"
              />
            </div>
          </div>

          {/* Payment Information */}
          <div>
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Payment Details
            </h2>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Card Number"
                className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-sky-600 focus:outline-none"
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Expiry Date (MM/YY)"
                  className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-sky-600 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="CVV"
                  className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-sky-600 focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-sky-600 text-white text-xl rounded-md font-bold hover:bg-sky-700 transition"
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;
