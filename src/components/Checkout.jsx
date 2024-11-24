import { BsSendCheckFill } from "react-icons/bs"; // Importing the Send Check icon
import { useState } from "react"; // Importing useState hook
import { Link } from "react-router-dom";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
const CheckoutPage = () => {
  // State variables to handle payment method, order placement, form data, and form errors
  const dispatch = useDispatch();
  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    addressLine1: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    googlePayUPI: "",
  });

  const [errors, setErrors] = useState({}); // State to track form validation errors

  // Handler to update payment method state when the user selects a different method
  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  // Handler to update formData state as the user types in form fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Function to validate the form and set error messages for invalid fields
  const validateForm = () => {
    let validationErrors = {}; // Object to store validation errors

    // Personal Information Validation
    if (!formData.firstName.trim())
      validationErrors.firstName = "First Name is required";
    if (!formData.lastName.trim())
      validationErrors.lastName = "Last Name is required";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      validationErrors.email = "Valid Email is required";
    if (!formData.phone.trim() || !/^\d+$/.test(formData.phone))
      validationErrors.phone = "Valid Phone number is required";

    // Shipping Address Validation
    if (!formData.addressLine1.trim())
      validationErrors.addressLine1 = "Address Line 1 is required";
    if (!formData.city.trim()) validationErrors.city = "City is required";
    if (!formData.state.trim()) validationErrors.state = "State is required";
    if (!formData.zipCode.trim() || !/^\d+$/.test(formData.zipCode))
      validationErrors.zipCode = "Valid Zip Code is required";
    if (!formData.country.trim())
      validationErrors.country = "Country is required";

    // Payment Validation based on selected payment method
    if (paymentMethod === "credit-card") {
      if (!formData.cardNumber.trim() || formData.cardNumber.length < 16)
        validationErrors.cardNumber = "Valid Card Number is required";
      if (!formData.expiryDate.trim())
        validationErrors.expiryDate = "Expiry Date is required";
      if (!formData.cvv.trim() || formData.cvv.length < 3)
        validationErrors.cvv = "Valid CVV is required";
    } else if (paymentMethod === "google-pay") {
      if (!formData.googlePayUPI.trim())
        validationErrors.googlePayUPI = "Google Pay UPI ID is required";
    }

    setErrors(validationErrors); // Update the state with validation errors
    return Object.keys(validationErrors).length === 0; // Return true if no errors exist
  };

  // Handler to submit the form after validation
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    if (validateForm()) {
      dispatch(clearCart());
      setOrderPlaced(true); // Set orderPlaced to true if validation passes
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center py-20 md:py-24 mx-4 md:mx-8">
      <div className="w-full sm:w-5/6 max-w-4xl bg-white rounded-lg shadow-lg p-6 sm:p-8 md:p-10 border-2 hover:border-sky-500 hover:shadow-sky-600">
        {!orderPlaced ? ( // Render form if order has not been placed
          <>
            <h1 className="flex gap-2 justify-center italic text-2xl sm:text-3xl font-bold text-sky-600 mb-6 text-center">
              Checkout <BsSendCheckFill className="self-center" />
            </h1>
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Personal Information Section */}
              <div>
                <h2 className="text-lg sm:text-xl font-semibold text-sky-600 mb-4">
                  Personal Information
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* First Name Input */}
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-md focus:ring-2 ${
                      errors.firstName ? "border-red-500" : "focus:ring-sky-600"
                    } focus:outline-none`}
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-sm">{errors.firstName}</p>
                  )}
                  {/* Last Name Input */}
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-md focus:ring-2 ${
                      errors.lastName ? "border-red-500" : "focus:ring-sky-600"
                    } focus:outline-none`}
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-sm">{errors.lastName}</p>
                  )}
                  {/* Email Input */}
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-md focus:ring-2 ${
                      errors.email ? "border-red-500" : "focus:ring-sky-600"
                    } focus:outline-none col-span-full`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email}</p>
                  )}
                  {/* Phone Input */}
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-md focus:ring-2 ${
                      errors.phone ? "border-red-500" : "focus:ring-sky-600"
                    } focus:outline-none col-span-full`}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm">{errors.phone}</p>
                  )}
                </div>
              </div>

              {/* Shipping Information Section */}
              <div>
                <h2 className="text-lg sm:text-xl font-semibold text-sky-600 mb-4">
                  Shipping Address
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Address Line 1 Input */}
                  <input
                    type="text"
                    name="addressLine1"
                    placeholder="Address Line 1"
                    value={formData.addressLine1}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-md focus:ring-2 ${
                      errors.addressLine1
                        ? "border-red-500"
                        : "focus:ring-sky-600"
                    } focus:outline-none col-span-full`}
                  />
                  {errors.addressLine1 && (
                    <p className="text-red-500 text-sm">
                      {errors.addressLine1}
                    </p>
                  )}
                  {/* City Input */}
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-md focus:ring-2 ${
                      errors.city ? "border-red-500" : "focus:ring-sky-600"
                    } focus:outline-none`}
                  />
                  {errors.city && (
                    <p className="text-red-500 text-sm">{errors.city}</p>
                  )}
                  {/* State Input */}
                  <input
                    type="text"
                    name="state"
                    placeholder="State"
                    value={formData.state}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-md focus:ring-2 ${
                      errors.state ? "border-red-500" : "focus:ring-sky-600"
                    } focus:outline-none`}
                  />
                  {errors.state && (
                    <p className="text-red-500 text-sm">{errors.state}</p>
                  )}
                  {/* Zip Code Input */}
                  <input
                    type="text"
                    name="zipCode"
                    placeholder="Zip Code"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-md focus:ring-2 ${
                      errors.zipCode ? "border-red-500" : "focus:ring-sky-600"
                    } focus:outline-none`}
                  />
                  {errors.zipCode && (
                    <p className="text-red-500 text-sm">{errors.zipCode}</p>
                  )}
                  {/* Country Input */}
                  <input
                    type="text"
                    name="country"
                    placeholder="Country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-md focus:ring-2 ${
                      errors.country ? "border-red-500" : "focus:ring-sky-600"
                    } focus:outline-none`}
                  />
                  {errors.country && (
                    <p className="text-red-500 text-sm">{errors.country}</p>
                  )}
                </div>
              </div>

              {/* Payment Information */}
              <div>
                <h2 className="text-lg sm:text-xl font-semibold text-sky-600 mb-4">
                  Payment Details{/* Section Title */}
                </h2>
                <select
                  value={paymentMethod}
                  onChange={handlePaymentMethodChange} // Event handler for selecting payment method
                  className="w-full px-4 py-3 mt-2 border rounded-md focus:ring-2 focus:ring-sky-600 focus:outline-none"
                >
                  {/* Payment method options */}
                  <option value="credit-card">Credit/Debit Card</option>
                  <option value="google-pay">Google Pay</option>
                  <option value="cod">Cash on Delivery</option>
                </select>

                {/* Conditional Rendering Based on Selected Payment Method */}
                {paymentMethod === "credit-card" && (
                  <div className="space-y-4 mt-4">
                    {/* Credit/Debit Card Details */}
                    <input
                      type="text"
                      name="cardNumber"
                      placeholder="Card Number" // Placeholder for card number input
                      value={formData.cardNumber}
                      onChange={handleInputChange} // Event handler for card number input
                      className={`w-full px-4 py-3 border rounded-md focus:ring-2 ${
                        errors.cardNumber
                          ? "border-red-500"
                          : "focus:ring-sky-600"
                      } focus:outline-none`}
                    />
                    {/* Error message for card number */}
                    {errors.cardNumber && (
                      <p className="text-red-500 text-sm">
                        {errors.cardNumber}
                      </p>
                    )}
                    {/* Expiry Date and CVV */}
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="expiryDate"
                        placeholder="Expiry Date (MM/YY)" // Placeholder for expiry date
                        value={formData.expiryDate}
                        onChange={handleInputChange} // Event handler for expiry date input
                        className={`w-full px-4 py-3 border rounded-md focus:ring-2 ${
                          errors.expiryDate
                            ? "border-red-500"
                            : "focus:ring-sky-600"
                        } focus:outline-none`}
                      />
                      {/* Error message for expiry date */}
                      {errors.expiryDate && (
                        <p className="text-red-500 text-sm">
                          {errors.expiryDate}
                        </p>
                      )}
                      <input
                        type="text"
                        name="cvv"
                        placeholder="CVV" // Placeholder for CVV input
                        value={formData.cvv}
                        onChange={handleInputChange} // Event handler for CVV input
                        className={`w-full px-4 py-3 border rounded-md focus:ring-2 ${
                          errors.cvv ? "border-red-500" : "focus:ring-sky-600"
                        } focus:outline-none`}
                      />
                      {/* Error message for CVV */}
                      {errors.cvv && (
                        <p className="text-red-500 text-sm">{errors.cvv}</p>
                      )}
                    </div>
                  </div>
                )}
                {/* Google Pay Option */}
                {paymentMethod === "google-pay" && (
                  <div className="space-y-4 mt-4">
                    {/* Input for Google Pay UPI ID */}
                    <input
                      type="text"
                      name="googlePayUPI"
                      placeholder="Google Pay UPI ID" // Placeholder for UPI ID
                      value={formData.googlePayUPI}
                      onChange={handleInputChange} // Event handler for UPI ID input
                      className={`w-full px-4 py-3 border rounded-md focus:ring-2 ${
                        errors.googlePayUPI
                          ? "border-red-500"
                          : "focus:ring-sky-600"
                      } focus:outline-none`}
                    />
                    {/* Error message for UPI ID */}
                    {errors.googlePayUPI && (
                      <p className="text-red-500 text-sm">
                        {errors.googlePayUPI}
                      </p>
                    )}
                  </div>
                )}
                {/* Cash on Delivery Option */}
                {paymentMethod === "cod" && (
                  <div className="space-y-4 mt-4">
                    {/* Information about COD */}
                    <p className="text-base text-gray-600">
                      You will pay with cash upon delivery.
                    </p>
                  </div>
                )}
              </div>
              {/* Submit Button for Placing the Order */}
              <button
                type="submit"
                className="w-full py-3 bg-sky-600 text-white text-xl sm:text-lg rounded-md font-bold hover:bg-sky-700 transition"
                 //to clear the cart after placing order
              >
                Place Order{/* Button Text */}
              </button>
            </form>
            {/* Conditional Rendering After Order is Placed */}
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-sky-600">
              Your order is placed!
            </h2>
            <p className="text-lg text-gray-600 mt-4">
              Thank you for shopping with us. You will receive a confirmation
              email shortly.
            </p>
            <Link
              to="/"
              className="flex justify-self-center gap-1 text-base sm:text-lg font-semibold text-sky-600 hover:underline"
            >
              <div className="flex gap-1">
                Go to Home for More Shopping{/* Link text */}
                <RiShoppingBag4Fill className="self-center text-xl" />
                {/* Shop icon */}
              </div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutPage;
