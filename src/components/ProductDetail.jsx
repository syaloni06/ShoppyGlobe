import { useLocation, useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { FaStar } from "react-icons/fa6";
import { TbTruckReturn } from "react-icons/tb";
import { AiTwotoneSafetyCertificate } from "react-icons/ai";
import { IoArrowBackCircle } from "react-icons/io5";
import { FaCartPlus } from "react-icons/fa";

const ProductDetail = () => {
  const { id } = useParams(); // Extracting the product ID from the URL parameters
  const location = useLocation(); // Accessing the current route's location object
  const dispatch = useDispatch(); // Hook to dispatch actions to the Redux store

  // Access the product data from location state
  const product = location.state?.product; // Safely accessing the product object passed via navigation state

  // Get cart items from Redux
  const cartItems = useSelector((state) => state.cart.data); // Selecting cart data from the Redux store

  // Check if the product is already in the cart
  const productInCart = cartItems.find((item) => item.id === Number(id)); // Finding the product in the cart by matching the ID

  const navigate = useNavigate(); // Hook for programmatic navigation

  // If product data is not found, show a fallback message
  if (!product) {
    return <p>Product data not found. Please go back to the product list.</p>;
  }

  return (
    <>
      {/* Main container */}
      <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4 sm:px-8">
        <div className="flex flex-col w-full max-w-3xl bg-white rounded-lg shadow-lg border-2 hover:border-sky-500 hover:shadow-sky-500 p-5 my-20">
          {/* Back button to navigate to the previous page */}
          <button
            onClick={() => navigate(-1)} // When clicked, navigate to the previous page
            className="flex items-center gap-2 self-start text-sky-500 hover:text-sky-600 text-lg font-medium transition-colors duration-200 hover:scale-105"
          >
            <IoArrowBackCircle className="text-4xl sm:text-5xl" />
          </button>

          {/* Product Image and Basic Details */}
          <div className="flex flex-col sm:flex-row">
            <div className="w-full sm:w-1/3">
              {/* Product image */}
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-60 object-cover rounded-md mb-4"
              />
            </div>
            <div className="w-full sm:w-2/3 px-0 sm:px-5">
              {/* Product title */}
              <h1 className="text-xl sm:text-2xl font-bold mb-2">
                {product.title}
              </h1>
              {/* Product brand */}
              <p className="text-sm text-gray-400 mb-2 font-semibold">
                {product.brand}
              </p>
              {/* Product description */}
              <p className="text-gray-600 mb-4 text-sm sm:text-base">
                {product.description}
              </p>
              {/* Product price */}
              <p className="text-lg sm:text-xl text-green-600 font-bold mb-2">
                ${product.price}
              </p>
              {/* Product rating */}
              <p className="flex items-center text-sm sm:text-lg text-gray-600 mb-4">
                <FaStar className="text-amber-500 mr-1" />
                {product.rating}
              </p>
              {/* Add to cart button */}
              {productInCart?.quantity > 0 ? (
                <p className="text-green-600 font-semibold">
                  Already in the cart
                </p>
              ) : (
                <button
                  className="flex justify-center gap-2 text-white bg-sky-600 hover:bg-sky-700 w-full py-2 rounded-md font-bold text-sm sm:text-base"
                  onClick={() => dispatch(addItem(product))} // Dispatching an action to add the product to the cart
                >
                  Add To Cart <FaCartPlus className="text-lg sm:text-xl self-center" />
                </button>
              )}
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {/* Warranty Information */}
              <div className="flex items-center p-4 border rounded-lg shadow-md hover:bg-gray-50">
                <AiTwotoneSafetyCertificate className="text-4xl sm:text-5xl mr-4" />
                <p className="text-sm sm:text-lg text-gray-700 font-semibold">
                  {product.warrantyInformation}
                </p>
              </div>
              {/* Return Policy */}
              <div className="flex items-center p-4 border rounded-lg shadow-md hover:bg-gray-50">
                <TbTruckReturn className="text-4xl sm:text-5xl mr-4" />
                <p className="text-sm sm:text-lg text-gray-700 font-semibold">
                  {product.returnPolicy}
                </p>
              </div>
            </div>

            {/* Reviews Section */}
            <div>
              <h2 className="text-lg sm:text-xl font-bold mb-4">
                Customer Reviews
              </h2>
              <div className="space-y-4">
                {/* Looping through product reviews */}
                {product.reviews.map((review, index) => (
                  <div
                    key={index}
                    className="p-4 border rounded-lg shadow-md bg-gray-50"
                  >
                    {/* Review rating */}
                    <div className="flex items-center">
                      <FaStar className="text-amber-500 mr-1 self-center" />
                      <p className="text-sm sm:text-lg font-semibold">
                        {review.rating} Stars
                      </p>
                    </div>
                    {/* Review comment */}
                    <p className="text-gray-700 text-sm sm:text-base mb-2">
                      {review.comment}
                    </p>
                    {/* Reviewer name and date */}
                    <p className="text-xs sm:text-sm text-gray-500">
                      By {review.reviewerName} on{" "}
                      {new Date(review.date).toLocaleDateString()}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
