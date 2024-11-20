const ProductItem = (product) => {
  return (
    <>
   <div className="w-72 lg:w-60 bg-white m-5 flex flex-col rounded-lg shadow-lg hover:shadow-purple-800 hover:scale-105 overflow-hidden border-2 hover:border-purple-800 p-2">
      {/* Product Image */}
      <img
        src={product.thumbnail} // Display the product's image
        alt={product.title} // Alt text for the image
        className="w-full h-56 object-cover" // Style the image
      />

      <div className="p-4">
        {/* Product Title */}
        <h1 className="text-lg mb-2.5 font-bold truncate">{product.title}</h1>

        {/* Product Description */}
        <p className="text-sm mb-2.5 text-gray-600 line-clamp-2">
          {product.description}
        </p>

        {/* Product Price */}
        <p className="text-base mb-2.5 text-green-600 font-bold">
          ${product.price}
        </p>

        {/* Product Rating */}
        <p className="flex gap-1 text-base mb-2.5 text-gray-600 font-semibold">
          Rating: ⭐{product.rating}
        </p>

        {/* Button to view more details */}
        <button
          // onClick={() => handleViewDetails(product.id)}
          className="text-sm text-purple-800 hover:underline decoration-2 font-bold"
        >
          View More Details
        </button>
      </div>
    </div>
  </>
  )
}

export default ProductItem;